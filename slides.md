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
---

<SlideZeroPoster />

<!--
Сегодня хочу поговорить не просто про инструмент, а про сам подход к проверке безопасности. Вопрос в том, достаточно ли нам смотреть на код, или нужно смотреть на то, как система реально ведет себя под атакой.
-->

---
layout: full
class: deck-cover deck-cover-provocative
---

<div class="cover-provocative">
  <img class="cover-provocative__bg" src="/00.png" alt="" />
  <div class="cover-provocative__shade" aria-hidden="true"></div>
  <div class="cover-provocative__glow" aria-hidden="true"></div>

  <div class="cover-provocative__title cover-provocative__title--matrix">
    <span class="cover-provocative__title-line">
      <span class="cover-provocative__glitch" data-text="DAST">DAST</span>
    </span>
    <span class="cover-provocative__title-line">
      <span class="cover-provocative__glitch" data-text="или не DAST,">или не DAST,</span>
    </span>
    <span class="cover-provocative__title-line">
      <span class="cover-provocative__glitch" data-text="вот в чём вопрос">вот в чём вопрос</span>
    </span>
  </div>
</div>

<!--
Это, по сути, вводная рамка всего разговора. Дальше будем разбираться, где заканчиваются теоретические риски и начинается подтвержденная атакуемость.
-->

---
class: slide-dense slide-2-split
---

# Система, а не только код

<div class="grid-2-even grid-2-even--with-figure">
  <div
    class="panel"
    v-motion
    :initial="{ opacity: 0, y: 22 }"
    :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 26, delay: 70 } }"
  >
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
    <div
      class="slide-side-figure__motion"
      v-motion
      :initial="{ opacity: 0, x: 36 }"
      :enter="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 260, damping: 28, delay: 150 } }"
    >
      <img src="/2.png" alt="" />
    </div>
  </div>
</div>

<!--
Мы очень часто обсуждаем безопасность на уровне исходников, но атакуют не репозиторий, а работающее приложение. И даже если код выглядит безопасным, риски могут появляться на уровне конфигурации, интеграций, маршрутизации и самих стыков между компонентами.
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
Здесь мысль простая: истина находится в runtime. Пока мы не видим, как система отвечает на конкретный запрос и можно ли это воспроизвести, мы говорим не о факте, а о гипотезе.
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
Раньше можно было позволить себе более медленные и локальные проверки, но сейчас системы стали сложнее и выпускаются намного быстрее. Чем больше API, микросервисов и внешних связей, тем сложнее понять реальную поверхность атаки без проверки работающего приложения.
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
SAST нужен и полезен, но он видит код, а не поведение. DAST смотрит на систему снаружи, как это сделал бы атакующий, и именно поэтому дает другой уровень понимания риска.
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
Ценность DAST в том, что он помогает отделить теоретическую проблему от реально эксплуатируемой. То есть он отвечает не на вопрос «что может быть опасно», а на вопрос «что действительно можно использовать против системы».
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
Если упростить, DAST проходит по довольно понятному циклу. Сначала он исследует поверхность приложения, потом учитывает конфигурацию, затем пытается атаковать, смотрит на реакцию системы и уже после этого формирует результаты, с которыми можно работать дальше.
-->

---
class: slide-dense
---

# Встраивание в процесс разработки

<PtBlackBoxDiagram />

<!--
Здесь важна не только сама идея DAST, но и то, как он встраивается в процесс разработки.
На схеме показан не разовый запуск сканера, а нормальный рабочий контур.

Слева начинается обычный инженерный цикл: приложение или микросервис разворачивается в тестовом контуре. После этого в процесс подключается DAST и начинает анализировать уже поднятую систему, то есть не исходники, а реальный работающий экземпляр.

Дальше важный момент: сканирование не обязательно должно жить только на pre-release этапе. На схеме отдельно показан и продуктивный контур. Это означает, что динамический анализ может быть встроен и в более поздние стадии жизненного цикла, когда мы хотим проверить уже реально развернутую конфигурацию, реальные маршруты, реальные интеграции и то, как система ведет себя в боевой среде.

И финальная часть схемы — это триаж и работа с отчетами. То есть ценность возникает не в момент, когда сканер что-то нашел, а в момент, когда результаты превращаются в понятные действия: что критично, что подтверждено, что нужно чинить в первую очередь, а что можно отложить.

