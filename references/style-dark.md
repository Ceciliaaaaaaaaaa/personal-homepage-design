# 风格指南：暗黑科技风

*灵感来源于 Apple 开发者生态、Vercel、Linear 和 Raycast —— 一种高级、高科技的美学，传达工程掌控力与前瞻设计感。*

---

## 设计哲学

这种风格传达深度、精准与自信。像 Apple WWDC 主题演讲的幻灯片，或 Linear 的界面 —— 深色表面配以精准的字体排版和克制而有目的性的色彩。这里的暗黑不是哥特式的，而是专注的。每一个元素都有存在的理由。

访客应该感受到：*这个人清楚地知道自己在做什么。*

---

## 色彩系统

```css
:root {
  /* 背景层次 */
  --bg-base:        #0a0a0a;   /* 近黑色页面底色 */
  --bg-surface:     #111111;   /* 卡片/区块背景 */
  --bg-elevated:    #1a1a1a;   /* 悬停态、浮层卡片 */
  --bg-border:      #242424;   /* 细边框 */

  /* 文字 */
  --text-primary:   #f5f5f7;   /* Apple 标志性暖白 */
  --text-secondary: #86868b;   /* Apple 灰 —— 标签、说明文字 */
  --text-tertiary:  #48484a;   /* 极低调 —— 分隔线、占位符 */

  /* 强调色 —— 根据职位选一种 */
  --accent-blue:    #2997ff;   /* 开发者/工程师（Apple 蓝） */
  --accent-purple:  #bf5af2;   /* ML/AI/数据科学 */
  --accent-green:   #30d158;   /* DevOps/开源 */
  --accent-orange:  #ff9f0a;   /* 创意技术师 */

  /* 将选定的颜色赋值给 --accent */
  --accent:         var(--accent-blue);
  --accent-dim:     rgba(41, 151, 255, 0.12);

  /* 渐变 */
  --gradient-hero:  linear-gradient(135deg, #0a0a0a 0%, #111827 100%);
  --gradient-glow:  radial-gradient(ellipse at top, rgba(41,151,255,0.08) 0%, transparent 60%);
}
```

**强调色选择指引：**
- 软件工程师/前端/全栈 → `--accent-blue`
- 机器学习/数据/研究 → `--accent-purple`
- DevOps/基础设施/开源 → `--accent-green`
- 创意技术师/硬件/创客 → `--accent-orange`

---

## 字体排版

```css
/* 从 Google Fonts 引入 */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* 字号比例 */
  --text-xs:   0.75rem;    /* 12px — 标签 */
  --text-sm:   0.875rem;   /* 14px — 说明 */
  --text-base: 1rem;       /* 16px — 正文 */
  --text-lg:   1.125rem;   /* 18px — 导语 */
  --text-xl:   1.25rem;    /* 20px — 小标题 */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  1.875rem;   /* 30px */
  --text-4xl:  2.25rem;    /* 36px */
  --text-5xl:  3rem;       /* 48px */
  --text-6xl:  3.75rem;    /* 60px */
  --text-7xl:  4.5rem;     /* 72px — Hero 姓名 */
}
```

**使用规则：**
- Hero 姓名：`font-size: clamp(3rem, 8vw, 5rem)`，`font-weight: 800`，`letter-spacing: -0.04em`
- 区块标题：`font-size: var(--text-3xl)`，`font-weight: 700`，`letter-spacing: -0.02em`
- 正文：`font-size: var(--text-base)`，`font-weight: 400`，`line-height: 1.7`
- 技术标签等等宽体场景：`font-family: 'SF Mono', 'Fira Code', monospace`

---

## 表面与层次感

卡片和容器在暗色背景上使用微妙的玻璃质感：

```css
.card {
  background: var(--bg-surface);
  border: 1px solid var(--bg-border);
  border-radius: 16px;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.card:hover {
  background: var(--bg-elevated);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* 精选卡片的微光效果 */
.card-featured {
  box-shadow: 0 0 0 1px var(--accent-dim), 0 20px 60px rgba(0, 0, 0, 0.5);
}
```

---

## Hero 区样式

```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--gradient-hero);
  position: relative;
  overflow: hidden;
  padding: 120px 24px;
}

/* Hero 内容后方的环境光晕 */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-glow);
  pointer-events: none;
}

.hero-name {
  font-size: clamp(3rem, 9vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.0;
  color: var(--text-primary);
  /* 名字上的微妙渐变效果 */
  background: linear-gradient(135deg, #f5f5f7 0%, #86868b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: var(--text-xl);
  font-weight: 400;
  color: var(--text-secondary);
  margin-top: 16px;
  letter-spacing: 0.01em;
}

.hero-tagline {
  font-size: var(--text-lg);
  color: var(--text-tertiary);
  margin-top: 8px;
}
```

---

## 按钮样式

```css
/* 主 CTA */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--accent);
  color: #000;
  font-weight: 600;
  font-size: var(--text-sm);
  padding: 12px 24px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}
.btn-primary:hover { opacity: 0.85; transform: translateY(-1px); }

/* 次要/幽灵按钮 */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: var(--text-primary);
  font-weight: 500;
  font-size: var(--text-sm);
  padding: 12px 24px;
  border-radius: 100px;
  border: 1px solid var(--bg-border);
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
}
.btn-secondary:hover {
  border-color: rgba(255,255,255,0.2);
  background: var(--bg-elevated);
  transform: translateY(-1px);
}
```

---

## 技能标签

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: var(--text-xs);
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-weight: 500;
  background: var(--accent-dim);
  color: var(--accent);
  border: 1px solid rgba(41, 151, 255, 0.2);
  letter-spacing: 0.03em;
  white-space: nowrap;
}
```

---

## 导航栏

```css
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 64px;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--bg-border);
}

.nav-logo {
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--text-primary); }
```

---

## 区块布局

```css
section {
  padding: 96px 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.section-label {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 48px;
}
```

---

## 页脚

```css
footer {
  padding: 48px 24px;
  text-align: center;
  border-top: 1px solid var(--bg-border);
  color: var(--text-tertiary);
  font-size: var(--text-sm);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
}

.social-links a {
  color: var(--text-secondary);
  transition: color 0.2s, transform 0.2s;
  display: flex;
}

.social-links a:hover {
  color: var(--text-primary);
  transform: translateY(-2px);
}
```

---

## 暗黑氛围营造

- 用极低透明度（2–3%）的**噪点纹理叠层**增加深度感
- Hero 背景加入透明度 3–4% 的**微网格或点阵图案**
- 强调色要用得克制 —— 一处 Hero 高亮、一个 CTA、一个链接悬停
- 项目卡片内的图片加 `border-radius: 12px`
- 整个页面应该像深夜存在的东西 —— 深邃、安静、精准
