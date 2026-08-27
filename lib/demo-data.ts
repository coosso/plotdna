import type { GeneratedScriptResult, PlotDNA, RemixConfig } from "@/types/dna"

export const dnaCases: PlotDNA[] = [
  { id: "silent-evidence", title: "沉默证词", genre: "悬疑", hook: "所有人都在说真话，但真相仍然被完整地藏住。", structure: "三次证词反转 + 最后一秒物证闭环", emotionalEngine: "被误解者争夺叙事权", visualGrammar: "冷色静帧、微距物证、遮挡式构图", tension: 96, pace: 84, originality: 91, beats: ["异常日常", "证词冲突", "无声物证", "身份倒置"], tags: ["高反转", "封闭空间"] },
  { id: "memory-rent", title: "记忆租赁所", genre: "科幻", hook: "穷人出租快乐记忆，富人购买从未拥有的人生。", structure: "规则展示 + 代价升级 + 伦理回旋镖", emotionalEngine: "用失去自我换取家人的未来", visualGrammar: "青色数据层、低饱和现实、记忆暖闪", tension: 89, pace: 78, originality: 95, beats: ["技术奇观", "交易诱惑", "记忆缺口", "主动遗忘"], tags: ["近未来", "伦理困境"] },
  { id: "glass-ceiling", title: "玻璃天花板", genre: "职场", hook: "她升职的唯一条件，是亲手淘汰三年前的自己。", structure: "目标设定 + 同盟错位 + 制度镜像", emotionalEngine: "野心与自我背叛的拉扯", visualGrammar: "玻璃反射、对称办公区、俯拍权力线", tension: 87, pace: 92, originality: 86, beats: ["晋升邀约", "秘密名单", "旧我投影", "规则改写"], tags: ["女性成长", "现实寓言"] },
  { id: "seven-minutes", title: "只爱七分钟", genre: "爱情", hook: "他们每天只记得彼此七分钟，因此每天都重新相爱。", structure: "重复变奏 + 记忆锚点 + 主动告别", emotionalEngine: "短暂确定性对抗永久遗忘", visualGrammar: "自然逆光、手持呼吸感、同景别复现", tension: 76, pace: 69, originality: 93, beats: ["陌生相遇", "快速靠近", "倒计时", "留下证据"], tags: ["高概念", "克制催泪"] },
  { id: "paper-emperor", title: "纸上天子", genre: "古装", hook: "替皇帝写圣旨的小吏，发现每一道旨意都在预言自己的死法。", structure: "任务链 + 权力升级 + 文本陷阱", emotionalEngine: "小人物以文字反制帝王", visualGrammar: "烛火留白、纸墨特写、长焦压迫", tension: 94, pace: 81, originality: 90, beats: ["诡异圣旨", "预言应验", "假诏布局", "落笔弑君"], tags: ["权谋", "小人物"] },
  { id: "perfect-alibi", title: "完美摸鱼术", genre: "喜剧", hook: "他发明 AI 替自己上班，却发现 AI 正在申请成为他的领导。", structure: "小聪明成功 + 失控加倍 + 身份争夺", emotionalEngine: "懒惰者被更勤奋的自己追杀", visualGrammar: "快速推拉、界面叠层、严肃表演荒诞事", tension: 72, pace: 97, originality: 88, beats: ["自动打工", "绩效暴涨", "AI 升职", "真人面试"], tags: ["打工人", "AI 荒诞"] },
]

export const defaultConfig: RemixConfig = { structureId: "silent-evidence", emotionId: "seven-minutes", visualId: "memory-rent", originality: 82, duration: "60秒", requirement: "保持现实质感，结尾留一个可二刷发现的视觉伏笔。" }

