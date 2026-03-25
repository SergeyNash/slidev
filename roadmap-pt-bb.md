---
theme: default
title: PT BlackBox — Roadmap 2025
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
css: unocss
fonts:
  sans: 'JetBrains Mono, Inter, Consolas, monospace'
  mono: 'JetBrains Mono, Fira Code, monospace'
transition: fade
---

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes dot-pulse {
  0%, 100% { box-shadow: 0 0 6px rgba(0, 212, 255, 0.6); }
  50% { box-shadow: 0 0 14px rgba(0, 212, 255, 1), 0 0 24px rgba(0, 212, 255, 0.4); }
}

:root {
  --bg-0: #030a0f;
  --bg-1: #060f18;
  --bg-2: #0a1520;
  --line: rgba(0, 212, 255, 0.045);

  --text:  #c8d8e8;
  --muted: #4e6e84;

  --primary: #00d4ff;
  --danger:  #ff2d78;
  --success: #00ff9f;
  --accent:  #bf5af2;
  --warning: #ffe600;

  --done:    #00ff9f;
  --active:  #00d4ff;
  --planned: #bf5af2;
  --future:  #4e6e84;

  --border: rgba(0, 212, 255, 0.12);
  --shadow: 0 12px 35px rgba(0, 0, 0, 0.55);
}

html, body, #app { background: var(--bg-0); }

.slidev-layout {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse 55% 45% at 92% 8%,  rgba(0, 212, 255, 0.07), transparent),
    radial-gradient(ellipse 45% 40% at 4% 92%,  rgba(0, 255, 159, 0.05), transparent),
    radial-gradient(ellipse 35% 30% at 50% 50%, rgba(191, 90, 242, 0.03), transparent),
    linear-gradient(160deg, var(--bg-0) 0%, var(--bg-1) 55%, var(--bg-2) 100%);
  color: var(--text);
  font-family: 'Inter', 'JetBrains Mono', monospace;
  padding: 1.1rem 1.3rem !important;
}

/* dot grid */
.slidev-layout::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0,212,255,0.1) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  z-index: 0;
}

/* scanlines */
.slidev-layout::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0,0,0,0.022) 3px,
    rgba(0,0,0,0.022) 4px
  );
  pointer-events: none;
  z-index: 2;
}

.slidev-layout > * { position: relative; z-index: 1; }

h1, h2, h3, h4 { font-family: 'JetBrains Mono', monospace; letter-spacing: -0.02em; margin-top: 0; }

h1 {
  font-size: 1.9em; font-weight: 800; color: var(--primary);
  margin-bottom: 0.5rem; text-transform: uppercase; display: inline-block; line-height: 1.05;
  text-shadow: 0 0 10px rgba(0,212,255,0.7), 0 0 30px rgba(0,212,255,0.25);
}
h1::before { content: "> "; color: var(--danger); font-weight: 500; text-shadow: 0 0 10px rgba(255,45,120,0.7); }

h2 { font-size: 1.05em; font-weight: 700; color: var(--danger); margin-bottom: 0.45rem; text-shadow: 0 0 10px rgba(255,45,120,0.5); }
h3 { font-size: 0.88em; font-weight: 700; color: var(--muted); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.08em; }

p { line-height: 1.45; margin: 0.2rem 0 0.45rem; font-size: 0.94em; }
.small { font-size: 0.82em; color: var(--muted); }
.muted { color: var(--muted); }

.center-xy { min-height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; }
.stack { display: grid; gap: 0.65rem; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.kicker {
  display: inline-block; margin-bottom: 0.7rem;
  font-family: 'JetBrains Mono', monospace; font-size: 0.76em; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--success); text-shadow: 0 0 14px rgba(0,255,159,0.45);
}
.kicker::before { content: "[ "; color: var(--danger); text-shadow: 0 0 8px rgba(255,45,120,0.6); }
.kicker::after  { content: " ]"; color: var(--danger); text-shadow: 0 0 8px rgba(255,45,120,0.6); }

