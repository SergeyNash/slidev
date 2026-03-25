---
theme: default
highlighter: shiki
mermaid: true
lineNumbers: false
drawings:
  persist: false
css: unocss
fonts:
  sans: 'Orbitron, Rajdhani, Inter, system-ui'
  mono: 'Fira Code, JetBrains Mono, monospace'
---

<style>
/* Импорт киберпанк-шрифтов */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');

/* Киберпанк-анимации */
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@keyframes glitch-text {
  0% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  14% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  15% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.05em 0 #fc00ff; }
  49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.05em 0 #fc00ff; }
  50% { text-shadow: 0.025em 0.05em 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  99% { text-shadow: 0.025em 0.05em 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  100% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
}

@keyframes neon-pulse {
  0%, 100% { 
    text-shadow: 
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
  }
  50% { 
    text-shadow: 
      0 0 4px #fff,
      0 0 7px #fff,
      0 0 18px #fff,
      0 0 38px #f0f,
      0 0 73px #f0f,
      0 0 80px #f0f,
      0 0 94px #f0f,
      0 0 140px #f0f;
  }
}

@keyframes scanlines {
  0% { background-position: 0 0; }
  100% { background-position: 0 10px; }
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55% { opacity: 0.3; }
}

/* Базовые стили */
.slidev-layout {
  background: #0a0b0e;
  color: #00ff9d;
  font-family: 'Rajdhani', sans-serif;
  position: relative;
  overflow: hidden;
}

/* Киберпанк-сетка на фоне */
.slidev-layout::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 255, 157, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(0, 255, 157, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

/* Сканирующие линии */
.slidev-layout::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 255, 157, 0.03) 0px,
    rgba(0, 255, 157, 0.03) 2px,
    transparent 2px,
    transparent 6px
  );
  pointer-events: none;
  z-index: 0;
  animation: scanlines 6s linear infinite;
}

/* Контент поверх фона */
.slidev-layout > * {
  position: relative;
  z-index: 1;
}

/* Киберпанк-заголовки */
h1 {
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 3.5em;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  animation: glitch-text 3s infinite;
  margin-bottom: 0.5em;
}

h2 {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  color: #00ff9d;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-left: 4px solid #ff00ff;
  padding-left: 20px;
}

h3 {
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  color: #ff00ff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Неоновые карточки */
.border-2, .border, .rounded-lg, .rounded-xl {
  border-color: #00ff9d !important;
  box-shadow: 0 0 10px rgba(0, 255, 157, 0.3),
              inset 0 0 10px rgba(0, 255, 157, 0.1);
  backdrop-filter: blur(2px);
  background: rgba(10, 11, 14, 0.8) !important;
  transition: all 0.3s ease;
}

.border-2:hover, .border:hover {
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.6),
              inset 0 0 20px rgba(0, 255, 157, 0.3);
  border-color: #ff00ff !important;
  transform: translateY(-2px);
}

/* Неоновые линии */
.border-l-4 {
  border-left-width: 4px !important;
  border-left-color: #00ff9d !important;
  box-shadow: -5px 0 10px rgba(0, 255, 157, 0.3);
}

.border-l-4:hover {
  border-left-color: #ff00ff !important;
  box-shadow: -5px 0 20px rgba(255, 0, 255, 0.5);
}

/* Фоны для карточек */
.bg-blue-50, .bg-green-50, .bg-yellow-50, .bg-purple-50, .bg-gray-100 {
  background: rgba(0, 255, 157, 0.05) !important;
  backdrop-filter: blur(4px);
  border: 1px solid #00ff9d !important;
}

/* Глитч-эффект для особых элементов */
.animate-glitch {
  animation: glitch 0.3s infinite;
}

/* Киберпанк-таблицы */
table {
  border-collapse: separate;
  border-spacing: 0 8px;
}

td, th {
  background: rgba(0, 255, 157, 0.05);
  border: 1px solid #00ff9d;
  padding: 12px;
}

th {
  background: rgba(255, 0, 255, 0.1);
  color: #ff00ff;
  text-transform: uppercase;
}

/* Мерцающий текст */
.neon-pulse {
  animation: neon-pulse 2s infinite;
}

/* Глитч-текст */
.glitch {
  animation: glitch-text 2s infinite;
}

/* Стили для Mermaid */
.mermaid {
  background: rgba(0, 255, 157, 0.05);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #00ff9d;
}

