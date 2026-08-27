import type { ActivityRecord, ExportFormat, ExportRecord, LineagePath, NarrativeProject, SourceAsset } from "@/types/dna"

export const demoProject: NarrativeProject = { id: "P-240827", title: "第七分钟的证人", status: "创作中", version: "v0.8.3", genre: "近未来悬疑", targetDuration: "60 秒", progress: 78, updatedAt: "今天 14:32" }
export const sourceAssets: SourceAsset[] = [
  { id: "SRC-001", name: "沉默证词_结构分析.pdf", type: "PDF", size: "2.4 MB", words: 12840, status: "已解析", createdAt: "08-25 09:42", tags: ["悬疑", "证词反转"], citations: 4, summary: "提取三次证词反转、物证闭环与封闭空间节奏。" },
  { id: "SRC-002", name: "记忆租赁所 · 竞品页面", type: "URL", size: "网页", words: 3640, status: "已解析", createdAt: "08-25 10:16", tags: ["科幻", "伦理困境"], citations: 6, summary: "抽取规则展示、代价升级与冷青视觉语法。" },
  { id: "SRC-003", name: "导演访谈与视觉参考.txt", type: "文本", size: "18 KB", words: 2190, status: "已解析", createdAt: "08-26 15:03", tags: ["镜头", "现实质感"], citations: 3, summary: "确定 35mm 写实、克制表演与微距物证策略。" },
  { id: "SRC-004", name: "记忆审计局_世界观设定", type: "设定集", size: "36 KB", words: 4860, status: "需处理", createdAt: "08-27 11:20", tags: ["世界观", "角色"], citations: 1, summary: "包含记忆计费规则、审计员权限与城市分区。" },
]
export const activities: ActivityRecord[] = [
  { id: "A1", action: "完成 DNA 拆解", detail: "从 SRC-001 提取 4 个节拍与 1 个反转机制", actor: "PlotDNA", time: "14:32", type: "extract" },
  { id: "A2", action: "生成版本 v0.8.3", detail: "重组结构、情绪与视觉三类 DNA", actor: "你", time: "14:18", type: "remix" },
  { id: "A3", action: "导出 ComfyUI 工作流", detail: "6 个场景节点，提示词完整度 94%", actor: "你", time: "13:51", type: "export" },
  { id: "A4", action: "导入导演访谈", detail: "识别 2,190 字，生成 3 个视觉标签", actor: "PlotDNA", time: "昨天", type: "import" },
]
export const lineagePaths: LineagePath[] = [1,2,3,4,5,6].map((scene, i) => ({ id: `L-${scene}`, sourceId: i % 2 ? "SRC-002" : "SRC-001", sceneId: scene, contribution: [72,64,81,76,69,74][i], transform: ["节拍抽象", "规则转译", "反转重构", "物证换喻", "代价升级", "闭环镜像"][i], nodes: [
  { id:`s${scene}`,stage:"来源",label:i%2?"记忆租赁所":"沉默证词",meta:`${i%2?"SRC-002":"SRC-001"} · 已授权分析`,confidence:94,risk:"低" },
  { id:`d${scene}`,stage:"DNA",label:["异常日常","规则展示","证词冲突","无声物证","代价选择","身份倒置"][i],meta:"抽象结构函数",confidence:91,risk:"低" },
  { id:`g${scene}`,stage:"槽位",label:i%3===0?"结构骨架":i%3===1?"情绪引擎":"视觉语法",meta:"跨题材重组",confidence:88,risk:"低" },
  { id:`c${scene}`,stage:"分镜",label:`S${scene} · ${["失真的晨间","不存在的死者","证词冲突","无声物证","主动遗忘","第七次相遇"][i]}`,meta:"因果链已转译",confidence:93,risk:scene===5?"注意":"低" },
  { id:`e${scene}`,stage:"导出",label:"script.md / workflow.json",meta:"包含来源清单",confidence:100,risk:"低" },
]}))
export const exportFormats: ExportFormat[] = [
  { id:"md",name:"完整剧本",extension:".md",description:"适合审阅、协作与版本归档",includes:["故事梗概","六幕分镜","对白","中英提示词"],status:"可导出",lastExport:"今天 13:48" },
  { id:"json",name:"项目数据包",extension:".json",description:"保留项目配置、DNA 与血缘关系",includes:["项目元数据","素材索引","重组参数","溯源图"],status:"可导出" },
  { id:"comfy",name:"ComfyUI Workflow",extension:".json",description:"直接进入 AI 视频节点工作流",includes:["6 个场景节点","镜头参数","英文提示词","模型建议"],status:"可导出",lastExport:"今天 13:51" },
  { id:"csv",name:"镜头执行表",extension:".csv",description:"用于制片排期与团队分工",includes:["场次","时码","景别","运镜","节点类型"],status:"可导出" },
  { id:"trace",name:"原创性溯源报告",extension:".html",description:"解释每个输出如何从抽象结构转译",includes:["来源清单","贡献比例","转换说明","风险声明"],status:"可导出" },
]
export const exportHistory: ExportRecord[] = [
  { id:"E-104",name:"第七分钟的证人_完整包.zip",format:"项目包",version:"v0.8.2",createdAt:"今天 13:51",size:"186 KB" },
  { id:"E-103",name:"shots_v0.8.1.csv",format:"镜头表",version:"v0.8.1",createdAt:"昨天 18:22",size:"8 KB" },
  { id:"E-102",name:"lineage_report.html",format:"溯源报告",version:"v0.8.0",createdAt:"08-26 16:40",size:"42 KB" },
]