.hero-title {
  font-family: 'JetBrains Mono', monospace; font-size: 3em; line-height: 0.95;
  font-weight: 800; letter-spacing: -0.05em; text-transform: uppercase;
  color: var(--primary); margin-bottom: 0.45rem; text-align: center;
  text-shadow: 0 0 20px rgba(0,212,255,0.8), 0 0 60px rgba(0,212,255,0.3), 0 0 100px rgba(0,212,255,0.1);
}
.hero-title::before { content: "> "; color: var(--danger); font-weight: 400; text-shadow: 0 0 14px rgba(255,45,120,0.8); }
.hero-title::after  { content: "_"; color: var(--primary); animation: blink 1.1s step-end infinite; margin-left: 0.04em; font-weight: 300; }

.hero-sub {
  font-family: 'JetBrains Mono', monospace; font-size: 1.1em;
  color: var(--success); margin-bottom: 1.1rem; opacity: 0.9;
  line-height: 1.45; text-align: center; text-shadow: 0 0 16px rgba(0,255,159,0.4);
}

.badge-row { display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.9rem; }
.badge-row.left { justify-content: flex-start; }

.badge {
  display: inline-flex; align-items: center; padding: 0.3rem 0.65rem; border-radius: 4px;
  font-size: 0.72em; font-weight: 700; border: 1px solid transparent;
  font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.06em;
  cursor: default; transition: transform 0.18s ease;
}
.badge:hover { transform: translateY(-1px); }
.badge.done    { background: rgba(0,255,159,0.08);  color: var(--done);    border-color: rgba(0,255,159,0.3); }
.badge.active  { background: rgba(0,212,255,0.09);  color: var(--active);  border-color: rgba(0,212,255,0.32); }
.badge.planned { background: rgba(191,90,242,0.09); color: var(--planned); border-color: rgba(191,90,242,0.3); }
.badge.future  { background: rgba(78,110,132,0.1);  color: var(--future);  border-color: rgba(78,110,132,0.25); }

/* ── timeline ───────────────────────────────────────── */

.timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
  margin-top: 0.9rem;
  position: relative;
  align-items: start;
}

/* connecting line — sits at center of 24px dot */
.timeline::before {
  content: "";
  position: absolute;
  top: 11px;
  left: calc(12.5% + 12px);
  right: calc(12.5% + 12px);
  height: 2px;
  background: linear-gradient(90deg,
    var(--done) 0%, var(--done) 25%,
    rgba(0,212,255,0.55) 25%, rgba(0,212,255,0.55) 50%,
    rgba(191,90,242,0.4) 50%, rgba(191,90,242,0.4) 75%,
    rgba(78,110,132,0.22) 75%
  );
  z-index: 0;
}

.timeline-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* larger, more prominent dots */
.timeline-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  border: 2px solid;
  flex-shrink: 0;
}
.timeline-dot.done    { background: var(--done);    border-color: var(--done);    box-shadow: 0 0 16px rgba(0,255,159,0.8), 0 0 32px rgba(0,255,159,0.3); }
.timeline-dot.active  { background: var(--active);  border-color: var(--active);  box-shadow: 0 0 16px rgba(0,212,255,0.9), 0 0 32px rgba(0,212,255,0.4); animation: dot-pulse 1.6s ease-in-out infinite; }
.timeline-dot.planned { background: rgba(191,90,242,0.12); border-color: var(--planned); box-shadow: 0 0 10px rgba(191,90,242,0.4); }
.timeline-dot.future  { background: transparent;    border-color: var(--future);  opacity: 0.5; }

.timeline-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.1rem;
  text-align: center;
}
.timeline-label.done    { color: var(--done);    text-shadow: 0 0 12px rgba(0,255,159,0.5); }
.timeline-label.active  { color: var(--active);  text-shadow: 0 0 12px rgba(0,212,255,0.6); }
.timeline-label.planned { color: var(--planned); text-shadow: 0 0 10px rgba(191,90,242,0.4); }
.timeline-label.future  { color: var(--future); }

.timeline-status {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58em;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  margin-bottom: 0.5rem;
  opacity: 0.75;
}

