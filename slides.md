---
theme: default
title: DAST или не DAST, вот в чём вопрос
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
css: unocss
fonts:
  sans: 'JetBrains Mono, Inter, Consolas, monospace'
  mono: 'JetBrains Mono, Fira Code, monospace'
transition: slide-left
defaults:
  layout: default
layout: full
class: deck-cover deck-cover-provocative
---

<div class="cover-provocative">
  <img class="cover-provocative__bg" src="/00.png" alt="" />
  <div class="cover-provocative__shade" aria-hidden="true"></div>
  <div class="cover-provocative__glow" aria-hidden="true"></div>

  <div class="cover-provocative__title">
    <span>DAST</span>
    <span>или не DAST,</span>
    <span>вот в чём вопрос</span>
  </div>
</div>

---
class: slide-dense slide-2-split
---

# Система, а не только код

<div class="grid-2-even grid-2-even--with-figure">
  <div class="panel">
    <div class="status active">контекст</div>
    <div class="hero-line">атакуют работающее приложение — не репозиторий</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">runtime</div>
        <div class="signal-value">поведение и ответы системы важнее «красоты» исходников</div>
      </div>
      <div class="signal">
        <div class="signal-label">система</div>
        <div class="signal-value"><strong>код безопасен ≠ система безопасна</strong> — конфигурация, интеграции, среда выполнения</div>
      </div>
      <div class="signal">
        <div class="signal-label">стыки</div>
        <div class="signal-value">уязвимости на границах backend ↔ frontend, сервис ↔ сервис, приложение ↔ инфраструктура</div>
      </div>
      <div class="signal">
        <div class="signal-label">поверхность</div>
        <div class="signal-value">headers, cookies, auth-flow — часть реальной атакуемости</div>
      </div>
    </div>
  </div>
  <div class="slide-side-figure" aria-hidden="true">
    <img src="/2.png" alt="" />
  </div>
</div>

<!--
Мы часто говорим про код, но атакуют систему в целом.

Даже «чистый» код не гарантирует безопасность: живут конфигурация, интеграции и runtime.

Проблемы чаще на границах компонентов и в механике доступа.
-->

---

# Runtime — источник истины

<div class="panel">
  <div class="status accent">истина</div>
  <div class="hero-line">эксплуатируемость видна только в runtime</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">ответ</div>
      <div class="signal-value">важен ответ системы и реакция на запрос — не предположение в коде</div>
    </div>
    <div class="signal">
      <div class="signal-label">доказательство</div>
      <div class="signal-value">понять уязвимость можно по цепочке запрос >> ответ и воспроизводимому поведению</div>
    </div>
  </div>
</div>

<!--
Понять уязвимость можно только через поведение: запрос >> ответ.

Так видно, можно ли это реально эксплуатировать.
-->

---
class: slide-dense slide-4-split
---

# Почему это критично сейчас

<div class="grid-2-even grid-2-even--with-figure">
  <div class="panel">
    <div class="status warning">сдвиг в runtime</div>
    <div class="hero-line">без runtime-проверки безопасность остаётся гипотезой</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">индустрия</div>
        <div class="signal-value">микросервисы / API-first, частые релизы, AI-код >> рост attack surface</div>
      </div>
      <div class="signal">
        <div class="signal-label">экономика</div>
        <div class="signal-value">инцидент в проде дороже; ложные срабатывания съедают время команды</div>
      </div>
      <div class="signal">
        <div class="signal-label">скорость</div>
        <div class="signal-value">безопасность не успевает за релизами без автоматизированных проверок в бою</div>
      </div>
      <div class="signal">
        <div class="signal-label">инсайт</div>
        <div class="signal-value">риск плохо управляется, пока нет фактов о работающей системе</div>
      </div>
    </div>
  </div>
  <div class="slide-side-figure" aria-hidden="true">
    <img src="/4.png" alt="" />
  </div>
</div>

<!--
Современная разработка усиливает проблему: сложнее система, больше поверхность.

Это и про деньги: поздно найти и шум в triage стоят дорого.

Главный вывод блока: пока не проверили в runtime — вы не знаете, безопасна ли система, вы предполагаете.
-->

---
class: slide-dense slide-5-split
---

# От SAST к DAST

<div class="grid-2-even grid-2-even--with-figure">
  <div class="slide-5-text-stack">
    <div class="panel">
      <div class="status warning">SAST</div>
      <div class="hero-line">почему недостаточно</div>
      <div class="signal-list">
        <div class="signal">
          <div class="signal-label">видимость</div>
          <div class="signal-value">видит код, <strong>не видит поведение</strong></div>
        </div>
        <div class="signal">
          <div class="signal-label">контекст</div>
          <div class="signal-value">не учитывает конфигурацию, инфраструктуру, интеграции как в бою</div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="status active">DAST</div>
      <div class="hero-line">глазами атакующего</div>
      <div class="signal-list">
        <div class="signal">
          <div class="signal-label">объект</div>
          <div class="signal-value">анализ <strong>работающего</strong> приложения: runtime, «чёрный ящик»</div>
        </div>
        <div class="signal">
          <div class="signal-label">канал</div>
          <div class="signal-value">взаимодействие через <strong>HTTP / API / UI</strong></div>
        </div>
      </div>
    </div>
  </div>
  <div class="slide-side-figure" aria-hidden="true">
    <img src="/5.png" alt="" />
  </div>
</div>

<!--
SAST важен, но он не показывает, как система живёт в бою.

DAST моделирует внешнего атакующего без опоры на исходники — другой уровень доказательности.
-->

---
class: slide-dense slide-6-split
---

# Зачем нужен DAST

<div class="grid-2-even grid-2-even--with-figure">
  <div class="panel">
    <div class="status active">ценность</div>
    <div class="hero-line">факты об атакуемости, не теория</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">доказательность</div>
        <div class="signal-value"><strong>реальная атакуемость</strong> — факты о системе, не список гипотез</div>
      </div>
      <div class="signal">
        <div class="signal-label">эксплуатация</div>
        <div class="signal-value">проверка <strong>эксплуатируемости</strong> — можно ли это реально сломать</div>
      </div>
    </div>
  </div>
  <div class="slide-side-figure" aria-hidden="true">
    <img src="/6.png" alt="" />
  </div>
</div>

<!--
Нужен, чтобы ответить простым вопросом: можно ли атаковать по факту, а не «на бумаге».
-->

---

# Как работает DAST

<div class="panel">
  <div class="status accent">цикл</div>
  <div class="hero-line">от карты поверхности до приоритетов</div>
  <div class="flow">
    <span class="node">Discovery</span>
    <span class="arrow">>></span>
    <span class="node">Конфиг</span>
    <span class="arrow">>></span>
    <span class="node">Атака</span>
    <span class="arrow">>></span>
    <span class="node">Валидация</span>
    <span class="arrow">>></span>
    <span class="node">Триаж</span>
  </div>
  <div class="note">
    <ol>
      <li><strong>Discovery</strong> — карта приложения</li>
      <li><strong>Конфиг</strong> — headers / TLS / cookies</li>
      <li><strong>Атака</strong> — payload / fuzzing</li>
      <li><strong>Валидация</strong> — реакция системы</li>
      <li><strong>Триаж</strong> — приоритизация</li>
    </ol>
  </div>
</div>

<!--
Это цикл: понять поверхность, учесть конфиг, атаковать, по ответу подтвердить, затем приоритизировать.
-->

