/* ============================================
   AI赋能各行各业 v2.0 — 交互脚本
   系统级AI共创案例
   ============================================ */

// ===== 案例数据：老板视角 - 按行业痛点组织 =====
const CASE_DATA = [
  {
    filter: "manufacturing", icon: "🏭", industry: "制造业", color: "#ea580c",
    cases: [
      {
        title: "中后台脑力自动化",
        client: "某汽车零部件企业 · 500人",
        tier: "降本 + 提效",
        background: "订单、采购、仓储、计划、交付信息分散在各个系统，表格特别多。跟单、PMC、采购助理、文员每天忙得很碎，老板看不到异常，经验全靠老师傅。",
        cocreation: "先从报表、跟单、采购、品质文书入手，用通用大模型帮文员做初稿。再把成熟流程做成自动日报Agent——每天早上8点，老板手机上就能看到昨天的异常订单、延期风险和采购比价。",
        system: "采购邮件初稿、周报月报整理、供应商比价摘要、品质异常说明——这些占文员60%时间的活，现在AI做初稿，人做审核。",
        results: [
          { value: "2个", label: "文员岗位节省", detail: "年省30万+" },
          { value: "80%", label: "报表整理时间减少", detail: "" },
          { value: "当天", label: "异常问题暴露", detail: "原来要等周报" }
        ],
        why_not_chatgpt: "不是用ChatGPT写东西，而是AI接入了ERP和仓储系统，自动拉数据、发现异常、生成报告。"
      }
    ]
  },
  {
    filter: "ecommerce", icon: "🛒", industry: "电商", color: "#e11d48",
    cases: [
      {
        title: "内容产能+客服效率翻倍",
        client: "某电商品牌 · 年销2亿",
        tier: "降本 + 增收",
        background: "商品多、文案多、客服量大。活动频繁内容生产来不及，客服成本高，店铺运营高度依赖几个熟手，数据天天有但没人真正看透。",
        cocreation: "第一步：用AI做商品标题、卖点、详情页文案、广告素材、差评回复草稿——内容产能直接翻3倍。第二步：客服接入AI辅助，标准问题自动回复，复杂问题AI给建议人工发送。",
        system: "AI自动根据商品库生成内容，自动分类工单和客服分流，自动分析差评原因、退货原因、转化问题，每天输出店铺经营日报。",
        results: [
          { value: "4→8人效", label: "客服团队", detail: "4个人干原来8个人的活" },
          { value: "3倍", label: "内容产出", detail: "同样的运营团队" },
          { value: "15%", label: "转化率提升", detail: "标准话术+快速响应" }
        ],
        why_not_chatgpt: "不是让运营自己用ChatGPT写文案，而是AI直接对接商品库和客服系统，自动化整个流程。"
      }
    ]
  },
  {
    filter: "retail", icon: "🏪", industry: "零售连锁", color: "#f59e0b",
    cases: [
      {
        title: "标准化和能力复制",
        client: "某连锁品牌 · 60+门店",
        tier: "能力复制 + 组织升级",
        background: "门店多、人员流动大、培训成本高、服务质量不稳定。店长和督导的经验难复制，总部和门店信息传递慢。最怕的就是销冠离职。",
        cocreation: "先把销冠的话术、跟进方式、客户分析方法沉淀成AI知识库。再做门店运营问答助手——新员工遇到不懂的，问AI就行，不用等老员工带。最后做连锁日报Agent，自动汇总各门店异常。",
        system: "门店问答知识库、培训材料自动生成、服务话术标准化、各门店日报自动汇总、巡店问题自动总结。",
        results: [
          { value: "50%", label: "新人培训时间缩短", detail: "" },
          { value: "标准化", label: "60家门店服务一致", detail: "不再依赖个人" },
          { value: "实时", label: "总部看到门店异常", detail: "不用等汇报" }
        ],
        why_not_chatgpt: "知识库里装的是你公司独有的销售经验、产品知识和SOP，不是互联网通用信息。"
      }
    ]
  },
  {
    filter: "finance", icon: "🏦", industry: "金融", color: "#6366f1",
    cases: [
      {
        title: "审批提速+风险控制",
        client: "某商业银行 · 区域TOP5",
        tier: "提效 + 控错",
        background: "小微贷款审批平均3天，靠客户经理经验判断，不良率2.1%。审批慢导致客户流失，人工判断导致风险不一致。",
        cocreation: "重构整个审批流程：客户进件→AI自动采集工商/税务/征信数据→生成风险画像→标准件自动审批，复杂件转专家。不是AI写报告，是AI直接做决策。",
        system: "80%标准件15分钟自动审批，20%复杂件人工复核。系统越用越准，不良率持续下降。",
        results: [
          { value: "15分钟", label: "审批时效", detail: "从3天→15分钟" },
          { value: "40%", label: "不良率下降", detail: "" },
          { value: "3倍", label: "贷款规模增长", detail: "AI解锁了小微市场" }
        ],
        why_not_chatgpt: "需要对接银行核心系统和征信数据，做金融级别的确定性决策——大模型做不到。"
      }
    ]
  },
  {
    filter: "professional", icon: "⚖️", industry: "法务/财务", color: "#8b5cf6",
    cases: [
      {
        title: "专业团队的前处理自动化",
        client: "某律所 · TOP30",
        tier: "提效 + 控错",
        background: "大量时间耗在检索、比对、整理、初稿上。初级人员产出不稳定，专业团队贵但很多时间没用在最值钱的地方。合同审查一份要4-6小时。",
        cocreation: "把律所10年的3万份合同和2000条风险条款全部结构化。训练出合同风险识别模型——不是通用的条款检查，而是懂你们行业特有风险点的AI。",
        system: "AI 15分钟完成合同全文扫描，标注78类风险，给出修改建议和历史判例参考。律师从逐字读变成重点审。",
        results: [
          { value: "15分钟", label: "合同初审", detail: "从4-6小时" },
          { value: "30%", label: "计费时间增长", detail: "年增收数百万" },
          { value: "零遗漏", label: "重大风险条款", detail: "" }
        ],
        why_not_chatgpt: "AI学的是你律所3万份合同积累的行业特定风险模式，ChatGPT不懂。"
      }
    ]
  },
  {
    filter: "education", icon: "📚", industry: "教培", color: "#059669",
    cases: [
      {
        title: "内容生产+标准辅导",
        client: "某K12教育机构 · 50+校区",
        tier: "降本 + 能力复制",
        background: "题库、讲义、课件量大，老师忙于准备标准化内容。招生答疑耗人，优秀教师经验难复制。",
        cocreation: "先用AI做题目生成、解析生成、讲义初稿、招生答疑——老师时间从备课转到教学互动。再做学员问答助手，根据课程资料自动生成练习和复习材料。",
        system: "智能题库助手、学员问答助手、教务流程助手、自动输出学员学习反馈摘要。",
        results: [
          { value: "3倍", label: "内容生产速度", detail: "" },
          { value: "60%", label: "教辅成本下降", detail: "" },
          { value: "标准化", label: "答疑质量", detail: "不再依赖个别名师" }
        ],
        why_not_chatgpt: "题库和讲义基于你课程体系生成，问答基于你的教材，不是通用搜索。"
      }
    ]
  },
  {
    filter: "hr", icon: "👥", industry: "人力资源", color: "#0891b2",
    cases: [
      {
        title: "筛选和标准沟通自动化",
        client: "某招聘密集型企业 · 年招500+",
        tier: "提效 + 降本",
        background: "简历多筛选慢，招聘专员时间浪费在重复沟通。培训文档和制度问答低效，面试记录分散。",
        cocreation: "先用AI做JD生成、简历摘要、邀约话术、培训材料初稿。再做简历自动初筛Agent——根据岗位要求自动打分、排序、生成候选人摘要。",
        system: "自动初筛简历、自动推进邀约流程、员工政策问答机器人、培训材料自动分发。",
        results: [
          { value: "70%", label: "简历筛选时间减少", detail: "" },
          { value: "2倍", label: "招聘速度提升", detail: "" },
          { value: "标准化", label: "新人培训", detail: "制度问答AI即时回复" }
        ],
        why_not_chatgpt: "简历筛选基于你公司的岗位模型和历史录用数据训练，政策问答基于你公司的制度文件。"
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

    // ===== 悬浮CTA可见性 =====
    const floatingCta = document.getElementById('floatingCta');
    if (floatingCta) {
        window.addEventListener('scroll', () => {
            floatingCta.classList.toggle('visible', window.scrollY > 600);
        });
    }

    // ===== 表单处理 =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span>✓ 预约成功！24小时内联系您</span>';
            btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.disabled = false;
                contactForm.reset();
            }, 4000);
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