.mermaid * {
  stroke: #00ff9d !important;
  color: #00ff9d !important;
  fill: rgba(0, 255, 157, 0.1) !important;
}

/* Квартальные метки */
.absolute.opacity-10 {
  color: #00ff9d;
  opacity: 0.15;
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  text-shadow: 0 0 20px #00ff9d;
}
</style>

---
layout: center
transition: fade
---

<div class="relative">
  <h1 class="animate-glitch" style="animation-iteration-count: 1;">PT AI</h1>
  <h1 class="text-5xl mt-4 glitch">PRODUCT ROADMAP</h1>
  <h2 class="text-center mt-8 neon-pulse">2024</h2>
  
  <div class="absolute -bottom-10 left-0 right-0 text-center text-sm opacity-50">
    <span class="inline-block mx-2">◈</span> SYSTEM READY <span class="inline-block mx-2">◈</span>
  </div>
</div>

---
layout: center
transition: fade
---

# КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ

<div class="grid grid-cols-2 gap-8 text-center mt-8">

<div class="border-2 border-cyan-400 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
<div class="text-4xl mb-2">🚀</div>
**<span class="text-cyan-400">ЛИДЕРСТВО В SAST</span>**<br>
<span class="text-gray-400">на рынке РФ</span>
</div>

<div class="border-2 border-green-400 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
<div class="text-4xl mb-2">🌍</div>
**<span class="text-green-400">МЕЖДУНАРОДНЫЙ РОСТ</span>**<br>
<span class="text-gray-400">кратный рост</span>
</div>

<div class="border-2 border-purple-400 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
<div class="text-4xl mb-2">💰</div>
**<span class="text-purple-400">РОСТ СРЕДНЕГО ЧЕКА</span>**<br>
<span class="text-gray-400">у текущих клиентов</span>
</div>

<div class="border-2 border-orange-400 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
<div class="text-4xl mb-2">📦</div>
**<span class="text-orange-400">ВЫХОД В СЕГМЕНТ</span>**<br>
<span class="text-gray-400">SCA/OSA</span>
</div>

</div>

---
layout: center
transition: fade
class: relative
---

<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
  <span class="text-[300px] font-black text-transparent" style="-webkit-text-stroke: 2px #00ff9d; opacity: 0.1;">Q1</span>
</div>

<h1 class="text-8xl glitch" style="text-align: center;">Q1</h1>
<h2 class="text-center text-4xl mt-4" style="color: #ff00ff;">ПЕРВЫЙ КВАРТАЛ</h2>

---
layout: two-cols-header
transition: fade
---

# Q1 · ПРОДУКТОВЫЕ ФИЧИ

::left::

<div class="border-l-4 border-cyan-400 pl-4 my-6 transform hover:translate-x-2 transition-all duration-300">

### 🚀 **aIctl CI/CD-ПЛАГИН**
`Единый инструмент интеграции`

**СТРАТЕГИЯ:** Лидерство в SAST + Международный рост

</div>

::right::

<div class="border-l-4 border-pink-400 pl-4 my-6 transform hover:translate-x-2 transition-all duration-300">

### 🛠️ **ПЛАГИН ДЛЯ VISUAL STUDIO**
`Анализ прямо в IDE`

**СТРАТЕГИЯ:** Международный рост

</div>

---

# Q1 · КЛЮЧЕВЫЕ МЕТРИКИ

<div class="grid grid-cols-2 gap-8">

<div class="p-6 rounded-xl border border-cyan-400 transform hover:scale-105 transition-all duration-300">

<div class="text-3xl mb-2">⚡</div>
### СКОРОСТЬ И КАЧЕСТВО
- Сокращение времени интеграции
- Предсказуемое поведение
- Снижение ручных шагов

</div>

<div class="p-6 rounded-xl border border-pink-400 transform hover:scale-105 transition-all duration-300">

<div class="text-3xl mb-2">🎨</div>
### КАСТОМИЗАЦИЯ
- Сокращение времени обратной связи
- Снижение барьера входа

</div>

</div>

---
layout: center
transition: fade
class: relative
---

<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
  <span class="text-[300px] font-black text-transparent" style="-webkit-text-stroke: 2px #00ff9d; opacity: 0.1;">Q2</span>
</div>

<h1 class="text-8xl glitch" style="text-align: center;">Q2</h1>
<h2 class="text-center text-4xl mt-4" style="color: #ff00ff;">ВТОРОЙ КВАРТАЛ</h2>

