export type Genre = "全部" | "悬疑" | "科幻" | "职场" | "爱情" | "古装" | "喜剧"

export interface PlotDNA {
  id: string
  title: string
  genre: Exclude<Genre, "全部">
  hook: string
  structure: string
  emotionalEngine: string
  visualGrammar: string
  tension: number
  pace: number
  originality: number
  beats: string[]
  tags: string[]
}

export interface RemixConfig {
  structureId: string
  emotionId: string
  visualId: string
  originality: number
  duration: "30秒" | "60秒" | "90秒"
  requirement: string
}

export interface StoryboardScene {
  id: number
  time: string
  title: string
  beat: string
  shot: string
  dialogue: string
  promptZh: string
  promptEn: string
  camera: string
  node: string
}

export interface GeneratedScriptResult {
  title: string
  logline: string
  theme: string
  originality: number
  characters: { name: string; role: string; desire: string; flaw: string }[]
  scenes: StoryboardScene[]
  compliance: { label: string; status: "通过" | "注意"; note: string }[]
  source: "ai" | "demo"
}

export interface AIConfig {
  baseUrl: string
  apiKey: string
  model: string
}