export const demoResult: GeneratedScriptResult = {
  title: "第七分钟的证人",
  logline: "在记忆按分钟计费的城市，一名证物修复师必须在每天遗忘爱人之前，证明一桩从未发生过的谋杀。",
  theme: "当记忆不再可靠，选择仍能定义一个人。",
  originality: 91,
  characters: [
    { name: "林见", role: "证物修复师", desire: "替被系统抹除的爱人恢复身份", flaw: "过度相信可被验证的证据" },
    { name: "周弥", role: "记忆审计员", desire: "让林见在遗忘前完成关键选择", flaw: "把告别伪装成冷静" },
  ],
  scenes: [
    { id: 1, time: "00–08s", title: "失真的晨间", beat: "异常日常", shot: "林见醒来，手腕倒计时从 06:59 开始跳动。桌上有一只贴着‘别相信录像’的证物袋。", dialogue: "林见：你是谁？ 周弥：今天的证人。", promptZh: "近未来公寓清晨，年轻亚洲女性证物修复师惊醒，手腕投影七分钟倒计时，桌面透明证物袋，冷青色自然光，写实电影感，35mm", promptEn: "Near-future apartment at dawn, young Asian female evidence restorer waking up, seven-minute holographic countdown on wrist, transparent evidence bag, cool cyan daylight, cinematic realism, 35mm", camera: "35mm 缓慢推进", node: "IPAdapter Face + Depth" },
    { id: 2, time: "08–17s", title: "不存在的死者", beat: "规则展示", shot: "周弥递出死亡证明，死者照片却是林见本人。镜面中周弥的倒影慢半拍。", dialogue: "周弥：你已经死过六次了。", promptZh: "狭窄证物室，死亡证明照片与女主一致，镜中人物倒影延迟，荧光灯闪烁，对称构图，悬疑电影", promptEn: "Narrow evidence room, death certificate photo matches protagonist, delayed mirror reflection, flickering fluorescent light, symmetrical suspense composition", camera: "50mm 固定机位", node: "ControlNet Lineart" },
    { id: 3, time: "17–28s", title: "证词冲突", beat: "证词反转", shot: "三段监控同时播放，每段里的林见都说着不同的真话。画面角落同一杯水以不同方向晃动。", dialogue: "录像林见：不要救我。", promptZh: "三联监控屏幕，同一女性三个版本同步陈述，角落玻璃杯水波方向矛盾，冷色数据界面，细节特写", promptEn: "Triptych surveillance screens, three versions of same woman testifying, contradictory water ripples in glass, cool data interface, forensic detail", camera: "微距切换 + 数字变焦", node: "MultiArea Conditioning" },
    { id: 4, time: "28–40s", title: "无声物证", beat: "发现真相", shot: "林见放大证物袋纤维，发现那不是血迹，而是周弥每天写给她的七分钟行动路线。", dialogue: "林见：谋杀是假的，遗忘才是凶器。", promptZh: "显微镜下红色纤维变成微缩城市路线，女性眼睛倒映地图，青红高对比，超现实但写实材质", promptEn: "Red fibers under microscope transforming into miniature city route, map reflected in woman's eye, cyan-red contrast, surreal concept with realistic texture", camera: "100mm 微距拉焦", node: "LoRA: micro-city 0.65" },
    { id: 5, time: "40–52s", title: "主动遗忘", beat: "代价选择", shot: "倒计时只剩 00:31。林见没有上传证据，而是删除自己的永久记忆备份，把路线发送给全城。", dialogue: "周弥：明天你不会认识我。 林见：但我会再选择一次。", promptZh: "城市记忆中枢，女性按下删除按钮，数据如雨向城市扩散，两人隔着玻璃，克制情绪，宽银幕", promptEn: "City memory hub, woman pressing delete, data rain spreading across city, two people separated by glass, restrained emotion, widescreen", camera: "24mm 环绕半圈", node: "AnimateDiff Motion 0.7" },
    { id: 6, time: "52–60s", title: "第七次相遇", beat: "身份倒置", shot: "次日清晨，林见再次问‘你是谁？’周弥还未回答，林见先递出同一只证物袋。袋底印着两人的指纹。", dialogue: "林见：今天，换我做证人。", promptZh: "清晨公寓重复场景，女性先递出透明证物袋，袋底双人指纹显影，微笑克制，暖光首次出现，结尾定格", promptEn: "Repeated dawn apartment scene, woman offers transparent evidence bag first, two fingerprints revealed, restrained smile, first warm light, final freeze frame", camera: "35mm 反向缓慢拉远", node: "Reference Only + Film Grain" },
  ],
  compliance: [
    { label: "专名复用", status: "通过", note: "未沿用来源案例的人物、地点与道具专名" },
    { label: "情节相似度", status: "通过", note: "保留节奏函数，事件与因果链已完全转译" },
    { label: "价值风险", status: "注意", note: "涉及数字身份与死亡证明，发布前建议增加虚构声明" },
  ],
  source: "demo",
}

export const trendData = [
  { name: "钩子", score: 94, benchmark: 82 }, { name: "升级", score: 88, benchmark: 75 }, { name: "情绪", score: 91, benchmark: 79 }, { name: "反转", score: 96, benchmark: 76 }, { name: "闭环", score: 89, benchmark: 81 },
]

export const efficiencyData = [
  { stage: "构思", manual: 120, dna: 18 }, { stage: "分镜", manual: 180, dna: 32 }, { stage: "提示词", manual: 150, dna: 24 }, { stage: "工作流", manual: 90, dna: 15 },
]
