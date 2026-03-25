---
theme: default
title: Продуктовые цели Q2
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
css: unocss
fonts:
  sans: 'JetBrains Mono, Inter, Consolas, monospace'
  mono: 'JetBrains Mono, Fira Code, monospace'
transition: slide-left
---

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes neon-pulse {
  0%, 100% { box-shadow: 0 0 8px rgba(0, 212, 255, 0.3), 0 0 20px rgba(0, 212, 255, 0.1); }
  50% { box-shadow: 0 0 16px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.15); }
}

:root {
  --bg-0: #04080f;
  --bg-1: #080e1a;
  --bg-2: #0c1422;
  --line: rgba(0, 212, 255, 0.055);

  --text: #ccd8e8;
  --muted: #5a7a92;

  --primary: #00d4ff;
  --danger: #ff2d78;
  --success: #00ff9f;
  --accent: #bf5af2;
  --warning: #ffe600;

  --border: rgba(0, 212, 255, 0.13);
  --shadow: 0 12px 35px rgba(0, 0, 0, 0.5);
}

html, body, #app {
  background: var(--bg-0);
}

.slidev-layout {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse 60% 50% at 90% 5%, rgba(0, 212, 255, 0.09), transparent),
    radial-gradient(ellipse 50% 40% at 5% 95%, rgba(191, 90, 242, 0.07), transparent),
    linear-gradient(160deg, var(--bg-0) 0%, var(--bg-1) 60%, var(--bg-2) 100%);
  color: var(--text);
  font-family: 'Inter', 'JetBrains Mono', monospace;
  padding: 1.15rem 1.35rem !important;
}

.slidev-layout::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 0;
}

.slidev-layout::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0, 0, 0, 0.025) 3px,
    rgba(0, 0, 0, 0.025) 4px
  );
  pointer-events: none;
  z-index: 2;
}

.slidev-layout > * {
  position: relative;
  z-index: 1;
}

h1, h2, h3, h4 {
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: -0.02em;
  margin-top: 0;
}

h1 {
  font-size: 1.9em;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  display: inline-block;
  line-height: 1.05;
  text-shadow:
    0 0 10px rgba(0, 212, 255, 0.7),
    0 0 30px rgba(0, 212, 255, 0.25);
}

h1::before {
  content: "> ";
  color: var(--danger);
  font-weight: 500;
  text-shadow: 0 0 10px rgba(255, 45, 120, 0.7);
}

h2 {
  font-size: 1.1em;
  font-weight: 700;
  color: var(--danger);
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(255, 45, 120, 0.5);
}

h3 {
  font-size: 0.88em;
  font-weight: 700;
  color: var(--muted);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

p {
  line-height: 1.45;
  margin: 0.2rem 0 0.45rem;
  font-size: 0.95em;
}

.small {
  font-size: 0.82em;
  color: var(--muted);
}

.muted {
  color: var(--muted);
}

.center-xy {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.kicker {
  display: inline-block;
  margin-bottom: 0.7rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.76em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--success);
  text-shadow: 0 0 14px rgba(0, 255, 159, 0.45);
}

.kicker::before {
  content: "[ ";
  color: var(--danger);
  text-shadow: 0 0 8px rgba(255, 45, 120, 0.6);
}

.kicker::after {
  content: " ]";
  color: var(--danger);
  text-shadow: 0 0 8px rgba(255, 45, 120, 0.6);
}

.hero-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 3em;
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 0.45rem;
  text-align: center;
  text-shadow:
    0 0 20px rgba(0, 212, 255, 0.8),
    0 0 60px rgba(0, 212, 255, 0.3),
    0 0 100px rgba(0, 212, 255, 0.1);
}

.hero-title::before {
  content: "> ";
  color: var(--danger);
  font-weight: 400;
  text-shadow: 0 0 14px rgba(255, 45, 120, 0.8);
}

.hero-title::after {
  content: "_";
  color: var(--primary);
  animation: blink 1.1s step-end infinite;
  margin-left: 0.04em;
  font-weight: 300;
}

