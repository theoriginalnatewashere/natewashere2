(function(){
"use strict";
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const refreshIcons=()=>{try{window.lucide&&lucide.createIcons()}catch(e){}};
refreshIcons();

/* ---------- editable site content from content.js ---------- */
function setText(id,value){const el=document.getElementById(id);if(el&&value!=null)el.textContent=value;}
function setHtml(id,value){const el=document.getElementById(id);if(el&&value!=null)el.innerHTML=value;}
function renderEditableContent(){
  if(typeof SITE==='undefined')return;
  if(SITE.meta){
    if(SITE.meta.title)document.title=SITE.meta.title;
    const md=document.querySelector('meta[name="description"]');
    if(md&&SITE.meta.description)md.setAttribute('content',SITE.meta.description);
  }
  const h=SITE.hero||{};
  setText('heroChip1',h.chip1);setText('heroChip2',h.chip2);setText('heroChip3',h.chip3);
  setHtml('heroTitle1',h.title1Html);setText('heroTitle2',h.title2);setHtml('heroTitle3',h.title3Html);setText('heroSub',h.sub);
  const a=SITE.about||{};setHtml('aboutTitle',a.titleHtml);setHtml('aboutP1',a.paragraph1Html);setText('aboutP2',a.paragraph2);
  const c=SITE.contact||{};setHtml('contactTitle',c.titleHtml);setText('contactIntro',c.intro);
  const ce=document.getElementById('contactEmail');if(ce&&c.email){ce.href='mailto:'+c.email;const s=ce.querySelector('span');if(s)s.textContent=c.email.toUpperCase();}
  const f=SITE.footer||{};setText('footerBlurb',f.blurb);setText('footerCopyright',f.copyright);

  const mq=document.getElementById('mqTrack');
  if(mq&&Array.isArray(SITE.marquee))mq.innerHTML=SITE.marquee.map((x,i)=>`<span class="${x.style||''}">${x.text}</span>${i<SITE.marquee.length-1?'<i class="dia"></i>':''}`).join('');

  const cg=document.getElementById('capabilityGrid');
  if(cg&&Array.isArray(SITE.capabilities))cg.innerHTML=SITE.capabilities.map((x,i)=>`
    <div class="coach" data-reveal style="--d:${(i*.08).toFixed(2)}s" tabindex="0" aria-label="${x.title} — press enter to flip">
      <div class="coach-inner">
        <div class="cface cfront">
          <img class="bw" src="${x.image}" alt="${x.title} capability card">
          <div class="cplate"><span class="idx">0${i+1}</span><h3>${x.title}</h3><span class="role">${x.role}</span><span class="hint hint-desktop"><i data-lucide="repeat"></i> FLIP FOR DETAIL</span><span class="hint hint-touch"><i data-lucide="repeat"></i> TAP FOR DETAIL</span></div>
        </div>
        <div class="cface cback">
          <div class="top"><span class="role">${x.role}</span><span class="chip">CAPABILITY 0${i+1}</span></div>
          <h3>${x.title}</h3><p class="bio">${x.description}</p>
          <ul class="certs">${(x.bullets||[]).map(b=>`<li><i data-lucide="badge-check"></i> ${b}</li>`).join('')}</ul>
          <div class="sig"><div class="k">${x.featuredLabel||'Featured Work'}</div><div class="v">${x.featuredText||''}</div></div>
          <a class="btn btn-ghost btn-sm" href="${x.href||'#'}">${x.cta||'See the Work'} <i data-lucide="arrow-right"></i></a>
        </div>
      </div>
    </div>`).join('');

  const pg=document.getElementById('playgroundGrid');
  if(pg&&Array.isArray(SITE.playground))pg.innerHTML=SITE.playground.map(x=>`
    <a class="pg-card" href="${x.href}" target="_blank" rel="noopener noreferrer" aria-label="${x.title} — open dashboard in a new tab">
      <span class="pg-media"><img src="${x.image}" alt="${x.title} dashboard screenshot" loading="lazy"></span>
      <span class="pg-body">
        <span class="pg-top"><span class="pg-tag">${x.tag}</span><span class="pg-meta">${x.meta||''}</span></span>
        <span class="pg-title">${x.title}</span>
        <span class="pg-q">${x.question}</span>
        <span class="pg-row"><b>What</b><span>${x.what}</span></span>
        <span class="pg-row"><b>Why</b><span>${x.why}</span></span>
        <span class="pg-row"><b>How</b><span class="pg-tags">${(x.how||[]).map(h=>`<i>${h}</i>`).join('')}</span></span>
        <span class="pg-arrow">Open dashboard <i data-lucide="arrow-up-right"></i></span>
      </span>
    </a>`).join('');
}
renderEditableContent();


/* ═══════════════════════════════════════════════════════════════
   PROJECT DATA — this array is the single source of truth.
   In the React/Lovable port this becomes projects.js / projects.ts,
   and renderProject() becomes the /work/:slug route component.
   Every field is optional; the renderers skip missing fields.
   ALL VALUES BELOW ARE EXPLICIT PLACEHOLDERS — replace with real
   project data and assets from the existing Natewashere portfolio.
   ═══════════════════════════════════════════════════════════════ */
/* PROJECTS moved to projects.js */
const HOME_TITLE=document.title;

/* ---------- small render helpers (skip missing fields gracefully) ---------- */
const metaRow=(k,v)=>v?`<div class="meta-row"><span class="k">${k}</span><span class="v">${v}</span></div>`:"";
const chips=a=>(a&&a.length)?a.map(t=>`<span class="chip">${t}</span>`).join(""):"";

/* ---------- toast ---------- */
function toast(msg,icon='check'){
  const t=document.createElement('div');t.className='toast';
  t.innerHTML=`<i data-lucide="${icon}"></i><span>${msg}</span>`;
  $('#toasts').appendChild(t);refreshIcons();
  requestAnimationFrame(()=>t.classList.add('on'));
  setTimeout(()=>{t.classList.remove('on');setTimeout(()=>t.remove(),450)},3600);
}

/* ---------- preloader ---------- */
const pre=$('#preloader'),preNum=$('#preNum'),t0=performance.now();
(function ptick(){
  const p=Math.min(100,Math.round((performance.now()-t0)/11));
  preNum.textContent=String(p).padStart(3,'0');
  if(p<100)requestAnimationFrame(ptick);
  else{pre.classList.add('done');document.body.classList.add('ready');setTimeout(()=>pre.remove(),900);}
})();

/* ---------- custom cursor ---------- */
let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
const cursor=$('#cursor');
if(fine){
  document.body.classList.add('has-cursor');
  addEventListener('mousemove',e=>{
    mx=e.clientX;my=e.clientY;
    const hot=e.target.closest('a,button,.prog-row,.coach,.car-viewport');
    cursor.classList.toggle('big',!!hot);
  },{passive:true});
}

/* ---------- marquee: duplicate for seamless loop ---------- */
const mq=$('#mqTrack');mq.innerHTML+=mq.innerHTML;

/* ---------- build project reel (data-driven, clickable slides) ---------- */
 $('#reel').insertAdjacentHTML('afterbegin',PROJECTS.filter(p=>p.featured).map((p,i)=>`
  <a class="reel-shot${i===0?' is-active':''}" href="#/work/${p.slug}" aria-label="Open project: ${p.title}">
    <img class="bw" src="${p.heroImage}" alt="Preview of ${p.title}">
    <span class="reel-cap">
      <span class="rc-top">0${i+1} — ${p.title}</span>
      <span class="rc-sub">${p.category} · ${p.year}</span>
      <span class="rc-view">VIEW PROJECT <i data-lucide="arrow-up-right"></i></span>
    </span>
  </a>`).join(''));
 $('#stripTiles').innerHTML=PROJECTS.map(p=>`<a href="#/work/${p.slug}" aria-label="Open project: ${p.title}"><img class="bw" src="${p.thumb}" alt=""></a>`).join('');

/* ---------- reel slideshow + timecode + HUD counter ---------- */
const shots=$$('.reel-shot');let shotIdx=0;
const reelNow=$('#reelNow');
 $('#reelTotal').textContent=String(shots.length).padStart(2,'0');
function updateHud(){reelNow.textContent=String(shotIdx+1).padStart(2,'0');}
updateHud();
if(!reduced)setInterval(()=>{
  shots[shotIdx].classList.remove('is-active');
  shotIdx=(shotIdx+1)%shots.length;
  shots[shotIdx].classList.add('is-active');
  updateHud();
},4600);
const tcEl=$('#tc');
function tcFmt(){
  const f=Math.floor(performance.now()/1000*24);
  const fr=f%24,s=Math.floor(f/24)%60,m=Math.floor(f/1440)%60;
  tcEl.textContent=`00:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}:${String(fr).padStart(2,'0')}`;
}

/* ---------- synthesized ambient audio (subtle, optional) ---------- */
let audio=null,master=null,soundOn=false,kickTimer=null;
function initAudio(){
  const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
  audio=new AC();
  master=audio.createGain();master.gain.value=0;master.connect(audio.destination);
  const lp=audio.createBiquadFilter();lp.type='lowpass';lp.frequency.value=170;lp.connect(master);
  [[55,.15],[55.6,.15],[110.3,.05]].forEach(([f,g])=>{
    const o=audio.createOscillator();o.type='sine';o.frequency.value=f;
    const gn=audio.createGain();gn.gain.value=g;o.connect(gn);gn.connect(lp);o.start();
  });
  const nb=audio.createBuffer(1,audio.sampleRate*2,audio.sampleRate),d=nb.getChannelData(0);
  for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  const ns=audio.createBufferSource();ns.buffer=nb;ns.loop=true;
  const nf=audio.createBiquadFilter();nf.type='lowpass';nf.frequency.value=420;
  const ng=audio.createGain();ng.gain.value=.028;
  ns.connect(nf);nf.connect(ng);ng.connect(master);ns.start();
}
function thump(t,vel){
  const o=audio.createOscillator(),g=audio.createGain();
  o.type='sine';o.frequency.setValueAtTime(130,t);o.frequency.exponentialRampToValueAtTime(42,t+.14);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vel,t+.012);
  g.gain.exponentialRampToValueAtTime(.0001,t+.34);
  o.connect(g);g.connect(master);o.start(t);o.stop(t+.4);
}
function scheduleBeat(){const t=audio.currentTime+.05;thump(t,.5);thump(t+.19,.26);}
let firstUnmute=true;
function setSound(on){
  if(!audio)initAudio();if(!audio)return;
  audio.resume();
  if(on){
    soundOn=true;
    master.gain.cancelScheduledValues(audio.currentTime);
    master.gain.linearRampToValueAtTime(.55,audio.currentTime+.4);
    scheduleBeat();kickTimer=setInterval(scheduleBeat,1250);
    if(firstUnmute){toast('Ambient reel sound — optional flavor, nothing hidden behind it','volume-2');firstUnmute=false;}
  }else{
    soundOn=false;
    master.gain.cancelScheduledValues(audio.currentTime);
    master.gain.linearRampToValueAtTime(0,audio.currentTime+.3);
    clearInterval(kickTimer);
  }
  const btn=$('#soundBtn');
  btn.innerHTML=soundOn?'<i data-lucide="volume-2"></i><span>SOUND ON</span>':'<i data-lucide="volume-x"></i><span>SOUND</span>';
  btn.classList.toggle('sounded',soundOn);
  refreshIcons();
}
 $('#soundBtn').addEventListener('click',e=>{e.stopPropagation();setSound(!soundOn);});

/* ---------- build selected work rows (data-driven) ---------- */
 $('#workList').innerHTML=PROJECTS.map((p,i)=>`
  <article class="prog" data-img="${p.thumb}">
    <button class="prog-row" aria-expanded="false" aria-controls="pb-${p.slug}">
      <span class="prog-num">0${i+1}</span>
      <span class="prog-name">${p.title}</span>
      <span class="prog-year">${p.year}</span>
      <span class="prog-tag${p.status&&p.status.includes('progress')?' hot':''}">${p.category}</span>
      <span class="prog-ico"><i data-lucide="plus"></i></span>
    </button>
    <div class="prog-body" id="pb-${p.slug}"><div class="prog-innerwrap"><div class="prog-detail">
      <div>
        <p>${p.summary}</p>
        ${p.tags&&p.tags.length?`<div class="row-tags">${chips(p.tags)}</div>`:''}
        <img class="prog-thumb" src="${p.thumb}" alt="" loading="lazy">
        <a class="btn btn-ghost btn-sm" href="#/work/${p.slug}">View Project <i data-lucide="arrow-right"></i></a>
      </div>
      <div class="prog-meta">
        ${metaRow('Role',p.role)}
        ${metaRow('Client',p.client)}
        ${metaRow('Year',p.year)}
        ${metaRow('Status',p.status)}
      </div>
    </div></div></div>
  </article>`).join('');

refreshIcons();

/* ---------- reveal on scroll ---------- */
const io=new IntersectionObserver(es=>es.forEach(en=>{
  if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}
}),{threshold:.15,rootMargin:'0px 0px -40px 0px'});
 $$('[data-reveal]').forEach(el=>io.observe(el));
