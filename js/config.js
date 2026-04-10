/**
 * 集中配置：改文案/题库主要编辑本文件。
 * 标准题库 QUESTION_POOL、高血压题库 QUESTION_POOL_HYPERTENSION；每次从当前池按轴各随机抽 QUESTIONS_PER_AXIS 道，再打乱题目顺序（选项顺序不变）。
 */

export const QUESTIONS_PER_AXIS = 3;
export const SESSION_QUESTION_COUNT = QUESTIONS_PER_AXIS * 4;

export const META = {
  siteName: "NMTI",
  tagline: "牛马型人格测评 · 职场搞笑版",
  welcomeHtml:
    "通过 12 道「领导与流程」场景题，看看你的 NMTI 四字母是哪一种。结果仅供玩梗，请勿当真。",
};

export const MODE_STANDARD = "standard";
export const MODE_HYPERTENSION = "hypertension";
export const UNLOCK_STORAGE_KEY = "nmti_standard_complete";

/** 平局时优先字母（与心理学术语无关，仅保证结果确定）：E>I, S>N, T>F, J>P */
export const AXIS_PRIORITY = {
  EI: ["E", "I"],
  SN: ["S", "N"],
  TF: ["T", "F"],
  JP: ["J", "P"],
};

export const QUESTION_POOL = [
  {
    axis: "EI",
    prompt: "周五 17:50，领导在大群发：「有个小事，我们对齐一下。」你第一反应是？",
    choices: [
      { text: "秒回「在的」，并问要不要现在拉个短会。", letter: "E" },
      { text: "已读不回，假装在地铁没信号，周一再说。", letter: "I" },
      { text: "立刻@相关同事进群，把场子先撑大。", letter: "E" },
      { text: "私聊问熟人：这是不是又要我们背锅？", letter: "I" },
    ],
  },
  {
    axis: "EI",
    prompt: "跨部门甩锅会上，对方说「这不是我们流程里的活」，你会？",
    choices: [
      { text: "当场打开会议纪要，把责任边界念给大家听。", letter: "E" },
      { text: "点头微笑，心里想词，会后写小作文吐槽。", letter: "I" },
      { text: "提议「拉个群统一口径」，把领导也拉进来。", letter: "E" },
      { text: "尽量少说话，让邮件和工单替你开口。", letter: "I" },
    ],
  },
  {
    axis: "EI",
    prompt: "领导突然站你工位旁：「有空吗聊两句？」你？",
    choices: [
      { text: "立刻停下手头活，正面迎击，问是不是新需求。", letter: "E" },
      { text: "心里一紧，先说「稍等我保存一下」争取缓冲。", letter: "I" },
      { text: "大声让周围都知道「领导找我」，避免闭门造车。", letter: "E" },
      { text: "希望对话在走廊结束，别坐进会议室。", letter: "I" },
    ],
  },
  {
    axis: "SN",
    prompt: "需求文档写「尽快上线」，没有日期。你怎么理解？",
    choices: [
      { text: "按字面就是没排期，继续按原计划做自己的活。", letter: "S" },
      { text: "读懂潜台词：其实是「今晚」，只是没好意思写。", letter: "N" },
      { text: "找邮件里最近一次 deadline 当依据。", letter: "S" },
      { text: "看谁最近在会上声音大，谁就是隐形截止日。", letter: "N" },
    ],
  },
  {
    axis: "SN",
    prompt: "领导说「这次以业务体感为准」，你的解读是？",
    choices: [
      { text: "那得有可验收指标，不然无法闭环。", letter: "S" },
      { text: "翻译：老板的心情就是 KPI。", letter: "N" },
      { text: "让他把「体感」写成 checklist，哪怕三条也好。", letter: "S" },
      { text: "先摸清楚谁是一言堂，再决定怎么汇报。", letter: "N" },
    ],
  },
  {
    axis: "SN",
    prompt: "流程规定三步审批，但业务催「先上线再补票」，你相信？",
    choices: [
      { text: "不信，没批就是没授权，留痕第一。", letter: "S" },
      { text: "信一半：上线是真，补票未必会补。", letter: "N" },
      { text: "按流程发邮件抄送，把自己摘出去。", letter: "S" },
      { text: "评估谁是最终背锅位，再决定跟不跟。", letter: "N" },
    ],
  },
  {
    axis: "TF",
    prompt: "同事求你帮忙擦屁股，你自己的 deadline 也紧，你会？",
    choices: [
      { text: "用风险和工时表拒绝，建议他走正式排期。", letter: "T" },
      { text: "先共情两句，再委婉说这次真帮不上。", letter: "F" },
      { text: "可以帮，但要邮件确认「本次属支援，不进我 KPI」。", letter: "T" },
      { text: "看关系：关系到位就硬扛一点。", letter: "F" },
    ],
  },
  {
    axis: "TF",
    prompt: "评审会上领导方案明显有风险，你？",
    choices: [
      { text: "直接列风险与备选方案，对事不对人。", letter: "T" },
      { text: "先肯定方向，再侧面提醒「有个小地方可能要留意」。", letter: "F" },
      { text: "要求记进纪要：「已知风险，责任归属 X」。", letter: "T" },
      { text: "会后私聊，给领导台阶下。", letter: "F" },
    ],
  },
  {
    axis: "TF",
    prompt: "撕逼时对方开始卖惨，你的策略？",
    choices: [
      { text: "不接情绪，继续对齐事实与工单编号。", letter: "T" },
      { text: "先降温，再谈事，避免场面难看。", letter: "F" },
      { text: "截图、转发、@，用证据结束话题。", letter: "T" },
      { text: "找个和稀泥的第三人当缓冲。", letter: "F" },
    ],
  },
  {
    axis: "JP",
    prompt: "距离发布还有三天，任务还剩一半，你？",
    choices: [
      { text: "立刻拆子任务、排小时表，今晚开始焦虑前移。", letter: "J" },
      { text: "相信最后两晚的人类潜能，先把手感养起来。", letter: "P" },
      { text: "拉会同步风险，要求砍需求或加人。", letter: "J" },
      { text: "边做边改优先级，不到最后一刻不定稿。", letter: "P" },
    ],
  },
  {
    axis: "JP",
    prompt: "周报里你更想体现什么？",
    choices: [
      { text: "本周完成项、下周计划、阻塞与所需支持，一条不差。", letter: "J" },
      { text: "整体在推进中，细节看文档链接（可能还没写）。", letter: "P" },
      { text: "用百分比和里程碑图，让老板安心。", letter: "J" },
      { text: "突出「响应变化」与「灵活调整」。", letter: "P" },
    ],
  },
  {
    axis: "JP",
    prompt: "领导周五布置「周一早上就要」，你周末？",
    choices: [
      { text: "周六就肝一版，周日再留缓冲改 bug。", letter: "J" },
      { text: "周日晚上再进入心流，周五的事周一再说。", letter: "P" },
      { text: "先把接口和数据准备好，减少周一不确定性。", letter: "J" },
      { text: "先休息，相信周一晨会会改需求。", letter: "P" },
    ],
  },
  {
    axis: "EI",
    prompt: "群里领导发「辛苦了」半天没人接话，你会？",
    choices: [
      { text: "带头回个表情包或+1，把场子圆过去。", letter: "E" },
      { text: "装死，等别人先回，自己跟队形。", letter: "I" },
      { text: "顺便同步一下进度，让老板看见在推进。", letter: "E" },
      { text: "私聊小群吐槽：这又是哪种话术。", letter: "I" },
    ],
  },
  {
    axis: "EI",
    prompt: "评优前夕领导突然对你格外亲切，你？",
    choices: [
      { text: "主动汇报成果，顺便对齐预期。", letter: "E" },
      { text: "礼貌回应，内心拉响防空警报。", letter: "I" },
      { text: "约个短会，把「今年贡献」说清楚。", letter: "E" },
      { text: "减少单独相处，有事走邮件。", letter: "I" },
    ],
  },
  {
    axis: "EI",
    prompt: "大会上被点名「年轻人要多承担」，你？",
    choices: [
      { text: "当场接话，问清范围、资源和截止时间。", letter: "E" },
      { text: "微笑点头，心里想这饼几分熟。", letter: "I" },
      { text: "提议「是否同步到项目看板」防止口头需求。", letter: "E" },
      { text: "会后找直属主管确认到底算不算你 KPI。", letter: "I" },
    ],
  },
  {
    axis: "SN",
    prompt: "领导嘴上说「这个很简单，就是改一下」，你怎么听？",
    choices: [
      { text: "简单=要改需求文档和验收标准，先对齐范围。", letter: "S" },
      { text: "翻译：牵涉八个子系统，只是他不知道。", letter: "N" },
      { text: "让他指一下「改一下」对应哪一行 PRD。", letter: "S" },
      { text: "先听谁在叹气，叹气的人掌握真相。", letter: "N" },
    ],
  },
  {
    axis: "SN",
    prompt: "PPT 里出现「按照行业最佳实践」，你相信？",
    choices: [
      { text: "不信，除非脚注里有标准名和版本号。", letter: "S" },
      { text: "信，因为它通常意味着「先上线再说」。", letter: "N" },
      { text: "要求会后补链接，没链接当没写。", letter: "S" },
      { text: "观察老板点头频率判断是不是场面话。", letter: "N" },
    ],
  },
  {
    axis: "SN",
    prompt: "流程文件写「原则上不允许」，你的理解是？",
    choices: [
      { text: "原则上=书面禁止，要走例外审批。", letter: "S" },
      { text: "原则上=大家心里都默许那种。", letter: "N" },
      { text: "先邮件问法务/合规怎么留痕。", letter: "S" },
      { text: "看谁上次违规还没事，跟风向标走。", letter: "N" },
    ],
  },
  {
    axis: "TF",
    prompt: "领导让你「客观评价一下」某位同事，你？",
    choices: [
      { text: "列事实与产出，形容词尽量少。", letter: "T" },
      { text: "先肯定人，再轻描淡写提改进点。", letter: "F" },
      { text: "要求匿名问卷，拒绝口头站队。", letter: "T" },
      { text: "反问评价用途，避免被当枪使。", letter: "F" },
    ],
  },
  {
    axis: "TF",
    prompt: "加班到半夜发现是领导自己记错需求，你？",
    choices: [
      { text: "发邮件复盘：变更记录与责任边界写清楚。", letter: "T" },
      { text: "先别发火，明天找个台阶让他改口。", letter: "F" },
      { text: "把聊天记录和旧版需求打包转发。", letter: "T" },
      { text: "群里委婉@，给彼此留面子。", letter: "F" },
    ],
  },
  {
    axis: "TF",
    prompt: "KPI 硬指标和团队氛围冲突时，你更倾向？",
    choices: [
      { text: "指标优先，氛围靠流程而不是靠忍。", letter: "T" },
      { text: "先保人不散，再找老板要资源或砍目标。", letter: "F" },
      { text: "把冲突写进风险清单，让上级拍板。", letter: "T" },
      { text: "私下串气，争取集体讨价还价。", letter: "F" },
    ],
  },
  {
    axis: "JP",
    prompt: "插队需求杀进来，你手上的排期？",
    choices: [
      { text: "立刻重排优先级表，标红影响范围。", letter: "J" },
      { text: "先插着做，相信排期会在下周自愈。", letter: "P" },
      { text: "要书面确认「砍哪条旧需求」再开干。", letter: "J" },
      { text: "看哪条最会吵，谁吵赢谁先。", letter: "P" },
    ],
  },
  {
    axis: "JP",
    prompt: "截止日前一天老板说「再 polish 一下细节」，你？",
    choices: [
      { text: "列出 polish 清单和所需小时数，谈砍范围。", letter: "J" },
      { text: "先改最显眼的两处，剩下的看命。", letter: "P" },
      { text: "锁 scope：本轮只接受这三类修改。", letter: "J" },
      { text: "通宵兜底，同时祈祷需求别再变。", letter: "P" },
    ],
  },
  {
    axis: "JP",
    prompt: "你发现上游依赖还没交付，你这边已经到节点了，你？",
    choices: [
      { text: "升级风险邮件，抄送相关方要新计划。", letter: "J" },
      { text: "先 mock 数据顶着，等真来了再真接。", letter: "P" },
      { text: "拉会对齐「假完成」与「真完成」定义。", letter: "J" },
      { text: "边做边等，相信他们「马上就好」。", letter: "P" },
    ],
  },
];