---

# Q2 · ПРОДУКТОВЫЕ ФИЧИ

<div class="grid grid-cols-2 gap-6">

<div class="border-l-4 border-red-500 pl-4 transform hover:translate-x-2 transition-all duration-300">

### 🔴 **MALICIOUS CODE**
`ML-модель для обнаружения вредоносных конструкций`

*Качество анализа и покрытие*

</div>

<div class="border-l-4 border-blue-500 pl-4 transform hover:translate-x-2 transition-all duration-300">

### 📊 **УПРАВЛЕНИЕ ОЧЕРЕДЯМИ**
`Централизованный сервис SLA`

*Скорость и устойчивость*

</div>

<div class="border-l-4 border-green-500 pl-4 transform hover:translate-x-2 transition-all duration-300">

### 🔐 **ПОИСК СЕКРЕТОВ**
`MVP интеграция`

*Модульность / Платформенность*

</div>

<div class="border-l-4 border-purple-500 pl-4 transform hover:translate-x-2 transition-all duration-300">

### 📦 **ЗАГРУЗКА SBOM**
`Сторонний SBOM для SCA`

*Модульность / Платформенность*

</div>

</div>

---

# Q2 · РАСШИРЕНИЕ ПОКРЫТИЯ

<div class="grid grid-cols-3 gap-8 text-center text-2xl mt-8">

<div class="border border-cyan-400 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.5)]">
<div class="text-5xl mb-4">📱</div>
**1С**
</div>

<div class="border border-cyan-400 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.5)]">
<div class="text-5xl mb-4">☕</div>
**JAVA 25**
</div>

<div class="border border-cyan-400 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.5)]">
<div class="text-5xl mb-4">#️⃣</div>
**C# 13**
</div>

</div>

---
layout: center
transition: fade
class: relative
---

<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
  <span class="text-[300px] font-black text-transparent" style="-webkit-text-stroke: 2px #00ff9d; opacity: 0.1;">Q3</span>
</div>

<h1 class="text-8xl glitch" style="text-align: center;">Q3</h1>
<h2 class="text-center text-4xl mt-4" style="color: #ff00ff;">ТРЕТИЙ КВАРТАЛ</h2>

---

# Q3 · ПРОДУКТОВЫЕ ФИЧИ I

<div class="grid grid-cols-2 gap-6">

<div class="border border-cyan-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### 💳 **МОДУЛЬНОЕ ЛИЦЕНЗИРОВАНИЕ**
Гибкая система

</div>

<div class="border border-cyan-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### 🔄 **ИМПОРТ SEMGREP**
Поддержка правил через UI

</div>

<div class="border border-cyan-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### 📱 **МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ**
Расширение анализа

</div>

<div class="border border-cyan-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### 🕸️ **ГРАФ ЗАВИСИМОСТЕЙ SCA**
Улучшение точности

</div>

</div>

---

# Q3 · ПРОДУКТОВЫЕ ФИЧИ II

<div class="grid grid-cols-2 gap-6">

<div class="border border-pink-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### 📡 **ДОСТАВКА ЭКСПЕРТИЗЫ**
Автообновление фидов

</div>

<div class="border border-pink-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### 🎨 **ОБНОВЛЕНИЕ UI SCA**
Новая карточка уязвимости

</div>

<div class="col-span-2 border border-purple-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### ⚡ **МАТЧИНГ УЯЗВИМЫХ МЕТОДОВ**
Сопоставление с реальными вызовами в транзитивных зависимостях

</div>

</div>

---

# Q3 · СКОРОСТЬ И КАЧЕСТВО

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="border border-yellow-400 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">

### 🔧 **ПЕРЕРАБОТКА МЕХАНИЗМА**
Единый механизм детекта недостатков + DSL

</div>

<div class="border border-yellow-400 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">

### 📉 **ОПТИМИЗАЦИЯ COMPLEXITY**
Новые методы оценки сложности

</div>

</div>

---

# Q3 · РАСШИРЕНИЕ ПОКРЫТИЯ

<div class="grid grid-cols-2 gap-8 text-center text-2xl mt-8">

<div class="border border-cyan-400 p-8 rounded-xl transform hover:scale-105 transition-all duration-300">
<div class="text-5xl mb-4">🅰️</div>
**ANGULAR V2**
</div>

<div class="border border-cyan-400 p-8 rounded-xl transform hover:scale-105 transition-all duration-300">
<div class="text-5xl mb-4">🎯</div>
**DART**
</div>