function watchReveals(scope){$$('[data-reveal]:not(.in)',scope).forEach(el=>io.observe(el));}

/* ---------- programs → work accordion ---------- */
const progs=$$('.prog');
progs.forEach(p=>{
  p.querySelector('.prog-row').addEventListener('click',()=>{
    const open=p.classList.contains('open');
    progs.forEach(o=>{o.classList.remove('open');o.querySelector('.prog-row').setAttribute('aria-expanded','false');});
    if(!open){p.classList.add('open');p.querySelector('.prog-row').setAttribute('aria-expanded','true');}
  });
});

/* ---------- floating project preview ---------- */
const pf=$('#progFloat'),pfImg=$('#progFloatImg');
let pfOn=false,pfx=0,pfy=0,rot=0;
if(fine){
  progs.forEach(p=>{const im=new Image();im.src=p.dataset.img;});
  progs.forEach(p=>{
    p.addEventListener('mouseenter',()=>{if(pfImg.src!==p.dataset.img)pfImg.src=p.dataset.img;pfOn=true;pf.classList.add('on');});
    p.addEventListener('mouseleave',()=>{pfOn=false;pf.classList.remove('on');});
  });
}

/* ---------- capability flip (touch + keyboard) ---------- */
 $$('.coach').forEach(c=>{
  c.addEventListener('click',e=>{
    if(e.target.closest('button,a'))return;
    if(!fine)c.classList.toggle('flipped');
  });
  c.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){e.preventDefault();c.classList.toggle('flipped');}
  });
});

