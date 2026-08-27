"use client"

import { useEffect, useState } from "react"
import { Eye, EyeOff, KeyRound, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { AIConfig } from "@/types/dna"

const initial: AIConfig = { baseUrl: "https://api.openai.com/v1", apiKey: "", model: "gpt-4o-mini" }

export function getAIConfig(): AIConfig {
  if (typeof window === "undefined") return initial
  try { return { ...initial, ...JSON.parse(localStorage.getItem("plotdna-ai") || "{}") } } catch { return initial }
}

export function APISettingsDialog() {
  const [config, setConfig] = useState(initial)
  const [visible, setVisible] = useState(false)
  useEffect(() => setConfig(getAIConfig()), [])
  const save = () => { localStorage.setItem("plotdna-ai", JSON.stringify(config)); toast.success("API 配置已保存在此浏览器") }
  const clear = () => { localStorage.removeItem("plotdna-ai"); setConfig(initial); toast.success("已清除 API 配置") }
  return <Dialog>
    <DialogTrigger render={<Button variant="outline" size="sm" />}><KeyRound data-icon="inline-start" />API 设置</DialogTrigger>
    <DialogContent>
      <DialogHeader><DialogTitle>OpenAI-compatible API</DialogTitle><DialogDescription>配置仅保存在当前浏览器，并在生成时随请求临时发送。</DialogDescription></DialogHeader>
      <div className="flex flex-col gap-5 py-2">
        <div className="flex flex-col gap-2"><Label htmlFor="base-url">Base URL</Label><Input id="base-url" value={config.baseUrl} onChange={(e) => setConfig({ ...config, baseUrl: e.target.value })} placeholder="https://api.openai.com/v1" /></div>
        <div className="flex flex-col gap-2"><Label htmlFor="model">Model</Label><Input id="model" value={config.model} onChange={(e) => setConfig({ ...config, model: e.target.value })} placeholder="gpt-4o-mini" /></div>
        <div className="flex flex-col gap-2"><Label htmlFor="api-key">API Key</Label><div className="flex gap-2"><Input id="api-key" type={visible ? "text" : "password"} value={config.apiKey} onChange={(e) => setConfig({ ...config, apiKey: e.target.value })} placeholder="sk-..." /><Button type="button" variant="outline" size="icon" onClick={() => setVisible(!visible)} aria-label={visible ? "隐藏 API Key" : "显示 API Key"}>{visible ? <EyeOff /> : <Eye />}</Button></div></div>
      </div>
      <DialogFooter><Button variant="ghost" onClick={clear}><Trash2 data-icon="inline-start" />清除</Button><Button onClick={save}>保存配置</Button></DialogFooter>
    </DialogContent>
  </Dialog>
}
