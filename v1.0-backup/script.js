/* ============================================
   AI赋能各行各业 — 交互脚本
   ============================================ */

// ===== 案例数据 (inline from GDPVal analysis) =====
const CASE_DATA = [
  {
    filter: "finance", icon: "🏦", industry: "金融与保险", color: "#6366f1",
    cases: [
      { scene: "投资分析报告自动生成", pain: "分析师需花2-3天手动搜集S&P500全部500家公司的PE数据、按子行业分组、计算均值，再建表出报告", solution: "AI自动抓取实时金融数据，批量计算LTM/NTM PE倍数，按GICS行业分类自动生成完整Excel分析报告", metrics: [{ icon: "⏱", value: "12x", label: "效率提升" }, { icon: "💰", value: "¥36万", label: "年省/人" }, { icon: "📉", value: "95%", label: "错误率降低" }], quote: "以前全量覆盖分析只有年底做一次，现在客户随时要都能给" },
      { scene: "客户退休咨询方案定制", pain: "客服代表需30-60分钟查阅TSP政策文档、组织语言、撰写个性化咨询邮件", solution: "AI自动匹配客户画像与相关政策，生成专业个性化咨询邮件，覆盖投资基金选择、转换策略等", metrics: [{ icon: "⏱", value: "12x", label: "响应提速" }, { icon: "💰", value: "¥20万", label: "年省/人" }, { icon: "😊", value: "40%", label: "满意度提升" }] },
      { scene: "出行平台增长策略方案", pain: "战略负责人需数周进行市场调研、竞品分析、制定本地化增长方案PPT", solution: "AI辅助完成市场数据搜集、竞品分析、监管政策梳理，快速生成可执行的战略方案", metrics: [{ icon: "⏱", value: "7x", label: "效率提升" }, { icon: "💰", value: "¥40万", label: "年省/人" }, { icon: "📊", value: "70%", label: "覆盖度提升" }] }
    ]
  },
  {
    filter: "healthcare", icon: "🏥", industry: "医疗与社会服务", color: "#dc2626",
    cases: [
      { scene: "临床处方指南编写", pain: "医疗总监需2-4周完成激素治疗处方指南，涉及大量循证医学文献检索和同行评审", solution: "AI检索最新临床证据和权威指南，生成符合虚拟诊疗平台的标准化处方指南文档", metrics: [{ icon: "⏱", value: "7x", label: "编写提速" }, { icon: "💰", value: "¥50万", label: "年省/团队" }, { icon: "🔒", value: "88%", label: "合规提升" }], quote: "指南更新从季度频率变成月度，患者永远用最新的方案" },
      { scene: "住院医师绩效追踪分析", pain: "教学秘书需手动整理5年手术关键指标数据到Excel，分析各年级完成趋势", solution: "AI自动整合住院医师手术记录，生成含趋势分析的绩效追踪Excel报表", metrics: [{ icon: "⏱", value: "12x", label: "数据处理" }, { icon: "💰", value: "¥15万", label: "年省/人" }, { icon: "📉", value: "95%", label: "误差降低" }] },
      { scene: "护理交接标准化模板", pain: "护士长需设计SBAR交接模板，确保急诊科转科时不遗漏过敏、检查等关键信息", solution: "AI基于SBAR框架自动生成标准化交接模板，含必填字段验证", metrics: [{ icon: "⏱", value: "15x", label: "制作提速" }, { icon: "🛡️", value: "95%", label: "遗漏率降低" }, { icon: "⚠️", value: "百万+", label: "避免事故赔偿" }] }
    ]
  },
  {
    filter: "manufacturing", icon: "🏭", industry: "制造业", color: "#ea580c",
    cases: [
      { scene: "供应商评估与比价矩阵", pain: "采购经理需1-2天/供应商完成技术评分、成本对比、产能评估的综合报告", solution: "AI自动整合供应商报价、资质、产能数据，生成多维度对比矩阵和推荐报告", metrics: [{ icon: "⏱", value: "6x", label: "评估提速" }, { icon: "💰", value: "3-8%", label: "采购降本" }, { icon: "📉", value: "90%", label: "误差降低" }], quote: "AI把我们从'数据搬运工'解放出来，终于有时间做真正的谈判策略" },
      { scene: "产能追赶排程计划", pain: "生产主管需1-2天手工计算产能缺口、排班方案、加班计划来追赶延迟2周的工期", solution: "AI自动分析产能数据、计算追赶路径、生成含加班方案和里程碑的排程计划", metrics: [{ icon: "⏱", value: "10x", label: "排程提速" }, { icon: "💰", value: "10-50万", label: "减少停工损失" }, { icon: "📊", value: "92%", label: "计划准确率" }] },
      { scene: "运费比价与预测分析", pain: "物流经理需1天查三家运营商各尺寸运费，建立5年趋势预测表", solution: "AI自动抓取费率，分析历史涨价趋势，生成含预测的决策Excel", metrics: [{ icon: "⏱", value: "12x", label: "分析提速" }, { icon: "💰", value: "5-15%", label: "物流降本" }, { icon: "📉", value: "95%", label: "数据准确率" }] }
    ]
  },
  {
    filter: "tech", icon: "💻", industry: "专业科技技术服务", color: "#0891b2",
    cases: [
      { scene: "审计抽样与方差分析", pain: "审计师需1-2天完成抽样量计算、随机抽样、Q2/Q3方差分析并撰写报告", solution: "AI自动计算统计抽样量、执行随机抽样、生成方差分析Excel报告", metrics: [{ icon: "⏱", value: "8x", label: "审计提速" }, { icon: "💰", value: "¥30万", label: "年省/审计师" }, { icon: "📉", value: "95%", label: "计算误差降低" }] },
      { scene: "月度财务报表包编制", pain: "高级会计需2-3天把18个源文件合并更新为月度财务包Excel，含交叉验证", solution: "AI自动读取所有源文件，更新各工作表，验证余额勾稽，生成完整月度财务包", metrics: [{ icon: "⏱", value: "6x", label: "编制提速" }, { icon: "💰", value: "¥40万", label: "年省/团队" }, { icon: "📉", value: "93%", label: "错误率降低" }] },
      { scene: "遗嘱等法律文书起草", pain: "律师需2-4小时从零起草符合德州法律的正式遗嘱，含14项具体条款", solution: "AI根据客户信息和当地法律，自动生成合规遗嘱初稿PDF，含所有标准条款", metrics: [{ icon: "⏱", value: "7x", label: "起草提速" }, { icon: "💰", value: "30%", label: "计费时间增长" }, { icon: "🔒", value: "85%", label: "条款合规提升" }] }
    ]
  },
  {
    filter: "information", icon: "📺", industry: "信息与传媒", color: "#7c3aed",
    cases: [
      { scene: "纪录片脚本撰写", pain: "编剧需1-2天完成2-8分钟纪录片脚本，含时间码、画面描述、旁白", solution: "AI根据主题和受众自动生成含时间码、视觉描述、旁白的完整脚本", metrics: [{ icon: "⏱", value: "8x", label: "创作提速" }, { icon: "💰", value: "¥20万", label: "年省/编剧" }, { icon: "🎬", value: "4-5x", label: "产出倍增" }] },
      { scene: "B2B视频制片排期", pain: "制片人需半天制作8周详细制片排期日历，协调前期准备、拍摄、后期各阶段", solution: "AI根据截止日期和资源约束，自动生成含里程碑的制片日历PDF", metrics: [{ icon: "⏱", value: "8x", label: "排期提速" }, { icon: "💰", value: "¥15万", label: "年省/团队" }, { icon: "📊", value: "85%", label: "排期准确率" }] },
      { scene: "选举新闻稿件撰写", pain: "记者需2-4小时查阅选举信息、核实日期、撰写300-500字中立报道", solution: "AI自动搜集官方选举信息，确保中立语气，生成含关键日期的新闻稿", metrics: [{ icon: "⏱", value: "9x", label: "写稿提速" }, { icon: "💰", value: "¥18万", label: "年省/记者" }, { icon: "📉", value: "80%", label: "事实错误降低" }] }
    ]
  },
  {
    filter: "government", icon: "🏛️", industry: "政府与公共事务", color: "#059669",
    cases: [
      { scene: "政策法规文件起草", pain: "执法部门无人机使用规程编写需法务1-2周反复修改，涉及大量法条引用", solution: "AI基于现行法律法规库，自动生成标准化政策文件初稿，含条款引用和格式规范", metrics: [{ icon: "⏱", value: "7x", label: "起草提速" }, { icon: "💰", value: "¥30万", label: "年省/团队" }, { icon: "🔒", value: "85%", label: "合规引用准确" }] },
      { scene: "联邦拨款风险评估", pain: "专员每份申请需人工填写风险评估表，逐项核对合规要求，半天至一天/份", solution: "AI自动解析申请材料，匹配合规标准，生成标准化风险评估报告", metrics: [{ icon: "⏱", value: "15x", label: "评估提速" }, { icon: "💰", value: "¥50万", label: "年省/团队" }, { icon: "📉", value: "92%", label: "遗漏率降低" }] }
    ]
  },
  {
    filter: "realestate", icon: "🏠", industry: "房地产与租赁", color: "#ca8a04",
    cases: [
      { scene: "多场景租金方案报价", pain: "物业经理需2-3小时做3/5/10年三套租金阶梯方案Excel，含公式联动", solution: "AI根据面积、基租和增长率，自动生成含公式联动的多场景租金报价Excel", metrics: [{ icon: "⏱", value: "10x", label: "报价提速" }, { icon: "💰", value: "30%", label: "成交率提升" }, { icon: "📉", value: "95%", label: "计算准确率" }], quote: "客户还没离开我的办公室，三套方案就发到他邮箱了" },
      { scene: "租户招商策略手册", pain: "商业经纪需1-2天制作含市场分析、目标租户画像的招商手册PDF", solution: "AI分析商圈数据，自动生成带图文的专业招商手册", metrics: [{ icon: "⏱", value: "6x", label: "制作提速" }, { icon: "💰", value: "¥20万", label: "年省/团队" }, { icon: "📊", value: "80%", label: "专业度提升" }] }
    ]
  },
  {
    filter: "wholesale", icon: "📦", industry: "批发贸易", color: "#16a34a",
    cases: [
      { scene: "品牌销售绩效分析", pain: "助理买手需半天从周销售数据制作透视表+品牌汇总表，含WTD/MTD/YTD", solution: "AI自动读取销售数据，创建透视表，按品牌/时段生成多维度分析Excel", metrics: [{ icon: "⏱", value: "15x", label: "分析提速" }, { icon: "💰", value: "¥15万", label: "年省/人" }, { icon: "📉", value: "95%", label: "数据准确率" }] },
      { scene: "贸易展潜客名单调研", pain: "销售代表需1-2天在线调研目标行业厂商信息，整理到Excel", solution: "AI自动搜索目标企业，提取公司名称、联系方式、产品线等信息到Excel", metrics: [{ icon: "⏱", value: "10x", label: "调研提速" }, { icon: "💰", value: "¥20万", label: "年省/团队" }, { icon: "📊", value: "75%", label: "覆盖率提升" }] }
    ]
  },
  {
    filter: "retail", icon: "🛒", industry: "零售业", color: "#e11d48",
    cases: [
      { scene: "奢侈品销售外展设计", pain: "资深销售需1天为度假系列设计4-6页搭配推荐PDF（含服装+配饰+标价）", solution: "AI根据品牌产品信息，自动生成含搭配推荐、产品详情和定价的专业PDF", metrics: [{ icon: "⏱", value: "12x", label: "设计提速" }, { icon: "💰", value: "20%", label: "转化率提升" }, { icon: "🎨", value: "4-5x", label: "产出倍增" }] },
      { scene: "销售异议处理培训文档", pain: "店长需2-3天编写含7类异议处理的完整培训Word文档", solution: "AI基于销售最佳实践，生成含异议分类、话术模板、角色扮演场景的培训文档", metrics: [{ icon: "⏱", value: "8x", label: "编写提速" }, { icon: "💰", value: "30-50万", label: "连锁100店年省" }, { icon: "📊", value: "75%", label: "培训效果提升" }] }
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

        industries.forEach(industry => {
            industry.cases.forEach((c, idx) => {
                const card = document.createElement('article');
                card.className = 'case-card';
                card.dataset.category = industry.filter;
                card.style.setProperty('--card-color', industry.color);
                card.querySelector?.('::before')?.style?.setProperty('background', industry.color);

                const metricsHTML = c.metrics.map(m =>
                    `<div class="metric-pill">
                        <span class="metric-icon">${m.icon}</span>
                        <div class="metric-text">
                            <span class="metric-value">${m.value}</span>
                            <span class="metric-label">${m.label}</span>
                        </div>
                    </div>`
                ).join('');

                const quoteHTML = c.quote
                    ? `<div class="case-quote">"${c.quote}"</div>`
                    : '';

                card.innerHTML = `
                    <div class="case-card-header">
                        <span class="case-card-icon">${industry.icon}</span>
                        <div class="case-card-header-text">
                            <span class="case-tag">${industry.industry}</span>
                            <h3>${c.scene}</h3>
                        </div>
                    </div>
                    <div class="case-card-body">
                        <div class="case-pain-solution">
                            <div class="pain-block">
                                <div class="block-label">😰 痛点</div>
                                <p>${c.pain}</p>
                            </div>
                            <div class="solution-block">
                                <div class="block-label">🤖 AI赋能方案</div>
                                <p>${c.solution}</p>
                            </div>
                        </div>
                        <div class="case-metrics">${metricsHTML}</div>
                        ${quoteHTML}
                    </div>
                `;

                card.style.cssText += `border-left: 4px solid ${industry.color};`;

                // Animate in
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                caseList.appendChild(card);

                requestAnimationFrame(() => {
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, idx * 80);
                });
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