/* ---------- highlights carousel ---------- */
const vp=$('#carViewport'),track=$('#carTrack'),slides=$$('.story',track);
const segsBox=$('#carSegs');let carIdx=0,step=0;
let dragging=false,startX=0,startTX=0,vel=0,lastX=0,lastT=0,autoTimer=null;
 $('#carTotal').textContent=String(slides.length).padStart(2,'0');
slides.forEach((_,i)=>{
  const b=document.createElement('button');b.setAttribute('aria-label','Go to highlight '+(i+1));
  b.addEventListener('click',()=>{goTo(i);restartAuto();});segsBox.appendChild(b);
});
const segs=$$('button',segsBox);
function measure(){step=slides[0].getBoundingClientRect().width+24;setX(-carIdx*step,false);}
function setX(x,anim){
  track.style.transition=anim?'transform .7s cubic-bezier(.22,1,.36,1)':'none';
  track.style.transform=`translate3d(${x}px,0,0)`;track.dataset.x=x;
}
function curX(){return parseFloat(track.dataset.x||0);}
function rubber(x){
  const max=-(slides.length-1)*step;
  if(x>0)return x*.32;
  if(x<max)return max+(x-max)*.32;
  return x;
}
function goTo(i){
  carIdx=Math.max(0,Math.min(slides.length-1,i));
  setX(-carIdx*step,true);
  $('#carNow').textContent=String(carIdx+1).padStart(2,'0');
  segs.forEach((s,k)=>s.classList.toggle('on',k===carIdx));
}
function stopAuto(){clearInterval(autoTimer);autoTimer=null;}
function restartAuto(){
  stopAuto();
  if(!reduced)autoTimer=setInterval(()=>goTo((carIdx+1)%slides.length),5600);
}
vp.addEventListener('pointerdown',e=>{
  dragging=true;vp.classList.add('dragging');vp.setPointerCapture(e.pointerId);
  startX=e.clientX;startTX=curX();vel=0;lastX=e.clientX;lastT=performance.now();
  track.style.transition='none';stopAuto();
});
vp.addEventListener('pointermove',e=>{
  if(!dragging)return;
  const raw=startTX+(e.clientX-startX);
  setX(rubber(raw),false);
  const now=performance.now(),dt=now-lastT;
  if(dt>0)vel=(e.clientX-lastX)/dt;lastX=e.clientX;lastT=now;
});
function endDrag(){
  if(!dragging)return;dragging=false;vp.classList.remove('dragging');
  const x=curX();
  let t=Math.round((-x-vel*140)/step);
  if(vel<-.5&&t===carIdx)t=carIdx+1;
  if(vel>.5&&t===carIdx)t=carIdx-1;
  goTo(t);setTimeout(restartAuto,300);
}
vp.addEventListener('pointerup',endDrag);
vp.addEventListener('pointercancel',endDrag);
vp.addEventListener('mouseenter',stopAuto);
vp.addEventListener('mouseleave',()=>{if(!dragging)restartAuto();});
 $('#carPrev').addEventListener('click',()=>{goTo(carIdx-1);restartAuto();});
 $('#carNext').addEventListener('click',()=>{goTo(carIdx+1);restartAuto();});