---
class: slide-dense
---

# Встраивание в процесс разработки

<PtBlackBoxDiagram />

<!--
Диаграмма + легенда: PtBlackBoxDiagram (assets/cicd.svg ?raw, легенда в .panel на том же слайде).
-->

---

# Что получает бизнес

<div class="panel">
  <div class="status active">outcome</div>
  <div class="hero-line">подтверждённые уязвимости, меньше шума, понятные приоритеты</div>
  <div class="metric-grid cols-2">
    <div class="metric">
      <div class="metric-label">Приоритизация</div>
      <div class="metric-value">теория vs эксплуатация</div>
      <p class="small" style="margin: 0.35rem 0 0;">фокус на реальных рисках</p>
    </div>
    <div class="metric">
      <div class="metric-label">Экономика</div>
      <div class="metric-value">меньше FP</div>
      <p class="small" style="margin: 0.35rem 0 0;">быстрее исправление >> ниже cost</p>
    </div>
    <div class="metric">
      <div class="metric-label">Периметр</div>
      <div class="metric-value">внешний взгляд</div>
      <p class="small" style="margin: 0.35rem 0 0;">точки входа, проверка перед релизом</p>
    </div>
    <div class="metric">
      <div class="metric-label">Процесс</div>
      <div class="metric-value">DevSecOps</div>
      <p class="small" style="margin: 0.35rem 0 0;">CI/CD, сканы, автоматические gate</p>
    </div>
  </div>
</div>

<!--
Сводка: DAST про реальную атакуемость и управление риском, а не про бесконечный список теоретических замечаний.

Бизнесу нужны доказательства и приоритеты, а не длинные отчёты без действий.

DAST помогает видеть систему как атакующий и встраивать проверки в pipeline.
-->

---
layout: section
class: title-cursor
---

# Виды и режимы DAST

<div
  class="panel panel-narrow"
  v-motion
  :initial="{ opacity: 0, y: 22 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 26, delay: 80 } }"
>
  <div class="status accent">три режима</div>
  <div class="hero-line">одна тема — разные задачи</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">ручной</div>
      <div class="signal-value">контроль и точность (Burp-подход)</div>
    </div>
    <div class="signal">
      <div class="signal-label">авто</div>
      <div class="signal-value">масштаб и регулярность</div>
    </div>
    <div class="signal">
      <div class="signal-label">CI/CD</div>
      <div class="signal-value">процесс и quality gate</div>
    </div>
  </div>
</div>

<!--
Три режима решают разные задачи; дальше разберём плюсы/минусы и зачем нужен баланс.
-->

---

# Три режима DAST

<div class="panel-bento">
  <div class="panel panel-compact">
    <div class="status active">ручной</div>
    <div class="hero-line">Burp-подход</div>
    <p><span class="mode-kv-label mode-kv-label--success">Плюсы:</span> полный контроль HTTP, гибкость атак, быстрый feedback</p>
    <p><span class="mode-kv-label mode-kv-label--success">Минусы:</span> нужна экспертиза, плохо масштабируется</p>
  </div>
  <div class="panel panel-compact">
    <div class="status accent">автоматизированный</div>
    <div class="hero-line">масштаб</div>
    <p><span class="mode-kv-label mode-kv-label--accent">Плюсы:</span> масштаб, регулярность, автоматизация</p>
    <p><span class="mode-kv-label mode-kv-label--accent">Минусы:</span> слабый контекст, типичные проблемы с auth, меньше гибкости</p>
  </div>
  <div class="panel panel-compact panel-bento-full">
    <div class="status warning">CI/CD</div>
    <div class="hero-line">в pipeline</div>
    <p><span class="mode-kv-label mode-kv-label--danger">Плюсы:</span> в pipeline, проверка на релизах, автоматические gate</p>
    <p><span class="mode-kv-label mode-kv-label--danger">Риск:</span> шум и нестабильность >> <strong>выключают</strong> сканер</p>
  </div>
</div>

<div class="callout callout--key" style="margin-top: 0.75rem;">
  <p><strong>Вывод:</strong> нужен <strong>баланс</strong>, а не «один правильный режим»</p>
</div>

<!--
Ручной режим — эталон глубины, но не масштабируется на всю организацию.

Автоматический даёт охват, но хуже понимает систему и сценарии доступа.

CI/CD встраивает проверку в процесс, но любой шум убивает доверие и внедрение.

Нет серебряной пули: сочетание режимов под вашу зрелость и риски — нужен баланс, а не один «правильный» выбор.
-->

---

# Проблемы классического DAST

<div class="slide-problems-classic">
  <div class="grid-2-even">
    <div class="panel">
      <div class="status warning">отчёт</div>
      <div class="hero-line">находит, но не помогает чинить</div>
      <div class="signal-list">
        <div class="signal">
          <div class="signal-label">шум</div>
          <div class="signal-value">false positives, нет контекста, слабое понимание системы</div>
        </div>
        <div class="signal">
          <div class="signal-label">действие</div>
          <div class="signal-value">непонятно, <strong>что делать</strong> >> падает доверие</div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="status accent">auth</div>
      <div class="hero-line">узкое место</div>
      <p>без авторизации DAST видит только <strong>поверхность</strong></p>
      <p>реальные уязвимости <strong>внутри</strong> приложения часто скрыты</p>
    </div>
  </div>
  <div class="panel">
    <div class="status active">краулер</div>
    <div class="hero-line">Недостаточное покрытие</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">обход</div>
        <div class="signal-value">слабый краулер или не под стек приложения >> <strong>неполная карта</strong> точек входа</div>
      </div>
      <div class="signal">
        <div class="signal-label">иллюзия</div>
        <div class="signal-value">пустой отчёт <strong>всегда</strong>, воспринимается негативно</div>
      </div>
    </div>
  </div>
</div>

<!--
Классический DAST часто заканчивается отчётом без маршрута исправления; отсюда усталость от инструмента.

Отдельно — auth: без прохождения сценария входа сканер не доходит до бизнес-логики и защищённых зон, «интересное» остаётся невидимым.

Краулер и покрытие: если движок обхода не тянет ваш стек или не строит полную карту маршрутов, сканер просто не знает, куда стрелять — отчёт пустой не потому что всё хорошо, а потому что атакующая поверхность не открылась. Это отдельная диагностика: усилить краулинг, HAR, сценарии входа, а не списывать на «безопасно».
-->

---

# Почему DAST отключают

<div class="panel">
  <div class="status warning">реальность</div>
  <div class="hero-line">с инструментом тяжело жить</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">внедрение</div>
      <div class="signal-value">долго настраивать, трудно встроить в pipeline, много ручной возни >> <strong>в какой-то момент выключают</strong></div>
    </div>
    <div class="signal">
      <div class="signal-label">итог</div>
      <div class="signal-value">команда перестаёт доверять результатам, а отчёты не помогают принимать решения</div>
    </div>
  </div>
</div>

<!--
На практике всё просто: если DAST постоянно требует ручного ухода, шумит и мешает процессу, команда перестаёт ему верить и постепенно отключает.
-->

---
layout: section
class: title-cursor
---

# Идеальный DAST

<div
  class="panel"
  v-motion
  :initial="{ opacity: 0, y: 22 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 26, delay: 80 } }"
>
  <div class="status accent">сдвиг</div>
  <div class="hero-line">не сканер — платформа</div>
  <p>каким должен быть DAST, чтобы это исправить?</p>
