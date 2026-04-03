/**
 * personal-homepage interactions.js
 * ─────────────────────────────────
 * 将此文件内容整体粘贴到生成主页的 <script> 标签中。
 * 提供：自定义光标 · 磁性元素 · 英雄名字逐字动画 · 粒子背景 · 滚动淡入
 *
 * 集成步骤
 * ─────────────────────────────────
 * 1. 将下方「光标样式」的 <style> 块粘贴到页面 <style> 标签中。
 * 2. 在 <body> 后紧接着放置 <canvas id="ix-bg"> 元素。
 * 3. 为任意交互元素添加 class="magnetic" data-mag="0.4"。
 * 4. 为 Hero 区 <h1> 添加 id="hero-name"。
 * 5. 为需要滚动淡入的 section/卡片添加 class="reveal"。
 * 6. 将 JS 块粘贴到 </body> 前。
 */

/* ═══════════════════════════════════════════════
   1. 光标样式  (粘贴到 <style> 中)
   ═══════════════════════════════════════════════

#ix-cursor {
  position: fixed; width: 10px; height: 10px; border-radius: 50%;
  background: var(--text-primary, #0a0a0a);
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s cubic-bezier(0.34,1.56,0.64,1),
              height 0.3s cubic-bezier(0.34,1.56,0.64,1),
              background 0.3s;
  mix-blend-mode: difference;
}
#ix-ring {
  position: fixed; width: 36px; height: 36px; border-radius: 50%;
  border: 1.5px solid var(--text-primary, #0a0a0a);
  pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  opacity: 0.35;
  transition: width 0.4s cubic-bezier(0.34,1.56,0.64,1),
              height 0.4s cubic-bezier(0.34,1.56,0.64,1),
              opacity 0.3s;
}
body { cursor: none; }
#ix-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
.ix-char {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), color 0.3s;
  cursor: default;
}
.ix-char:hover {
  transform: translateY(-10px) rotate(-5deg);
  color: var(--accent, #ff6b35);
}
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
              transform 0.7s cubic-bezier(0.16,1,0.3,1);
}
.reveal.visible { opacity: 1; transform: none; }
.reveal:nth-child(2) { transition-delay: 0.08s; }
.reveal:nth-child(3) { transition-delay: 0.16s; }
.reveal:nth-child(4) { transition-delay: 0.24s; }
@media (prefers-reduced-motion: reduce) {
  .ix-char, .reveal { transition: none !important; }
  .reveal { opacity: 1; transform: none; }
}

*/

/* ═══════════════════════════════════════════════
   2. 需要添加的 HTML 元素
   ═══════════════════════════════════════════════

   紧接在 <body> 后：
   <div id="ix-cursor"></div>
   <div id="ix-ring"></div>
   <canvas id="ix-bg"></canvas>

   交互元素上：
   class="magnetic" data-mag="0.4"

   磁性强度参考：
     0.2 = 微弱（导航链接、小标签）
     0.3 = 正常（技能标签、幽灵按钮）
     0.4 = 强（Logo、次要 CTA）
     0.5 = 很强（仅主 CTA 按钮）

   Hero 名字标题：
   id="hero-name"

   需要滚动淡入的 section/卡片：
   class="reveal"

*/

/* ═══════════════════════════════════════════════
   3. JS 块  (粘贴到 </body> 前)
   ═══════════════════════════════════════════════ */

