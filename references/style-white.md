# 风格指南：清雅白底风

*灵感来源于 Apple 营销页面、Notion、Stripe 和编辑设计 —— 一种明亮、宽阔的美学，传达清晰、匠心与品味。*

---

## 设计哲学

留白是主角。每一个元素通过对比和目的性来证明自己的存在。像苹果的产品页或 Kinfolk 的编辑排版 —— 慷慨的边距、精炼的字体，色彩使用得像艺术家用颜料一样克制。这种风格在说：*我对品质有极度的在意。*

访客应该感受到：*这个人有无可挑剔的品味。*

---

## 色彩系统

```css
:root {
  /* 背景 */
  --bg-base:        #ffffff;   /* 纯白 */
  --bg-surface:     #f5f5f7;   /* Apple 标志性浅灰 */
  --bg-elevated:    #f0f0f2;   /* 悬停卡片 */
  --bg-border:      #d2d2d7;   /* Apple 风格边框 */

  /* 文字 */
  --text-primary:   #1d1d1f;   /* Apple 近黑 */
  --text-secondary: #6e6e73;   /* Apple 中灰 */
  --text-tertiary:  #aeaeb2;   /* 浅色标签 */

  /* 强调色 —— 选一种 */
  --accent-blue:    #0066cc;   /* 经典 Apple 蓝 */
  --accent-teal:    #0071a4;   /* 沉稳、专业 */
  --accent-rose:    #d63864;   /* 设计/时尚/编辑 */
  --accent-sage:    #3a6b4b;   /* 可持续/自然/健康 */
  --accent-indigo:  #3c3c8c;   /* 学术/研究/写作 */

  /* 将选定的颜色赋值给 --accent */
  --accent:         var(--accent-blue);
  --accent-light:   rgba(0, 102, 204, 0.08);

  /* 阴影 */
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:  0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  --shadow-lg:  0 20px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06);
}
```

**强调色选择指引：**
- 产品设计师/UX → `--accent-blue`
- 作家/记者/编辑 → `--accent-indigo`
- 创意总监/艺术总监 → `--accent-rose`
- 摄影师/导演 → `--accent-teal`
- 可持续/健康领域 → `--accent-sage`

---

## 字体排版

```css
/* Google Fonts 两种方案可选 */

/* 方案 A：现代编辑风（衬线展示字体 + 无衬线正文） */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

/* 方案 B：纯净几何感（全无衬线，更中性） */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

:root {
  /* 方案 A：衬线展示字体 + 无衬线正文（编辑感） */
  --font-display: 'DM Serif Display', Georgia, serif;
  --font-sans:    'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;

  /* 方案 B：全无衬线（更简洁、更中性）
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-sans:    'Plus Jakarta Sans', sans-serif; */

  /* 字号比例 */
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.25rem;
  --text-2xl:  1.5rem;
  --text-3xl:  1.875rem;
  --text-4xl:  2.25rem;
  --text-5xl:  3rem;
  --text-6xl:  3.75rem;
  --text-hero: clamp(3.5rem, 9vw, 6rem);
}
```

**使用规则：**
- Hero 姓名：`font-family: var(--font-display)`，`font-weight: 400`（衬线字体正常字重更美），`letter-spacing: -0.03em`
- 区块标题：`font-family: var(--font-display)`，`font-size: var(--text-4xl)`，`font-weight: 400`
- 正文：`font-family: var(--font-sans)`，`font-weight: 400`，`line-height: 1.75`
- 标签/说明文字：`font-weight: 500`，`letter-spacing: 0.08em`，`text-transform: uppercase`

---

## 表面与阴影

卡片使用纯白背景配 Apple 风格阴影：

```css
.card {
  background: #ffffff;
  border: 1px solid var(--bg-border);
  border-radius: 20px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  overflow: hidden;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

/* 灰色背景区块 */
.surface {
  background: var(--bg-surface);
  border-radius: 24px;
  padding: 48px;
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
  align-items: flex-start;  /* 左对齐，编辑感 */
  padding: 120px 48px;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}

/* 可选：左侧装饰短横线 */
.hero::before {
  content: '';
  position: absolute;
  top: 120px; left: 48px;
  width: 40px; height: 2px;
  background: var(--accent);
}

.hero-eyebrow {
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 24px;
}

.hero-name {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 1.0;
  color: var(--text-primary);
  margin-bottom: 24px;
}

/* 可选：名字中斜体部分 */
.hero-name em {
  font-style: italic;
  color: var(--text-secondary);
}

.hero-subtitle {
  font-size: var(--text-xl);
  font-weight: 300;
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.5;
  margin-bottom: 48px;
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
  background: var(--text-primary);
  color: #ffffff;
  font-weight: 500;
  font-size: var(--text-sm);
  padding: 14px 28px;
  border-radius: 100px;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  letter-spacing: 0.01em;
}
.btn-primary:hover { background: #3a3a3c; transform: translateY(-1px); }

/* 强调色 CTA */
.btn-accent { background: var(--accent); color: #ffffff; }
.btn-accent:hover { background: #004499; }

/* 幽灵按钮 */
.btn-ghost {
  background: transparent;
  color: var(--text-primary);
  border: 1.5px solid var(--bg-border);
}
.btn-ghost:hover { border-color: var(--text-secondary); transform: translateY(-1px); }
```

---

## 技能标签

```css
.tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: var(--bg-surface);
  color: var(--text-secondary);
  border: 1px solid var(--bg-border);
  transition: background 0.2s, color 0.2s;
}

.tag:hover {
  background: var(--accent-light);
  color: var(--accent);
  border-color: rgba(0, 102, 204, 0.2);
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
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.nav-logo {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 400;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 36px;
  list-style: none;
}

.nav-links a {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--text-primary); }
```

---

## 区块布局

```css
section { padding: 112px 48px; }

.section-inner {
  max-width: 1100px;
  margin: 0 auto;
}

/* 交替区块背景 */
section:nth-child(even) { background: var(--bg-surface); }

.section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
}

/* 标签前的装饰横线 */
.section-label::before {
  content: '';
  display: block;
  width: 24px; height: 1.5px;
  background: var(--accent);
  flex-shrink: 0;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 64px;
  max-width: 700px;
}
```

---

## 项目卡片

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.project-card {
  background: #fff;
  border: 1px solid var(--bg-border);
  border-radius: 20px;
  padding: 36px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.3s, transform 0.3s;
}

.project-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.project-type {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.project-title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  color: var(--text-primary);
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.project-description {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.6;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 24px;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
}
```

---

## 页脚

```css
footer {
  padding: 64px 48px;
  background: var(--text-primary);
  color: rgba(255,255,255,0.5);
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.footer-name {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  color: #ffffff;
  letter-spacing: -0.02em;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  color: rgba(255,255,255,0.5);
  transition: color 0.2s, transform 0.2s;
}

.social-links a:hover {
  color: #ffffff;
  transform: translateY(-2px);
}
```

---

## 清雅氛围营造

- 图片叠层用 `mix-blend-mode: multiply`，融合更自然
- 一根细横线 `border-top: 1px solid var(--bg-border)` 就是优雅的区块分隔
- Hero 姓名和副标题之间留充足距离 —— 留白 = 自信
- 同一个区块内不超过两种字重
- 项目卡片在桌面端两列、移动端一列最好看
- 深色页脚提供强烈的视觉收尾，让白色页面显得有意图，而不是半途而废