/** 「高血压版」题库：更典型、讽刺更强；结构与标准版相同，按轴抽题并打乱题目顺序。 */
export const QUESTION_POOL_HYPERTENSION = [
  {
    axis: "EI",
    prompt: "领导嘴上说「辛苦一下，很快的」，你内心血压？",
    choices: [
      { text: "当场问「很快是多快、谁验收、算不算加班」。", letter: "E" },
      { text: "微笑说好，内心已经把离职信写了三版。", letter: "I" },
      { text: "拉群@所有人对齐「很快」的定义。", letter: "E" },
      { text: "打开计时器，看这次「很快」要几天。", letter: "I" },
    ],
  },
  {
    axis: "EI",
    prompt: "对方甩一句「这逻辑不是很清楚吗？」你？",
    choices: [
      { text: "反问「那你复述一遍验收标准」。", letter: "E" },
      { text: "沉默，事后把原话截图进「典句收藏」。", letter: "I" },
      { text: "当场打开文档指到具体段落。", letter: "E" },
      { text: "点头，心里想：清楚你个大头鬼。", letter: "I" },
    ],
  },
  {
    axis: "EI",
    prompt: "下班前五分钟被喊「开个短会」，你？",
    choices: [
      { text: "问「短是多短，能站着开吗」。", letter: "E" },
      { text: "带电脑假装还有急事，能躲则躲。", letter: "I" },
      { text: "进会议室先声明「我六点必须走」。", letter: "E" },
      { text: "坐下，灵魂已经下班，肉体在点头。", letter: "I" },
    ],
  },
  {
    axis: "EI",
    prompt: "周末群里发「大家自愿来加个班」，还配玫瑰表情，你？",
    choices: [
      { text: "问「自愿的界定与补偿口径是什么」。", letter: "E" },
      { text: "装死，周一再说「手机没电」。", letter: "I" },
      { text: "回复收到但不接龙。", letter: "E" },
      { text: "把群静音，假装在深山徒步。", letter: "I" },
    ],
  },
  {
    axis: "EI",
    prompt: "领导已读不回，两小时后突然催「进度呢」，你？",
    choices: [
      { text: "转发已读时间轴与上次提问记录。", letter: "E" },
      { text: "深呼吸，回「刚在按您上次意见改」。", letter: "I" },
      { text: "电话打过去：「您看邮件第三段」。", letter: "E" },
      { text: "内心爆炸，回复仍保持礼貌。", letter: "I" },
    ],
  },
  {
    axis: "EI",
    prompt: "「你为什么不能跟某某一样？」砸脸上时，你？",
    choices: [
      { text: "请对方明确「一样」指工时还是产出还是背锅量。", letter: "E" },
      { text: "微笑：「您说得对」，下班打开招聘软件。", letter: "I" },
      { text: "拉三者对齐职责边界。", letter: "E" },
      { text: "沉默，用眼神表达「那你招他啊」。", letter: "I" },
    ],
  },
  {
    axis: "SN",
    prompt: "需求写着「按行业惯例」，但没写哪条惯例，你？",
    choices: [
      { text: "没有文档就当没有需求，谁主张谁举证。", letter: "S" },
      { text: "翻译：惯例=老板昨晚刷到的那篇文章。", letter: "N" },
      { text: "要求补链接、版本、生效日期。", letter: "S" },
      { text: "观察谁声音大谁就是「惯例」。", letter: "N" },
    ],
  },
  {
    axis: "SN",
    prompt: "会上领导说「先上线再补流程」，你？",
    choices: [
      { text: "要求邮件确认「例外责任人」是谁。", letter: "S" },
      { text: "听懂：出了事流程会补到你头上。", letter: "N" },
      { text: "把风险写进纪要，不签字不动手。", letter: "S" },
      { text: "先摸鱼五分钟，等别人先当出头鸟。", letter: "N" },
    ],
  },
  {
    axis: "SN",
    prompt: "口头一句「你看着办」，出事却要你全权负责，你？",
    choices: [
      { text: "以后「看着办」必须回邮件留痕。", letter: "S" },
      { text: "早看透了：看着办=办砸了你自己看着。", letter: "N" },
      { text: "当场复述理解让对方确认。", letter: "S" },
      { text: "表面办，内心给这句话办了葬礼。", letter: "N" },
    ],
  },
  {
    axis: "SN",
    prompt: "「这个需求很简单，改一行就行」——你听到？",
    choices: [
      { text: "那一行请指出文件、行号、分支名。", letter: "S" },
      { text: "血压上来：简单你行你上。", letter: "N" },
      { text: "要求签「一行变更」验收单。", letter: "S" },
      { text: "微笑，打开技术债清单。", letter: "N" },
    ],
  },
  {
    axis: "SN",
    prompt: "流程写「紧急通道」，但从未写触发条件，你？",
    choices: [
      { text: "没有条件就当没有通道，一律走常规。", letter: "S" },
      { text: "明白：谁急谁有权定义紧急。", letter: "N" },
      { text: "发邮件问合规，抄送一圈。", letter: "S" },
      { text: "默认紧急=领导今天心情不好。", letter: "N" },
    ],
  },
  {
    axis: "SN",
    prompt: "「以对齐为准」但五方说法互相矛盾，你？",
    choices: [
      { text: "拉会对齐「到底以谁为准」，记纪要。", letter: "S" },
      { text: "悟了：以最后甩锅成功的人为准。", letter: "N" },
      { text: "冻结需求，没统一文档不开工。", letter: "S" },
      { text: "先装病，等神仙打架出结果。", letter: "N" },
    ],
  },
  {
    axis: "TF",
    prompt: "同事甩锅到你头上，还配无辜表情，你？",
    choices: [
      { text: "时间线、工单、聊天记录三连。", letter: "T" },
      { text: "先私聊给台阶，不行再上证据。", letter: "F" },
      { text: "要求复盘会，当众对齐责任。", letter: "T" },
      { text: "心里骂街，嘴上「我们一起复盘下」。", letter: "F" },
    ],
  },
  {
    axis: "TF",
    prompt: "领导说「要有主人翁精神」，工资没涨，你？",
    choices: [
      { text: "主人翁精神请配套决策权与资源。", letter: "T" },
      { text: "笑而不语，精神可以，股份没有。", letter: "F" },
      { text: "反问 KPI 与权责是否对等。", letter: "T" },
      { text: "点头，把「精神」存进表情包文件夹。", letter: "F" },
    ],
  },
  {
    axis: "TF",
    prompt: "年会抽奖阳光普照，你司「阳光」=谢谢参与，你？",
    choices: [
      { text: "计算期望收益，决定明年还坐不坐这儿。", letter: "T" },
      { text: "假装开心，维护同事表面和平。", letter: "F" },
      { text: "把抽奖规则截图，研究有没有坑。", letter: "T" },
      { text: "内心：这班非上不可吗。", letter: "F" },
    ],
  },
  {
    axis: "TF",
    prompt: "「我们是家人」出现在周报或团建 PPT，你？",
    choices: [
      { text: "家人请按劳动法付加班费。", letter: "T" },
      { text: "配合鼓掌，胃有点反酸。", letter: "F" },
      { text: "问家人能不能请假不扣钱。", letter: "T" },
      { text: "感动三秒，然后清醒。", letter: "F" },
    ],
  },
  {
    axis: "TF",
    prompt: "绩效面谈：活都是你干的，评级却是「符合预期」，你？",
    choices: [
      { text: "要书面依据与同级对比数据。", letter: "T" },
      { text: "先听完，出门再找下家。", letter: "F" },
      { text: "要求举例「超预期」长什么样。", letter: "T" },
      { text: "微笑，把对话写进「职场文学」。", letter: "F" },
    ],
  },
  {
    axis: "TF",
    prompt: "团建占用周末还说「不强求」，你？",
    choices: [
      { text: "问「不强求」是否包括零后果缺席。", letter: "T" },
      { text: "找借口请假，怕不合群但保命。", letter: "F" },
      { text: "要书面确认自愿与补偿。", letter: "T" },
      { text: "去了，人在心不在。", letter: "F" },
    ],
  },
  {
    axis: "JP",
    prompt: "deadline 当天早上需求「再小改一版」，你？",
    choices: [
      { text: "列出改动项与小时数，要求砍范围或延期。", letter: "J" },
      { text: "先改最显眼的，剩下的听天由命。", letter: "P" },
      { text: "冻结 scope：本轮只接受这三条。", letter: "J" },
      { text: "开摆与爆肝二选一，看心情。", letter: "P" },
    ],
  },
  {
    axis: "JP",
    prompt: "排期表是圣经，但每周被插队三次，你？",
    choices: [
      { text: "升级风险，要求重排或加人。", letter: "J" },
      { text: "排期当参考，活着靠奇迹。", letter: "P" },
      { text: "公开「插队队列」，让老板排序。", letter: "J" },
      { text: "默默把 buffer 藏进估算里。", letter: "P" },
    ],
  },
  {
    axis: "JP",
    prompt: "「今晚一定要发版」——下午四点需求还在改，你？",
    choices: [
      { text: "拉闸：不冻结需求就不发。", letter: "J" },
      { text: "相信 23:59 的魔法。", letter: "P" },
      { text: "发版 checklist勾完才敢点发布。", letter: "J" },
      { text: "先点外卖，进入求生模式。", letter: "P" },
    ],
  },
  {
    axis: "JP",
    prompt: "周报要求写「本周感悟」，你？",
    choices: [
      { text: "感悟：流程越多活越难干。", letter: "J" },
      { text: "复制上期改两个动词。", letter: "P" },
      { text: "写三条可量化感悟，附链接。", letter: "J" },
      { text: "感悟：好想退休。", letter: "P" },
    ],
  },
  {
    axis: "JP",
    prompt: "项目复盘变成甩锅大会，原定一小时，你？",
    choices: [
      { text: "提前准备时间线与责任表，控制节奏。", letter: "J" },
      { text: "坐到后面吃瓜，看谁声音大。", letter: "P" },
      { text: "要求会后有纪要、有跟进行动项。", letter: "J" },
      { text: "灵魂出窍，肉体在记笔记。", letter: "P" },
    ],
  },
  {
    axis: "JP",
    prompt: "领导说「弹性工作」，但早走一次就被问「是不是不饱和」，你？",
    choices: [
      { text: "要书面定义弹性与考勤口径。", letter: "J" },
      { text: "懂了：弹的是他，性的是我。", letter: "P" },
      { text: "拉 HR 对齐政策。", letter: "J" },
      { text: "以后统一晚走十分钟表演饱和。", letter: "P" },
    ],
  },
];

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * 每轴随机抽 QUESTIONS_PER_AXIS 道（不重复），再整体打乱题目顺序。
 * @param {typeof QUESTION_POOL} pool
 */