</div>

<!--
Перебивка: переход от проблем классического DAST к видению решения.

Ответ — не точечный продукт, а платформа с режимами, прозрачностью и процессом; дальше по слайдам раскрываем критерии.
-->

---
class: slide-dense
---

# Режимы, покрытие и прозрачность

<div class="slide-problems-classic">
  <div class="grid-2-even">
    <div class="panel">
      <div class="status active">платформа</div>
      <div class="hero-line">универсальность</div>
      <div class="signal-list">
        <div class="signal">
          <div class="signal-label">режимы</div>
          <div class="signal-value">ручной (как Burp), автоматический, CI/CD — <strong>один инструмент</strong></div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="status accent">покрытие</div>
      <div class="hero-line">стек, API и OAST</div>
      <div class="signal-list">
        <div class="signal">
          <div class="signal-label">стек</div>
          <div class="signal-value"><strong>Web + SPA</strong> · <strong>HTTP + WebSocket</strong></div>
        </div>
        <div class="signal">
          <div class="signal-label">API</div>
          <div class="signal-value">REST / gRPC / SOAP (+ GraphQL где применимо)</div>
        </div>
        <div class="signal">
          <div class="signal-label">глубина</div>
          <div class="signal-value">широкий охват <strong>CWE</strong>, активные проверки, <strong>OAST</strong>, не сводить результаты к «топ-10»</div>
        </div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="status warning">прозрачность</div>
    <div class="hero-line">без «чёрного ящика»</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">наблюдаемость</div>
        <div class="signal-value">видно <strong>что</strong> делает сканер, <strong>какие</strong> запросы, <strong>почему</strong> сработала проверка / finding</div>
      </div>
      <div class="signal">
        <div class="signal-label">принцип</div>
        <div class="signal-value">DAST не должен быть непрозрачным «чёрным ящиком»</div>
      </div>
    </div>
  </div>
</div>

<!--
Три опоры платформы: режимы без разрыва миров, покрытие по стеку и протоколам (включая OAST для blind), наблюдаемость без «чёрного ящика».
-->

---

# Внедрение, интеграции и результаты

<div class="panel">
  <div class="status active">от команды до production</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">deploy</div>
      <div class="signal-value">можно запустить локально, в облаке или в Kubernetes без сильной боли</div>
    </div>
    <div class="signal">
      <div class="signal-label">enterprise</div>
      <div class="signal-value">есть всё, что ждут в большой организации: RBAC, аудит, логи, backup / restore</div>
    </div>
  </div>
  <div class="hero-line" style="margin-top: 0.75rem;">расширяемость</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">API</div>
      <div class="signal-value">открытый <strong>API</strong> и webhooks — встраиваете DAST в свой процесс, а не подстраиваетесь под инструмент</div>
    </div>
  </div>
  <div class="hero-line" style="margin-top: 0.75rem;">результаты</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">доверие</div>
      <div class="signal-value">результат можно проверить: видно детали, понятно «почему», есть <strong>воспроизводимость</strong></div>
    </div>
  </div>
</div>

<!--
Сначала — как живёт продукт в команде и в production, потом — как встраивается в процессы через API, в конце — почему разработчикам можно верить выдаче: проверяемый finding легче превратить в fix.
-->

---

# Сложная аутентификация и MFA

<div class="grid-2-even">
  <div class="panel">
    <div class="status warning">1. Сложные сценарии</div>
    <div class="hero-line">частично решаемая задача</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">реальность</div>
        <div class="signal-value">SSO, OAuth, редиректы, client-side логика</div>
      </div>
      <div class="signal">
        <div class="signal-label">подход</div>
        <div class="signal-value">запись действий + replay · сценарии нужно поддерживать</div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="status accent">2. MFA</div>
    <div class="hero-line">внешние факторы</div>
    <p>SMS / TOTP / push — зависимость от внешних систем и времени</p>
    <div class="note">
      <strong>Практика:</strong> bypass, сервисные аккаунты, mock 2FA, инжект токенов
    </div>
  </div>
</div>

<div class="callout callout--key" style="margin-top: 0.75rem;">
  <p>DAST работает там, где сценарий воспроизводим. MFA ломает воспроизводимость >> нужна отдельная стратегия.</p>
</div>

<!--
Два класса ограничений на одном слайде: сложный login-flow и внешний второй фактор; оба бьют по воспроизводимости сценария.
-->

---

# Кейс: «сканер почти ничего не находит»

<div class="panel">
  <div class="status warning">проблема</div>
  <div class="hero-line">отчёт есть — действий нет</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">симптом</div>
      <div class="signal-value">разработчик получает отчёт, но <strong>не понимает, что делать</strong></div>
    </div>
    <div class="signal">
      <div class="signal-label">причина</div>
      <div class="signal-value">DAST <strong>не находит</strong> то, чего не понимает в приложении; заказчик часто сам слабо знает маршруты и API</div>
    </div>
    <div class="signal">
      <div class="signal-label">следствие</div>
      <div class="signal-value">инструмент должен <strong>сначала</strong> помочь <strong>исследовать</strong> приложение — <strong>потом</strong> атаковать</div>
    </div>
  </div>
  <div class="note">Покажем на примере из жизни — пилот у клиента</div>
</div>

<!--
Закадрово: цепочка «отчёт без действий» >> DAST слеп без модели приложения >> сначала исследование, потом атаки.
Дальше слайд — конкретика пилота, диалог, HAR.
-->

---
class: slide-dense slide-19-split
---

# Кейс: «сканер почти ничего не находит»

<div class="grid-2-even grid-2-even--with-figure">
  <div class="slide-19-text-stack">
    <div class="panel">
      <div class="status active">пилот</div>
      <div class="hero-line">«Сканер почти ничего не находит»</div>
      <div class="signal-list">
        <div class="signal">
          <div class="signal-label">контекст</div>
          <div class="signal-value">реальный пилот у клиента</div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="status warning">почему</div>
      <div class="hero-line">SPA + API, сканер на фронте</div>
      <div class="signal-list">
        <div class="signal">
          <div class="signal-label">факт</div>
          <div class="signal-value">OpenAPI нет — непонятно, где контракт и куда смотреть в backend</div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="status active">вывод</div>
      <div class="hero-line">не «плохо ищет» — неясно, куда идти</div>
      <div class="signal-list">
        <div class="signal">
          <div class="signal-label">суть</div>
          <div class="signal-value">«Загрузите схему» — «У нас нет». Без карты приложения backend почти невидим</div>
        </div>
      </div>
    </div>
  </div>
  <div class="slide-side-figure" aria-hidden="true">
    <img src="/119.png" alt="" />
  </div>
</div>

<!--
Показываем кейс не как «слабый сканер», а как проблему видимости системы. Симптом понятный: находок почти нет. Причина тоже понятная: SPA, API отдельно, контракта нет, маршруты неочевидны.

Ключевая мысль для озвучки: если инструмент не понимает, куда идти, он не сможет ничего осмысленно проверить. Следующий слайд логично отвечает на это HAR'ом как способом показать приложению его реальную карту.
-->

---

# Решение: HAR как способ «показать» систему