.hero-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.12em;
  color: var(--success);
  margin-bottom: 1.2rem;
  opacity: 0.9;
  line-height: 1.45;
  text-align: center;
  text-shadow: 0 0 16px rgba(0, 255, 159, 0.4);
}

.hero-line {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.18em;
  line-height: 1.25;
  font-weight: 700;
  color: var(--success);
  margin-bottom: 0.65rem;
  text-shadow: 0 0 14px rgba(0, 255, 159, 0.45);
}

.hero-line::before {
  content: "// ";
  color: var(--danger);
  font-weight: 500;
  text-shadow: 0 0 10px rgba(255, 45, 120, 0.65);
}

.panel {
  position: relative;
  background: linear-gradient(160deg, rgba(6, 14, 28, 0.94), rgba(3, 8, 18, 0.92));
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.85rem 1rem 0.8rem;
  box-shadow: var(--shadow), 0 0 0 1px rgba(0, 212, 255, 0.04) inset;
  backdrop-filter: blur(10px);
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
  margin-top: 0.5rem;
}

.panel:hover {
  border-color: rgba(0, 212, 255, 0.38);
  box-shadow:
    var(--shadow),
    0 0 22px rgba(0, 212, 255, 0.14),
    0 0 50px rgba(0, 212, 255, 0.06);
  transform: translateY(-1px);
}

.panel::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--primary) 0%, rgba(0, 212, 255, 0.2) 70%, transparent 100%);
  box-shadow: 0 0 8px rgba(0, 212, 255, 0.6);
  opacity: 0.9;
}

.panel::after {
  content: "";
  position: absolute;
  top: 7px;
  right: 7px;
  width: 9px;
  height: 9px;
  border-top: 1.5px solid var(--primary);
  border-right: 1.5px solid var(--primary);
  opacity: 0.45;
  border-radius: 0 4px 0 0;
  transition: opacity 0.25s ease, box-shadow 0.25s ease;
}

.panel:hover::after {
  opacity: 0.9;
  box-shadow: 2px -2px 8px rgba(0, 212, 255, 0.5);
}

.status {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68em;
  line-height: 1;
  padding: 0.3rem 0.52rem;
  border-radius: 4px;
  margin-bottom: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.status.active {
  background: rgba(0, 255, 159, 0.07);
  border: 1px solid rgba(0, 255, 159, 0.3);
  color: var(--success);
  box-shadow: 0 0 10px rgba(0, 255, 159, 0.12);
}

.status.warning {
  background: rgba(255, 45, 120, 0.07);
  border: 1px solid rgba(255, 45, 120, 0.32);
  color: var(--danger);
  box-shadow: 0 0 10px rgba(255, 45, 120, 0.14);
}

.status.accent {
  background: rgba(191, 90, 242, 0.08);
  border: 1px solid rgba(191, 90, 242, 0.30);
  color: var(--accent);
  box-shadow: 0 0 10px rgba(191, 90, 242, 0.14);
}

.badge-row {
  display: flex;
  justify-content: center;
  gap: 0.45rem;
  flex-wrap: wrap;
  margin-top: 0.9rem;
}

.badge-row.left {
  justify-content: flex-start;
  margin-top: 0.5rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.62rem;
  border-radius: 4px;
  font-size: 0.72em;
  font-weight: 700;
  border: 1px solid transparent;
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  cursor: default;
}

.badge:hover { transform: translateY(-1px); }

.badge.primary {
  background: rgba(0, 212, 255, 0.09);
  color: var(--primary);
  border-color: rgba(0, 212, 255, 0.28);
}
.badge.primary:hover {
  border-color: rgba(0, 212, 255, 0.55);
  box-shadow: 0 0 16px rgba(0, 212, 255, 0.25);
}

.badge.success {
  background: rgba(0, 255, 159, 0.07);
  color: var(--success);
  border-color: rgba(0, 255, 159, 0.26);
}
.badge.success:hover {
  border-color: rgba(0, 255, 159, 0.5);
  box-shadow: 0 0 16px rgba(0, 255, 159, 0.2);
}

.badge.danger {
  background: rgba(255, 45, 120, 0.09);
  color: var(--danger);
  border-color: rgba(255, 45, 120, 0.28);
}
.badge.danger:hover {
  border-color: rgba(255, 45, 120, 0.52);
  box-shadow: 0 0 16px rgba(255, 45, 120, 0.22);
}

.badge.accent {
  background: rgba(191, 90, 242, 0.09);
  color: var(--accent);
  border-color: rgba(191, 90, 242, 0.28);
}
.badge.accent:hover {
  border-color: rgba(191, 90, 242, 0.52);
  box-shadow: 0 0 16px rgba(191, 90, 242, 0.2);
}

.badge.warning {
  background: rgba(255, 230, 0, 0.07);
  color: var(--warning);
  border-color: rgba(255, 230, 0, 0.26);
}
.badge.warning:hover {
  border-color: rgba(255, 230, 0, 0.5);
  box-shadow: 0 0 16px rgba(255, 230, 0, 0.18);
}

.signal-list {
  display: grid;
  gap: 0.5rem;
}

.signal {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 0.7rem;
  align-items: start;
  padding: 0.5rem 0;
  border-top: 1px solid rgba(0, 212, 255, 0.07);
}

.signal:first-child {
  border-top: 0;
  padding-top: 0;
}

.signal-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--primary);
  opacity: 0.6;
  line-height: 1.4;
}