document.addEventListener('visibilitychange',()=>document.hidden?stopAuto():restartAuto());
addEventListener('resize',measure);
measure();goTo(0);restartAuto();

/* ---------- contact: CTA links only (no form) ---------- */

/* ---------- placeholder link actions (CV, socials, playground) ---------- */
 $$('[data-cv]').forEach(b=>b.addEventListener('click',e=>{
  e.preventDefault();toast('CV goes here — drop the file into the project and link it up','file-text');
}));
 $$('[data-todo]').forEach(b=>b.addEventListener('click',e=>{
  e.preventDefault();toast(b.dataset.todo,'map-pin');
}));
 $$('[data-social]').forEach(b=>b.addEventListener('click',e=>{
  e.preventDefault();toast(`${b.dataset.social} link goes here — add the real URL`,'link');
}));

/* ---------- mobile menu ---------- */
function openMenu(on){document.body.classList.toggle('menu-open',on);$('#menu').setAttribute('aria-hidden',String(!on));}
 $('#menuBtn').addEventListener('click',()=>openMenu(true));
 $('#menuClose').addEventListener('click',()=>openMenu(false));
 $$('#menu a').forEach(a=>a.addEventListener('click',()=>openMenu(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')openMenu(false);});

/* ---------- contact visibility (sticky bar hides here) ---------- */
let contactInView=false;
new IntersectionObserver(es=>{contactInView=es[0].isIntersecting;},{threshold:.15})
  .observe($('#contact'));

/* ═══════════════════════════════════════════════════════════════
   HASH ROUTER — home + #/work/:slug project pages.
   In the React port this maps to the /work/:slug route.
   ═══════════════════════════════════════════════════════════════ */
const ppRoot=$('#ppRoot');
const routeFromHash=()=>{const m=location.hash.match(/^#\/work\/([a-z0-9-]+)/i);return m?m[1]:null;};
function renderProject(idx){
  const p=PROJECTS[idx];
  const prev=idx>0?PROJECTS[idx-1]:null;
  const next=idx<PROJECTS.length-1?PROJECTS[idx+1]:null;
  pfOn=false;pf.classList.remove('on');
  ppRoot.innerHTML=`
  <article class="pp container">
    <a class="pp-backlink mono" href="#work"><i data-lucide="arrow-left"></i> ALL WORK</a>
    <div class="kicker" data-reveal><b>PROJECT</b> 0${idx+1} / 0${PROJECTS.length}</div>
    <h1 class="display pp-title" data-reveal>${p.title}</h1>
    <div class="prog-meta pp-meta" data-reveal>
      ${metaRow('Category',p.category)}
      ${metaRow('Year',p.year)}
      ${metaRow('Role',p.role)}
      ${metaRow('Client',p.client)}
      ${metaRow('Status',p.status)}
    </div>
    <figure class="pp-hero" data-reveal><img class="bw" src="${p.heroImage}" alt="Hero image for ${p.title}"></figure>
    <p class="pp-lede" data-reveal>${p.summary}</p>
    ${p.tags&&p.tags.length?`<div class="pp-tags" data-reveal>${chips(p.tags)}</div>`:''}
    ${p.description&&p.description.length?`
    <div class="pp-cols">
      <h2 class="display pp-h2" data-reveal>ABOUT THE<br>PROJECT</h2>
      <div class="pp-body" data-reveal style="--d:.1s">${p.description.map(t=>`<p>${t}</p>`).join('')}</div>
    </div>`:''}
    ${p.explorations&&p.explorations.length?`
    <h2 class="display pp-h2" data-reveal>SELECTED EXPLORATIONS</h2>
    <div class="pp-explore">
      ${p.explorations.map((x,j)=>`<article class="pp-ex" data-reveal>
        <figure><img class="bw" src="${x.image}" alt="${x.title} dashboard screenshot" loading="lazy"></figure>
        <span class="mono pp-ex-n">0${j+1}</span>
        <h3>${x.title}</h3>
        <p class="pp-ex-q">${x.question}</p>
        <p>${x.description}</p>
        <div class="pp-ex-links">
          ${x.live?`<a class="btn btn-orange btn-sm" href="${x.live}" target="_blank" rel="noopener noreferrer">Explore Live Dashboard ↗</a>`:''}
          ${x.code?`<a class="btn btn-ghost btn-sm" href="${x.code}" target="_blank" rel="noopener noreferrer">View Code ↗</a>`:''}
        </div>
      </article>`).join('')}
    </div>`:''}
    ${p.gallery&&p.gallery.length?`
    <h2 class="display pp-h2" data-reveal>GALLERY</h2>
    <div class="pp-gallery">
      ${p.gallery.map(g=>`<figure data-reveal><img class="bw" src="${g.src}" alt="${g.cap||'Project image'}" loading="lazy"><figcaption>${g.cap||''}</figcaption></figure>`).join('')}
    </div>`:''}
    ${p.approach&&p.approach.length?`
    <h2 class="display pp-h2" data-reveal>APPROACH</h2>
    <ol class="pp-approach mono" data-reveal>${p.approach.map((s,j)=>`<li><b>0${j+1}</b>${s}</li>`).join('')}</ol>`:''}
    ${p.links&&p.links.length?`
    <div class="pp-links" data-reveal>${p.links.map(l=>`<a class="btn btn-ghost btn-sm" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`).join('')}</div>`:''}
    <nav class="pp-nav" aria-label="Project navigation">
      ${prev?`<a class="ppn" href="#/work/${prev.slug}"><span class="k"><i data-lucide="arrow-left"></i> PREVIOUS</span><span class="t">${prev.title}</span><span class="s">${prev.category} · ${prev.year}</span></a>`:'<span></span>'}
      ${next?`<a class="ppn ppn-r" href="#/work/${next.slug}"><span class="k">NEXT <i data-lucide="arrow-right"></i></span><span class="t">${next.title}</span><span class="s">${next.category} · ${next.year}</span></a>`:'<span></span>'}
    </nav>
    <div class="pp-back"><a class="btn btn-ghost" href="#work">Back to All Work <i data-lucide="arrow-up"></i></a></div>
  </article>`;
  ppRoot.style.display='block';
  document.body.classList.add('route-project');
  openMenu(false);
  window.scrollTo({top:0,behavior:'auto'});
  document.title=`${p.title} — Natewashere`;
  refreshIcons();
  watchReveals(ppRoot);
}
function showHome(){
  if(document.body.classList.contains('route-project')){
    document.body.classList.remove('route-project');
    ppRoot.style.display='none';ppRoot.innerHTML='';
    document.title=HOME_TITLE;
  }
  const h=location.hash;
  if(h&&h.length>1){
    const el=document.getElementById(h.slice(1));
    if(el)requestAnimationFrame(()=>el.scrollIntoView());
  }
}
function renderRoute(){
  const slug=routeFromHash();
  if(slug){
    const idx=PROJECTS.findIndex(p=>p.slug===slug);
    if(idx>-1){renderProject(idx);return;}
    toast('That project doesn\'t exist yet — back to the work','x');
  }
  showHome();
}
addEventListener('hashchange',renderRoute);
renderRoute();

/* ---------- master rAF loop: grain parallax, image parallax, cursor, float, HUD ---------- */
const g1=$('#grain1'),g2=$('#grain2'),nav=$('#nav'),sticky=$('#stickyBar');
const pImgs=$$('[data-parallax]');
let sy=scrollY;
function loop(){
  const nsy=scrollY;
  if(nsy!==sy){
    sy=nsy;
    if(!reduced){
      g1.style.transform=`translate3d(${sy*-.04}px,${sy*.1}px,0)`;
      g2.style.transform=`translate3d(${sy*.06}px,${sy*-.14}px,0)`;
    }
    nav.classList.toggle('solid',sy>40);
    const menuOpen=document.body.classList.contains('menu-open');
    const ctEl=document.getElementById('contact');const pastContact=ctEl&&ctEl.offsetParent&&ctEl.getBoundingClientRect().top<innerHeight;
    sticky.classList.toggle('show',sy>innerHeight*.75&&!contactInView&&!pastContact&&!menuOpen);
    pImgs.forEach(img=>{
      const r=img.parentElement.getBoundingClientRect();
      if(r.bottom<0||r.top>innerHeight)return;
      const off=(r.top+r.height/2-innerHeight/2)*.1;
      img.style.transform=`translateY(${off}px)`;
    });
  }
  if(fine){
    cx+=(mx-cx)*.2;cy+=(my-cy)*.2;
    cursor.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`;
    if(pfOn){
      pfx+=((mx+28)-pfx)*.12;pfy+=((my-190)-pfy)*.12;
      rot+=(((mx+28)-pfx)*.04-rot)*.1;
      rot=Math.max(-8,Math.min(8,rot));
      pf.style.transform=`translate(${pfx}px,${pfy}px) rotate(${rot}deg)`;
    }
  }
  tcFmt();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
})();
