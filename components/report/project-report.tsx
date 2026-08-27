import Image from "next/image"

const chapters = [
  {
    marker: "01 / 项目起点",
    title: "我们解决的，不是“再生成一段故事”",
    image: "/report/overview.png",
    alt: "PlotDNA 项目总览，展示从素材导入到交付导出的完整流水线",
    paragraphs: [
      "大家好，这个项目叫 PlotDNA。它解决的是 AI 内容创作里一个很常见、但经常被忽略的问题：我们可以很快生成一段故事，却很难解释故事为什么这样生成，也很难把一个好作品里的结构经验，安全地迁移到另一个全新的故事里。于是创作者常常面对三个断点：参考资料散落在不同地方，生成过程像黑箱，最终结果也很难直接交给编剧、制片或视频工作流继续使用。",
      "所以我没有把它做成一个普通的聊天框，而是把整个过程定义成一条可观察的创作流水线。现在屏幕里的项目总览，把素材导入、DNA 拆解、结构重组、分镜生成、风险检查和交付导出放在同一个工作台中。创作者可以随时知道项目走到哪一步、哪些环节已经完成、还有什么风险需要确认。这里的关键不是多展示几个数字，而是让创作第一次拥有类似工程项目的状态感。",
    ],
  },
  {
    marker: "02 / 输入与结构化",
    title: "先管理证据，再让 AI 开始创作",
    image: "/report/sources.png",
    alt: "素材库与导入中心，展示素材来源、解析状态和来源编号",
    paragraphs: [
      "第二个选择，是先做素材库，而不是直接做生成按钮。这里可以统一接收剧本、网页、访谈、创作笔记和世界观设定。每份素材进入系统后都会获得独立的来源 ID，同时记录字数、解析状态、摘要、标签和被引用次数。这样做的好处是，后续任何一个结构节点、分镜或导出文件，都可以重新找到它依赖的原始依据。",
      "在真实产品里，这一层会承担文件解析、文本切片、去重、权限和版本管理；当前演示已经把产品形态、交互路径和数据关系完整跑通，但导入动作使用的是本地模拟数据，不会真的上传用户文件。这是一个有意控制的边界：先验证工作流是否清楚，再接入数据库、对象存储和异步解析服务，避免过早把时间耗在基础设施上。",
    ],
  },
  {
    marker: "03 / 核心方法",
    title: "不是拼贴，而是一次叙事转基因",
    image: "/report/mixer.png",
    alt: "结构重组画布，以三槽位分别选择结构、情绪和视觉语法",
    paragraphs: [
      "PlotDNA 的核心方法，是把参考作品拆成可以跨作品复用的抽象 DNA。我们不保留人物名字、具体事件或原始表达，而是提取结构骨架、情绪引擎和视觉语法。例如，一个来源提供悬疑节拍，另一个来源提供时间压力，第三个来源提供空间和镜头规则。三种能力进入不同槽位后，再围绕新的角色、世界观和目标时长重新编译。",
      "这个选择非常重要，因为它把“模仿一部作品”改成了“组合多份抽象能力”。界面里可以调整原创度、目标时长和附加导演要求，最终输出六幕分镜、对白、镜头参数与提示词。AI 在这里不是替人拍脑袋，而是参与资料归纳、结构抽取、跨来源重组、约束检查和结果解释；人仍然负责选择来源、调整参数、判断审美，以及对最终作品负责。",
    ],
  },
  {
    marker: "04 / 可解释与治理",
    title: "每个镜头，都能回答“它从哪里来”",
    image: "/report/lineage.png",
    alt: "来源溯源追踪页面，展示来源、DNA、槽位、分镜和导出之间的路径",
    paragraphs: [
      "生成式产品最容易缺失的是可解释性，所以我额外做了来源溯源追踪。这里把一条创作血缘拆成五段：原始来源、抽象 DNA、重组槽位、最终分镜和交付文件。用户可以按来源或场景筛选，查看每条路径的贡献比例、置信度和风险等级。换句话说，如果有人问第一个镜头为什么出现、用了哪份资料、发生了什么转换，系统可以给出一条清楚的回答。",
      "这不只是为了好看，它直接服务于团队协作、版权审阅和版本回溯。当前的原创性声明也明确限定：系统只迁移节拍、情绪动力与视觉函数，具体人物、专名、事件和表达需要隔离重写。未来如果接入真实模型，这一层还可以继续增加相似度检测、引用片段对照、人工确认节点和审计日志。",
    ],
  },
  {
    marker: "05 / 交付与复盘",
    title: "结果不是一张页面，而是一组能继续工作的资产",
    image: "/report/exports.png",
    alt: "导出与交付中心，展示剧本、数据包、ComfyUI 和镜头执行表等格式",
    paragraphs: [
      "最后一个设计重点是导出。创作者需要的不是只在网页里看一遍结果，而是把结果带进下一段工作。因此项目提供完整剧本、项目数据包、ComfyUI Workflow、镜头执行表和溯源报告等格式。编剧可以继续改稿，制片可以排期，AI 视频工具可以读取节点数据，合规人员也能单独拿到来源说明。页面中的下载与预览已经可以操作，并会保留版本和导出历史。",
      "目前完成的是一个高保真、可交互的产品原型：核心信息架构、端到端流程、响应式工作台、模拟导入、DNA 选择、分镜生成、分析、溯源和多格式导出都已经具备。还没有完成的是用户账户、多人协作、真实模型调用、数据库持久化、文件存储和生产级任务队列。",
      "本次从产品定义、界面设计到前端实现与浏览器验证，实际是在一次集中的 AI 协作开发会话中完成，约两到三小时。这个数字指当前可演示原型，并不是完整商业产品工期；如果按传统方式分别完成需求梳理、交互设计、视觉设计和前端原型，通常需要数个工作日。AI 最大的价值不是把某一个按钮做快，而是帮助我持续对齐产品逻辑、界面文案、数据结构和可运行代码，让想法能够更快进入可验证状态。",
    ],
  },
]

export function ProjectReport() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto flex max-w-5xl flex-col gap-16 px-5 py-12 md:px-10 md:py-20">
        <header className="flex max-w-3xl flex-col gap-5">
          <p className="font-mono text-sm text-muted-foreground">PlotDNA / PROJECT WALKTHROUGH</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">把 AI 叙事创作，从黑箱变成一条可追踪的生产线</h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">这是一份约 4–5 分钟的项目讲解稿。页面按实际演示顺序组织，可以一边滚动操作截图，一边按照文字自然讲述。</p>
        </header>

        {chapters.map((chapter) => (
          <section key={chapter.marker} className="flex flex-col gap-6">
            <div className="flex max-w-3xl flex-col gap-3">
              <p className="font-mono text-sm text-muted-foreground">{chapter.marker}</p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">{chapter.title}</h2>
            </div>
            <figure className="overflow-hidden rounded-xl border bg-muted">
              <Image src={chapter.image} alt={chapter.alt} width={1048} height={869} className="h-auto w-full" sizes="(max-width: 1024px) 100vw, 960px" priority />
            </figure>
            <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-foreground/85 md:text-lg">
              {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}

        <footer className="border-t pt-8">
          <p className="max-w-3xl text-lg leading-relaxed">如果用一句话总结，PlotDNA 不是替创作者写完一个故事，而是把“参考、拆解、重组、生成、解释和交付”连接成一个可以被理解、被审阅、也能继续扩展的创作系统。</p>
        </footer>
      </article>
    </main>
  )
}