/* card per quarter */
.timeline-card {
  width: 100%;
  background: linear-gradient(160deg, rgba(4,12,24,0.92), rgba(2,6,14,0.9));
  border: 1px solid;
  border-radius: 8px;
  padding: 0.6rem 0.7rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.timeline-card:hover { transform: translateY(-1px); }
.timeline-card.done    { border-color: rgba(0,255,159,0.22); }
.timeline-card.done:hover    { border-color: rgba(0,255,159,0.4);  box-shadow: 0 0 16px rgba(0,255,159,0.1); }
.timeline-card.active  { border-color: rgba(0,212,255,0.25); }
.timeline-card.active:hover  { border-color: rgba(0,212,255,0.45); box-shadow: 0 0 16px rgba(0,212,255,0.12); }
.timeline-card.planned { border-color: rgba(191,90,242,0.2); }
.timeline-card.planned:hover { border-color: rgba(191,90,242,0.38); box-shadow: 0 0 16px rgba(191,90,242,0.1); }
.timeline-card.future  { border-color: rgba(78,110,132,0.15); opacity: 0.75; }

.timeline-count {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.9em;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.08rem;
}
.timeline-count.done    { color: var(--done);    text-shadow: 0 0 14px rgba(0,255,159,0.5); }
.timeline-count.active  { color: var(--active);  text-shadow: 0 0 14px rgba(0,212,255,0.6); }
.timeline-count.planned { color: var(--planned); text-shadow: 0 0 12px rgba(191,90,242,0.4); }
.timeline-count.future  { color: var(--future); }

.timeline-count-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin-bottom: 0.55rem;
}

.timeline-items { display: flex; flex-direction: column; gap: 0.18rem; width: 100%; }
.timeline-item-line {
  font-size: 0.65em;
  color: var(--muted);
  font-family: 'JetBrains Mono', monospace;
  padding: 0.14rem 0.45rem;
  border-left: 2px solid rgba(0,212,255,0.12);
  line-height: 1.35;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.timeline-card:hover .timeline-item-line { color: rgba(200,216,232,0.7); border-left-color: rgba(0,212,255,0.25); }

/* ── quarter block ──────────────────────────────────── */

.q-block {
  position: relative;
  background: linear-gradient(160deg, rgba(4,12,24,0.95), rgba(2,6,14,0.93));
  border: 1px solid var(--border); border-radius: 10px; padding: 0.85rem 1rem;
  box-shadow: var(--shadow); overflow: hidden; margin-top: 0.5rem;
}
.q-block::after {
  content: ""; position: absolute; top: 7px; right: 7px;
  width: 9px; height: 9px; border-top: 1.5px solid var(--primary); border-right: 1.5px solid var(--primary);
  opacity: 0.4; border-radius: 0 4px 0 0;
}
.q-block.done    { border-color: rgba(0,255,159,0.2); }
.q-block.done::before    { content: ""; position: absolute; left:0; top:0; bottom:0; width:2px; background: linear-gradient(180deg, var(--done), transparent 80%); box-shadow: 0 0 8px rgba(0,255,159,0.5); }
.q-block.active  { border-color: rgba(0,212,255,0.22); }
.q-block.active::before  { content: ""; position: absolute; left:0; top:0; bottom:0; width:2px; background: linear-gradient(180deg, var(--active), transparent 80%); box-shadow: 0 0 8px rgba(0,212,255,0.6); }
.q-block.planned { border-color: rgba(191,90,242,0.18); }
.q-block.planned::before { content: ""; position: absolute; left:0; top:0; bottom:0; width:2px; background: linear-gradient(180deg, var(--planned), transparent 80%); box-shadow: 0 0 8px rgba(191,90,242,0.4); opacity:0.8; }
.q-block.future  { border-color: rgba(78,110,132,0.18); opacity: 0.8; }
.q-block.future::before  { content: ""; position: absolute; left:0; top:0; bottom:0; width:2px; background: linear-gradient(180deg, var(--future), transparent 80%); }

.q-header { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 0.75rem; }

.q-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.65em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 0.25rem 0.5rem; border-radius: 4px; border: 1px solid; white-space: nowrap; }
.q-tag.done    { color: var(--done);    border-color: rgba(0,255,159,0.35);  background: rgba(0,255,159,0.07); }
.q-tag.active  { color: var(--active);  border-color: rgba(0,212,255,0.38);  background: rgba(0,212,255,0.08); }
.q-tag.planned { color: var(--planned); border-color: rgba(191,90,242,0.32); background: rgba(191,90,242,0.07); }
.q-tag.future  { color: var(--future);  border-color: rgba(78,110,132,0.28); background: rgba(78,110,132,0.06); }