.signal-value {
  line-height: 1.42;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 0.7rem;
}

.metric-grid.cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.metric-grid.cols-2 {
  grid-template-columns: 1fr 1fr;
}

.metric {
  background: rgba(0, 212, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 8px;
  padding: 0.75rem;
  transition: transform 0.18s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.metric:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 212, 255, 0.32);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.1);
}

.metric-label {
  font-family: 'JetBrains Mono', monospace;
  color: var(--muted);
  font-size: 0.68em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.35rem;
  line-height: 1.35;
}

.metric-value {
  font-family: 'JetBrains Mono', monospace;
  color: var(--primary);
  font-size: 1.2em;
  font-weight: 800;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.45);
}

.note {
  margin-top: 0.65rem;
  padding-top: 0.65rem;
  border-top: 1px solid rgba(0, 212, 255, 0.08);
  color: var(--muted);
  font-size: 0.86em;
}

.flow {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
  margin-top: 0.4rem;
}

.flow .node {
  padding: 0.22rem 0.5rem;
  border-radius: 4px;
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.16);
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.flow .node:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 212, 255, 0.42);
  box-shadow: 0 0 14px rgba(0, 212, 255, 0.18);
}

.flow .arrow {
  color: var(--primary);
  font-weight: 700;
  padding: 0 0.1rem;
  text-shadow: 0 0 8px rgba(0, 212, 255, 0.55);
}

.stack {
  display: grid;
  gap: 0.6rem;
}

.grid-2-even {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.slidev-layout ul {
  margin-top: 0.45rem;
  padding-left: 0;
  list-style: none;
}

.slidev-layout ul li {
  position: relative;
  padding-left: 1.2rem;
  margin: 0.45rem 0;
  line-height: 1.45;
  font-size: 0.95em;
}

.slidev-layout ul li::before {
  content: "→";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--primary);
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  text-shadow: 0 0 6px rgba(0, 212, 255, 0.5);
}

.slidev-layout code {
  font-family: 'JetBrains Mono', monospace;
  background: rgba(0, 212, 255, 0.06);
  border: 1px solid rgba(0, 212, 255, 0.14);
  padding: 0.1rem 0.32rem;
  border-radius: 4px;
  color: var(--primary);
}

/* analytics big number */
.big-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2.2em;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.15rem;
}

.big-num.c-primary { color: var(--primary); text-shadow: 0 0 14px rgba(0,212,255,0.5); }
.big-num.c-accent  { color: var(--accent);  text-shadow: 0 0 14px rgba(191,90,242,0.5); }
.big-num.c-danger  { color: var(--danger);  text-shadow: 0 0 14px rgba(255,45,120,0.5); }
.big-num.c-warning { color: var(--warning); text-shadow: 0 0 14px rgba(255,230,0,0.4); }
.big-num.c-success { color: var(--success); text-shadow: 0 0 14px rgba(0,255,159,0.5); }

