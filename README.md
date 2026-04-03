# 🌟 设计感个人主页生成技能 (Personal Homepage Skill)
> 为 Claude 打造的顶级设计工具，一键生成惊艳的个人主页/作品集网站，求职和相亲利器

[![Claude 兼容](https://img.shields.io/badge/Claude-Compatible-0071E3?style=flat-square&logo=anthropic&logoColor=white)](https://www.anthropic.com/claude)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
[![Apple Design](https://img.shields.io/badge/Apple-Inspired-000000?style=flat-square&logo=apple&logoColor=white)](https://developer.apple.com/design/)

---

## ✨ 项目简介
```生成的主页包含：
有磁性的按钮（字面意思，鼠标靠近会被吸过去）
自定义光标，带一个慵懒跟随的圆环
鼠标划过名字，每个字母会蹦起来打个招呼
背景里漂浮的粒子网络，感知鼠标位置发光
项目卡片，hover 时会朝你倾斜
按钮点击，涟漪从你的指尖扩散
滚动时内容优雅淡入，不是那种闪一下的那种
```

```
## 两种风格
1、暗黑科技风 references/style-dark.md
黑到发光的那种黑。#0a0a0a 底色，#c8ff00 点缀。
像 Vercel 的首页，像 Linear 的界面，像凌晨两点还在 vibe coding 的人的审美，适合赛博朋克。
2、清雅白底风 references/style-white.md
白得让人误以为你在 Stripe 上班的那种白。
人生需要留白，适合农夫山泉有点甜的人。

## 技术栈
HTML + CSS + 少量 JavaScript
+ 大量白空间
+ 两套 Apple 配色
+ 一个 Google Fonts 请求（对不起）
+ IntersectionObserver（现代浏览器都有）
+ requestAnimationFrame（也都有）
+ 零框架、零构建工具、零 node_modules
单文件交付。丢到任何静态托管（GitHub Pages、Vercel、Cloudflare Pages）就跑起来了。

## 怎么用
直接告诉 Claude 你要做个人主页就行：

"帮我做个个人主页"
"做个作品集网站，我是 UI 设计师"
"我需要一个暗色风格的开发者主页"
"帮我搭个个人品牌页面"

它会问你名字、职位、几个项目、社交链接，然后生成一个 index.html。
```

## Demo：
https://github.com/user-attachments/assets/5207d37f-ac02-4b43-9571-53495d8e4cf8



## 📁 文件结构

```text
personal-homepage/
├── SKILL.md              # 主技能文件，包含5步工作流程与触发规则
├── README.md             # 项目说明文档（本文件）
├── references/           # 风格设计指南目录
│   ├── style-dark.md     # 科技感黑灰风格指南（颜色、字体、组件）
│   └── style-white.md    # 苹果白底风格指南（颜色、字体、组件）
├── assets/               # 资源与模板目录
│   ├── layout-reference.md  # 各Section布局模版和间距参考
│   └── component-patterns.md # 可复用的HTML/CSS代码片段
└── scripts/              # 交互脚本