Поэтому смысл этой схемы довольно простой: DAST — это не отдельная коробка "для безопасников". Это часть общего pipeline, который связывает тестовый контур, production и дальнейшую инженерную работу с найденными рисками.
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
Для бизнеса здесь важны не сами сканы, а последствия. Меньше шума, лучше приоритизация, фокус на действительно опасных проблемах и более понятная связь между безопасностью и реальными решениями в разработке.
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
Дальше важно развести несколько режимов работы, потому что DAST бывает очень разным по применению. И в зависимости от задачи нам нужен либо контроль, либо масштаб, либо встраивание в pipeline.
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
Ручной режим дает глубину и гибкость, но плохо масштабируется. Автоматический режим дает охват, но хуже понимает контекст. А CI/CD-режим полезен до тех пор, пока не начинает мешать команде и ломать доверие к результатам.
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
Здесь как раз собраны типичные причины, почему старый DAST часто воспринимается тяжеловесно. Он может что-то находить, но не всегда объясняет, что с этим делать, а без нормальной работы с auth и покрытием вообще легко получить пустой или малополезный результат.
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
На практике все довольно приземленно. Если инструмент долго настраивать, трудно поддерживать и его результаты не помогают принимать решения, команда рано или поздно просто перестает им пользоваться.
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
  <div class="status accent">какой он</div>
  <div class="hero-line">не сканер — платформа</div>
  <p>каким должен быть DAST, чтобы это исправить?</p>
</div>

<!--
Поэтому дальше возникает логичный вопрос: каким должен быть DAST, чтобы его не выключали. И ответ здесь уже не про еще один сканер, а про платформу, которая нормально встроена в процесс и дает понятный результат.
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
У такой платформы есть несколько обязательных свойств. Она должна сочетать разные режимы работы, понимать современные стеки и протоколы, и при этом оставаться прозрачной: чтобы было видно, что именно делает сканер и почему он пришел к такому выводу.
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
Кроме самого анализа важна еще и эксплуатационная сторона. Инструмент должен нормально жить и локально, и в enterprise-среде, встраиваться через API в процессы команды и выдавать результат, которому можно доверять и который можно воспроизвести.
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
Но даже у хорошего DAST есть естественные границы. Как только мы приходим к сложным сценариям входа и особенно к MFA, задача упирается уже не только в сканирование, а в воспроизводимость пользовательского сценария.
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
Теперь переходим к реальному кейсу. Частая жалоба звучит так: сканер почти ничего не нашел, значит он слабый. Но на практике это часто не проблема движка, а проблема видимости приложения.
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
Это уже конкретика с пилота у клиента. Симптом со стороны бизнеса звучит просто: «сканер почти ничего не находит», и отсюда логичный вывод — «значит, инструмент слабый». Но если копнуть глубже, картина другая.

Приложение — SPA: пользовательский интерфейс живёт в браузере, а основная логика и данные уходят в API на backend. Сканер по умолчанию ходит по тому, что видит снаружи, то есть в первую очередь по фронту. А критичные для безопасности вещи часто сидят именно за вызовами API — там, куда фронт ходит XHR-ом или fetch-ом, а не по тем ссылкам, которые видит классический краулер.

Отдельная боль — отсутствие нормального контракта. Мы говорим: «подгрузите OpenAPI, чтобы было понятно, какие endpoint'ы существуют». В ответ типичный enterprise-ответ: «схемы нет, мы не знаем, где её взять, она нигде не лежит одним файлом». Без карты API backend для сканера почти невидим: он не понимает, куда стрелять и что считать полноценной поверхностью атаки.

Итоговый вывод для аудитории: проблема не в том, что «плохо ищут», а в том, что неясно, куда идти. Пока нет модели приложения и списка реальных маршрутов, DAST физически не может выдать содержательный результат — как бы ни был хорош движок проверок.
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
Когда OpenAPI нет и заказчик сам не может нарисовать карту API, самый практичный обход — не спорить про схему, а дать инструменту фактический трафик. Отсюда цепочка на слайде: Chrome → HAR → DAST.

