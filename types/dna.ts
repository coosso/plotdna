export type Genre = "全部" | "悬疑" | "科幻" | "职场" | "爱情" | "古装" | "喜剧"
export type SourceStatus = "已解析" | "解析中" | "需处理"

export interface PlotDNA { id: string; title: string; genre: Exclude<Genre, "全部">; hook: string; structure: string; emotionalEngine: string; visualGrammar: string; tension: number; pace: number; originality: number; beats: string[]; tags: string[] }
export interface RemixConfig { structureId: string; emotionId: string; visualId: string; originality: number; duration: "30秒" | "60秒" | "90秒"; requirement: string }
export interface StoryboardScene { id: number; time: string; title: string; beat: string; shot: string; dialogue: string; promptZh: string; promptEn: string; camera: string; node: string }
export interface GeneratedScriptResult { title: string; logline: string; theme: string; originality: number; characters: { name: string; role: string; desire: string; flaw: string }[]; scenes: StoryboardScene[]; compliance: { label: string; status: "通过" | "注意"; note: string }[]; source: "ai" | "demo" }
export interface AIConfig { baseUrl: string; apiKey: string; model: string }

export interface NarrativeProject { id: string; title: string; status: "创作中" | "待审核" | "已交付"; version: string; genre: string; targetDuration: string; progress: number; updatedAt: string }
export interface SourceAsset { id: string; name: string; type: "PDF" | "URL" | "文本" | "设定集"; size: string; words: number; status: SourceStatus; createdAt: string; tags: string[]; citations: number; summary: string }
export interface ActivityRecord { id: string; action: string; detail: string; actor: string; time: string; type: "import" | "extract" | "remix" | "export" }
export interface LineageNode { id: string; stage: "来源" | "DNA" | "槽位" | "分镜" | "导出"; label: string; meta: string; confidence: number; risk: "低" | "注意" }
export interface LineagePath { id: string; sourceId: string; sceneId: number; nodes: LineageNode[]; contribution: number; transform: string }
export interface ExportFormat { id: string; name: string; extension: string; description: string; includes: string[]; status: "可导出" | "待生成"; lastExport?: string }
export interface ExportRecord { id: string; name: string; format: string; version: string; createdAt: string; size: string }
