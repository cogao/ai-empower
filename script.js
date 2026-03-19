/* ============================================
   AI赋能各行各业 v2.0 — 交互脚本
   系统级AI共创案例
   ============================================ */

// ===== 案例数据：系统级AI共创项目 =====
const CASE_DATA = [
  {
    filter: "manufacturing", icon: "🏭", industry: "制造业", color: "#ea580c",
    cases: [
      {
        title: "焊接质量预测系统",
        client: "某汽车零部件集团",
        tier: "行业AI系统",
        background: "该集团每年焊接件产量超2000万件，传统质检依赖人工目视和抽检，废品率长期在3.2%左右，每年报废材料成本超2400万元。",
        cocreation: "我们的团队驻场3个月，与工艺工程师一起分析了300+焊接参数。不是简单的图像识别，而是融合了设备传感器数据（电流/电压/送丝速度）、操作员行为数据（手法/速度/角度）和材料批次数据，训练出专属的多模态焊接质量预测模型。",
        system: "实时预测系统在焊接过程中即可预警质量偏差，操作员在焊缝完成前就能收到调整建议——从'事后检'变成'事前防'。",
        results: [
          { value: "0.4%", label: "废品率", detail: "从3.2%→0.4%" },
          { value: "¥800万", label: "年省材料成本", detail: "" },
          { value: "15秒", label: "预警响应时间", detail: "焊接中实时" }
        ],
        why_not_chatgpt: "通用AI只能'看照片判好坏'，我们的系统融合了20年工艺知识+实时传感器流数据，能在质量问题发生前预警。"
      },
      {
        title: "供应链智能决策中台",
        client: "某家电制造龙头",
        tier: "AI工作流重构",
        background: "3000+ SKU，200+供应商，采购和排产决策高度依赖个人经验。库存周转慢、断供风险高、采购成本难以优化。",
        cocreation: "与采购总监团队一起，将分散在ERP、MES、WMS中的数据打通，构建了融合需求预测、供应商画像、产能评估的多维决策引擎。不是AI写采购报告，而是AI驱动整个采购决策链条。",
        system: "系统实时生成采购建议、排产方案和风险预警，采购员从'凭经验拍脑袋'进化为'看数据做决策'。",
        results: [
          { value: "22%", label: "库存周转提升", detail: "" },
          { value: "¥1200万", label: "年采购降本", detail: "" },
          { value: "零断供", label: "连续18个月", detail: "" }
        ],
        why_not_chatgpt: "ChatGPT不能接入你的ERP和MES系统，也不理解你3000个SKU各自的供应商格局。"
      }
    ]
  },
  {
    filter: "finance", icon: "🏦", industry: "金融", color: "#6366f1",
    cases: [
      {
        title: "贷前审批全流程AI化",
        client: "某区域商业银行",
        tier: "AI工作流重构",
        background: "小微企业贷款审批平均耗时3天，依赖客户经理经验判断。不良率2.1%，每年坏账损失超5000万。同时人力审批成为业务规模瓶颈。",
        cocreation: "联合风控团队重构了整个贷前流程：从客户进件 → 多源数据采集(工商/税务/司法/征信) → AI风险画像 → 智能策略引擎 → 自动审批/人工复核分流。不是AI写审批报告，而是AI驱动整个审批决策。",
        system: "80%的标准件由AI自动审批，20%高风险件转人工专家。系统持续学习每笔贷款的后续表现，模型越用越准。",
        results: [
          { value: "15分钟", label: "审批时效", detail: "从3天→15分钟" },
          { value: "40%", label: "不良率下降", detail: "2.1%→1.26%" },
          { value: "¥2000万", label: "年减少坏账", detail: "" }
        ],
        why_not_chatgpt: "大模型不能对接你银行的核心系统和征信数据，也无法承担金融级别的决策准确性要求。"
      },
      {
        title: "智能合规监控引擎",
        client: "某证券公司",
        tier: "行业AI系统",
        background: "合规团队每天需审查数万笔交易记录，筛查可疑操作。5名合规官加班加点仍然漏检率超8%，监管罚款风险极高。",
        cocreation: "与合规负责人一起，将过去5年的处罚案例、行业监管规则和公司内部风控规则全部结构化，训练出合规专用AI模型。系统能理解交易模式的语义含义，而非简单的规则匹配。",
        system: "AI实时扫描全量交易，对可疑模式自动标记并生成分析报告。合规官的角色从'人工筛查'转变为'AI结果复核'。",
        results: [
          { value: "99.2%", label: "可疑交易检出率", detail: "从92%→99.2%" },
          { value: "5→2人", label: "合规团队精简", detail: "效率反升" },
          { value: "零罚款", label: "上线后12个月", detail: "" }
        ],
        why_not_chatgpt: "合规检测需要理解你公司5年的历史案例和数百条内部规则，通用AI做不到这种深度定制。"
      }
    ]
  },
  {
    filter: "healthcare", icon: "🏥", industry: "医疗", color: "#dc2626",
    cases: [
      {
        title: "多模态辅助诊断系统",
        client: "某三甲医院放射科",
        tier: "行业AI系统",
        background: "放射科日均阅片量800+，医生加班严重。肺结节的漏检率约12%，早期肺癌筛查敏感度不足。",
        cocreation: "并非简单接入通用医学AI，而是与放射科主任团队一起，基于该院10万+标注影像数据微调模型，并融合患者电子病历（既往病史/吸烟史/家族史）构建多模态诊断引擎。模型能力超越单纯的影像识别。",
        system: "AI作为'第二双眼睛'，在医生阅片前预先标注可疑区域并给出风险评级。不替代医生决策，而是确保没有遗漏。",
        results: [
          { value: "1.2%", label: "漏检率", detail: "从12%→1.2%" },
          { value: "3倍", label: "阅片效率", detail: "" },
          { value: "23例", label: "半年发现早期肺癌", detail: "此前可能漏检" }
        ],
        why_not_chatgpt: "大模型看不了CT影像，更无法结合患者病史做多维度辅助诊断。这是专业级医疗AI。"
      },
      {
        title: "临床知识决策支持平台",
        client: "某互联网医疗平台",
        tier: "AI能力内化",
        background: "平台有200+签约医生，诊疗水平参差不齐。需要标准化诊疗流程，但又不能用死板的规则限制医生的临床判断。",
        cocreation: "与首席医疗官团队用6个月，从最新临床指南、平台自有病例数据和专家共识出发，共建了覆盖50+常见病种的AI辅助决策知识库。医生团队全程参与标注和验证。",
        system: "系统在医生问诊过程中实时推送循证建议，不强制执行，而是'你可以不采纳，但你看到了最佳实践'。",
        results: [
          { value: "34%", label: "不合理处方下降", detail: "" },
          { value: "92%", label: "医生主动采纳率", detail: "" },
          { value: "自主运营", label: "团队已能独立更新知识库", detail: "" }
        ],
        why_not_chatgpt: "50个病种的决策树需要融合最新指南+平台真实病例+专家共识，这是ChatGPT无法替代的。"
      }
    ]
  },
  {
    filter: "legal", icon: "⚖️", industry: "法律", color: "#8b5cf6",
    cases: [
      {
        title: "法律文书智能审核系统",
        client: "某TOP30律所",
        tier: "行业AI系统",
        background: "律所年均处理合同审查5000+份，初级律师审查一份复杂合同需4-6小时。条款遗漏和合规风险是主要隐患。",
        cocreation: "与合伙人和资深律师一起，将该所10年积累的3万+合同案例和2000+风险条款全部结构化。训练出专属的合同风险识别模型，能发现通用AI根本不理解的行业特有风险点。",
        system: "AI在15分钟内完成合同全文扫描，标注78种风险类型，并参照该所的历史处理方案给出建议修改。律师从'逐字读'变成'重点审'。",
        results: [
          { value: "15分钟", label: "合同初审", detail: "从4-6小时" },
          { value: "30%", label: "人均计费时间增长", detail: "" },
          { value: "零遗漏", label: "重大风险条款", detail: "上线以来" }
        ],
        why_not_chatgpt: "ChatGPT不懂你律所10年处理过的3万份合同里积累的行业特定风险模式。"
      }
    ]
  },
  {
    filter: "retail", icon: "🛒", industry: "零售", color: "#e11d48",
    cases: [
      {
        title: "全渠道智能选品与定价引擎",
        client: "某连锁零售集团（800+门店）",
        tier: "AI工作流重构",
        background: "800+门店分布在不同城市层级，统一选品和统一定价导致大量滞销。每年因选品失误报损超3000万元。",
        cocreation: "与品类总监团队一起，打通了POS数据、天气数据、竞品价格数据、社区人口画像数据，构建了门店级别的个性化选品和动态定价引擎。每家门店的货架都是'AI为它量身定制的'。",
        system: "系统每周自动为每家门店生成选品建议和定价方案。品类经理从'一刀切拍板'转变为'审核AI方案+例外干预'。",
        results: [
          { value: "45%", label: "滞销品报损降低", detail: "" },
          { value: "¥1800万", label: "年增毛利", detail: "" },
          { value: "8.2%", label: "同店销售增长", detail: "" }
        ],
        why_not_chatgpt: "需要实时对接800家门店POS数据和区域竞品价格，并理解每个社区的消费特征。这不是大模型的能力范围。"
      }
    ]
  },
  {
    filter: "realestate", icon: "🏠", industry: "地产", color: "#ca8a04",
    cases: [
      {
        title: "商业地产智慧运营大脑",
        client: "某商业地产集团（12个购物中心）",
        tier: "行业AI系统",
        background: "12个购物中心年租金收入超40亿，但租户组合优化和租约谈判高度依赖个人经验。空置率和掉铺率持续困扰管理层。",
        cocreation: "融合了客流热力图数据、销售坪效数据、租户经营数据和周边竞品动态，构建了租户健康度预测和最优组合推荐模型。招商团队第一次有了数据支撑的决策依据。",
        system: "系统能提前3个月预警掉铺风险，并推荐替代租户候选名单和报价区间。招商从'被动补位'变成'主动布局'。",
        results: [
          { value: "2.1%", label: "空置率", detail: "从5.8%→2.1%" },
          { value: "¥6200万", label: "年增租金收入", detail: "" },
          { value: "3个月", label: "掉铺预警提前期", detail: "" }
        ],
        why_not_chatgpt: "需要融合客流传感器、POS系统和CRM数据做实时分析，这是定制系统工程，不是对话AI。"
      }
    ]
  },
  {
    filter: "media", icon: "📺", industry: "传媒", color: "#7c3aed",
    cases: [
      {
        title: "内容智能生产与分发平台",
        client: "某省级融媒体集团",
        tier: "AI工作流重构",
        background: "记者年产稿件量增长压力大，但编辑力量不足。多平台分发（微信/抖音/网站/App）需要人工改写适配，效率低下。",
        cocreation: "与总编辑团队共创，不是简单的'AI写稿'，而是构建了从线索发现 → 素材聚合 → 初稿生成 → 智能改写（适配不同平台调性） → 多平台一键分发的全流程系统。同时训练了符合该集团风格指南的定制化模型。",
        system: "记者聚焦深度调查和现场报道，AI负责快讯、数据新闻和多平台适配。每篇稿件自动生成5个平台的不同版本。",
        results: [
          { value: "3倍", label: "内容产出", detail: "同等编辑团队" },
          { value: "8分钟", label: "突发新闻首发", detail: "从45分钟" },
          { value: "67%", label: "全网阅读量增长", detail: "" }
        ],
        why_not_chatgpt: "大模型写的稿子没有你集团的风格、没有你的新闻伦理标准、更不能对接你的CMS系统一键分发。"
      }
    ]
  },
  {
    filter: "government", icon: "🏛️", industry: "政务", color: "#059669",
    cases: [
      {
        title: "政务服务智能审批平台",
        client: "某地级市行政审批局",
        tier: "AI工作流重构",
        background: "80+高频审批事项，市民平均需跑2-3次窗口，材料退补率35%。窗口工作人员压力大，群众满意度低。",
        cocreation: "与审批科室逐个梳理80+事项的全流程，将1200+种审批规则和材料要求全部结构化。构建了智能预审+材料辅助+自动审批分流系统，而非简单的'AI客服问答'。",
        system: "市民在手机端提交申请时，AI实时指引材料准备并预审。60%的标准事项实现'AI秒批'，工作人员聚焦复杂件处理。",
        results: [
          { value: "60%", label: "事项'秒批'", detail: "" },
          { value: "5%", label: "材料退补率", detail: "从35%下降" },
          { value: "96分", label: "群众满意度", detail: "从78分" }
        ],
        why_not_chatgpt: "1200条审批规则的严格执行容不得大模型'差不多'的回答。这需要确定性的AI决策引擎。"
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {

    // ===== Render Case Cards =====
    const caseList = document.getElementById('caseList');
    if (caseList) {
        renderCases('all');
    }

    function renderCases(filter) {
        caseList.innerHTML = '';
        const industries = filter === 'all' ? CASE_DATA : CASE_DATA.filter(d => d.filter === filter);
        let cardIdx = 0;

        industries.forEach(industry => {
            industry.cases.forEach(c => {
                const card = document.createElement('article');
                card.className = 'case-card';
                card.dataset.category = industry.filter;

                const resultsHTML = c.results.map(r =>
                    `<div class="result-block">
                        <span class="result-value">${r.value}</span>
                        <span class="result-label">${r.label}</span>
                        ${r.detail ? `<span class="result-detail">${r.detail}</span>` : ''}
                    </div>`
                ).join('');

                card.innerHTML = `
                    <div class="case-card-top" style="border-color: ${industry.color}">
                        <div class="case-card-header">
                            <span class="case-card-icon">${industry.icon}</span>
                            <div class="case-card-header-text">
                                <div class="case-header-meta">
                                    <span class="case-tag" style="background: ${industry.color}20; color: ${industry.color}">${industry.industry}</span>
                                    <span class="tier-label">${c.tier}</span>
                                </div>
                                <h3>${c.title}</h3>
                                <span class="case-client">${c.client}</span>
                            </div>
                        </div>
                    </div>
                    <div class="case-card-body">
                        <div class="case-section">
                            <div class="section-label">📌 背景</div>
                            <p>${c.background}</p>
                        </div>
                        <div class="case-section highlight">
                            <div class="section-label">🤝 共创过程</div>
                            <p>${c.cocreation}</p>
                        </div>
                        <div class="case-section">
                            <div class="section-label">⚙️ 构建的系统</div>
                            <p>${c.system}</p>
                        </div>
                        <div class="case-results-grid">${resultsHTML}</div>
                        <div class="why-not-box">
                            <div class="why-not-label">💡 为什么ChatGPT做不到？</div>
                            <p>${c.why_not_chatgpt}</p>
                        </div>
                    </div>
                `;

                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                caseList.appendChild(card);

                requestAnimationFrame(() => {
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, cardIdx * 100);
                });
                cardIdx++;
            });
        });
    }

    // ===== 导航栏滚动效果 =====
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navbar.classList.toggle('nav-open');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('nav-open');
        });
    });

    // ===== Hero 粒子背景 =====
    const canvas = document.getElementById('heroCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
                ctx.fill();
            }
        }

        function initParticles() {
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
            particles = Array.from({ length: count }, () => new Particle());
        }

        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            drawConnections();
            requestAnimationFrame(animate);
        }

        resizeCanvas();
        initParticles();
        animate();
        window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
    }

    // ===== 数字滚动动画 =====
    function animateCounters() {
        document.querySelectorAll('.stat-number[data-target]').forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const duration = 2000;
            const startTime = performance.now();
            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.round(target * eased);
                if (progress < 1) requestAnimationFrame(updateCounter);
            }
            requestAnimationFrame(updateCounter);
        });
    }

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        let statsAnimated = false;
        const statsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    statsAnimated = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }

    // ===== AOS 滚动动画 =====
    const aosElements = document.querySelectorAll('[data-aos]');
    const aosObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.aosDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, parseInt(delay));
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    aosElements.forEach(el => aosObserver.observe(el));

    // ===== 案例筛选 =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCases(btn.dataset.filter);
        });
    });

    // ===== 视频弹窗 =====
    const videoModal = document.getElementById('videoModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = videoModal ? videoModal.querySelector('.modal-overlay') : null;

    function closeModal() {
        if (videoModal) {
            videoModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // ===== 表单处理 =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span>提交成功！我们会尽快联系您 ✓</span>';
            btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.disabled = false;
                contactForm.reset();
            }, 3000);
        });
    }

    // ===== 平滑滚动 =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = navbar.offsetHeight;
                const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

});