Человек просто проходит в браузере те сценарии, которые ему важны: логин, типичные действия, переходы по разделам. DevTools или встроенное сохранение записывает HAR — по сути, последовательность реальных HTTP-запросов и ответов. Этот файл мы загружаем в DAST, и сканер получает не догадку, а список реальных URL, методов, параметров и того, как фронт на самом деле общается с backend.

Эффект обычно двойной. Во-первых, резко растёт покрытие: появляются те API, о которых никто не написал в документации. Во-вторых, начинают всплывать осмысленные находки — потому что проверки наконец применяются к тому, что реально используется в продукте, а не к «витрине» без бизнес-логики.

Фраза внизу слайда как раз про это: если ты сам не знаешь, как пользоваться приложением и какие сценарии критичны, DAST не сможет это угадать за тебя. HAR — способ честно «показать» систему инструменту без идеальной спецификации.
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
Это, наверное, один из ключевых тезисов всей презентации. Пока у DAST нет нормальной карты приложения, он атакует вслепую; сначала нужен контекст, и только потом уже осмысленные проверки.
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
Дальше переходим к тому, как DAST меняется технически. Здесь речь уже не столько про общую ценность, сколько про инженерные ограничения и способы их обходить.
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
<!--
Краулер — это то, из чего вообще складывается поверхность атаки для DAST: какие URL и эндпоинты существуют, какие запросы реально уходят в приложение, какая получается карта. Всё остальное — проверки, payload'ы, политики — работает только поверх этого слоя. Поэтому тезис на слайде справедливый: качество сканирования почти всегда упирается в качество краулинга.

Слева — зачем он нужен. Справа — как менялась модель: от «паука по HTML» к SPA и клиентской логике, отсюда headless и исполнение JS, и отдельная цена — взрыв состояний и зацикливание. Итог внизу: краулер всё больше похож не на парсер страниц, а на симуляцию пользователя — потому что иначе просто нечего честно атаковать.
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
<!--
Здесь не повторяем общую теорию, а смотрим на «типичный» краулер глазами его ограничений. Он заточен под классическую модель: линейные страницы и ссылки. В SPA состояние живёт в клиенте — без нормальной модели состояния сканер просто не знает, что уже открылось и что ещё доступно.

Дальше по пунктам на слайду: такой краулер не ведёт себя как пользователь с интерфейсом — не кликает по смыслу, не раскрывает те же ветки, что человек, и не умеет честно триггерить события в UI. В итоге карта приложения получается бедной, а картинка справа как раз про то, что стек и паттерны UI размножились — и наивного обхода тут уже мало.

Заметку внизу можно озвучить с иронией: да, раньше веб был проще и предсказуемее для обхода; сейчас задача — не ностальгировать, а явно признать разрыв между старым краулером и тем, что от него ждут на современной цели.
-->


---
layout: full
---

<div class="slide-old-wrap">
  <img src="/old.png" alt="" />
</div>

<!--
Раньше интернет был куда более линейным и предсказуемым, и для краулера это была почти идеальная среда.
-->

---
layout: center
---

<div class="slide-new-web">
  <img src="/new-web.gif" alt="" />
</div>

<!--
А теперь приложение часто больше похоже на отдельную интерактивную систему, чем на набор страниц. И именно поэтому краулинг сегодня должен быть ближе к поведению реального пользователя.
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
Этот слайд важен, потому что здесь уже видно: современный DAST упирается не в одну конкретную проблему, а в целый набор ограничений. Чем сложнее приложение, тем дольше идет сканирование, тем легче потерять контекст и тем хуже становится покрытие.

Если сканер не понимает смысл интерфейса, он начинает повторять похожие действия, ходить по кругу и тратить время не туда. А если он плохо удерживает состояние и слабо моделирует поведение пользователя, то формально что-то исследует, но до реальных сценариев и уязвимостей часто просто не доходит.

Поэтому главный вывод здесь такой: ограничение современного DAST — не только в payload'ах, а в самой способности осмысленно исследовать сложное приложение.
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
<!--
Если на прошлом слайде мы говорили про ограничения, то здесь уже про требования к новому краулеру. Он должен работать не с абстрактным HTML, а с фронтендом как с живой системой — с действиями, событиями, состоянием и логикой интерфейса.

То есть от него ждут не просто обхода страниц, а поведения, которое ближе к пользователю: открыть нужный экран, нажать нужный элемент, удержать контекст и не потеряться в SPA. И при этом он должен оставаться устойчивым к циклам, взрыву состояний и разнообразию фреймворков.