.goal-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--muted);
  margin-bottom: 0.25rem;
}

/* table */
.map-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.6em;
  line-height: 1.2;
  table-layout: fixed;
}

.map-table th {
  padding: 5px 4px;
  text-align: left;
  color: var(--primary);
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.95em;
  border-bottom: 1px solid rgba(0,212,255,0.18);
}

.map-table td {
  padding: 4px;
  border-bottom: 1px solid rgba(0,212,255,0.06);
  text-align: center;
  vertical-align: middle;
}

.map-table td:nth-child(2) {
  text-align: left;
  color: var(--text);
}

.map-table tr:hover td {
  background: rgba(0,212,255,0.03);
}

.map-table .check { color: var(--success); }
.map-table .partial { color: var(--warning); }
.map-table .none { color: var(--muted); opacity: 0.4; }
</style>

---
layout: center
---

<div class="center-xy">
  <div class="kicker">product roadmap × q2 2026</div>
  <div class="hero-title">ПРОДУКТОВЫЕ ЦЕЛИ Q2</div>
  <div class="hero-sub">
    12 инициатив · 5 стратегических направлений
  </div>

  <div class="badge-row">
    <span class="badge primary">SAST</span>
    <span class="badge danger">DAST</span>
    <span class="badge warning">SCA</span>
    <span class="badge accent">AI</span>
    <span class="badge success">Roadmap</span>
  </div>
</div>

---

# СТРАТЕГИЧЕСКИЙ КОНТЕКСТ

<div class="metric-grid cols-5" style="margin-top: 1rem;">
  <div class="metric">
    <div class="metric-label">Лидерство<br>SAST РФ</div>
    <div class="metric-value" style="color: var(--primary);">SAST РФ</div>
  </div>
  <div class="metric">
    <div class="metric-label">Кратный рост<br>на международке</div>
    <div class="metric-value" style="color: var(--accent);">GLOBAL</div>
  </div>
  <div class="metric">
    <div class="metric-label">Войти в рынок<br>SCA + OSA</div>
    <div class="metric-value" style="color: var(--danger);">SCA+OSA</div>
  </div>
  <div class="metric">
    <div class="metric-label">Увеличить<br>средний чек</div>
    <div class="metric-value" style="color: var(--warning);">ЧЕК ↑</div>
  </div>
  <div class="metric">
    <div class="metric-label">Забирать тендеры<br>с меньшим чеком</div>
    <div class="metric-value" style="color: var(--success);">WIN</div>
  </div>
</div>

<div class="panel" style="margin-top: 1rem;">
  <div class="hero-line" style="font-size: 1em; margin-bottom: 0;">каждая инициатива Q2 напрямую связана с одной или несколькими из этих целей</div>
</div>

---

# 1. ГИБКОЕ ЛИЦЕНЗИРОВАНИЕ

<div class="panel">
  <div class="status accent">Кастомизация · Модульность</div>
  <div class="hero-line">модули продаются независимо — клиент платит за то, что использует</div>
  <p>Включать и отключать функциональные модули (UI для импорта правил Semgrep, Malicious Code) как отдельные лицензируемые возможности. Прозрачная коммуникация доступности модулей и механизмы активации лицензий без изменения архитектуры.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge primary">SAST РФ</span>
      <span class="badge success">Новые тендеры</span>
      <span class="badge warning">Средний чек ↑</span>
      <span class="badge danger">SCA+OSA ⚠</span>
    </div>
  </div>
</div>

---

# 2. ИНТЕГРАЦИЯ ASTA И VISTA

<div class="panel">
  <div class="status accent">Кастомизация · Модульность · Качество</div>
  <div class="hero-line">AI-результаты исследований становятся частью продуктового сценария</div>
  <p>Анализ результатов ASTA и VISTA, формирование стратегии внедрения и roadmap интеграции. В рамках квартала — загрузка SARIF-отчётов для быстрой интеграции с ASTA. Кросс-сценарий: пользователь получает результаты модуля и через AI работает с ними.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge primary">SAST РФ</span>
      <span class="badge warning">Средний чек ↑</span>
      <span class="badge accent">Международка</span>
    </div>
  </div>
