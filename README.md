# PlotDNA · 叙事 DNA 创作工作台

PlotDNA 把爆款剧情拆解成可复用的"叙事 DNA"——结构节奏、情感曲线、视觉母题——再让创作者跨题材重组出全新的原创短片，并一路追踪来源血缘、生成分镜、导出可执行的交付物。

> 核心理念：**继承抽象的叙事节奏，而不是抄袭具体的人物与情节。**

---

## 功能概览

- **产品主页 `/`** —— 介绍产品价值主张与工作流的营销页面。
- **创作工作台 `/workspace`** —— 带可收缩左侧栏的一体化生产力界面，包含：
  - **项目总览**：项目状态、版本、关键指标与最近活动。
  - **素材与导入中心**：导入并解析参考素材，作为 DNA 的来源。
  - **DNA 资产库**：按结构 / 情感 / 视觉维度筛选、装载叙事 DNA。
  - **结构重组画布**：三槽位重组 + 原创度调节，调用 AI 生成全新剧情。
  - **分镜工坊**：六幕可执行分镜时间轴，含镜头、台词与提示词。
  - **分析报告**：多维度可视化图表，评估节奏、情感与合规。
  - **溯源追踪**：追踪"素材 → DNA → 槽位 → 分镜 → 导出"的完整血缘与原创性声明。
  - **导出与交付中心**：剧本、项目包、ComfyUI 工作流、CSV 与溯源报告等多格式导出。
- **项目讲解页 `/report`** —— 基于真实截图与讲解文案的项目介绍页（站内不显示入口链接）。

---

## 技术栈

| 分类 | 选型 |
| --- | --- |
| 框架 | Next.js 16（App Router）+ React 19 |
| 语言 | TypeScript |
| 样式 | Tailwind CSS v4 + shadcn/ui（默认风格） |
| 主题 | next-themes，支持浅色 / 深色双主题 |
| 图表 | Recharts（经 shadcn Chart 封装） |
| 图标 | lucide-react |
| AI | 兼容 OpenAI Chat Completions 的接口（OpenAI / DeepSeek / 自定义） |

---

## 本地启动

环境要求：Node.js 18+，推荐使用 pnpm。

```bash
# 1. 安装依赖
pnpm install

# 2. 启动开发服务器
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看产品主页，访问 [http://localhost:3000/workspace](http://localhost:3000/workspace) 进入创作工作台。

其他命令：

```bash
pnpm build   # 生产构建
pnpm start   # 启动生产服务器
```

---

## AI 配置（可选）

PlotDNA 默认使用内置的高质量演示数据，**无需任何配置即可完整体验所有功能**。

如需接入真实 AI 生成，可在工作台顶栏点击 **API 设置**，填写：

- **Base URL** —— 例如 `https://api.openai.com/v1` 或 `https://api.deepseek.com/v1`
- **API Key** —— 你的模型服务密钥
- **Model** —— 例如 `gpt-4o` 或 `deepseek-chat`

配置在浏览器本地保存，仅用于向 `/api/remix` 转发生成请求。当密钥缺失、上游报错或返回结构非法时，系统会**自动回退到演示数据**，保证界面始终可用。

---

## 目录结构

```
app/
  page.tsx              # 产品主页
  workspace/page.tsx    # 创作工作台
  report/page.tsx       # 项目讲解页
  api/remix/route.ts    # AI 生成接口（含演示回退）
components/
  landing/              # 主页区块
  plotdna/              # 工作台各功能模块
  report/               # 讲解页组件
  ui/                   # shadcn/ui 组件
lib/                    # 演示数据与工作台数据
types/                  # 领域模型类型定义
```

---

## 设计说明

- **无数据库依赖**：当前版本聚焦创作流程与交互体验，全部数据以强类型演示数据驱动，导入 / 导出为前端模拟，便于快速演示与二次开发。
- **可扩展性**：领域模型集中在 `types/dna.ts`，接入真实存储或后端时只需替换 `lib/` 中的数据源与 `/api/remix` 的实现。

---

## Built with v0

本仓库关联到 [v0](https://v0.app) 项目，合并到 `main` 会自动部署。

[Continue working on v0 →](https://v0.app/chat/projects/prj_mD0ET9CeJw0z2OYmjjcdTWxmjklj)