Иначе говоря, динамический краулер сегодня — это уже не «обходчик ссылок», а движок исследования современного интерфейса.
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


<!--
Для современного краулера уже недостаточно сравнивать страницы по URL или по сырому HTML. В SPA один и тот же URL может соответствовать разным экранам, а HTML может сильно меняться из-за ререндера, даже если с точки зрения пользователя состояние приложения осталось тем же.

Поэтому задача формулируется иначе: краулер должен определять не «страница похожа или не похожа», а «это новое состояние системы или уже исследованное». Для этого и нужен fingerprint состояния — набор устойчивых признаков, которые лучше отражают структуру и смысл текущего UI, чем адрес страницы или полный DOM.

Технический смысл этого подхода в том, что он уменьшает шум при сравнении и помогает держать баланс между двумя рисками: не зациклиться на одном и том же состоянии под разными масками и при этом не склеить разные экраны в один. То есть fingerprint здесь — это способ сделать обход не просто полным, а осмысленным.
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


<!--
Но даже если мы научились различать состояния приложения, возникает следующий уровень сложности: как понять, что конкретный элемент на экране уже исследовали. Для краулера это нетривиальная задача, потому что один и тот же контрол может менять атрибуты, текст, позицию в DOM и даже внешний вид, оставаясь тем же самым по смыслу.

На слайде как раз перечислены источники этой нестабильности: дрейф DOM после перезагрузки, локализация, повторение одинаковых элементов в разных частях интерфейса. Для человека это обычно не проблема — он понимает, что перед ним снова логическая кнопка login или тот же сценарный шаг. Для машины без дополнительной модели это либо «новый элемент», либо слишком грубое совпадение.

И вот здесь ошибка очень дорогая. Если считать одинаковые контролы разными, краулер начинает ходить по кругу и повторять действия. Если, наоборот, слишком агрессивно их склеивать, можно потерять покрытие и не дойти до новых веток поведения. Поэтому задача уже не в поиске кнопки как DOM-узла, а в распознавании её логической роли в интерфейсе.
-->

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
Здесь уже показан эффект такого подхода на учебных целях. Смысл не в абсолютных цифрах, а в том, что лучшее понимание интерфейса и состояний напрямую повышает покрытие и позволяет добраться до большего числа реальных уязвимостей.
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
Вторая большая техническая тема после краулинга — это аутентификация. Без нее DAST очень часто видит только внешнюю оболочку приложения, а вся интересная логика остается за закрытой дверью.
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
После краулинга это вторая ключевая техническая проблема для DAST. Без аутентификации сканер видит в основном внешнюю оболочку приложения, а вся интересная логика — роли, данные, внутренние API и сценарии — часто начинается уже после логина.

При этом важно не просто один раз войти, а воспроизводимо удерживать аутентифицированный контекст на длинной серии запросов. И здесь ошибка часто неочевидна: скан вроде стартовал «залогиненным», но дальше незаметно ушёл в гостевой режим. Поэтому auth в DAST — это не вспомогательная функция, а один из факторов, от которых зависит реальное покрытие.
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
Старые модели аутентификации были рассчитаны на простой веб: форма, POST-запрос, cookie в ответе, и дальше можно работать. То же самое с basic, bearer или заранее выданными cookie — модель прямолинейная и удобная для автоматизации.

Но современный login-flow так больше не выглядит. Логин часто живёт в JavaScript, в нескольких шагах, в редиректах, SSO, OAuth или SPA-механике. Поэтому подход «нашли форму, отправили креды, сохранили cookie» перестал быть универсальным: он слишком хрупкий и часто только создаёт иллюзию, что аутентификация уже решена.
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
  <p>Аутентификация — это не форма, а <strong>сценарий</strong></p>
</div>