<div class="panel">
  <div class="status active">поток</div>
  <div class="flow">
    <span class="node">Chrome</span>
    <span class="arrow">>></span>
    <span class="node">HAR</span>
    <span class="arrow">>></span>
    <span class="node">DAST</span>
  </div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">эффект</div>
      <div class="signal-value">реальные endpoint'ы, пользовательские сценарии, <strong>виден backend</strong></div>
    </div>
    <div class="signal">
      <div class="signal-label">результат</div>
      <div class="signal-value">рост покрытия >> появляются <strong>реальные</strong> уязвимости</div>
    </div>
  </div>
  <div class="callout callout--key">
    <p>если <strong>ты</strong> не знаешь, как пользоваться приложением — <strong>DAST тоже не знает</strong></p>
  </div>
</div>

<!--
Низкий порог для заказчика: реальный трафик вместо схемы. Дальше — акцент инсайта на отдельном слайде.
-->

---
layout: center
title: Сначала разведка, потом атака
---

<div
  class="center-xy insight-moment insight-moment--wide"
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 28, delay: 70 } }"
>
  <h1>Сначала разведка, потом атака</h1>
  <div class="cover-hero-line insight-moment__rule" aria-hidden="true"></div>

  <div class="cyber-statement">
    <p>Без реальной карты приложения DAST атакует вслепую.</p>
    <p>HAR, сценарий и API-схема дают DAST контекст, без которого проверка остаётся слепой.</p>
  </div>
</div>

<!--
Инсайт после HAR: не упрёк пользователю, а ограничение видимости — без карты приложения DAST слеп; HAR, сценарий и API-схема дают нужный контекст.
-->

---
layout: section
class: title-cursor
---

# Как эволюционирует DAST

<div
  class="panel"
  v-motion
  :initial="{ opacity: 0, y: 22 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 26, delay: 80 } }"
>
  <div class="status accent">интересные подходы</div>
  <div class="hero-line">от краулинга и auth к трендам рынка</div>
</div>

<!--
Перебивка: от кейса к инженерным примерам эволюции — краулинг, аутентификация, дальше обобщение и тренды.
-->

---
class: slide-dense
---

# Краулинг

<div class="grid-2-even">
  <div class="panel">
    <div class="status accent">зачем</div>
    <div class="hero-line">краулер определяет поверхность атаки</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">маршруты</div>
        <div class="signal-value">находит реальные маршруты и эндпоинты</div>
      </div>
      <div class="signal">
        <div class="signal-label">запросы</div>
        <div class="signal-value">генерирует реальные запросы</div>
      </div>
      <div class="signal">
        <div class="signal-label">поведение</div>
        <div class="signal-value">исследует поведение приложения</div>
      </div>
      <div class="signal">
        <div class="signal-label">карта</div>
        <div class="signal-value">строит карту сайта</div>
      </div>
    </div>
    <div class="callout callout--key">
      <p>качество сканирования почти всегда упирается в качество краулинга</p>
    </div>
  </div>
  <div class="panel">
    <div class="status active">эволюция</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">проблема</div>
        <div class="signal-value">HTML-only · не видит JS</div>
      </div>
      <div class="signal">
        <div class="signal-label">реальность</div>
        <div class="signal-value">SPA / client-side logic</div>
      </div>
      <div class="signal">
        <div class="signal-label">эволюция</div>
        <div class="signal-value">headless browser · выполнение JS</div>
      </div>
      <div class="signal">
        <div class="signal-label">вызовы</div>
        <div class="signal-value">state explosion · зацикливание</div>
      </div>
    </div>
    <div class="note">>> краулер = симуляция пользователя</div>
  </div>
</div>

<!--
Сначала левая колонка — зачем вообще краулер. Без него DAST не знает, куда бить: краулер находит реальные маршруты и эндпоинты, из этого живут запросы к приложению, видно поведение системы, складывается карта того, что есть на сайте. Поэтому верхний тезис простой: качество сканирования почти всегда упирается в качество краулинга — не в «магический движок проверок», а в то, насколько полно и честно мы обошли приложение.

Правая колонка — как это эволюционировало. Классика была HTML-only: без JS многое просто не существует в том виде, в каком его видит пользователь. Реальность — SPA и логика на клиенте, поэтому индустрия ушла в headless browser и исполнение JavaScript. Цена — другие классы проблем: взрыв состояний, зацикливание, нужно вести себя как пользователь, а не как «парсер страницы». Отсюда и финальная мысль внизу: краулер по сути симулирует пользователя.
-->

---
class: slide-dense slide-24-crawler-split
---

# Типичный краулер, новый веб

<div class="slide-24-crawler-center">
  <div class="slide-24-crawler-row">
    <div class="panel">
      <div class="status accent">типичный краулер</div>
      <div class="signal-list">
        <div class="signal">
          <div class="signal-label">модель</div>
          <div class="signal-value">только классические приложения, без учёта «нового» веба</div>
        </div>
        <div class="signal">
          <div class="signal-label">состояние</div>
          <div class="signal-value">не знает состояние приложения (SPA, клиентская логика)</div>
        </div>
        <div class="signal">
          <div class="signal-label">UI</div>
          <div class="signal-value">не взаимодействует с интерактивными элементами как пользователь</div>
        </div>
        <div class="signal">
          <div class="signal-label">события</div>
          <div class="signal-value">не умеет триггерить события в интерфейсе</div>
        </div>
      </div>
      <div class="note">Раньше интернет был другим, а теперь мы не знаем, что это такое.</div>
    </div>
    <div class="slide-24-framework" aria-hidden="true">
      <img src="/framework.png" alt="" />
    </div>
  </div>
</div>

<!--
Контраст «старый краулер» и современный веб: линейный HTML-мир vs приложения со состоянием и событиями. Заключительная фраза — про сдвиг парадигмы, а не про ностальгию.
-->

---
layout: full
---

<div class="slide-old-wrap">
  <img src="/old.png" alt="" />
</div>

---
layout: center
---

<div class="slide-new-web">
  <img src="/new-web.gif" alt="" />
</div>

<!--
Сатира «нового веба» рядом со слайдом старого — контраст для истории про краулер и SPA.
-->

---
class: slide-dense
---

# В связи с этим ограничения DAST сегодня

<div class="panel">
  <div class="status warning">сегодня</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">время</div>
      <div class="signal-value">долгое сканирование на сложных системах</div>
    </div>
    <div class="signal">
      <div class="signal-label">семантика UI</div>
      <div class="signal-value">нет понимания смысла интерфейса >> одинаковые действия выполняются сотни раз</div>
    </div>
    <div class="signal">
      <div class="signal-label">контекст</div>
      <div class="signal-value">потеря контекста между состояниями >> возврат в начальную точку</div>
    </div>
    <div class="signal">
      <div class="signal-label">поведение</div>
      <div class="signal-value">ограниченное моделирование пользователя >> в основном клики, без реальных сценариев</div>
    </div>
    <div class="signal">
      <div class="signal-label">покрытие</div>
      <div class="signal-value">проблемы с циклами и графом состояний >> зацикливание или потеря покрытия</div>
    </div>
    <div class="signal">
      <div class="signal-label">масштаб</div>
      <div class="signal-value">плохая масштабируемость на больших системах >> деградация на сложных целях</div>
    </div>
  </div>
</div>

<!--
Мост от «типичного краулера» к инженерным слайдам: почему DAST на современных целях тормозит и теряет смысл — время, дубли действий, обрыв контекста, слабые сценарии, циклы/покрытие, масштаб.
-->

---
class: slide-dense
---

# Что должен уметь динамический краулер

