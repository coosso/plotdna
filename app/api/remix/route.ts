import { NextResponse } from "next/server"
import { demoResult, dnaCases } from "@/lib/demo-data"
import type { AIConfig, GeneratedScriptResult, RemixConfig } from "@/types/dna"

export const maxDuration = 60
function cleanJSON(value: string) { return value.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim() }
function valid(result: unknown): result is GeneratedScriptResult { const r = result as GeneratedScriptResult; return Boolean(r?.title && r?.logline && Array.isArray(r?.scenes) && r.scenes.length >= 4 && Array.isArray(r?.characters)) }

export async function POST(request: Request) {
  try {
    const body = await request.json() as { config?: RemixConfig; ai?: AIConfig }
    const config = body.config
    const ai = body.ai
    if (!config || !ai?.apiKey || !ai.baseUrl || !ai.model) return NextResponse.json(demoResult)
    const sources = [config.structureId, config.emotionId, config.visualId].map((id) => dnaCases.find((d) => d.id === id)).filter(Boolean)
    const prompt = `你是 PlotDNA 叙事结构编译器。根据三个来源的抽象 DNA 创作全新中文短片。绝不能复用来源中的人物、地点、专名、关键道具或具体事件，只能继承抽象节奏函数。\n来源DNA：${JSON.stringify(sources)}\n配置：${JSON.stringify(config)}\n请只输出 JSON，结构为：{title,logline,theme,originality,characters:[{name,role,desire,flaw}],scenes:[{id,time,title,beat,shot,dialogue,promptZh,promptEn,camera,node}],compliance:[{label,status,note}]}。必须有6幕，status 仅为“通过”或“注意”，全部内容用简体中文（promptEn 除外）。`
    const base = ai.baseUrl.replace(/\/$/, "")
    const response = await fetch(`${base}/chat/completions`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${ai.apiKey}` }, body: JSON.stringify({ model: ai.model, messages: [{ role: "system", content: "你擅长跨题材叙事转译与影视分镜。严格输出合法 JSON。" }, { role: "user", content: prompt }], temperature: .85, response_format: { type: "json_object" } }), signal: AbortSignal.timeout(55000) })
    if (!response.ok) return NextResponse.json(demoResult)
    const json = await response.json() as { choices?: { message?: { content?: string } }[] }
    const content = json.choices?.[0]?.message?.content
    if (!content) return NextResponse.json(demoResult)
    const parsed = JSON.parse(cleanJSON(content))
    if (!valid(parsed)) return NextResponse.json(demoResult)
    return NextResponse.json({ ...parsed, source: "ai" })
  } catch { return NextResponse.json(demoResult) }
}
