// ============================================================
//  变态指数测试 | HENTAI INDEX TEST - Core Logic
// ============================================================

// ===== QUESTIONS DATA =====
const QUESTIONS = [
    {
        id: 1,
        category: "情景模拟",
        text: "深夜一个人在家，你打开了一个从未见过的神秘网站，发现里面的内容超出你的认知。你会？",
        options: [
            { text: "立刻关掉，然后假装什么都没发生", scores: { S: 1, D: 0, F: 0, O: 1, E: 0 } },
            { text: "好奇地点进去看了看，心跳加速但舍不得关", scores: { S: 2, D: 0, F: 1, O: 2, E: 1 } },
            { text: "不但仔细浏览，还贴心地收藏了几个分类", scores: { S: 3, D: 1, F: 2, O: 3, E: 2 } },
            { text: "看完之后觉得不够劲，自己动手搞了个更刺激的", scores: { S: 4, D: 3, F: 3, O: 4, E: 4 } }
        ]
    },
    {
        id: 2,
        category: "灵魂拷问",
        text: "在一段亲密关系中，你更倾向于哪种角色？",
        options: [
            { text: "温柔的守护者——我负责呵护对方", scores: { S: 1, D: 1, F: 0, O: 0, E: 1 } },
            { text: "主导者——我喜欢掌控节奏", scores: { S: 2, D: 4, F: 1, O: 1, E: 2 } },
            { text: "服从者——被带领的感觉让我安心", scores: { S: 2, D: 0, F: 1, O: 2, E: 1 } },
            { text: "百变怪——今天S明天M，看心情切换", scores: { S: 3, D: 3, F: 3, O: 4, E: 3 } }
        ]
    },
    {
        id: 3,
        category: "脑洞测试",
        text: "如果可以拥有一项超能力用于「私人用途」，你选什么？",
        options: [
            { text: "读心术——知道对方到底在想什么", scores: { S: 1, D: 2, F: 2, O: 1, E: 0 } },
            { text: "隐身术——不被发现的自由有无限可能", scores: { S: 3, D: 1, F: 3, O: 3, E: 2 } },
            { text: "时间暂停——把某个美好瞬间无限延长", scores: { S: 3, D: 3, F: 4, O: 2, E: 3 } },
            { text: "变形术——想变成什么就变成什么", scores: { S: 4, D: 2, F: 4, O: 4, E: 2 } }
        ]
    },
    {
        id: 4,
        category: "情景模拟",
        text: "朋友突然发你一个「不可描述」的表情包，你的反应是？",
        options: [
            { text: "假装没看到，转移话题", scores: { S: 0, D: 0, F: 0, O: 0, E: 0 } },
            { text: "回一个更狠的，这方面我从不认输", scores: { S: 3, D: 2, F: 1, O: 3, E: 3 } },
            { text: "保存下来并追问：这还有更多吗？", scores: { S: 3, D: 1, F: 1, O: 3, E: 2 } },
            { text: "觉得不够有创意，当晚自己P了一套更骚的", scores: { S: 4, D: 3, F: 3, O: 4, E: 4 } }
        ]
    },
    {
        id: 5,
        category: "深度挖掘",
        text: "你的浏览器历史记录如果被公开，最可能的后果是？",
        options: [
            { text: "平平无奇，顶多有几个购物网站", scores: { S: 0, D: 0, F: 0, O: 0, E: 0 } },
            { text: "会有点尴尬，但还在人类可接受范围内", scores: { S: 2, D: 1, F: 1, O: 1, E: 1 } },
            { text: "社会性死亡，从此改名换姓搬家", scores: { S: 3, D: 2, F: 3, O: 3, E: 3 } },
            { text: "警察可能会对我产生一些误会", scores: { S: 4, D: 3, F: 4, O: 4, E: 4 } }
        ]
    },
    {
        id: 6,
        category: "灵魂拷问",
        text: "夜深人静时，你脑内的「深夜剧场」通常在放什么？",
        options: [
            { text: "浪漫的爱情故事，鲜花与月光", scores: { S: 1, D: 0, F: 2, O: 0, E: 0 } },
            { text: "有点刺激但不过分，限制级电影程度", scores: { S: 2, D: 1, F: 3, O: 2, E: 1 } },
            { text: "连编剧看了都要问我要创意的大尺度剧本", scores: { S: 3, D: 2, F: 4, O: 3, E: 2 } },
            { text: "我脑子里的东西如果拍出来，全球没有一个平台敢播", scores: { S: 4, D: 3, F: 4, O: 4, E: 3 } }
        ]
    },
    {
        id: 7,
        category: "情景模拟",
        text: "酒店里发现一面落地镜正对着床，你的第一反应是？",
        options: [
            { text: "检查一下是不是双面镜，保护隐私", scores: { S: 0, D: 0, F: 0, O: 1, E: 0 } },
            { text: "嗯，这个角度不错......用来自拍", scores: { S: 1, D: 1, F: 1, O: 1, E: 1 } },
            { text: "心领神会地笑了笑，这设计者懂我", scores: { S: 3, D: 2, F: 2, O: 3, E: 2 } },
            { text: "立刻打开手机搜「镜面play指南」", scores: { S: 4, D: 3, F: 3, O: 4, E: 4 } }
        ]
    },
    {
        id: 8,
        category: "深度挖掘",
        text: "以下哪个物品你觉得最有「多功能开发潜力」？",
        options: [
            { text: "丝巾——系头发、做装饰", scores: { S: 0, D: 0, F: 0, O: 0, E: 0 } },
            { text: "丝巾——蒙眼、束缚，你懂的", scores: { S: 3, D: 3, F: 2, O: 2, E: 2 } },
            { text: "冰块——夏天的冰饮料里需要它", scores: { S: 0, D: 0, F: 0, O: 0, E: 0 } },
            { text: "冰块——配合体温差使用，效果加倍", scores: { S: 4, D: 2, F: 3, O: 4, E: 3 } }
        ]
    },
    {
        id: 9,
        category: "脑洞测试",
        text: "如果要给你的「欲望」定一个等级，你觉得你在哪一档？",
        options: [
            { text: "青铜——有需要但克制力很强", scores: { S: 1, D: 1, F: 1, O: 1, E: 0 } },
            { text: "黄金——偶尔放纵，整体可控", scores: { S: 2, D: 2, F: 2, O: 2, E: 1 } },
            { text: "钻石——脑子里24小时都有小火苗在烧", scores: { S: 3, D: 3, F: 3, O: 3, E: 3 } },
            { text: "王者——我就是欲望本身", scores: { S: 4, D: 4, F: 4, O: 4, E: 4 } }
        ]
    },
    {
        id: 10,
        category: "灵魂拷问",
        text: "如果有一家「成人主题乐园」开业，你最想体验哪个项目？",
        options: [
            { text: "浪漫烛光晚餐+情侣按摩，温馨就好", scores: { S: 1, D: 0, F: 1, O: 1, E: 1 } },
            { text: "角色扮演体验馆——换套衣服换个人生", scores: { S: 3, D: 2, F: 3, O: 3, E: 2 } },
            { text: "「失控」密室逃脱——规则由你定义", scores: { S: 3, D: 4, F: 3, O: 3, E: 3 } },
            { text: "VIP全通票——每个项目我都要体验一遍", scores: { S: 4, D: 3, F: 4, O: 4, E: 4 } }
        ]
    },
    {
        id: 11,
        category: "情景模拟",
        text: "在一个完全匿名、没人认识你的地方，你最想做什么？",
        options: [
            { text: "跟平时一样，做人嘛贵在表里如一", scores: { S: 0, D: 0, F: 0, O: 0, E: 0 } },
            { text: "穿平时不敢穿的衣服，展现隐藏的自己", scores: { S: 2, D: 1, F: 2, O: 2, E: 2 } },
            { text: "尝试所有曾经幻想过但不敢做的事", scores: { S: 3, D: 2, F: 3, O: 3, E: 4 } },
            { text: "建立一个属于自己的「地下王国」", scores: { S: 4, D: 4, F: 4, O: 4, E: 4 } }
        ]
    },
    {
        id: 12,
        category: "终极之问",
        text: "最后一问：如果100分代表「变态满分」，你觉得自己能得多少分？",
        options: [
            { text: "20分以下——我很正常谢谢", scores: { S: 0, D: 0, F: 0, O: 0, E: 0 } },
            { text: "40~60分——有点小癖好但谁没有呢", scores: { S: 2, D: 1, F: 2, O: 2, E: 1 } },
            { text: "60~80分——承认吧，我确实有点变态", scores: { S: 3, D: 3, F: 3, O: 3, E: 3 } },
            { text: "直接拉满——这个测试都不一定能测出我的深度", scores: { S: 4, D: 4, F: 4, O: 4, E: 4 } }
        ]
    }
];