<div class="grid-2-even grid-2-even--with-figure">
  <div class="panel">
    <div class="status active">ожидание</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">фокус</div>
        <div class="signal-value">работать с <strong>фронтендом</strong>, а не с бэкендом</div>
      </div>
      <div class="signal">
        <div class="signal-label">действия</div>
        <div class="signal-value">выполнять реальные действия в UI</div>
      </div>
      <div class="signal">
        <div class="signal-label">события</div>
        <div class="signal-value">триггерить события</div>
      </div>
      <div class="signal">
        <div class="signal-label">состояние</div>
        <div class="signal-value">учитывать состояние UI</div>
      </div>
      <div class="signal">
        <div class="signal-label">state explosion</div>
        <div class="signal-value">быть устойчивым к циклам и взрыву графа состояний</div>
      </div>
      <div class="signal">
        <div class="signal-label">стек</div>
        <div class="signal-value">поддерживать зоопарк фреймворков</div>
      </div>
      <div class="signal">
        <div class="signal-label">SPA</div>
        <div class="signal-value">работать с одностраничными приложениями</div>
      </div>
    </div>
  </div>
  <div class="slide-side-figure" aria-hidden="true">
    <img src="/31.png" alt="" />
  </div>
</div>

<!--
Позитивная рамка: что значит «динамический» краулер в терминах фронта, событий, состояния и устойчивости к графу — контраст к предыдущему слайду с ограничениями.
-->

---
class: slide-dense slide-fingerprint-air
---

# Редизайн: fingerprint состояния

<div class="panel">
  <div class="status active">мини-схема</div>
  <div class="hero-line">не сравниваем страницу целиком — сравниваем состояние</div>

  <div class="flow">
    <span class="node">Page A</span>
    <span class="arrow">>></span>
    <span class="node">Extract anchors</span>
    <span class="arrow">>></span>
    <span class="node">Fingerprint A</span>
    <span class="arrow">>></span>
    <span class="node">Compare</span>
    <span class="arrow">>></span>
    <span class="node">Same / Different</span>
  </div>

  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">старый подход</div>
      <div class="signal-value">URL и сырой HTML дают слишком много шума и плохо отражают реальное состояние UI</div>
    </div>
    <div class="signal">
      <div class="signal-label">новый подход</div>
      <div class="signal-value">извлекаем <strong>стабильные якоря</strong> и собираем из них fingerprint состояния</div>
    </div>
    <div class="signal">
      <div class="signal-label">правило</div>
      <div class="signal-value">если fingerprint различается по значимым признакам -> это <strong>новое состояние</strong></div>
    </div>
  </div>
</div>

<div class="grid-2-even">
  <div class="panel">
    <div class="status warning">что не годится как опора</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">URL</div>
        <div class="signal-value">разные экраны могут жить на одном адресе</div>
      </div>
      <div class="signal">
        <div class="signal-label">HTML</div>
        <div class="signal-value">ререндер и динамика ломают прямое сравнение</div>
      </div>
      <div class="signal">
        <div class="signal-label">fuzzy match</div>
        <div class="signal-value">может склеить экраны, которые на самом деле разные</div>
      </div>
    </div>
  </div>

  <div class="panel">
    <div class="status accent">что даёт fingerprint</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">дедупликация</div>
        <div class="signal-value">не ходим по одному и тому же состоянию под разными масками</div>
      </div>
      <div class="signal">
        <div class="signal-label">покрытие</div>
        <div class="signal-value">не теряем действительно новые состояния приложения</div>
      </div>
      <div class="signal">
        <div class="signal-label">эффект</div>
        <div class="signal-value">меньше infinite crawl, больше реального покрытия</div>
      </div>
    </div>
  </div>
</div>

<div class="callout callout--key">
  <p><strong>Ключевая мысль:</strong> краулеру нужно понять не насколько похожи страницы, а исследовано ли остояние или нет.</p>
</div>

---
class: slide-dense
---

# Поблема №2 - Кнопку уже нажимали?

<div class="stack">
  <div class="panel">
    <div class="status warning">проблема</div>
    <div class="hero-line">идентичность элемента во времени и по сайту</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">вопрос</div>
        <div class="signal-value">краулер уже кликал по этой кнопке или это «другая»?</div>
      </div>
      <div class="signal">
        <div class="signal-label">дрейф DOM</div>
        <div class="signal-value">перезагрузка >> другие атрибуты, классы, стили >> тот же смысл</div>
      </div>
      <div class="signal">
        <div class="signal-label">локаль</div>
        <div class="signal-value">смена языка UI >> тот же контрол, другой текст</div>
      </div>
      <div class="signal">
        <div class="signal-label">дубликаты</div>
        <div class="signal-value"><strong>login</strong> на разных экранах >> одна роль или разные?</div>
      </div>
      <div class="signal">
        <div class="signal-label">смысл</div>
        <div class="signal-value">нужно стабильно отличать элементы <strong>по смыслу</strong>, а не по случайной разметке</div>
      </div>
      <div class="signal">
        <div class="signal-label">риск</div>
        <div class="signal-value">плохая логика >> снова бесконечный обход или провал покрытия</div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="status active">решение</div>
    <div class="hero-line">отпечаток элемента</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">идея</div>
        <div class="signal-value">набор признаков элемента, <strong>стабильный</strong> при перерисовке, смене HTML и контекста страницы</div>
      </div>
      <div class="signal">
        <div class="signal-label">склейка</div>
        <div class="signal-value">совпал отпечаток <strong>login</strong> здесь и там >> одна логическая кнопка >> не кликать по кругу, как пентестер</div>
      </div>
      <div class="signal">
        <div class="signal-label">гибкость</div>
        <div class="signal-value">не слишком жёстко: цвет, размер, сайдбар >> допустимы, смысл тот же</div>
      </div>
      <div class="signal">
        <div class="signal-label">ловушки</div>
        <div class="signal-value"><code>id</code> случайный · <code>action</code> формы от URL >> «стабильное» поле обманывает</div>
      </div>
      <div class="signal">
        <div class="signal-label">селекторы</div>
        <div class="signal-value">голый CSS / XPath >> коллизии или вечно разные пути из‑за динамики и контекста</div>
      </div>
      <div class="signal">
        <div class="signal-label">итог</div>
        <div class="signal-value">баланс: устойчивый отпечаток + допуск эволюции UI без потери смысла</div>
      </div>
    </div>
  </div>
</div>

<!--
Закадровый текст:

Краулеру нужно не «узнать пиксель кнопки», а понять, что он уже исследовал этот контроль: после reload меняются атрибуты и стили, меняется язык интерфейса, а одна и та же по смыслу кнопка (login и т.д.) повторяется в разных местах приложения. Ошибка в модели «это та же кнопка или новая» даёт тот же класс проблем, что и с состояниями страницы: либо зацикливание, либо дыры в покрытии.

Решение — ввести устойчивый отпечаток элемента: набор признаков, который переживает типичные изменения разметки и контекста, но позволяет схлопывать логически одинаковые элементы на разных страницах, как это делает человек. Отпечаток не должен быть настолько строгим, чтобы ломаться от смены темы или вёрстки, но и не должен опираться на псевдостабильные вещи вроде случайного id или меняющегося action. Чистые CSS/XPath селекторы в больших реальных приложениях часто дают либо неоднозначность, либо хрупкость — поэтому нужна более осмысленная схема признаков и фильтрации.
-->

---
class: slide-dense slide-fingerprint-air slide-fingerprint-tight
---