</div>

---

# 3. ПЛАН «ОБЛЕГЧЕНИЯ» JSA

<div class="panel">
  <div class="status accent">Кастомизация · Качество и скорость</div>
  <div class="hero-line">анализ без тяжёлых зависимостей — прямо в IDE</div>
  <p>Архитектурный анализ и план доработки JSA для создания легковесного анализатора с поддержкой IDE-плагинов. Определить возможные упрощения, ожидаемое снижение времени выполнения и требования к реализации.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge success">Новые тендеры</span>
      <span class="badge accent">Международка</span>
    </div>
  </div>
</div>

---

# 4. ПОДДЕРЖКА DART / FLUTTER

<div class="panel">
  <div class="status active">Качество и скорость анализа</div>
  <div class="hero-line">taint-анализ для глобального Flutter-рынка</div>
  <p>Выпустить релиз AIE с поддержкой анализа языка Dart (фреймворк Flutter) в ядре AI.Taint. Корректное обнаружение уязвимостей без ухудшения производительности анализа существующих языков.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge accent">Международка</span>
    </div>
  </div>
</div>

---

# 5. РАЗВЯЗКА ПРОЕКТОВ SAST / DAST

<div class="panel">
  <div class="status warning">Модульность</div>
  <div class="hero-line">black-box сканирование без обязательного исходного кода</div>
  <p>Создание проектов и выполнение сканирования в режиме «чёрного ящика» без загрузки исходного кода. Позволяет анализировать развёрнутые приложения и снизить барьер входа для DAST и других технологий.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge danger">SCA+OSA</span>
      <span class="badge accent">Международка</span>
    </div>
  </div>
</div>

---

# 6. ПОДДЕРЖКА ЗАГРУЗКИ SBOM

<div class="panel">
  <div class="status warning">Модульность</div>
  <div class="hero-line">анализ зависимостей без доступа к исходному коду</div>
  <p>Загрузка сторонних SBOM как входного сценария анализа зависимостей в SCA. Возможность анализа сторонних компонентов без обязательного доступа к исходному коду проекта.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge danger">SCA+OSA</span>
      <span class="badge accent">Международка</span>
    </div>
  </div>
</div>

---

# 7. ВЫБОР ДВИЖКА TAINT-АНАЛИЗА

<div class="panel">
  <div class="status active">Качество и скорость анализа</div>
  <div class="hero-line">архитектурное решение определяет развитие на следующие годы</div>
  <p>Определить целевой движок taint-анализа: flowgrep или текущий taint. Сравнительный анализ обоих подходов, оценка трудозатрат и рисков для двух сценариев — миграции на flowgrep и эволюции текущего движка. Фиксация обоснованного решения с планом развития.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge primary">SAST РФ</span>
    </div>
  </div>
</div>

---

# 8. МАТЧИНГ УЯЗВИМЫХ ЗАВИСИМОСТЕЙ

<div class="panel">
  <div class="status warning">Модульность · Качество и скорость</div>
  <div class="hero-line">точность SCA: только реально используемые уязвимости</div>
  <p>Добавить в ядро JSA механизм определения использования уязвимых методов из транзитивных зависимостей. Повышает точность анализа SCA и уменьшает количество нерелевантных находок.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge primary">SAST РФ</span>
      <span class="badge danger">SCA+OSA</span>
    </div>
  </div>
</div>

---

# 9. АВТООБНОВЛЕНИЕ ЭКСПЕРТИЗЫ SCA

<div class="panel">
  <div class="status warning">Модульность · Качество и скорость</div>
  <div class="hero-line">база уязвимостей актуальна без ручного вмешательства</div>
  <p>MVP механизма автообновления фидов SCA через GUS. Автоматическая доставка актуальной информации об уязвимостях без необходимости ручного обновления продукта.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge primary">SAST РФ</span>
      <span class="badge danger">SCA+OSA</span>
      <span class="badge accent">Международка</span>
    </div>
  </div>
</div>

---

# 10. КАРТОЧКА УЯЗВИМОСТИ SCA