// ===== PERSONA DEFINITIONS =====
const PERSONAS = [
    {
        minScore: 0, maxScore: 12,
        name: "圣人", en: "THE SAINT", icon: "😇",
        desc: "恭喜你，你是人群中最纯洁的那个存在。你的灵魂干净得像刚出厂的白纸。你要么是真的纯，要么就是演技已经登峰造极。不过说真的，你确定你没有偷偷开无痕模式？<span class='highlight'>世界需要你这样的清流。</span>",
        gradient: "linear-gradient(135deg, #a8edea, #fed6e3)"
    },
    {
        minScore: 13, maxScore: 22,
        name: "偷窥者", en: "THE PEEPER", icon: "👀",
        desc: "嘴上说「我不是那种人」，但眼睛比谁都诚实。你拥有强大的好奇心和自控力的完美平衡——看到擦边内容会多看两眼，但绝不承认。<span class='highlight'>你是那种看到「前方高能」会加速往下滑的人。</span>朋友发你开车的笑话，你表面嫌弃，其实偷偷收藏了。",
        gradient: "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
    },
    {
        minScore: 23, maxScore: 32,
        name: "收藏家", en: "THE COLLECTOR", icon: "📦",
        desc: "你的手机里可能有一个加密相册，你的浏览器收藏夹比图书馆分类还细致。你不是变态，你只是对「人体美学」有着学术级别的热情。<span class='highlight'>你的硬盘如果会说话，大概会叫你爸爸。</span>建议定期清理缓存，以防社会性死亡。",
        gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
    },
    {
        minScore: 33, maxScore: 42,
        name: "导演", en: "THE DIRECTOR", icon: "🎬",
        desc: "你的脑内剧场全年无休24小时营业，题材之丰富让Netflix都自愧不如。你不仅有想法，还特别会「构思画面」。<span class='highlight'>如果幻想能变现，你已经是亿万富翁了。</span>你最大的问题不是变态，而是创意太多根本用不完。",
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    {
        minScore: 43, maxScore: 55,
        name: "百科全书", en: "THE ENCYCLOPEDIA", icon: "📚",
        desc: "你对各种「知识领域」的了解程度令人叹为观止。别人不知道的你知道，别人不敢搜的你早就研究透了。<span class='highlight'>你是朋友圈里的「两性知识顾问」，大家有问题第一个想到你。</span>你的存在证明了：知识就是力量，尤其是某些特定领域的知识。",
        gradient: "linear-gradient(135deg, #ff9a9e, #fecfef)"
    },
    {
        minScore: 56, maxScore: 68,
        name: "教授", en: "THE PROFESSOR", icon: "🎓",
        desc: "理论与实践并重，知行合一的学术型选手。你不仅研究广泛，更难得的是执行力惊人。<span class='highlight'>在这个领域，你已经从爱好者进化成了专家。</span>你能把任何平平无奇的日常物品开发出全新用途，创造力和行动力都在线。建议你写本书，匿名出版的那种。",
        gradient: "linear-gradient(135deg, #f5576c, #ff9a9e)"
    },
    {
        minScore: 69, maxScore: 80,
        name: "魔王", en: "THE OVERLORD", icon: "👹",
        desc: "你已经超越了普通变态的范畴，进入了「艺术家」级别。你的脑回路之清奇，想象力之奔放，让人不得不佩服。<span class='highlight'>在你面前，AV导演都得叫声前辈。</span>你不是在变态的路上，你就是那条路本身。注意保重身体，世界还需要你的才华。",
        gradient: "linear-gradient(135deg, #c471f5, #fa71cd)"
    },
    {
        minScore: 81, maxScore: 100,
        name: "造物主", en: "THE CREATOR", icon: "🌋",
        desc: "满分附近的存在，你已经不能用「变态」来形容了——你是变态的标准制定者。别人在模仿，你在创造。<span class='highlight'>你不是变态，变态都在模仿你。</span>你的脑子里住着一个完整的平行宇宙，里面的内容要是泄露出来，互联网需要新建一个分级制度。致敬传奇。",
        gradient: "linear-gradient(135deg, #f12711, #f5af19)"
    }
];

const DIMENSION_META = {
    S: { name: "癖好广度", color: "#ff2d55" },
    D: { name: "支配欲", color: "#bf5af2" },
    F: { name: "幻想力", color: "#5e5ce6" },
    O: { name: "开放度", color: "#ff9f0a" },
    E: { name: "执行力", color: "#30d158" }
};

const LOADING_TIPS = [
    "扫描脑内剧场中...",
    "评估癖好广度...",
    "检测支配欲倾向...",
    "量化幻想力等级...",
    "分析开放度指数...",
    "计算执行力得分...",
    "对比全球变态数据库...",
    "生成你的变态档案..."
];

// ===== STATE =====
let currentQuestion = 0;
let dimScores = { S: 0, D: 0, F: 0, O: 0, E: 0 };

// ===== NAVIGATION =====
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ===== QUIZ FLOW =====
function startQuiz() {
    currentQuestion = 0;
    dimScores = { S: 0, D: 0, F: 0, O: 0, E: 0 };
    showScreen('screen-quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = QUESTIONS[currentQuestion];
    const total = QUESTIONS.length;

    document.getElementById('progress-fill').style.width = `${((currentQuestion) / total) * 100}%`;
    document.getElementById('q-current').textContent = currentQuestion + 1;
    document.getElementById('q-total').textContent = total;
    document.getElementById('q-category').textContent = q.category;
    document.getElementById('q-text').textContent = q.text;
    document.getElementById('q-dimension').textContent = '';

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const labels = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="opt-label">${labels[i]}</span><span>${opt.text}</span>`;
        btn.addEventListener('click', () => selectOption(i));
        container.appendChild(btn);
    });

    // Re-trigger animation
    const card = document.getElementById('question-card');
    card.style.animation = 'none';
    card.offsetHeight; // force reflow
    card.style.animation = 'slideIn 0.4s ease';
}

function selectOption(index) {
    const q = QUESTIONS[currentQuestion];
    const scores = q.options[index].scores;

    // Accumulate scores
    for (const dim in scores) {
        dimScores[dim] += scores[dim];
    }

    // Visual feedback
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.classList.remove('selected'));
    btns[index].classList.add('selected');

    // Next question after short delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < QUESTIONS.length) {
            renderQuestion();
        } else {
            showLoading();
        }
    }, 300);
}

// ===== LOADING =====
function showLoading() {
    showScreen('screen-loading');
    let tipIndex = 0;
    const tipEl = document.getElementById('loading-tips');

    const interval = setInterval(() => {
        tipIndex++;
        if (tipIndex < LOADING_TIPS.length) {
            tipEl.style.opacity = 0;
            setTimeout(() => {
                tipEl.textContent = LOADING_TIPS[tipIndex];
                tipEl.style.opacity = 1;
            }, 200);
        }
    }, 400);

    setTimeout(() => {
        clearInterval(interval);
        showResult();
    }, 3500);
}

// ===== RESULT CALCULATION =====
function calculateResult() {
    // Max possible per dimension: 4 points × 12 questions = 48 (but not all questions contribute equally)
    // Normalize each dimension to 0-100
    const maxPossible = { S: 0, D: 0, F: 0, O: 0, E: 0 };
    QUESTIONS.forEach(q => {
        for (const dim of Object.keys(maxPossible)) {
            let maxForQ = 0;
            q.options.forEach(opt => {
                if (opt.scores[dim] > maxForQ) maxForQ = opt.scores[dim];
            });
            maxPossible[dim] += maxForQ;
        }
    });

    const normalized = {};
    for (const dim of Object.keys(dimScores)) {
        normalized[dim] = Math.round((dimScores[dim] / maxPossible[dim]) * 100);
    }

    // Total score: weighted average
    const weights = { S: 0.20, D: 0.18, F: 0.22, O: 0.22, E: 0.18 };
    let totalScore = 0;
    for (const dim of Object.keys(normalized)) {
        totalScore += normalized[dim] * weights[dim];
    }
    totalScore = Math.round(totalScore);

    // Find persona
    let persona = PERSONAS[0];
    for (const p of PERSONAS) {
        if (totalScore >= p.minScore && totalScore <= p.maxScore) {
            persona = p;
            break;
        }
    }

    // Rarity (fake but fun)
    const rarity = totalScore <= 20 ? "全球前 82.3% 的纯洁选手" :
                   totalScore <= 40 ? "超越了 54.7% 的测试者" :
                   totalScore <= 60 ? "超越了 73.2% 的测试者" :
                   totalScore <= 80 ? "全球前 8.6% 的高阶玩家" :
                   "全球前 2.1% 的传奇级存在";

    return { normalized, totalScore, persona, rarity };
}

// ===== RENDER RESULT =====
function showResult() {
    const { normalized, totalScore, persona, rarity } = calculateResult();

    document.getElementById('r-icon').textContent = persona.icon;
    document.getElementById('r-name').textContent = persona.name;
    document.getElementById('r-en').textContent = persona.en;
    document.getElementById('r-desc').innerHTML = persona.desc;
    document.getElementById('r-rarity').textContent = `🏆 ${rarity}`;

    // Animate score count-up
    showScreen('screen-result');
    animateScore(totalScore);

    // Render dimension bars
    renderDimensionBars(normalized);

    // Render radar chart
    setTimeout(() => renderRadar(normalized), 300);
}

function animateScore(target) {
    const el = document.getElementById('r-score');
    let current = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(target / (duration / 30)));
    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        el.textContent = current;
    }, 30);
}

function renderDimensionBars(normalized) {
    const container = document.getElementById('dim-bars');
    container.innerHTML = '';

    for (const dim of Object.keys(DIMENSION_META)) {
        const meta = DIMENSION_META[dim];
        const val = normalized[dim];
        const bar = document.createElement('div');
        bar.className = 'dim-bar';
        bar.innerHTML = `
            <span class="dim-name">${meta.name}</span>
            <div class="dim-track">
                <div class="dim-fill" style="width: 0%; background: ${meta.color};"></div>
            </div>
            <span class="dim-val" style="color: ${meta.color}">${val}</span>
        `;
        container.appendChild(bar);

        // Animate fill
        setTimeout(() => {
            bar.querySelector('.dim-fill').style.width = `${val}%`;
        }, 100);
    }
}

// ===== RADAR CHART (Canvas) =====
function renderRadar(normalized) {
    const canvas = document.getElementById('radar-canvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) / 2 - 40;

    ctx.clearRect(0, 0, W, H);

    const dims = Object.keys(DIMENSION_META);
    const n = dims.length;
    const angleStep = (Math.PI * 2) / n;
    const startAngle = -Math.PI / 2;

    // Draw grid
    for (let level = 1; level <= 4; level++) {
        const r = (R / 4) * level;
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
            const angle = startAngle + i * angleStep;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Draw axes
    for (let i = 0; i < n; i++) {
        const angle = startAngle + i * angleStep;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(angle), cy + R * Math.sin(angle));
        ctx.strokeStyle = 'rgba(255,255,255,0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Draw data polygon
    ctx.beginPath();
    const points = [];
    for (let i = 0; i < n; i++) {
        const dim = dims[i];
        const val = normalized[dim] / 100;
        const angle = startAngle + i * angleStep;
        const x = cx + R * val * Math.cos(angle);
        const y = cy + R * val * Math.sin(angle);
        points.push({ x, y });
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Fill
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    gradient.addColorStop(0, 'rgba(255, 45, 85, 0.35)');
    gradient.addColorStop(1, 'rgba(191, 90, 242, 0.15)');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Stroke
    ctx.strokeStyle = 'rgba(255, 45, 85, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw dots
    points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ff2d55';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
    });

    // Labels
    ctx.font = '500 22px "Noto Sans SC", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < n; i++) {
        const dim = dims[i];
        const meta = DIMENSION_META[dim];
        const angle = startAngle + i * angleStep;
        const lx = cx + (R + 28) * Math.cos(angle);
        const ly = cy + (R + 28) * Math.sin(angle);
        ctx.fillStyle = meta.color;
        ctx.fillText(meta.name, lx, ly);
    }
}

// ===== SHARE =====
function shareResult() {
    const target = document.getElementById('result-header');
    if (typeof html2canvas !== 'undefined') {
        html2canvas(target, {
            backgroundColor: '#0a0a0f',
            scale: 2,
            useCORS: true,
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = '我的变态指数.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            showToast('海报已生成，快去分享吧！');
        }).catch(() => {
            showToast('长按截图分享给好友吧！');
        });
    } else {
        showToast('长按截图分享给好友吧！');
    }
}

function restart() {
    showScreen('screen-cover');
    // Bump fake counter
    const el = document.getElementById('fake-count');
    const base = parseInt(el.textContent.replace(/,/g, ''));
    el.textContent = (base + Math.floor(Math.random() * 50) + 10).toLocaleString();
}

// ===== TOAST =====
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== INIT =====
// Randomize fake count on load
document.addEventListener('DOMContentLoaded', () => {
    const base = 800000 + Math.floor(Math.random() * 200000);
    document.getElementById('fake-count').textContent = base.toLocaleString();
});