# Кнопку уже нажимали?

<div class="panel">
  <div class="status active">модель</div>
  <div class="hero-line">смысл элемента на сайте, а не сырой HTML</div>

  <div class="flow">
    <span class="node">Element</span>
    <span class="arrow">>></span>
    <span class="node">Stable signals</span>
    <span class="arrow">>></span>
    <span class="node">Logical match</span>
    <span class="arrow">>></span>
    <span class="node">Skip / Explore</span>
  </div>

  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">вопрос</div>
      <div class="signal-value">новый контрол или тот же, что уже исследовали?</div>
    </div>
    <div class="signal">
      <div class="signal-label">цель</div>
      <div class="signal-value"><strong>схлопывать</strong> одинаковые элементы при смене HTML, текста, контекста</div>
    </div>
    <div class="signal">
      <div class="signal-label">риск</div>
      <div class="signal-value"><strong>infinite crawl</strong> или потеря покрытия — тот же трейдофф, что в пункте про состояния</div>
    </div>
  </div>
</div>

<div class="grid-2-even">
  <div class="panel">
    <div class="status warning">что ломает наивный подход</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">динамика</div>
        <div class="signal-value">reload меняет атрибуты, классы, стили, куски DOM</div>
      </div>
      <div class="signal">
        <div class="signal-label">локаль</div>
        <div class="signal-value">язык другой, контрол по смыслу тот же</div>
      </div>
      <div class="signal">
        <div class="signal-label">контекст</div>
        <div class="signal-value"><strong>login</strong> и в других частях приложения</div>
      </div>
    </div>
  </div>

  <div class="panel">
    <div class="status accent">каким должно быть решение</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">устойчивость</div>
        <div class="signal-value">признаки переживают reopen, сильный HTML-дрейф, новый контекст</div>
      </div>
      <div class="signal">
        <div class="signal-label">гибкость</div>
        <div class="signal-value">цвет, размер, сайдбар могут меняться — роль та же</div>
      </div>
      <div class="signal">
        <div class="signal-label">ловушки</div>
        <div class="signal-value">случайный <code>id</code>, <code>action</code>, хрупкие CSS/XPath</div>
      </div>
    </div>
  </div>
</div>

<div class="callout callout--key">
  <p><strong>Ключевая мысль:</strong> совпал набор признаков — тот же логический контрол; не крутим проверку без нужды.</p>
</div>

---
class: slide-dense
---

# Профит краулера нового поколения

<div class="crawler-bench-grid">
  <div class="crawler-bench-card">
    <div class="crawler-bench-title">DVWA</div>
    <div class="crawler-bench-main">
      <span class="crawler-bench-score">13</span>
      <span class="crawler-bench-badge crawler-bench-badge--delta">+1</span>
    </div>
    <div class="crawler-bench-tags">
      <span class="crawler-bench-tag">XSS</span>
    </div>
  </div>
  <div class="crawler-bench-card">
    <div class="crawler-bench-title">Juice Shop</div>
    <div class="crawler-bench-main">
      <span class="crawler-bench-score">6</span>
      <span class="crawler-bench-badge crawler-bench-badge--new">NEW</span>
    </div>
    <div class="crawler-bench-tags">
      <span class="crawler-bench-tag">SQLi</span>
      <span class="crawler-bench-tag">SSRF</span>
      <span class="crawler-bench-tag">CSRF</span>
      <span class="crawler-bench-tag">XXE</span>
    </div>
  </div>
  <div class="crawler-bench-card">
    <div class="crawler-bench-title">PyGoat</div>
    <div class="crawler-bench-main">
      <span class="crawler-bench-score">5</span>
      <span class="crawler-bench-badge crawler-bench-badge--new">NEW</span>
    </div>
    <div class="crawler-bench-tags">
      <span class="crawler-bench-tag">SQLi</span>
      <span class="crawler-bench-tag">XSS</span>
      <span class="crawler-bench-tag">OSCmd</span>
      <span class="crawler-bench-tag">Deser</span>
    </div>
  </div>
  <div class="crawler-bench-card">
    <div class="crawler-bench-title">WebGoat</div>
    <div class="crawler-bench-main">
      <span class="crawler-bench-score">9</span>
      <span class="crawler-bench-badge crawler-bench-badge--new">NEW</span>
    </div>
    <div class="crawler-bench-tags">
      <span class="crawler-bench-tag">SQLi</span>
      <span class="crawler-bench-tag">CSRF</span>
    </div>
  </div>
</div>

<div class="panel crawler-bench-how">
  <div class="status active">за счёт чего</div>
  <div class="crawler-how-grid">
    <div class="crawler-how-item">современные фреймворки для автоматизированного тестирования под капотом</div>
    <div class="crawler-how-item">TypeScript + Python</div>
    <div class="crawler-how-item">перехват событий</div>
    <div class="crawler-how-item">динамический и статический поиск интерактивных элементов</div>
    <div class="crawler-how-item">расширяемая поддержка любых фреймворков (из коробки: React, Next.js, Angular, Vue, Nuxt, Bitrix)</div>
    <div class="crawler-how-item">ускорение загрузки страниц</div>
    <div class="crawler-how-item">работа с Shadow Root</div>
    <div class="crawler-how-item">несколько параллельных воркеров</div>
    <div class="crawler-how-item">конфигурируемые лимиты и чёрные списки</div>
    <div class="crawler-how-item">встроенная дедупликация элементов</div>
    <div class="crawler-how-item crawler-how-item--muted">и многое другое…</div>
  </div>
</div>

<!--
Сравнение на учебных целях (DVWA, Juice Shop, PyGoat, WebGoat): новый краулер даёт больше подтверждённых классов уязвимостей — часть находок помечена как полностью новые (NEW), на DVWA — прирост +1 (XSS). Слайд про «профит» покрытия и качества обхода, не про абсолютные цифры продакшена.

Ниже — инженерные опоры: стек тестовых фреймворков, TS+Python, события, гибридный поиск по DOM, покрытие популярных SPA-стеков, ускорение загрузки, Shadow DOM, параллельные воркеры, лимиты/блоклисты, дедупликация.
-->

---
class: slide-dense
---

# Аутентификация

<div class="panel">
  <div class="status warning">покрытие</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">суть</div>
      <div class="signal-value">без нормального входа сканер видит в основном «витрину»; интересная часть приложения часто начинается уже после логина</div>
    </div>
    <div class="signal">
      <div class="signal-label">сложность</div>
      <div class="signal-value">нужно не просто «войти», а воспроизводимо удерживать контекст на длинной серии запросов</div>
    </div>
    <div class="signal">
      <div class="signal-label">подводный камень</div>
      <div class="signal-value">ошибка может быть неочевидной: скан вроде стартовал «залогиненным», а дальше оказался в гостевом режиме</div>
    </div>
  </div>
</div>

<!--
Граница покрытия: за авторизацией другой мир; DAST режет scope, если auth не удаётся удержать.
-->

---

# Почему старые модели auth уже не тянут

<div class="panel">
  <div class="status accent">было</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">form login</div>
      <div class="signal-value">поля, POST, куки в ответе</div>
    </div>
    <div class="signal">
      <div class="signal-label">ещё</div>
      <div class="signal-value">HTTP basic/digest, bearer или api key, готовые «принесённые» куки</div>
    </div>
    <div class="signal">
      <div class="signal-label">сегодня</div>
      <div class="signal-value">приложения сложнее, логика запутаннее; логин живёт в JS, SPA, редиректах и нескольких шагах</div>
    </div>
    <div class="signal">
      <div class="signal-label">вывод</div>
      <div class="signal-value">картинка «страница с формой» перестала быть универсальной</div>
    </div>
  </div>