.q-title { font-family: 'JetBrains Mono', monospace; font-size: 1.1em; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; }
.q-title.done    { color: var(--done);    text-shadow: 0 0 12px rgba(0,255,159,0.4); }
.q-title.active  { color: var(--active);  text-shadow: 0 0 12px rgba(0,212,255,0.5); }
.q-title.planned { color: var(--planned); text-shadow: 0 0 10px rgba(191,90,242,0.4); }
.q-title.future  { color: var(--future); }

/* ── roadmap items ──────────────────────────────────── */

.rm-list { display: grid; gap: 0; }

/* 2-column items inside a single q-block */
.rm-list.cols-2 {
  grid-template-columns: 1fr 1fr;
  column-gap: 1.1rem;
}
.rm-list.cols-2 .rm-item {
  border-top: none;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.rm-list.cols-2 .rm-item:nth-child(1),
.rm-list.cols-2 .rm-item:nth-child(2) {
  padding-top: 0;
}

.rm-item {
  display: grid;
  grid-template-columns: 14px 1fr;
  column-gap: 0.6rem;
  align-items: start;
  padding: 0.52rem 0;
  border-top: 1px solid rgba(0,212,255,0.06);
}
.rm-item:first-child { border-top: 0; padding-top: 0; }

/* dot sits at cap-height of first text line */
.rm-dot { width: 9px; height: 9px; border-radius: 50%; margin-top: 0.27em; flex-shrink: 0; }
.rm-dot.done    { background: var(--done);    box-shadow: 0 0 8px rgba(0,255,159,0.7); }
.rm-dot.active  { background: var(--active);  box-shadow: 0 0 8px rgba(0,212,255,0.9); animation: dot-pulse 1.6s ease-in-out infinite; }
.rm-dot.planned { background: transparent; border: 1.5px solid var(--planned); box-shadow: 0 0 6px rgba(191,90,242,0.35); }
.rm-dot.future  { background: transparent; border: 1.5px solid var(--future); opacity: 0.5; }

.rm-title { font-family: 'JetBrains Mono', monospace; font-size: 0.86em; font-weight: 700; color: var(--text); margin-bottom: 0.16rem; line-height: 1.3; }
.rm-title.done    { color: var(--done);   text-shadow: 0 0 6px rgba(0,255,159,0.25); }
.rm-title.active  { color: var(--active); text-shadow: 0 0 6px rgba(0,212,255,0.3); }
.rm-title.planned { color: var(--text); }
.rm-title.future  { color: var(--muted); }

.rm-desc { font-size: 0.78em; color: var(--muted); line-height: 1.4; }
</style>

---
layout: center
---

<div class="center-xy">
  <div class="kicker">DAST Platform · 2025</div>
  <div class="hero-title">PT BB ROADMAP</div>
  <div class="hero-sub">
    от аудита политик до карты сайта
  </div>

  <div class="badge-row">
    <span class="badge done">Q1 ✓ Delivered</span>
    <span class="badge active">Q2 In Progress</span>
    <span class="badge planned">Q3 Planned</span>
    <span class="badge future">Q4 Future</span>
  </div>
</div>

<!--
Это роадмап PT BlackBox на 2025 год.
Четыре квартала — от уже доставленных фич до будущих планов.
-->

---

# ОБЗОР

<div class="timeline">

  <div class="timeline-col">
    <div class="timeline-dot done"></div>
    <div class="timeline-label done">Q1</div>
    <div class="timeline-status" style="color:var(--done);">Delivered</div>
    <div class="timeline-card done">
      <div class="timeline-count done">5</div>
      <div class="timeline-count-sub">фич доставлено</div>
      <div class="timeline-items">
        <div class="timeline-item-line">Аудит политик CSP</div>
        <div class="timeline-item-line">Уязвимости в PDF</div>
        <div class="timeline-item-line">Обновление базы знаний</div>
        <div class="timeline-item-line">Ускор. сканирование</div>
        <div class="timeline-item-line">Оптимизация API</div>
      </div>
    </div>
  </div>

  <div class="timeline-col">
    <div class="timeline-dot active"></div>
    <div class="timeline-label active">Q2</div>
    <div class="timeline-status" style="color:var(--active);">In Progress</div>
    <div class="timeline-card active">
      <div class="timeline-count active">3</div>
      <div class="timeline-count-sub">фичи в работе</div>
      <div class="timeline-items">
        <div class="timeline-item-line">Сканирование SPA</div>
        <div class="timeline-item-line">Новые тесты (OAST)</div>
        <div class="timeline-item-line">Поддержка SSRF</div>
      </div>
    </div>
  </div>

  <div class="timeline-col">
    <div class="timeline-dot planned"></div>
    <div class="timeline-label planned">Q3</div>
    <div class="timeline-status" style="color:var(--planned);">Planned</div>
    <div class="timeline-card planned">
      <div class="timeline-count planned">3</div>
      <div class="timeline-count-sub">фичи запланированы</div>
      <div class="timeline-items">
        <div class="timeline-item-line">Обновление UI</div>
        <div class="timeline-item-line">Улучшенный логин</div>
        <div class="timeline-item-line">Автовход по сценариям</div>
      </div>
    </div>
  </div>

  <div class="timeline-col">
    <div class="timeline-dot future"></div>
    <div class="timeline-label future">Q4</div>
    <div class="timeline-status" style="color:var(--future);">Future</div>
    <div class="timeline-card future">
      <div class="timeline-count future">2</div>
      <div class="timeline-count-sub">фичи в плане</div>
      <div class="timeline-items">
        <div class="timeline-item-line">Карта сайта</div>
        <div class="timeline-item-line">Повторная проверка</div>
      </div>
    </div>
  </div>

</div>

<!--
Первый квартал полностью закрыт.
Сейчас работаем над Q2 — три инициативы в активной разработке.
Q3 и Q4 запланированы и детализированы.
-->

---

# Q1 — DELIVERED

<div class="q-block done">
  <div class="q-header">
    <span class="q-tag done">✓ Delivered</span>
    <span class="q-title done">Q1 2025</span>
  </div>

  <div class="rm-list">
    <div class="rm-item">
      <div class="rm-dot done"></div>
      <div>
        <div class="rm-title done">Аудит политик CSP</div>
        <div class="rm-desc">15+ новых проверок: страницы корректно ограничивают загрузку внешних ресурсов.</div>
      </div>
    </div>
    <div class="rm-item">
      <div class="rm-dot done"></div>
      <div>
        <div class="rm-title done">Уязвимости в PDF-файлах</div>
        <div class="rm-desc">Новый механизм поиска проблем обработки PDF — защита от скрытых атак.</div>
      </div>
    </div>
    <div class="rm-item">
      <div class="rm-dot done"></div>
      <div>
        <div class="rm-title done">Обновление базы знаний</div>
        <div class="rm-desc">Регулярные версии — актуальность проверок и соответствие последним угрозам.</div>
      </div>
    </div>
    <div class="rm-item">
      <div class="rm-dot done"></div>
      <div>
        <div class="rm-title done">Ускоренное сканирование однотипных сайтов</div>
        <div class="rm-desc">Оптимизированы алгоритмы — время проверки больших порталов сокращено без потери качества.</div>
      </div>
    </div>
    <div class="rm-item">
      <div class="rm-dot done"></div>
      <div>
        <div class="rm-title done">Оптимальная работа с описаниями API</div>
        <div class="rm-desc">Ускоренная загрузка и обработка схем — быстрее проверяем сложные интеграции.</div>
      </div>
    </div>
  </div>
</div>

<!--
Первый квартал закрыт полностью.
Пять фич — от новых проверок безопасности до оптимизации производительности сканирования.
-->

---

# Q2 — IN PROGRESS

<div class="q-block active">
  <div class="q-header">
    <span class="q-tag active">⬡ In Progress</span>
    <span class="q-title active">Q2 2025</span>
  </div>

  <div class="rm-list">
    <div class="rm-item">
      <div class="rm-dot active"></div>
      <div>
        <div class="rm-title active">Сканирование SPA (одностраничных приложений)</div>
        <div class="rm-desc">Динамический сканер SPA обеспечивает полное покрытие клиентских путей без необходимости готовить HAR или API-схемы. Ускоряет запуск тестов, повышает достоверность результатов и снижает операционные расходы.</div>
      </div>
    </div>
    <div class="rm-item">
      <div class="rm-dot active"></div>
      <div>
        <div class="rm-title active">Новые типы тестов (OAST)</div>
        <div class="rm-desc">Проверка уязвимостей, требующих обратной связи от сервера — например, проверка веб-хуков.</div>
      </div>
    </div>
    <div class="rm-item">
      <div class="rm-dot active"></div>
      <div>
        <div class="rm-title active">Поддержка уязвимости типа SSRF</div>
        <div class="rm-desc">Server-Side Request Forgery — обнаружение атак на внутреннюю инфраструктуру через уязвимый сервер.</div>
      </div>
    </div>
  </div>
</div>

<!--
Три инициативы в активной разработке.
Главная — поддержка SPA: это стратегически важная фича для расширения применимости продукта.
-->

---

# Q3 — PLANNED

<div class="q-block planned">
  <div class="q-header">
    <span class="q-tag planned">○ Planned</span>
    <span class="q-title planned">Q3 2025</span>
  </div>

  <div class="rm-list">
    <div class="rm-item">
      <div class="rm-dot planned"></div>
      <div>
        <div class="rm-title">Обновление UI продукта</div>
        <div class="rm-desc">Обновление интерфейса для улучшения usability и соответствия текущим стандартам продукта.</div>
      </div>
    </div>
    <div class="rm-item">
      <div class="rm-dot planned"></div>
      <div>
        <div class="rm-title">Улучшенный процесс входа</div>
        <div class="rm-desc">После успешного логина — переход к нужной странице. При ошибках сохраняются запросы и ответы для быстрой диагностики.</div>
      </div>
    </div>
    <div class="rm-item">
      <div class="rm-dot planned"></div>
      <div>
        <div class="rm-title">Автоматический вход по записанным сценариям</div>
        <div class="rm-desc">Система воспроизводит действия пользователя в браузере — упрощает проверку сложных процессов аутентификации.</div>
      </div>
    </div>
  </div>
</div>

<!--
Третий квартал сфокусирован на UX.
Обновление UI, улучшение процесса аутентификации и автоматизация входа.
-->

---

# Q4 — FUTURE

<div class="q-block future">
  <div class="q-header">
    <span class="q-tag future">◌ Future</span>
    <span class="q-title future">Q4 2025</span>
  </div>

  <div class="rm-list">
    <div class="rm-item">
      <div class="rm-dot future"></div>
      <div>
        <div class="rm-title future">Поддержка карты сайта</div>
        <div class="rm-desc">Выдача пользователю полной информации о сканируемых веб-объектах — «карта сайта» со структурой и покрытием.</div>
      </div>
    </div>
    <div class="rm-item">
      <div class="rm-dot future"></div>
      <div>
        <div class="rm-title future">Возможность повторной проверки найденных уязвимостей</div>
        <div class="rm-desc">Мгновенная проверка исправленных уязвимостей без повторного сканирования всего приложения. Существенно сокращает время верификации и снижает шум от лишних сканов.</div>
      </div>
    </div>
  </div>
</div>

<!--
Четвёртый квартал пока в планировании.
Карта сайта и повторная верификация — это две фичи, которые напрямую снижают операционную нагрузку команд безопасности.
-->