</div>

---
layout: center
transition: fade
class: relative
---

<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
  <span class="text-[300px] font-black text-transparent" style="-webkit-text-stroke: 2px #00ff9d; opacity: 0.1;">Q4</span>
</div>

<h1 class="text-8xl glitch" style="text-align: center;">Q4</h1>
<h2 class="text-center text-4xl mt-4" style="color: #ff00ff;">ЧЕТВЕРТЫЙ КВАРТАЛ</h2>

---

# Q4 · ПРОДУКТОВЫЕ ФИЧИ

<div class="grid grid-cols-3 gap-4">

<div class="border border-cyan-400 p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-300">

### ☸️ **KUBERNETES**
Enterprise-деплой

</div>

<div class="border border-cyan-400 p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-300">

### 🤖 **LLM-АССИСТЕНТ**
Ускорение triage

</div>

<div class="border border-cyan-400 p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-300">

### 📁 **ПОРТФЕЛИ ПРОЕКТОВ**
Управление рисками

</div>

</div>

---

# Q4 · СКОРОСТЬ И КАЧЕСТВО I

<div class="grid grid-cols-2 gap-6">

<div class="border border-green-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### ⚡ **ИНКРЕМЕНТАЛЬНОЕ СКАНИРОВАНИЕ**
Сокращение времени анализа

</div>

<div class="border border-green-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### 🚀 **САМЫЙ БЫСТРЫЙ SAST**
AI‑powered + LLM‑бустинг

</div>

<div class="border border-green-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### 🗺️ **КАРТА ПОКРЫТИЯ КОДА**
Детализированный лог

</div>

<div class="border border-green-400 p-4 rounded-lg transform hover:scale-105 transition-all duration-300">

### 🌳 **БОЛЬШИЕ ДЕРЕВЬЯ**
Борьба с экспоненциальным ростом

</div>

</div>

---

# Q4 · СКОРОСТЬ И КАЧЕСТВО II

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="border border-purple-400 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">

<div class="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

### 🎮 **JSA PLAYGROUND**
- Точки входа/выхода
- Подмена значений
- Графы достижимости
- Интерактивная отладка

</div>

<div class="border border-purple-400 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">

<div class="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

### 🏗️ **МОНОРЕПОЗИТОРИИ**
Prescan-слой + карта модулей

</div>

</div>

---

# Q4 · РАСШИРЕНИЕ ПОКРЫТИЯ

<div class="grid grid-cols-3 gap-8 text-center text-2xl mt-4">

<div class="border border-cyan-400 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
<div class="text-5xl mb-4">🐪</div>
**PERL**
</div>

<div class="border border-cyan-400 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
<div class="text-5xl mb-4">🐍</div>
**PYTHON 3.14+**
</div>

<div class="border border-cyan-400 p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
<div class="text-5xl mb-4">⚡</div>
**SCALA/AKKA**
</div>

</div>

---
layout: center
transition: fade
---

# СТРАТЕГИЧЕСКИЕ ПРИОРИТЕТЫ 2024

```mermaid
mindmap
  root((PT AI 2024))
    ЛИДЕРСТВО В SAST
      Q1: aIctl
      Q2: Malicious Code
      Q3: Semgrep импорт
      Q4: LLM-ассистент
    МЕЖДУНАРОДНЫЙ РОСТ
      Плагины для IDE
      Мобильные приложения
      Kubernetes
    МОДУЛЬНОСТЬ
      SCA improvements
      Поиск секретов
      SBOM
    КАЧЕСТВО АНАЛИЗА
      Complexity
      Incremental
      JSA Playground
```

---
layout: end
transition: fade
---

<div class="text-center relative">
  <h1 class="glitch text-7xl">СИСТЕМА ГОТОВА</h1>
  <h2 class="text-3xl mt-8 neon-pulse" style="color: #ff00ff;">PT AI — ЭВОЛЮЦИЯ АНАЛИЗА КОДА</h2>
  
  <div class="mt-16 text-xl">
    <span class="border border-cyan-400 px-8 py-4 rounded-full inline-block hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] transition-all duration-300">
      ❓ ВОПРОСЫ?
    </span>
  </div>
  
  <div class="absolute bottom-10 left-0 right-0 text-xs opacity-30">
    <span>◈ ◈ ◈ SYSTEM READY ◈ ◈ ◈</span>
  </div>
</div>