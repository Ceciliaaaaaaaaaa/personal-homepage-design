# 组件模板：可复用 HTML 代码片段

以下是即拆即用的标记模板。根据所选风格指南调整类名和变量即可。

---

## 导航栏

```html
<nav>
  <a href="#" class="nav-logo" data-mag="0.4">姓名</a>
  <ul class="nav-links">
    <li><a href="#about" data-mag="0.2">关于</a></li>
    <li><a href="#work" data-mag="0.2">作品</a></li>
    <li><a href="#contact" data-mag="0.2">联系</a></li>
    <li><a href="mailto:hello@example.com" class="btn-primary btn-sm" data-mag="0.4">雇我</a></li>
  </ul>
</nav>
```

---

## Hero 区（含渐变名字动画）

```html
<section class="hero">
  <div class="container">
    <p class="hero-eyebrow">接受自由项目合作</p>
    <h1 class="hero-name" id="hero-name">张三</h1>
    <p class="hero-title">产品设计师 & 创意技术师</p>
    <p class="hero-tagline">
      我设计的产品，人们真的喜欢用。
    </p>
    <div class="hero-cta">
      <a href="#work" class="btn-primary" data-mag="0.5">查看作品</a>
      <a href="#contact" class="btn-secondary" data-mag="0.4">联系我 ↗</a>
    </div>
  </div>
</section>
```

---

## 关于我（两栏布局）

```html
<section id="about">
  <div class="container">
    <div class="layout-2col">
      <div class="about-text reveal">
        <p class="section-label">关于</p>
        <h2 class="section-title">在工艺与技术的交汇处做设计。</h2>
        <p class="about-bio">
          我是一名产品设计师，有 8 年大规模数字产品的从业经验。
          曾服务于初创公司和世界 500 强，打造既美观又有目的性的界面。
        </p>
        <div class="about-meta">
          <span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.485-2.015-4.5-4.5-4.5zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor"/>
            </svg>
            上海，中国
          </span>
          <span>2025 年 3 月起接受约稿</span>
        </div>
      </div>
      <div class="about-photo reveal">
        <div class="photo-wrapper">
          <!-- 有照片时用这个 -->
          <!-- <img src="photo.jpg" alt="张三" /> -->
          <!-- 无照片时用占位头像 -->
          <div class="photo-placeholder">ZS</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**头像占位 CSS：**
```css
.photo-placeholder {
  width: 280px; height: 280px; border-radius: 50%;
  background: var(--bg-elevated);
  display: flex; align-items: center; justify-content: center;
  font-size: 4rem; font-weight: 700;
  color: var(--text-secondary);
  letter-spacing: -0.02em;
}
.photo-wrapper img {
  width: 280px; height: 280px;
  border-radius: 50%; object-fit: cover;
}
```

---

## 技能区（标签云）

```html
<section id="skills">
  <div class="container">
    <p class="section-label">技能</p>
    <h2 class="section-title">我的技术栈</h2>
    <div class="tags-grid reveal">
      <span class="tag" data-mag="0.3">Figma</span>
      <span class="tag" data-mag="0.3">React</span>
      <span class="tag" data-mag="0.3">TypeScript</span>
      <span class="tag" data-mag="0.3">设计系统</span>
      <span class="tag" data-mag="0.3">用户研究</span>
      <span class="tag" data-mag="0.3">原型设计</span>
      <span class="tag" data-mag="0.3">Framer</span>
      <span class="tag" data-mag="0.3">CSS / Tailwind</span>
      <span class="tag" data-mag="0.3">动效设计</span>
    </div>
  </div>
</section>
```

```css
.tags-grid { display: flex; flex-wrap: wrap; gap: 12px; }
```

---

## 项目卡片网格

```html
<section id="work">
  <div class="container">
    <p class="section-label">精选作品</p>
    <h2 class="section-title">让我骄傲的项目</h2>
    <div class="projects-grid">

      <article class="card project-card reveal" data-mag="0.3">
        <div class="project-visual">
          <!-- 截图或 SVG 占位 -->
          <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="var(--bg-elevated)"/>
            <text x="200" y="120" text-anchor="middle" fill="var(--text-tertiary)" font-size="14" font-family="sans-serif">项目预览</text>
          </svg>
        </div>
        <p class="project-type">Web App · 2024</p>
        <h3 class="project-title">项目名称</h3>
        <p class="project-description">
          简短描述这个项目是什么、解决了什么问题，以及你在其中扮演的角色。
        </p>
        <a href="#" class="project-link" data-mag="0.3">
          查看案例
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </article>

      <!-- 继续添加更多卡片 -->

    </div>
  </div>
</section>
```

---

## 数字统计行（可选）

```html
<div class="stats-row reveal">
  <div class="stat">
    <span class="stat-number">12+</span>
    <span class="stat-label">年从业经验</span>
  </div>
  <div class="stat">
    <span class="stat-number">50+</span>
    <span class="stat-label">落地项目</span>
  </div>
  <div class="stat">
    <span class="stat-number">4</span>
    <span class="stat-label">服务公司</span>
  </div>
</div>
```

```css
.stats-row {
  display: flex; gap: 64px; padding: 48px 0;
  border-top: 1px solid var(--bg-border);
  border-bottom: 1px solid var(--bg-border);
}
.stat { display: flex; flex-direction: column; gap: 4px; }
.stat-number {
  font-size: var(--text-4xl); font-weight: 700;
  letter-spacing: -0.04em; color: var(--text-primary);
}
.stat-label { font-size: var(--text-sm); color: var(--text-secondary); }
```

---

## 社交图标（内联 SVG）

```html
<!-- GitHub -->
<a href="https://github.com/username" aria-label="GitHub" class="social-link" data-mag="0.3">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/username" aria-label="LinkedIn" class="social-link" data-mag="0.3">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
</a>

<!-- Twitter / X -->
<a href="https://twitter.com/username" aria-label="Twitter" class="social-link" data-mag="0.3">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
</a>

<!-- 邮箱 -->
<a href="mailto:hello@example.com" aria-label="邮箱" class="social-link" data-mag="0.3">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
</a>

<!-- Dribbble -->
<a href="https://dribbble.com/username" aria-label="Dribbble" class="social-link" data-mag="0.3">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4.006-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.386z"/>
  </svg>
</a>
```

---

## 联系 CTA 区块

```html
<section id="contact">
  <div class="container">
    <div class="contact-inner reveal">
      <p class="section-label">联系</p>
      <h2 class="section-title">一起做点有意思的事情。</h2>
      <p class="contact-body">
        欢迎全职机会、自由合作和任何有趣的对话。我的收件箱随时开着。
      </p>
      <a href="mailto:hello@example.com" class="btn-primary btn-lg" data-mag="0.5">
        打个招呼
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
</section>
```

---

## 完整页面 `<head>` 模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="[姓名] — [职位]。[一句话简介]。" />
  <meta property="og:title" content="[姓名] — [职位]" />
  <meta property="og:description" content="[一句话简介]。" />
  <meta property="og:type" content="website" />
  <title>[姓名] — [职位]</title>

  <!-- Google Fonts（根据所选风格引入） -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <!-- 在此插入 Google Fonts 链接 -->

  <style>
    /* 所有 CSS 在这里 */
  </style>
</head>
<body>
  <!-- 交互系统元素（来自 scripts/interactions.js） -->
  <div id="ix-cursor"></div>
  <div id="ix-ring"></div>
  <canvas id="ix-bg"></canvas>

  <!-- 页面内容 -->

  <script>
    /* 所有 JS 在这里，包括交互系统代码块 */
  </script>
</body>
</html>
```
