---
theme: default
title: Продуктовые цели Q2
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
css: unocss
fonts:
  sans: 'JetBrains Mono, Fira Code, Consolas, monospace'
  mono: 'JetBrains Mono, Fira Code, monospace'
---

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700;800&display=swap');

.slidev-layout {
  background: linear-gradient(135deg, #0d1117 0%, #1a1f2b 100%);
  color: #e6edf3;
  font-family: 'JetBrains Mono', monospace;
  position: relative;
  font-size: 0.9em;
  padding-top: 0.9rem !important;
  padding-bottom: 0.9rem !important;
}

.slidev-layout::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(86, 148, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(86, 148, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  z-index: 0;
}

.slidev-layout::after {
  content: "◈ ◈ ◈";
  position: absolute;
  bottom: 20px;
  right: 30px;
  color: rgba(86, 148, 255, 0.1);
  font-size: 14px;
  letter-spacing: 8px;
  z-index: 0;
}

.slidev-layout > * {
  position: relative;
  z-index: 1;
}

h1 {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: 2.1em;
  color: #58a6ff;
  border-bottom: 2px solid #58a6ff;
  padding-bottom: 0.25em;
  margin-bottom: 0.7em;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  display: inline-block;
}

h1::before {
  content: ">";
  color: #ff7b72;
  margin-right: 10px;
  font-weight: 400;
}

h2 {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  color: #ff7b72;
  margin-bottom: 0.65em;
  font-size: 1.25em;
  border-left: 4px solid #ff7b72;
  padding-left: 15px;
}

h3 {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  color: #d2a8ff;
  margin-bottom: 0.35em;
  font-size: 1.05em;
}

p {
  line-height: 1.5;
}

ul, ol, li {
  list-style: none !important;
  list-style-type: none !important;
  margin: 0;
  padding: 0;
}

.slidev-layout ul {
  margin: 0.5em 0;
}

.slidev-layout li {
  margin: 0.45em 0;
  position: relative;
  padding-left: 22px !important;
  line-height: 1.45;
}

.slidev-layout li::before {
  content: "→" !important;
  color: #58a6ff;
  font-size: 1em;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  text-align: left;
}

.card {
  background: rgba(31, 36, 47, 0.7);
  border: 1px solid #363b4a;
  border-radius: 8px;
  padding: 16px;
  backdrop-filter: blur(5px);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin: 16px 0;
}

.feature-item {
  background: rgba(31, 36, 47, 0.7);
  border: 1px solid #363b4a;
  border-radius: 8px;
  padding: 16px;
}

.feature-item h4 {
  color: #58a6ff;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1em;
}

.badge {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.75em;
  font-weight: 600;
  margin-right: 8px;
  margin-bottom: 8px;
}

.badge.primary { background: #58a6ff; color: #0d1117; }
.badge.secondary { background: #ff7b72; color: #0d1117; }
.badge.success { background: #7ee3b8; color: #0d1117; }
.badge.warning { background: #f0883e; color: #0d1117; }
.badge.purple { background: #d2a8ff; color: #0d1117; }

.center {
  text-align: center;
}

.lead {
  font-size: 1.05em;
  color: #c9d1d9;
}

.small {
  font-size: 0.84em;
  opacity: 0.9;
}

.cols-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.compact p, .compact li {
  font-size: 0.92em;
}

.section-label {
  color: #7ee3b8;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8em;
  margin-bottom: 10px;
}

hr {
  border: none;
  border-top: 1px solid #363b4a;
  margin: 14px 0;
}
</style>

---
layout: center
---

<div class="center">

# > ПРОДУКТОВЫЕ ЦЕЛИ Q2

<div class="mt-8">
  <span class="badge primary">SAST</span>
  <span class="badge secondary">DAST</span>
  <span class="badge warning">SCA</span>
  <span class="badge purple">AI</span>
</div>

</div>

---

# 1. ГИБКОЕ ЛИЦЕНЗИРОВАНИЕ ПО МУЛЬТИМОДАЛЬНЫМ ФИЧАМ

<div class="card compact">

Реализовать модель гибкого лицензирования, позволяющую включать и отключать функциональные модули продукта (включая UI для импорта правил Semgrep и Malicious Code) как отдельные лицензируемые возможности. В продукте должна появиться прозрачная коммуникация доступности модулей для пользователя и механизмы активации лицензий без изменения архитектуры системы.

<hr>

<div class="section-label">Направления роста</div>
<div>
  <span class="badge primary">Кастомизация</span>
  <span class="badge secondary">Модульность</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Забирать тендеры с меньшим средним чеком</li>
  <li>Увеличить средний чек у текущих клиентов</li>
  <li>частично Войти в рынок SCA+OSA</li>
</ul>

</div>

---

# 2. ИНТЕГРАЦИЯ РЕЗУЛЬТАТОВ ИССЛЕДОВАНИЙ ASTA И VISTA

<div class="card compact">

Провести анализ результатов исследований ASTA и VISTA и сформировать продуктовую стратегию их внедрения: определить сценарии использования, ожидаемый эффект для качества анализа и подготовить roadmap интеграции этих технологий в продукт. Это в течении первого месяца квартала. Далее в квартале реализовать загрузку SARIF отчета для быстрой и простой интеграций с ASTA (первый этап). По сути кросс-сценарий, где пользователь получает результаты от модуля и через AI производит работу с результатами.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge primary">Кастомизация</span>
  <span class="badge secondary">Модульность</span>
  <span class="badge success">Качество и скорость анализа</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Увеличить средний чек у текущих клиентов</li>
  <li>Кратный рост на международном рынке</li>
</ul>

</div>

---

# 3. ПЛАН «ОБЛЕГЧЕНИЯ» JSA

<div class="card compact">

Провести архитектурный анализ и подготовить план доработки JSA для создания легковесного анализатора и поддержки работы в IDE-плагинах. План должен определить возможные упрощения анализа, ожидаемое снижение времени выполнения и требования к реализации.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge primary">Кастомизация</span>
  <span class="badge success">Качество и скорость анализа</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Забирать тендеры с меньшим средним чеком</li>
  <li>Кратный рост на международном рынке</li>
</ul>

</div>

---

# 4. ПОДДЕРЖКА ЯЗЫКА DART (FLUTTER) В TAINT-АНАЛИЗЕ

<div class="card compact">

Выпустить релиз AIE с поддержкой анализа языка Dart (фреймворк Flutter) в ядре AI.Taint, обеспечив корректное обнаружение уязвимостей без ухудшения производительности анализа существующих языков.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge success">Качество и скорость анализа</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Кратный рост на международном рынке (международка)</li>
</ul>

</div>

---

# 5. РАЗВЯЗКА ПРОЕКТОВ SAST / DAST

<div class="card compact">

Реализовать возможность создания проектов и выполнения сканирования в режиме «чёрного ящика» без обязательной загрузки исходного кода, что позволит анализировать развёрнутые приложения и снизить барьер входа при использовании DAST и других технологий.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge secondary">Модульность</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Войти в рынок SCA+OSA</li>
  <li>Кратный рост на международном рынке</li>
</ul>

</div>

---

# 6. ПОДДЕРЖКА ЗАГРУЗКИ SBOM

<div class="card compact">

Реализовать загрузку сторонних SBOM как входного сценария анализа зависимостей в SCA, обеспечив возможность анализа сторонних компонентов без обязательного доступа к исходному коду проекта.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge secondary">Модульность</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Войти в рынок SCA+OSA</li>
  <li>Кратный рост на международном рынке</li>
</ul>

</div>

---

# 7. ВЫБОР ЦЕЛЕВОГО ДВИЖКА АНАЛИЗА TAINT

<div class="card compact">

Мы определяем целевой движок анализа taint-потоков (flowgrep или текущий taint), который станет основой для дальнейшего развития качества и скорости анализа в продукте. Для этого сравниваем оба подхода, оцениваем стоимость и последствия внедрения и фиксируем обоснованное решение вместе с планом дальнейшего развития.

Проведён комплексный сравнительный анализ движков flowgrep и taint, а также подготовлены оценки трудозатрат и рисков для двух сценариев: миграции на flowgrep и эволюции текущего taint-движка.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge success">Качество и скорость анализа</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Войти в рынок SCA+OSA</li>
  <li>Кратный рост на международном рынке</li>
</ul>

</div>

---

# 8. МАТЧИНГ УЯЗВИМЫХ МЕТОДОВ В ТРАНЗИТИВНЫХ ЗАВИСИМОСТЯХ

<div class="card compact">

Добавить в ядро JSA механизм определения использования уязвимых методов из транзитивных зависимостей, повышая точность анализа SCA и уменьшая количество нерелевантных находок.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge secondary">Модульность</span>
  <span class="badge success">Качество и скорость анализа</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Войти в рынок SCA+OSA</li>
</ul>

</div>

---

# 9. АВТООБНОВЛЕНИЕ ЭКСПЕРТИЗЫ SCA

<div class="card compact">

Реализовать MVP механизма автообновления фидов SCA через GUS, обеспечив автоматическую доставку актуальной информации об уязвимостях без необходимости ручного обновления продукта.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge secondary">Модульность</span>
  <span class="badge success">Качество и скорость анализа</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Войти в рынок SCA+OSA</li>
  <li>Кратный рост на международном рынке</li>
</ul>

</div>

---

# 10. ОБНОВЛЕНИЕ КАРТОЧКИ УЯЗВИМОСТИ SCA

<div class="card compact">

Обновить карточку уязвимости SCA с учётом нового формата фидов, обеспечив отображение расширенных данных (описание, условия эксплуатации, workaround) и улучшив удобство анализа результатов.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge secondary">Модульность</span>
  <span class="badge success">Качество и скорость анализа</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Войти в рынок SCA+OSA</li>
  <li>Увеличить средний чек у текущих клиентов</li>
</ul>

</div>

---

# 11. TRIAGE ACCELERATOR

<div class="card compact">

Разработать требования (Q1) и реализовать MVP Triage Accelerator (Q2), позволяющий ускорить triage результатов анализа и снизить время ручной обработки уязвимостей за счёт автоматизированных подсказок и аналитики.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge success">Качество и скорость анализа</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Лидерство в SAST на рынке РФ</li>
  <li>Кратный рост на международном рынке</li>
</ul>

</div>

---

# 12. ML-ДЕТЕКТИРОВАНИЕ MALICIOUS CODE

<div class="card compact">

Добавить поддержку обнаружения вредоносного кода на основе ML-модели, обеспечив выявление подозрительных конструкций без деградации существующих метрик точности анализа.

<hr>

<div class="section-label">Направление роста</div>
<div>
  <span class="badge success">Качество и скорость анализа</span>
</div>

<div class="section-label mt-4">Стратегические цели</div>
<ul>
  <li>Лидерство в SAST на рынке РФ</li>
  <li>Кратный рост на международном рынке</li>
</ul>

</div>

---

<h1>СВЯЗЬ ИНИЦИАТИВ И СТРАТЕГИИ</h1>

<div class="slide-card">
  <table class="strategy-matrix-table">
    <thead>
      <tr>
        <th>Инициатива</th>
        <th>🏆 Лидерство в SAST на рынке РФ</th>
        <th>💸 Забирать тендеры с меньшим средним чеком</th>
        <th>💰 Увеличить средний чек у текущих клиентов</th>
        <th>🚀 Войти в рынок SCA+OSA</th>
        <th>🌍 Кратный рост на международном рынке</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Гибкое лицензирование по мультимодальным фичам</td>
        <td class="strategy-mark-yes">✔</td>
        <td class="strategy-mark-yes">✔</td>
        <td class="strategy-mark-yes">✔</td>
        <td class="strategy-mark-partial">~</td>
        <td>—</td>
      </tr>
      <tr>
        <td>Интеграция результатов исследований ASTA и VISTA</td>
        <td class="strategy-mark-yes">✔</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
      </tr>
      <tr>
        <td>План «облегчения» JSA</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
        <td>—</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
      </tr>
      <tr>
        <td>Поддержка языка Dart (Flutter) в taint-анализе</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
      </tr>
      <tr>
        <td>Развязка проектов SAST / DAST</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
        <td class="strategy-mark-yes">✔</td>
      </tr>
      <tr>
        <td>Поддержка загрузки SBOM</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
        <td class="strategy-mark-yes">✔</td>
      </tr>
      <tr>
        <td>Выбор целевого движка анализа taint</td>
        <td class="strategy-mark-yes">✔</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>Матчинг уязвимых методов в транзитивных зависимостях</td>
        <td class="strategy-mark-yes">✔</td>
        <td>—</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
        <td>—</td>
      </tr>
      <tr>
        <td>Автообновление экспертизы SCA</td>
        <td class="strategy-mark-yes">✔</td>
        <td>—</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
        <td class="strategy-mark-yes">✔</td>
      </tr>
      <tr>
        <td>Обновление карточки уязвимости SCA</td>
        <td>—</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
        <td class="strategy-mark-yes">✔</td>
        <td>—</td>
      </tr>
      <tr>
        <td>Triage Accelerator</td>
        <td class="strategy-mark-yes">✔</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
      </tr>
      <tr>
        <td>ML-детектирование Malicious Code</td>
        <td class="strategy-mark-yes">✔</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td class="strategy-mark-yes">✔</td>
      </tr>
    </tbody>
  </table>

  <div class="strategy-legend">
    <span><b class="strategy-mark-yes">✔</b> явный вклад</span>
    <span><b class="strategy-mark-partial">~</b> частичный вклад</span>
    <span>— не заявлено</span>
  </div>
</div>