<!--
Отсюда и новый подход: аутентификацию нужно воспринимать не как форму, а как сценарий плюс состояние. Сканер должен пройти реальную цепочку действий в браузере, затем корректно перенести в HTTP-движок всё, что связано с сессией: cookie, CSRF, storage, bearer-токены и другие артефакты.
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
При этом есть вещи, которые остаются по-настоящему сложными: MFA, WebAuthn, anti-bot, привязка сессии к устройству или поведению. Здесь отрасль движется к browser-native подходам и к более умному пониманию UI, но универсального решения пока нет.
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
Если собрать этот блок вместе, видно общий вектор. DAST постепенно уходит от идеи «сканера с набором payload'ов» и движется к системе, которая должна лучше понимать само приложение.
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
На это давит и рынок: приложений становится больше, релизов больше, скорости выше, и командам нужны инструменты с низким порогом входа, поэтому облачные модели здесь выглядят вполне логичным развитием.
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
Но найти проблему — это только половина дела. На практике очень часто тормозит не обнаружение, а момент, когда разработчик смотрит на finding и не понимает, как именно его перевести в исправление.
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
Здесь появляется новый слой ценности: не просто показать уязвимость, а объяснить ее, дать рекомендации и сократить дистанцию между security и разработкой. То есть DAST начинает помогать не только искать, но и чинить. Советы LLM при этом всё равно нужно проверять — ответственность за фикс остаётся у команды.
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
Дальше начинается следующий уровень эволюции — агентные технологии. Это уже не просто сканер с заранее заданным сценарием, а система, которая умеет думать, планировать и менять стратегию по ходу анализа.
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
Первый вектор здесь — адаптивные атаки и бизнес-логика. Вместо тупого перебора payload'ов система анализирует ответы, подстраивает дальнейшие действия и пытается работать ближе к модели реального пентестера, особенно на классах вроде BOLA и процессных уязвимостей.
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
Второй вектор — автономные агенты с моделью Think, Plan, Act. Идея в том, что агент сначала исследует систему, затем строит стратегию атаки, а не просто исполняет фиксированный набор проверок по шаблону.
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
Третий вектор — доказательная база и PoC. Ценность finding резко растет, когда система может сама воспроизвести атаку, собрать артефакты доказательства и показать, что проблема действительно эксплуатируема.
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
Следующий шаг — авто-ремедиация. То есть система не только подтверждает уязвимость, но и предлагает патч или даже генерирует Pull Request, сокращая цикл между AppSec и разработкой.
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
Параллельно расширяется сам периметр задач: безопасность AI-систем, нечеловеческие идентичности, сервисные аккаунты, API-ключи и агентный триаж. То есть агентность начинает применяться не только к атаке, но и к разбору шума и управлению новой поверхностью риска.
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
Главный инсайт этого блока в том, что DAST перестает быть просто инструментом проверки. Он постепенно становится активным участником процесса: исследует, подтверждает, объясняет и помогает доводить работу до исправления.
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
При этом важно не переобещать: многие из этих направлений уже реально существуют, но в целом это пока еще не зрелый стандарт для всех команд и не универсальная production-практика.
-->

---
layout: section
class: title-cursor slide-manifest
---

# Вывод

<div
  class="manifest"
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 } }"
>
  <p class="manifest__lead">DAST — это не просто поиск уязвимостей.</p>

  <p class="manifest__statement">
    Это путь от <span class="manifest__hl manifest__hl--primary">реальной атакуемости</span><br />
    к <span class="manifest__hl manifest__hl--accent">исправлению</span><br />
    и дальше к <span class="manifest__hl manifest__hl--danger">автономности</span>
  </p>

  <div class="manifest__tags" aria-label="Ключевые опоры">
    <span class="manifest__tag">реальная атакуемость</span>
    <span class="manifest__tag">finding → fixing</span>
    <span class="manifest__tag">автономные действия</span>
  </div>
</div>

<!--
Если смотреть вперед, то направление движения уже видно довольно хорошо. Будущее DAST — это не просто сканер, а система, которая берет на себя все больший кусок цикла: от исследования до подтверждения и дальше до remediation.

Если собрать все вместе, DAST — это прежде всего про реальную атакуемость. Но его эффективность определяется не только самим инструментом, а тем, насколько хорошо он встроен в процесс, насколько понимает систему и насколько способен переводить finding в fixing, а затем и в более автономные действия.
-->

---
layout: full
---

<div class="slide-final-poster">
  <img src="/final.png" alt="" />
</div>

<!--
На этом можно оставить аудиторию с простой мыслью. Без проверки работающей системы картина безопасности всегда остается неполной, а значит DAST — это не опция «на всякий случай», а важная часть современной AppSec-практики.
-->