(function() {

  /* ── CURSOR ─────────────────────────────────── */
  const cur = document.getElementById('ix-cursor');
  const ring = document.getElementById('ix-ring');
  if (!cur || !ring) return;

  let mx = -200, my = -200;
  let rx = -200, ry = -200;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function lerp(a, b, t) { return a + (b - a) * t; }

  (function tickCursor() {
    rx = lerp(rx, mx, 0.13);
    ry = lerp(ry, my, 0.13);
    cur.style.left  = mx + 'px';
    cur.style.top   = my + 'px';
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(tickCursor);
  })();

  /* Cursor state changes */
  document.querySelectorAll('a, button, .magnetic, [data-mag]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.width  = '48px';
      cur.style.height = '48px';
      ring.style.opacity = '0';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.width  = '10px';
      cur.style.height = '10px';
      ring.style.opacity = '0.35';
    });
  });

  /* ── MAGNETIC PULL ──────────────────────────── */
  document.querySelectorAll('[data-mag]').forEach(el => {
    const strength = parseFloat(el.dataset.mag) || 0.3;
    let animId;
    let offX = 0, offY = 0;

    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width  / 2);
      const dy = e.clientY - (r.top  + r.height / 2);
      offX = dx * strength;
      offY = dy * strength;
      el.style.transform = `translate(${offX}px, ${offY}px)`;
      el.style.transition = 'transform 0.1s ease';
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0,0)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    });
  });

  /* ── HERO NAME CHAR SPLIT ───────────────────── */
  const hero = document.getElementById('hero-name');
  if (hero) {
    const original = hero.textContent;
    hero.textContent = '';
    original.split('').forEach(ch => {
      const s = document.createElement('span');
      s.className = 'ix-char';
      s.textContent = ch === ' ' ? '\u00a0' : ch;
      hero.appendChild(s);
    });
  }

  /* ── PARTICLE BACKGROUND ────────────────────── */
  const canvas = document.getElementById('ix-bg');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    /* Detect if dark mode */
    function isDark() {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-base').trim().startsWith('#0')
        || document.body.classList.contains('dark')
        || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    const COUNT = 45;
    const pts = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * 1200,
      y:  Math.random() * 800,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r:  Math.random() * 1.8 + 0.8,
      phase: Math.random() * Math.PI * 2
    }));

    let tick = 0;

    (function drawBg() {
      tick += 0.004;
      ctx.clearRect(0, 0, W, H);

      const dark = isDark();
      const dotColor   = dark ? '240,240,240' : '10,10,10';
      const lineColor  = dark ? '240,240,240' : '10,10,10';
      const LINK_DIST  = 90;
      const MOUSE_GLOW = 130;

      pts.forEach(p => {
        p.x += p.vx + Math.sin(tick + p.phase) * 0.15;
        p.y += p.vy + Math.cos(tick + p.phase) * 0.15;
        if (p.x < 0) p.x = W;  if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;  if (p.y > H) p.y = 0;

        const dx = p.x - mx, dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = Math.max(0, 1 - dist / MOUSE_GLOW);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + glow * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor},${0.08 + glow * 0.35})`;
        ctx.fill();
      });

      /* Lines between close particles */
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${lineColor},${(1 - d / LINK_DIST) * 0.07})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawBg);
    })();
  }

  /* ── SCROLL REVEAL ──────────────────────────── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ── TILT ON PROJECT CARDS ──────────────────── */
  document.querySelectorAll('.project-card, [data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
      card.style.transition = 'transform 0.1s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    });
  });

  /* ── BTN RIPPLE ─────────────────────────────── */
  document.querySelectorAll('button, .btn-main, .btn-primary, [data-ripple]').forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('click', e => {
      const r = btn.getBoundingClientRect();
      const rip = document.createElement('span');
      const size = Math.max(r.width, r.height) * 2;
      rip.style.cssText = `
        position:absolute;border-radius:50%;
        width:${size}px;height:${size}px;
        left:${e.clientX - r.left - size/2}px;
        top:${e.clientY - r.top - size/2}px;
        background:rgba(255,255,255,0.25);
        transform:scale(0);pointer-events:none;
        animation:ixRipple 0.55s ease-out forwards;
      `;
      if (!document.getElementById('ix-ripple-style')) {
        const st = document.createElement('style');
        st.id = 'ix-ripple-style';
        st.textContent = '@keyframes ixRipple{to{transform:scale(1);opacity:0;}}';
        document.head.appendChild(st);
      }
      btn.appendChild(rip);
      setTimeout(() => rip.remove(), 600);
    });
  });

})();