</div>

<!--
Традиционные подходы и их пределы; приложение усложняется — вместе с ним усложняется и auth.
-->

---
class: slide-dense
---

# Аутентификация как сценарий и состояние

<div class="grid-2-even">
  <div class="panel">
    <div class="status active">подход</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">браузер</div>
        <div class="signal-value">реальный UI: клики, ввод, ожидания, цепочки действий</div>
      </div>
      <div class="signal">
        <div class="signal-label">состояние</div>
        <div class="signal-value">куки, CSRF, storage, bearer — перенести в то, что уйдёт в HTTP</div>
      </div>
      <div class="signal">
        <div class="signal-label">жизнь сессии</div>
        <div class="signal-value">вылет, истёк токен, редирект на логин — заметить и поднять заново</div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="status warning">пределы</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">сложный вход</div>
        <div class="signal-value">несколько экранов, SSO, федерация</div>
      </div>
      <div class="signal">
        <div class="signal-label">перенос</div>
        <div class="signal-value">из браузера в движок не всё уезжает один в один</div>
      </div>
    </div>
  </div>
</div>

<!--
Современная модель: сценарий + state + lifecycle; остаточные ограничения.
-->

---
class: slide-dense slide-auth-replay
---

# Запись и replay

<div class="grid-2-even grid-2-even--with-figure">
  <div class="panel">
    <div class="status active">подход</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">запись</div>
        <div class="signal-value">действия пользователя в браузере</div>
      </div>
      <div class="signal">
        <div class="signal-label">replay</div>
        <div class="signal-value">воспроизведение вместо ручной настройки</div>
      </div>
      <div class="signal">
        <div class="signal-label">инженерия</div>
        <div class="signal-value">форматы: Selenium, Chrome Recorder и др.; стабильность при смене UI; токены и сессии</div>
      </div>
    </div>
  </div>
  <div class="slide-side-figure" aria-hidden="true">
    <img src="/auth-replay.gif" alt="" />
  </div>
</div>

<div class="callout callout--key">
  <p>аутентификация — это не форма, а <strong>сценарий</strong></p>
</div>

<!--
Демо: положите GIF в public/auth-replay.gif (или поменяйте путь в img).
-->

---
class: slide-dense
---

# Что сложно решать и куда все идут

<div class="stack">
  <div class="panel">
    <div class="status warning">сложные вызовы</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">люди</div>
        <div class="signal-value">MFA, WebAuthn — без участия человека или устройства не обойтись</div>
      </div>
      <div class="signal">
        <div class="signal-label">защита</div>
        <div class="signal-value">CAPTCHA, anti-bot, WAF, привязка сессии к fingerprint</div>
      </div>
      <div class="signal">
        <div class="signal-label">хаос</div>
        <div class="signal-value">нестабильный UI, персонализация, мало прозрачности «почему не залогинились»</div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="status accent">перспективы</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">браузер</div>
        <div class="signal-value">скан внутри браузерного контекста — без лишней «пересадки» состояния</div>
      </div>
      <div class="signal">
        <div class="signal-label">смысл</div>
        <div class="signal-value">LLM помогает понимать UI и собирать сценарии — дорого, не всегда предсказуемо, но уже в игре</div>
      </div>
    </div>
  </div>
</div>

<!--
Открытые фронты и куда движется поле: LLM как один из векторов, не как волшебная кнопка.
-->

---
layout: section
---

# Эволюция DAST

<div
  class="panel"
  v-motion
  :initial="{ opacity: 0, y: 22 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 26, delay: 80 } }"
>
  <div class="status active">обобщение</div>
  <div class="metric-grid cols-2">
    <div class="metric">
      <div class="metric-label">Проблема</div>
      <div class="metric-value">система</div>
      <p class="small" style="margin: 0.35rem 0 0;">не понимает приложение целиком</p>
    </div>
    <div class="metric">
      <div class="metric-label">Реальность</div>
      <div class="metric-value">архитектура</div>
      <p class="small" style="margin: 0.35rem 0 0;">сложные связи и состояния</p>
    </div>
    <div class="metric">
      <div class="metric-label">Эволюция</div>
      <div class="metric-value">контекст</div>
      <p class="small" style="margin: 0.35rem 0 0;">поведение, сценарии, артефакты</p>
    </div>
    <div class="metric">
      <div class="metric-label">Вызовы</div>
      <div class="metric-value">масштаб</div>
      <p class="small" style="margin: 0.35rem 0 0;">покрытие и воспроизводимость</p>
    </div>
  </div>
  <div class="callout callout--key" style="margin-top: 0.75rem;">
    <p>>> DAST стремится стать <strong>моделью атакующего</strong></p>
  </div>
</div>

<!--
Перебивка + обобщение: после краулинга и auth — куда движется DAST. Движок должен не только «стрелять payload», а понимать приложение; отсюда краулинг, сценарный вход, OAST и входные артефакты. Дальше — рынок и облако.
-->

---

# Контекст рынка и облако

<div class="panel">
  <div class="status warning">рынок</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">давление</div>
      <div class="signal-value">vibe coding, быстрые релизы, взрыв числа приложений >> security не успевает, растёт attack surface</div>
    </div>
    <div class="signal">
      <div class="signal-label">ожидание</div>
      <div class="signal-value">простой старт: «взял и просканировал»</div>
    </div>
    <div class="signal">
      <div class="signal-label">облако</div>
      <div class="signal-value">классический DAST часто требует инфраструктуры >> <strong>облако</strong> снижает порог (старт, масштаб)</div>
    </div>
  </div>
</div>

<!--
Индустрия требует инструментов с низким трением: иначе security отстаёт от скорости разработки.
-->

---

# От finding к fixing

<div class="panel">
  <div class="status accent">LLM-based How to Fix</div>
  <div class="hero-line">когда находка не конвертируется в патч</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">проблема</div>
      <div class="signal-value">даже при найденной уязвимости разработчик <strong>не понимает, как исправить</strong> · без AppSec фикс тормозит</div>
    </div>
    <div class="signal">
      <div class="signal-label">подход</div>
      <div class="signal-value">LLM генерирует рекомендации с учётом CWE, endpoint, параметров, <strong>стека</strong></div>
    </div>
  </div>
</div>

<!--
Связка с предыдущим слайдом: дальше — что это даёт команде и смысловой инсайт.
-->

---
class: slide-dense slide-37-h2f-split
---

# LLM-based *How to Fix* — эффект

<div class="slide-37-h2f-center">
  <div class="slide-37-h2f-row">
    <div class="panel">
      <div class="status active">эффект</div>
      <div class="signal-list">
        <div class="signal">
          <div class="signal-label">понятность</div>
          <div class="signal-value">объяснение уязвимости простым языком</div>
        </div>
        <div class="signal">
          <div class="signal-label">действие</div>
          <div class="signal-value">пошаговые рекомендации — что менять и в каком порядке</div>
        </div>
        <div class="signal">
          <div class="signal-label">контекст</div>
          <div class="signal-value">примеры кода и конфигураций под находку</div>
        </div>
      </div>
      <div class="callout callout--key slide-37-h2f-callout">
        <p>от <strong>finding</strong> к <strong>fixing</strong> — DAST начинает помогать чинить, а не только находить</p>
      </div>
    </div>
    <div class="slide-37-h2f-figure" aria-hidden="true">
      <img src="/35.png" alt="" />
    </div>
  </div>