<div class="panel">
  <div class="status warning">Модульность · Качество и скорость</div>
  <div class="hero-line">пользователь понимает уязвимость — продукт используется</div>
  <p>Обновление карточки уязвимости SCA с учётом нового формата фидов. Расширенные данные: описание, условия эксплуатации, workaround. Улучшение удобства анализа результатов.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge warning">Средний чек ↑</span>
      <span class="badge danger">SCA+OSA</span>
    </div>
  </div>
</div>

---

# 11. TRIAGE ACCELERATOR

<div class="panel">
  <div class="status active">Качество и скорость анализа</div>
  <div class="hero-line">AI сокращает время ручного triage уязвимостей</div>
  <p>Разработать требования (Q1) и реализовать MVP Triage Accelerator (Q2). Ускорение triage результатов анализа и снижение времени ручной обработки за счёт автоматизированных подсказок и аналитики.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge primary">SAST РФ</span>
      <span class="badge accent">Международка</span>
    </div>
  </div>
</div>

---

# 12. ML-ДЕТЕКТИРОВАНИЕ MALICIOUS CODE

<div class="panel">
  <div class="status active">Качество и скорость анализа</div>
  <div class="hero-line">ML обнаруживает вредоносный код без деградации анализа</div>
  <p>Поддержка обнаружения вредоносного кода на основе ML-модели. Выявление подозрительных конструкций без деградации существующих метрик точности анализа.</p>
  <div class="note">
    <div class="badge-row left">
      <span class="badge primary">SAST РФ</span>
      <span class="badge accent">Международка</span>
    </div>
  </div>
</div>

---
layout: two-cols
---

# АНАЛИТИКА ЦЕЛЕЙ

<div class="stack" style="margin-top: 0.6rem;">

  <div class="metric" style="border-color: rgba(191,90,242,0.22);">
    <div class="goal-label">Кратный рост · международный рынок</div>
    <div class="big-num c-accent">8</div>
    <div class="small">инициатив: #2 #3 #4 #5 #6 #9 #11 #12</div>
  </div>

  <div class="metric" style="border-color: rgba(0,212,255,0.22);">
    <div class="goal-label">Лидерство в SAST · рынок РФ</div>
    <div class="big-num c-primary">7</div>
    <div class="small">инициатив: #1 #2 #7 #8 #9 #11 #12</div>
  </div>

  <div class="metric" style="border-color: rgba(255,45,120,0.22);">
    <div class="goal-label">Войти в рынок SCA + OSA</div>
    <div class="big-num c-danger">6</div>
    <div class="small">инициатив: #1 #5 #6 #8 #9 #10</div>
  </div>

  <div class="metric" style="border-color: rgba(255,230,0,0.2);">
    <div class="goal-label">Увеличить средний чек</div>
    <div class="big-num c-warning">3</div>
    <div class="small">инициатив: #1 #2 #10</div>
  </div>

  <div class="metric" style="border-color: rgba(0,255,159,0.2);">
    <div class="goal-label">Забирать тендеры с меньшим чеком</div>
    <div class="big-num c-success">2</div>
    <div class="small">инициатив: #1 #3</div>
  </div>

</div>

::right::

<div class="signal-list" style="margin-top: 0.6rem;">

  <div class="signal">
    <div class="signal-label" style="color: var(--accent); opacity: 1;">Международка</div>
    <div class="signal-value">
      <div class="flow">
        <span class="node">#2</span><span class="node">#3</span><span class="node">#4</span><span class="node">#5</span><span class="node">#6</span><span class="node">#9</span><span class="node">#11</span><span class="node">#12</span>
      </div>
    </div>
  </div>

  <div class="signal">
    <div class="signal-label" style="color: var(--primary); opacity: 1;">SAST РФ</div>
    <div class="signal-value">
      <div class="flow">
        <span class="node">#1</span><span class="node">#2</span><span class="node">#7</span><span class="node">#8</span><span class="node">#9</span><span class="node">#11</span><span class="node">#12</span>
      </div>
    </div>
  </div>

  <div class="signal">
    <div class="signal-label" style="color: var(--danger); opacity: 1;">SCA+OSA</div>
    <div class="signal-value">
      <div class="flow">
        <span class="node">#1</span><span class="node">#5</span><span class="node">#6</span><span class="node">#8</span><span class="node">#9</span><span class="node">#10</span>
      </div>
    </div>
  </div>

  <div class="signal">
    <div class="signal-label" style="color: var(--warning); opacity: 1;">Средний чек</div>
    <div class="signal-value">
      <div class="flow">
        <span class="node">#1</span><span class="node">#2</span><span class="node">#10</span>
      </div>
    </div>
  </div>

  <div class="signal">
    <div class="signal-label" style="color: var(--success); opacity: 1;">Тендеры</div>
    <div class="signal-value">
      <div class="flow">
        <span class="node">#1</span><span class="node">#3</span>
      </div>
    </div>
  </div>