export function buildSessionQuestions(pool) {
  const axes = ["EI", "SN", "TF", "JP"];
  const byAxis = { EI: [], SN: [], TF: [], JP: [] };
  for (const q of pool) {
    const list = byAxis[q.axis];
    if (list) list.push(q);
  }
  const picked = [];
  for (const ax of axes) {
    const axisPool = byAxis[ax];
    if (axisPool.length < QUESTIONS_PER_AXIS) {
      throw new Error(
        `NMTI: 题库轴 ${ax} 至少需要 ${QUESTIONS_PER_AXIS} 道题，当前 ${axisPool.length}。请补充该题库池。`,
      );
    }
    const copy = [...axisPool];
    shuffleInPlace(copy);
    picked.push(...copy.slice(0, QUESTIONS_PER_AXIS));
  }
  shuffleInPlace(picked);
  return picked;
}

export const TYPES = {
  ESTJ: {
    name: "流程暴君",
    tagline: "把领导的需求翻译成甘特图，顺便把别人的锅钉在里程碑上。",
    tips: ["会议纪要是你的圣典", "没有排期就没有爱情", "甩锅请按流程编号取号"],
    hypertensionRoast:
      "一听「走个快速流程」你就太阳穴跳：你知道流程走完，锅和活都会精准落回你桌上。",
  },
  ESTP: {
    name: "会议刺客",
    tagline: "会开到一半已经把责任边界划到你老板名下。",
    tips: ["实时反应快过文档", "擅长当场翻盘", "记得会后补一封留痕邮件"],
    hypertensionRoast:
      "别人当面甩锅时你血压比 PPT 动画还快，忍一秒都对不起自己的工位。",
  },
  ESFJ: {
    name: "对齐教主",
    tagline: "最擅长说「我们对齐一下」，对齐完发现活还是你的。",
    tips: ["@全体成员比写代码快", "气氛组兼进度组", "对齐三次等于做了一次"],
    hypertensionRoast:
      "群公告一响你就心慌：对齐三次之后，待办还是你的名字，只是多了几个已读。",
  },
  ESFP: {
    name: "群聊表演家",
    tagline: "@全体成员比写文档快，存在感先于交付物。",
    tips: ["表情包也是交付物", "直播式汇报", "先把场子热起来再谈细节"],
    hypertensionRoast:
      "「@全体成员」一弹，你既想抢麦又想退群——热闹是你的，deadline 也是你的。",
  },
  ENTJ: {
    name: "战略画饼师",
    tagline: "用老板的词打败老板，最后加班的还是团队。",
    tips: ["PPT 即生产力", "向上管理满级", "记得给自己留氧气面罩"],
    hypertensionRoast:
      "老板一拍脑袋改战略，你表面微笑内心飙车：又一轮「顶层设计」要你来擦。",
  },
  ENTP: {
    name: "需求杠精",
    tagline: "「你刚才说的和邮件第三段矛盾」是他的开场白。",
    tips: ["逻辑是武器", "辩论比写码爽", "偶尔假装同意以换取和平"],
    hypertensionRoast:
      "听到「这逻辑不是很清楚吗」你会进入战斗形态——清楚的是你，不清楚的是谁你心里门儿清。",
  },
  ENFJ: {
    name: "团队政委",
    tagline: "先安抚情绪再推进度，情绪安抚完需求又加了两条。",
    tips: ["共情力 MAX", "背锅时常带着微笑", "记得说「不」"],
    hypertensionRoast:
      "「要有温度」和「今晚必须发」同时出现时，你的血压和良心一起报警。",
  },
  ENFP: {
    name: "灵感包工头",
    tagline: "想法很多，落地靠「要不我们先做个 MVP（指 PPT）」。",
    tips: ["脑洞即需求", "故事比数据动人", "找一个 J 型搭档救命"],
    hypertensionRoast:
      "灵感还没落地，流程先给你盖棺：你的脑洞在飞，工单在追，血压在升。",
  },
  ISTJ: {
    name: "留痕圣骑士",
    tagline: "没有会议纪要的事，等于没发生过。",
    tips: ["邮件抄送是护甲", "工单号即信仰", "口头承诺一律当风吹过"],
    hypertensionRoast:
      "口头「你看着办」五个字，够你失眠半宿：没纪要的事，最后全是你的事。",
  },
  ISTP: {
    name: "冷面工具人",
    tagline: "不说话，但日志和版本号会说话。",
    tips: ["能动手就不吵", "debug 比开会真实", "偶尔也要让人知道你在干活"],
    hypertensionRoast:
      "会开得越多你越想静音：嘴上对齐，线上没日志，等于让你用意念交付。",
  },
  ISFJ: {
    name: "背锅守护神",
    tagline: "「我来吧」说多了，流程上就默认是你。",
    tips: ["善良要带点刺", "学会甩回正式流程", "你的时间也是成本"],
    hypertensionRoast:
      "你一说「我来吧」，全公司都学会了：下次还是你来吧，反正你会接。",
  },
  ISFP: {
    name: "静音牛马",
    tagline: "收到，好的，然后默默把吐槽写进备忘录。",
    tips: ["表面风平浪静", "内心弹幕满屏", "找信任的人泄压"],
    hypertensionRoast:
      "表面「好的收到」，内心血压计爆表：你只是不说话，不是没感觉。",
  },
  INTJ: {
    name: "系统性摸鱼",
    tagline: "把摸鱼设计成可复用的工作流，还写了 SOP。",
    tips: ["效率是为了腾出呼吸权", "计划里永远有一块「思考人生」", "别被发现了"],
    hypertensionRoast:
      "无效流程越多，你越想用 SOP 摸鱼——不是懒，是被迫节能，节能到肝火旺。",
  },
  INTP: {
    name: "架构空想家",
    tagline: "能论证为什么不该做，但论证完 deadline 还在。",
    tips: ["分析即快乐", "实现随缘", "设个闹钟拉回人间"],
    hypertensionRoast:
      "论证了一百条「不该做」，老板只听「那先做个简单版」——简单版三个字是你的降压药失效开关。",
  },
  INFJ: {
    name: "读心受害者",
    tagline: "早三天就听懂领导真实意图，但选择装听不懂。",
    tips: ["读空气费电", "适当装傻是自我保护", "真相有时不必说出口"],
    hypertensionRoast:
      "你早听懂了潜台词，还要装听不懂——装傻保平安，但血压不答应。",
  },
  INFP: {
    name: "理想主义离职预备役",
    tagline: "内心辞职一百次，对外仍回复「好的收到」。",
    tips: ["灵魂在远方", "身体在工位", "简历可以悄悄打开"],
    hypertensionRoast:
      "理想在远方，KPI 在头顶：每次「好的收到」背后，都是一次微型心梗演习。",
  },
};