</div>

<!--
Снижаем зависимость от редкого AppSec на каждый finding. Важно: советы LLM нужно валидировать; ответственность за фикс остаётся у команды.
-->

---
layout: section
class: title-cursor
---

# Агентные технологии в DAST

<div
  class="panel"
  v-motion
  :initial="{ opacity: 0, y: 22 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 26, delay: 80 } }"
>
  <div class="status accent">следующий шаг</div>
  <div class="hero-line">не статическое сканирование</div>
  <p>системы, которые <strong>сами думают, планируют и действуют</strong></p>
</div>

<!--
Перебивка раздела + рамка: агентные системы; дальше — адаптивные атаки, бизнес-логика, автономные агенты, PoC, ремедиация, AI/NHI, триаж.
-->

---

# Адаптивные атаки и бизнес-логика

<div class="grid-2-even">
  <div class="panel">
    <div class="status active">адаптивные атаки</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">логика</div>
        <div class="signal-value">анализ ответов вместо слепого перебора payload'ов</div>
      </div>
      <div class="signal">
        <div class="signal-label">поведение</div>
        <div class="signal-value">подстройка под систему · ближе к <strong>пентестеру</strong></div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="status warning">бизнес-логика</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">типы</div>
        <div class="signal-value">BOLA и сложные уязвимости в процессах</div>
      </div>
      <div class="signal">
        <div class="signal-label">контекст</div>
        <div class="signal-value">роли, сценарии пользователей, не только endpoint'ы</div>
      </div>
    </div>
  </div>
</div>

<!--
10.1 и 10.2 из плана: сдвиг от «долбить шаблонами» к осмысленной адаптации и сценариям.
-->

---

# Автономные агенты: Think >> Plan >> Act

<div class="panel">
  <div class="status accent">рои и стратегии</div>
  <div class="hero-line">агенты исследуют систему и строят стратегию атаки</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">Strix</div>
      <div class="signal-value">рой агентов: исследование и эксплуатация</div>
    </div>
    <div class="signal">
      <div class="signal-label">Escape</div>
      <div class="signal-value">поиск <strong>цепочек атак</strong> в бизнес-логике</div>
    </div>
    <div class="signal">
      <div class="signal-label">Terra</div>
      <div class="signal-value">адаптация стратегии сканирования <strong>в реальном времени</strong></div>
    </div>
  </div>
</div>

<!--
10.3: автономные «хакеры» как продуктовое направление; имена — ориентиры для аудитории.
-->

---

# PoC и доказательная база

<div class="panel">
  <div class="status active">доказательность</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">воспроизведение</div>
      <div class="signal-value">автоматические сценарии воспроизведения</div>
    </div>
    <div class="signal">
      <div class="signal-label">sandbox</div>
      <div class="signal-value">например Docker — меньше FP, больше доказательности</div>
    </div>
  </div>
  <div class="signal-list" style="margin-top: 0.5rem;">
    <div class="signal">
      <div class="signal-label">CHECKMATE</div>
      <div class="signal-value">планирование атак с инструментами (Nmap, Metasploit…)</div>
    </div>
    <div class="signal">
      <div class="signal-label">CurriculumPT</div>
      <div class="signal-value">генерация <strong>PoC</strong></div>
    </div>
  </div>
  <div class="note">finding >> PoC >> fix (PR) как end-to-end</div>
</div>

<!--
10.4: доказательная база и воспроизводимость.
-->

---

# Авто-ремедиация

<div class="panel">
  <div class="status accent">от находки к патчу</div>
  <div class="hero-line">агенты предлагают или вносят исправления</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">Furl</div>
      <div class="signal-value">автоматическое устранение уязвимостей</div>
    </div>
    <div class="signal">
      <div class="signal-label">Cycode Maestro</div>
      <div class="signal-value">генерация <strong>Pull Request</strong></div>
    </div>
  </div>
</div>

<!--
10.5: от обнаружения к правке в репозитории.
-->

---

# Безопасность AI, NHI и агентный триаж

<div class="grid-2-even">
  <div class="panel">
    <div class="status warning">NHI</div>
    <div class="hero-line">нечеловеческие идентичности</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">защита</div>
        <div class="signal-value">API keys, сервисные учётки, теневые AI-активы</div>
      </div>
      <div class="signal">
        <div class="signal-label">примеры</div>
        <div class="signal-value"><strong>Noma</strong>, <strong>Entro</strong> · <strong>Prisma AIRS</strong></div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="status accent">триаж</div>
    <div class="hero-line">разбор алертов</div>
    <div class="signal-list">
      <div class="signal">
        <div class="signal-label">цель</div>
        <div class="signal-value">анализ вместо ручного разбора · отсев шума</div>
      </div>
      <div class="signal">
        <div class="signal-label">пример</div>
        <div class="signal-value"><strong>Dropzone AI</strong></div>
      </div>
    </div>
  </div>
</div>

<!--
10.6 и 10.7: соседние темы «вокруг» агента — кто атакует/строит пайплайны и кто разгребает шум.
-->

---

# Инсайт и ключевая мысль

<div class="callout">

**Инсайт:** DAST превращается из инструмента в **активного участника** процесса

</div>

<div class="callout callout--key">

**Ключевая мысль:** будущее — это не сканер, а система, которая **сама атакует**, **доказывает** (PoC) и **предлагает исправления**

</div>

<!--
Сводка блока перед оговоркой про зрелость технологий.
-->

---

# Уже сейчас — но не production

<div class="panel">
  <div class="status warning">зрелость</div>
  <div class="hero-line">направления уже в продуктах и исследованиях</div>
  <p>но <strong>в целом</strong> это ещё не промышленный стандарт для всех команд</p>
  <div class="note"><strong>Ограничения:</strong> нестабильность, контроль и воспроизводимость, доверие и ответственность</div>
</div>

<!--
Честность про зрелость: иначе аудитория услышит «всё уже готово».
-->

---

# Будущее

<div class="cyber-statement">

не сканер

а система,
которая **сама атакует и исправляет**

</div>

<!--
Короткий эмоциональный якорь после технического блока; перекликается с ключевой мыслью на предыдущих слайдах.
-->

---
layout: section
class: title-cursor
---

# Вывод

<div
  class="panel panel-conclusion"
  v-motion
  :initial="{ opacity: 0, y: 22 }"
  :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 26, delay: 80 } }"
>
  <div class="status active">итог</div>
  <div class="hero-line">атакуемость · инструмент · эволюция</div>
  <div class="cyber-checklist">
    <ul>
      <li>DAST — про реальную атакуемость</li>
      <li>без него картина неполная</li>
      <li>важен не только инструмент</li>
      <li>но и его использование</li>
      <li>дальше >> не finding, а fixing</li>
      <li>потом >> автономные действия</li>
    </ul>
  </div>
</div>

<!--
Закадровый текст.

Если собрать всё вместе.

DAST — это про реальную атакуемость.

Без него картина безопасности всегда неполная.

Но важно понимать:
дело не только в инструменте.

А в том, как вы его используете.

И дальше эволюция понятна:

сначала мы искали,
потом начали помогать исправлять,
и следующий шаг — это автономные действия.
-->