</div>

<div class="note" style="margin-top: 1rem;">
  Большинство инициатив работает сразу на несколько стратегических целей.<br>
  #1 и #2 — наиболее кросс-функциональные (4 цели каждая).
</div>

---

# МАППИНГ: ИНИЦИАТИВЫ → СТРАТЕГИЧЕСКИЕ ЦЕЛИ

<div class="panel" style="padding: 0.6rem 0.75rem; margin-top: 0.4rem;">
<table class="map-table">
<thead>
<tr>
  <th style="width: 4%;">#</th>
  <th style="width: 30%; text-align: left;">Инициатива</th>
  <th style="width: 13%;">SAST РФ</th>
  <th style="width: 13%;">Тендеры</th>
  <th style="width: 13%;">Сред. чек</th>
  <th style="width: 13%;">SCA+OSA</th>
  <th style="width: 14%;">Международка</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>Гибкое лицензирование</td><td class="check">✔</td><td class="check">✔</td><td class="check">✔</td><td class="partial">⚠</td><td class="none">—</td></tr>
<tr><td>2</td><td>ASTA / VISTA</td><td class="check">✔</td><td class="none">—</td><td class="check">✔</td><td class="none">—</td><td class="check">✔</td></tr>
<tr><td>3</td><td>Облегчение JSA</td><td class="none">—</td><td class="check">✔</td><td class="none">—</td><td class="none">—</td><td class="check">✔</td></tr>
<tr><td>4</td><td>Dart / Flutter</td><td class="none">—</td><td class="none">—</td><td class="none">—</td><td class="none">—</td><td class="check">✔</td></tr>
<tr><td>5</td><td>Развязка SAST / DAST</td><td class="none">—</td><td class="none">—</td><td class="none">—</td><td class="check">✔</td><td class="check">✔</td></tr>
<tr><td>6</td><td>Загрузка SBOM</td><td class="none">—</td><td class="none">—</td><td class="none">—</td><td class="check">✔</td><td class="check">✔</td></tr>
<tr><td>7</td><td>Выбор движка taint</td><td class="check">✔</td><td class="none">—</td><td class="none">—</td><td class="none">—</td><td class="none">—</td></tr>
<tr><td>8</td><td>Матчинг зависимостей</td><td class="check">✔</td><td class="none">—</td><td class="none">—</td><td class="check">✔</td><td class="none">—</td></tr>
<tr><td>9</td><td>Автообновление SCA</td><td class="check">✔</td><td class="none">—</td><td class="none">—</td><td class="check">✔</td><td class="check">✔</td></tr>
<tr><td>10</td><td>Карточка уязвимости SCA</td><td class="none">—</td><td class="none">—</td><td class="check">✔</td><td class="check">✔</td><td class="none">—</td></tr>
<tr><td>11</td><td>Triage Accelerator</td><td class="check">✔</td><td class="none">—</td><td class="none">—</td><td class="none">—</td><td class="check">✔</td></tr>
<tr><td>12</td><td>ML Malicious Code</td><td class="check">✔</td><td class="none">—</td><td class="none">—</td><td class="none">—</td><td class="check">✔</td></tr>
</tbody>
</table>
<div class="small" style="margin-top: 0.5rem; opacity: 0.7;">✔ явный вклад &nbsp;·&nbsp; ⚠ частичный вклад &nbsp;·&nbsp; — не заявлено</div>
</div>
