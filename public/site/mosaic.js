/* Interactive isometric mosaic — decorative hero background (canvas, no deps) */
(function () {
  const reel = document.getElementById('reel');
  const hero = document.querySelector('.hero');
  if (!reel || !hero) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'mosaic';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.tabIndex = -1;
  reel.insertBefore(canvas, reel.firstChild);
  const ctx = canvas.getContext('2d');

  // palette: [top, left, right]
  const C = {
    yel: ['#f8dfae', '#f7c552', '#ee5a6c'],
    yelB: ['#f8dfae', '#f5bd45', '#1f6fe0'],
    cya: ['#5fe6f5', '#18c6ec', '#1a66d6'],
    blu: ['#3aa8f5', '#0d7fe6', '#0b3fa8'],
    cor: ['#f8a3a0', '#f2707a', '#e0365e'],
    pea: ['#f9c9a4', '#f39c7a', '#e5576a'],
  };

  // Structured data. x,y: fraction of hero (front-bottom vertex). w,d,h: size in units (unit = hero height / 22).
  // layer: 0 back · 1 mid · 2 front. s: interactionStrength.
  const B = [];
  const add = (x, y, w, d, h, color, layer, s) => B.push({ x, y, w, d, h, color, layer, s });
  // cascade (upper-left → centre), small = reactive
  add(.066, .05, .5, .5, .5, 'yel', 0, 1.6);
  add(.1, .08, .7, .7, .7, 'pea', 0, 1.5);
  add(.12, .12, .6, .6, .6, 'yel', 0, 1.6);
  add(.148, .16, .9, .9, .9, 'cya', 1, 1.4);
  add(.178, .125, 1.1, 1.1, 1.1, 'pea', 0, 1.3);
  add(.19, .21, .7, .7, .7, 'yel', 1, 1.5);
  add(.225, .205, 1.6, 1.6, 1.6, 'yel', 1, 1.1);
  add(.293, .2, 1, 1, 1, 'cya', 0, 1.4);
  add(.265, .295, 1.6, 1.6, 1.6, 'yelB', 1, 1.1);
  add(.32, .26, .8, .8, .8, 'cya', 1, 1.4);
  add(.368, .265, 1.7, 1.7, 1.7, 'yel', 1, 1.0);
  add(.35, .37, 1.7, 1.7, 1.7, 'pea', 2, 1.0);
  add(.415, .32, .9, .9, .9, 'cya', 2, 1.3);
  add(.48, .315, 1.6, 1.6, 1.6, 'yel', 1, 1.0);
  add(.455, .425, 1.5, 1.5, 1.5, 'cor', 2, 1.0);
  add(.42, .49, 2.4, 2.4, 2.2, 'yelB', 2, .9);
  add(.5, .6, 1.5, 1.5, 1.5, 'yelB', 2, 1.1);
  add(.53, .51, 2.6, 2.6, 2.4, 'cya', 2, .8);
  add(.505, .51, 1.5, 3.4, 3, 'blu', 2, .7);
  add(.6, .39, 2.5, 2.5, 2.6, 'yel', 1, .8);
  add(.74, .51, 1.6, 1.6, 2.6, 'blu', 1, .8);
  add(.745, .44, 1.6, 1.6, 1.0, 'cor', 1, .8);
  // dense lower-right cluster (mostly heavy, low strength)
  add(.6, .68, 3.4, 3.4, 3, 'yel', 2, .55);
  add(.7, .66, 3.5, 2.4, 2.4, 'cor', 2, .5);
  add(.72, .57, 4.2, 2, 2, 'yel', 1, .5);
  add(.82, .64, 3, 3, 2.6, 'cya', 2, .5);
  add(.87, .58, 3.2, 3.2, 4.2, 'yel', 1, .45);
  add(.95, .5, 4, 3, 3.6, 'cor', 0, .35);
  add(1.0, .62, 3, 3, 3.2, 'yel', 1, .4);
  add(.58, 1.08, 5.6, 2.2, 6.5, 'cya', 2, .4);
  add(.62, 1.1, 2.6, 2.6, 4.5, 'cor', 2, .45);
  add(.72, .98, 6, 2.2, 3.5, 'yel', 2, .4);
  add(.72, 1.12, 2.6, 2.6, 5, 'cor', 2, .45);
  add(.8, 1.12, 2.4, 2.4, 6.5, 'cya', 2, .4);
  add(.9, .88, 3.4, 3.4, 3.5, 'yelB', 2, .45);
  add(.9, 1.12, 4.4, 2.6, 5, 'cor', 2, .4);
  add(1.0, .84, 3, 3, 3.6, 'cya', 2, .4);
  add(1.02, 1.1, 3, 3, 5.5, 'cor', 2, .4);
  add(.66, .82, 2.4, 2.4, 2.2, 'blu', 1, .55);
  add(.79, .8, 2.4, 2.4, 2.5, 'pea', 1, .5);
  add(1.04, .4, 4, 3, 2.6, 'cor', 0, .3);
  add(.67, .44, 1.2, 1.2, 1.2, 'cya', 0, .9);

  for (const b of B) { b.ox = 0; b.oy = 0; b.vx = 0; b.vy = 0; b.lz = 0; b.vz = 0; b.ph = Math.random() * 6.28; }

  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const coarse = matchMedia('(pointer: coarse)');
  const COS = Math.cos(Math.PI / 6);
  let W = 0, H = 0, U = 1, dpr = 1, bg = null;
  const mouse = { x: -1e4, y: -1e4, on: false };

  function shade(hex, a) { return hex; }

  function buildBg() {
    bg = document.createElement('canvas');
    bg.width = W * dpr; bg.height = H * dpr;
    const g = bg.getContext('2d');
    g.scale(dpr, dpr);
    g.fillStyle = '#0a1a4a'; g.fillRect(0, 0, W, H);
    const poly = (pts, c) => { g.fillStyle = c; g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x * W, y * H) : g.moveTo(x * W, y * H)); g.closePath(); g.fill(); };
    poly([[0, 0], [.34, 0], [.85, .55], [.3, .68], [0, .4]], '#081845');
    poly([[.34, 0], [.92, 0], [.62, .28]], '#0b2f8c');
    poly([[.92, 0], [1, 0], [1, .28], [.62, .3]], '#0a2470');
    poly([[0, .4], [.3, .68], [.42, 1], [0, 1]], '#06133a');
    poly([[0, .82], [.3, .68], [.42, 1], [0, 1]], '#040d2a');
    poly([[.26, 1], [.55, .8], [.7, 1]], '#0f4fd0');
    // subtle grain
    const n = Math.floor(W * H / 60);
    for (let i = 0; i < n; i++) {
      g.fillStyle = Math.random() > .5 ? 'rgba(255,255,255,.025)' : 'rgba(0,0,0,.05)';
      g.fillRect(Math.random() * W, Math.random() * H, 1, 1);
    }
  }

  function resize() {
    const r = hero.getBoundingClientRect();
    W = r.width; H = r.height; dpr = Math.min(devicePixelRatio || 1, 2);
    U = Math.max(H, W * .5) / 28;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    // keep composition right-weighted on narrow screens
    buildBg();
    draw();
  }

  function prism(b) {
    const narrow = W < 760;
    const bx = narrow ? .3 + b.x * .75 : b.x;
    const ox = bx * W + b.ox, oy = b.y * H + b.oy - b.lz;
    const w = b.w * U, d = b.d * U, h = b.h * U;
    const L = [ox - w * COS, oy - w * .5], R = [ox + d * COS, oy - d * .5];
    const c = C[b.color];
    const face = (pts, col) => { ctx.fillStyle = col; ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.fill(); };
    face([[ox, oy], L, [L[0], L[1] - h], [ox, oy - h]], c[1]);
    face([[ox, oy], R, [R[0], R[1] - h], [ox, oy - h]], c[2]);
    face([[ox, oy - h], [L[0], L[1] - h], [L[0] + R[0] - ox, L[1] + R[1] - oy - h], [R[0], R[1] - h]], c[0]);
  }

  const order = B.slice().sort((a, b) => (a.y - b.y) || (a.x - b.x));
  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (bg) ctx.drawImage(bg, 0, 0, W, H);
    for (const b of order) prism(b);
  }

  const LAYER = [.35, .7, 1];
  let t0 = performance.now(), visible = true, raf = 0;
  function step(now) {
    raf = 0;
    const t = (now - t0) / 1000;
    const tablet = W < 1100;
    const radius = (tablet ? 170 : 260);
    const push = (tablet ? 34 : 56);
    const physics = !coarse.matches;
    let moving = false;
    for (const b of B) {
      let tx = 0, ty = 0, tz = 0;
      const narrow = W < 760;
      const cx = (narrow ? .3 + b.x * .75 : b.x) * W, cy = b.y * H - b.h * U * .5;
      if (physics && mouse.on) {
        const dx = cx - mouse.x, dy = cy - mouse.y, dist = Math.hypot(dx, dy) || 1;
        const f = Math.min(1, Math.max(0, 1 - dist / radius));
        const k = f * f * push * b.s * LAYER[b.layer];
        tx = dx / dist * k; ty = dy / dist * k; tz = f * 10 * b.s * LAYER[b.layer];
      }
      // very subtle drift along bottom-right → upper-left flow
      const dr = Math.sin(t * .5 + b.ph) * 2.2 * LAYER[b.layer] * b.s;
      tx -= dr * COS; ty -= dr * .5;
      b.vx = (b.vx + (tx - b.ox) * .08) * .82;
      b.vy = (b.vy + (ty - b.oy) * .08) * .82;
      b.vz = (b.vz + (tz - b.lz) * .08) * .82;
      b.ox += b.vx; b.oy += b.vy; b.lz += b.vz;
      moving = true;
    }
    draw();
    if (moving && visible && !reduce.matches) raf = requestAnimationFrame(step);
  }
  function kick() { if (!raf && visible && !reduce.matches) raf = requestAnimationFrame(step); }

  hero.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = hero.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.on = true; kick();
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { mouse.on = false; kick(); }, { passive: true });

  new IntersectionObserver(([en]) => { visible = en.isIntersecting; kick(); }).observe(hero);
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; kick(); });
  reduce.addEventListener?.('change', () => { for (const b of B) { b.ox = b.oy = b.lz = 0; } draw(); kick(); });
  addEventListener('resize', resize);
  resize();
  kick();
})();
