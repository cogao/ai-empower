/* ============================================
   AI赋能各行各业 v2.0 — 交互脚本
   系统级AI共创案例
   ============================================ */

// ===== 案例数据：企业级AI数智化转型项目 =====
const CASE_DATA = [
  {
    filter: "manufacturing", icon: "🏭", industry: "智能制造", color: "#ea580c",
    cases: [
      {
        title: "工业AI质量预测中台",
        client: "某TOP10汽车零部件集团",
        tier: "Agent + 12 Skills  工业AI中台",
        background: "年产值50亿+的汽车零部件集团，8条焊接产线年产量超2000万件。传统质检依赖人工目视+抽检，废品率3.2%，年报废成本超2400万元。更严重的是——每一件不合格品流入主机厂都可能触发整批召回。",
        cocreation: "联合部署IoT传感器矩阵+边缘计算节点，采集300+焊接参数实时数据流。基于Transformer架构训练多模态时序预测模型，融合设备状态、操作员行为特征和材料批次知识图谱，构建了业内首个焊接质量预测Digital Twin。",
        system: "系统在焊接过程中毫秒级预判质量偏差，在缺陷形成前15秒发出预警——从'事后抽检'跃迁为'事前预防'，实现零缺陷制造的工业AI范式。",
        results: [
          { value: "0.4%", label: "废品率", detail: "从3.2%→0.4%↓降87%" },
          { value: "¥2400万", label: "年节省材料+召回", detail: "ROI达480%" },
          { value: "15秒", label: "缺陷预警提前量", detail: "毫秒级响应" }
        ],
        why_not_chatgpt: "工业级预测需要融合IoT传感器实时流数据、工艺知识图谱和Digital Twin仿真，这远超大模型的对话能力边界。"
      },
      {
        title: "供应链智能决策中台",
        client: "某家电行业TOP3企业",
        tier: "Multi-Agent  供应链Skill体系",
        background: "3000+ SKU，200+供应商，年采购额超60亿。供应链决策高度依赖个人经验，库存周转天数行业末位，年因断供导致的产线停机损失超5000万。",
        cocreation: "打通ERP/MES/WMS/SRM四大系统数据孤岛，构建供应链知识图谱。基于Graph Neural Network实现多级供应网络风险传导预测，结合强化学习优化动态采购策略，构建了覆盖'需求感知→智能采购→动态排产→风险预警'的端到端AI决策中台。",
        system: "系统每小时自动刷新3000+SKU的最优采购和排产方案，实现从'经验驱动'到'算法驱动'的供应链范式变革。",
        results: [
          { value: "¥1.2亿", label: "年采购降本+库存释放", detail: "" },
          { value: "零断供", label: "连续18个月", detail: "AI提前14天预警" },
          { value: "45%", label: "库存周转天数缩短", detail: "" }
        ],
        why_not_chatgpt: "需要实时打通4大企业系统的数据管线，运行图神经网络做供应风险传导分析——这是系统工程，不是对话。"
      }
    ]
  },
  {
    filter: "finance", icon: "🏦", industry: "金融科技", color: "#6366f1",
    cases: [
      {
        title: "智能信贷全流程决策引擎",
        client: "某区域TOP5商业银行",
        tier: "Agentic Workflow  信贷Agent Fleet",
        background: "资产规模2000亿+的区域商业银行，小微贷款审批平均耗时3天，不良率2.1%，年坏账损失超5000万。客户经理审批的主观性和不一致性严重制约业务增长。",
        cocreation: "与风控团队联合重构整个信贷价值链：客户进件→多源数据采集（工商/税务/司法/征信/供应链）→AI风险画像引擎→智能策略矩阵→自动审批/人工复核路由。部署联邦学习框架实现跨机构数据协作，在保护隐私前提下大幅提升模型判别力。",
        system: "80%标准件秒级自动审批，20%复杂件智能路由至专家。模型持续在线学习，AUC每月提升0.5%+，真正实现'越用越准'的AI数据飞轮。",
        results: [
          { value: "200x", label: "审批效率提升", detail: "3天→15分钟" },
          { value: "¥2000万", label: "年减少坏账损失", detail: "不良率↓40%" },
          { value: "3倍", label: "小微贷款规模", detail: "AI解锁增长空间" }
        ],
        why_not_chatgpt: "金融级决策引擎需要对接核心银行系统和征信数据，满足监管级别的可解释性要求——大模型做不到。"
      },
      {
        title: "实时智能合规监控引擎",
        client: "某头部证券公司",
        tier: "Agent + MCP  合规Skill引擎",
        background: "日均交易量超百万笔，5名合规官人工审查漏检率超8%。一旦被监管发现违规交易，单次罚款可达千万级别，更会触发牌照风险。",
        cocreation: "将5年×3000+处罚案例和200+条内部合规规则全部构建为合规知识图谱。基于图注意力网络(GAT)训练异常交易模式识别模型，融合时序分析和关联账户图谱分析，实现从'规则匹配'到'语义理解'的合规检测跃迁。",
        system: "AI实时全量扫描交易流，毫秒级标记可疑模式并自动生成合规分析报告。合规官从'大海捞针'升级为'精准复核'。",
        results: [
          { value: "99.2%", label: "异常检出率", detail: "从92%↑提升" },
          { value: "零罚款", label: "上线后连续12个月", detail: "保护千万级罚款风险" },
          { value: "60%", label: "合规团队效率提升", detail: "5→2人即可覆盖" }
        ],
        why_not_chatgpt: "合规AI需要理解5年历史案例的复杂模式，并对接实时交易流做毫秒级判别——这是专用AI架构。"
      }
    ]
  },
  {
    filter: "healthcare", icon: "🏥", industry: "智慧医疗", color: "#dc2626",
    cases: [
      {
        title: "多模态AI辅助诊断系统",
        client: "某省会城市TOP3三甲医院",
        tier: "Agent + 8 Skills  医疗AI中台",
        background: "日门诊量8000+、放射科日均阅片800+的大型三甲医院。肺结节漏检率约12%，早期肺癌筛查敏感度不足。医生超负荷工作，阅片质量与工作强度负相关。",
        cocreation: "基于该院10万+高质量标注影像数据，训练3D卷积注意力网络(3D Attention U-Net)肺结节检测模型。创新性地融合患者电子病历(既往病史/吸烟史/家族史)构建多模态辅助决策引擎——诊断能力超越纯影像AI的天花板。",
        system: "AI在医生阅片前完成预筛：标注可疑区域、计算恶性概率、关联患者风险因素。不替代医生，而是确保'没有一个可疑病灶被遗漏'。",
        results: [
          { value: "1.2%", label: "漏检率", detail: "从12%→1.2% ↓降90%" },
          { value: "23例", label: "半年发现早期肺癌", detail: "挽救23条生命" },
          { value: "3x", label: "阅片效率提升", detail: "医生回归深度诊疗" }
        ],
        why_not_chatgpt: "医疗AI需要3D卷积网络处理CT影像+融合电子病历做多模态推理——这是完全不同的技术栈。"
      },
      {
        title: "临床知识智能决策支持平台",
        client: "某头部互联网医疗平台",
        tier: "Skill Library  AI能力内化",
        background: "平台签约200+医生，覆盖50+病种的在线诊疗。诊疗规范性参差不齐，不合理处方率高，复诊率和用户NPS持续下滑。",
        cocreation: "联合首席医疗官团队用6个月，从最新临床指南(NICE/AHA/CPGS)、平台50万+真实病例和专家共识出发，构建覆盖50+病种的多层级循证决策知识引擎。200+医生全程参与标注、验证和反馈迭代。",
        system: "系统在问诊过程中实时推送循证建议，不强制执行，而是'你可以不采纳，但你看到了全球最佳实践'。医生团队（非技术团队）已能自主更新知识库。",
        results: [
          { value: "34%", label: "不合理处方下降", detail: "" },
          { value: "92%", label: "医生主动采纳率", detail: "" },
          { value: "自主运营", label: "团队独立更新知识库", detail: "真正的AI能力内化" }
        ],
        why_not_chatgpt: "50个病种×海量循证指南×平台真实病例的深度融合，需要行业级知识工程，而非通用问答。"
      }
    ]
  },
  {
    filter: "legal", icon: "⚖️", industry: "智慧法律", color: "#8b5cf6",
    cases: [
      {
        title: "合同AI风险智能审核引擎",
        client: "某国内TOP20律所",
        tier: "Agent + RAG  法律Skill引擎",
        background: "年审查合同5000+份的TOP律所，初级律师审查一份复杂合同需4-6小时。条款遗漏带来的法律风险巨大，单笔合同纠纷可能造成数千万损失。",
        cocreation: "将该所10年积累的3万+合同语料和2000+典型风险条款全部结构化，构建法律领域专属的向量语义空间。基于Legal-BERT架构微调合同风险识别模型，可检测78类风险模式。每一条风险识别都关联该所的历史处理方案和判例。",
        system: "AI在15分钟内完成合同全文深度扫描，自动标注风险条款并给出修改建议+历史判例参考。律师从'逐字逐行审阅'跃迁为'基于AI洞察的精准决策'。",
        results: [
          { value: "15分钟", label: "合同初审耗时", detail: "从4-6小时↓降95%" },
          { value: "30%+", label: "人均计费时间增长", detail: "年增收超千万" },
          { value: "零遗漏", label: "重大风险条款", detail: "上线至今100%覆盖" }
        ],
        why_not_chatgpt: "法律AI需要学习3万份合同的行业特定风险模式，并关联所内判例数据库——这是ChatGPT完全不具备的。"
      }
    ]
  },
  {
    filter: "retail", icon: "🛒", industry: "智慧零售", color: "#e11d48",
    cases: [
      {
        title: "千店千面AI选品与动态定价引擎",
        client: "某全国连锁零售集团（800+门店）",
        tier: "Multi-Agent  千店千面Skill矩阵",
        background: "800+门店遍布1-5线城市，统一选品和统一定价导致严重的供需失配——一线城市高端品滞销，下沉市场基础品缺货。年因选品失误报损超3000万。",
        cocreation: "构建门店级数字孪生模型：融合POS交易数据、客流热力图、3公里商圈人口画像、竞品门店定价、天气/节假日/本地事件等20+维度特征工程。基于Contextual Bandit强化学习框架，实现'千店千面'的个性化选品和实时动态定价。",
        system: "每家门店的货架组合都是AI根据该门店独特的消费DNA量身定制。系统每天自动调整品类结构和价格策略，GMV随数据积累持续增长。",
        results: [
          { value: "¥1.8亿", label: "年增毛利", detail: "跨越式增长" },
          { value: "45%", label: "滞销品报损降低", detail: "释放大量现金流" },
          { value: "8.2%", label: "同店销售增长", detail: "行业均值-2%时" }
        ],
        why_not_chatgpt: "800家门店的实时POS数据+区域竞品动态+强化学习实时优化——这是数据密集型系统工程。"
      }
    ]
  },
  {
    filter: "realestate", icon: "🏠", industry: "智慧地产", color: "#ca8a04",
    cases: [
      {
        title: "商业地产智慧运营大脑",
        client: "某TOP20商业地产集团",
        tier: "Agent + MCP  资管决策Skill",
        background: "管理12个购物中心，年租金收入超40亿。租户经营状况、客流动线和品类组合高度复杂，空置率5.8%远高于行业标杆。掉铺后平均空置期达3.5个月，每月损失数百万租金。",
        cocreation: "部署全域感知系统：客流热力图+WiFi探针+POS数据+租户财务数据+周边竞品情报。构建租户健康度预测模型和最优品类组合推荐引擎，实现从'被动补位'到'主动资产管理'的范式升级。",
        system: "系统提前3个月预警掉铺风险（准确率89%），并自动推荐替代租户候选名单、最优品类搭配和报价区间。招商决策从'凭感觉'变成'看数据'。",
        results: [
          { value: "2.1%", label: "空置率", detail: "从5.8%→2.1% ↓降64%" },
          { value: "¥6200万", label: "年增租金收入", detail: "" },
          { value: "3个月", label: "掉铺预警提前期", detail: "准确率89%" }
        ],
        why_not_chatgpt: "需要融合多源传感器和商业数据做资产级分析决策——这是商业智能系统工程，不是A对话。"
      }
    ]
  },
  {
    filter: "media", icon: "📺", industry: "智慧传媒", color: "#7c3aed",
    cases: [
      {
        title: "AI-Native内容智能生产与分发中台",
        client: "某省级融媒体集团",
        tier: "Agentic Workflow  内容Agent工厂",
        background: "年产稿件10万+的省级融媒体集团，多平台分发(微信/抖音/网站/App)需大量人工改写适配，内容到达率和传播效率远低于自媒体竞品。",
        cocreation: "基于该集团10年新闻语料微调域适应模型，训练出符合其风格指南和新闻伦理标准的定制化内容引擎。构建从'线索AI发现→多源素材智能聚合→初稿生成→跨平台自适应改写→一键多渠道分发→传播效果追踪'的全链路AI-Native内容工厂。",
        system: "记者聚焦深度调查和现场报道（最不可替代的部分），AI承担快讯、数据新闻和全平台适配，每篇稿件自动生成5个平台的差异化版本。",
        results: [
          { value: "3x", label: "内容产出量提升", detail: "同等编辑团队" },
          { value: "8分钟", label: "突发新闻首发速度", detail: "从45分钟↓降82%" },
          { value: "67%", label: "全网阅读量增长", detail: "超越头部自媒体" }
        ],
        why_not_chatgpt: "需要学习集团10年新闻风格、遵循行业伦理标准、并对接CMS系统实现全流程自动化——通用模型做不到。"
      }
    ]
  },
  {
    filter: "government", icon: "🏛️", industry: "智慧政务", color: "#059669",
    cases: [
      {
        title: "AI秒批政务审批引擎",
        client: "某地级市行政审批局",
        tier: "Agent + 确定性引擎  政务Skill体系",
        background: "80+高频审批事项，月均审批量5万+件，市民平均跑窗口2-3次，材料退补率35%。窗口排队投诉率高。",
        cocreation: "与审批科室逐一梳理80+事项的1200+审批规则和材料清单，全部知识工程化。构建基于确定性推理引擎（非概率性大模型）的智能预审+材料辅助+秒批路由系统——政务场景要求100%合规，不容许大模型的'概率性幻觉'。",
        system: "市民手机端提交申请时，AI实时指引材料准备并预审。60%标准事项实现'AI秒批、零人工干预'，全程可追溯可审计。",
        results: [
          { value: "60%", label: "事项实现'秒批'", detail: "零人工干预" },
          { value: "5%", label: "材料退补率", detail: "从35%→5% ↓降86%" },
          { value: "96分", label: "群众满意度评分", detail: "从78分→96分" }
        ],
        why_not_chatgpt: "政务审批容错率为零——1200条规则的严格执行需要确定性AI引擎，大模型的概率性回答不被允许。"
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
