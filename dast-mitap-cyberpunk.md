---
theme: default
title: Динамический анализ приложений (DAST)
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
layout: center
---

<!--
  Стили: ./styles/index.css (cyberpunk). Исходник тезисов: «Митап - DAST.md»
-->

<div class="center-xy">
  <div class="kicker">митап · appsec · runtime</div>
  <div class="hero-title">DAST</div>
  <div class="hero-sub">
    Динамический анализ приложений: реальная атакуемость, а не только код
  </div>
  <div class="badge-row">
    <span class="badge primary">runtime</span>
    <span class="badge danger">чёрный ящик</span>
    <span class="badge success">HTTP / API</span>
    <span class="badge accent">CI/CD</span>
    <span class="badge warning">эволюция</span>
  </div>
</div>

---

# Вход / контекст

<div class="panel">
  <div class="status active">позиция</div>
  <div class="hero-line">атакуют не код — атакуют работающее приложение</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">стыки</div>
      <div class="signal-value">Уязвимости на границах backend ↔ frontend, сервис ↔ сервис, приложение ↔ инфраструктура.</div>
    </div>
    <div class="signal">
      <div class="signal-label">runtime</div>
      <div class="signal-value">Реальное поведение: headers, cookies, auth-флоу, маршрутизация, сторонние сервисы. Эксплуатируемость видна только в ответах на запросы.</div>
    </div>
    <div class="signal">
      <div class="signal-label">вывод</div>
      <div class="signal-value">Без проверки работающего приложения мы видим лишь «потенциальные» проблемы, а не реальные атаки.</div>
    </div>
  </div>
  <div class="note">DAST в продукте — попытка воспроизвести действия атакующего извне (как PT BlackBox).</div>
</div>

---

# Индустрия

<div class="metric-grid">
  <div class="metric">
    <div class="metric-label">архитектура</div>
    <div class="metric-value">μservices</div>
  </div>
  <div class="metric">
    <div class="metric-label">релизы</div>
    <div class="metric-value">неск./день</div>
  </div>
  <div class="metric">
    <div class="metric-label">поверхность</div>
    <div class="metric-value">web + API</div>
  </div>
</div>

<div class="panel">
  <div class="status accent">инсайт</div>
  <div class="hero-line">без runtime-проверки безопасность перестаёт быть достоверной</div>
  <ul>
    <li>Микросервисы и API-first</li>
    <li>Частые деплои</li>
    <li>Рост доли AI-сгенерированного кода</li>
    <li>Рост внешней поверхности атаки</li>
  </ul>
</div>

---
layout: two-cols
---

## SAST

- Видит код, не видит поведение
- Не учитывает конфигурацию, инфраструктуру, интеграции
- «Может быть проблема»

::right::

## DAST

- Тестирует работающую систему
- Показывает реальную атакуемость
- «Вот как это ломается»

---

# Что такое DAST

<div class="panel">
  <div class="status active">определение</div>
  <div class="hero-line">проверка поведения, а не только кода</div>
  <ul>
    <li>Тестирование работающего приложения (runtime)</li>
    <li>Подход «чёрного ящика»</li>
    <li>Работа через HTTP / API / UI</li>
    <li>Моделирование атак через запросы и анализ ответов</li>
    <li>Комбинация сигнатурного и эвристического анализа</li>
  </ul>
</div>

---

# Зачем DAST

<div class="panel">
  <div class="status accent">бизнес</div>
  <div class="flow">
    <span class="node">реальная атакуемость</span>
    <span class="arrow">→</span>
    <span class="node">приоритизация</span>
    <span class="arrow">→</span>
    <span class="node">периметр</span>
    <span class="arrow">→</span>
    <span class="node">релиз</span>
  </div>
  <ul>
    <li>Приоритизация: эксплуатируемые vs теоретические</li>
    <li>Меньше шума относительно чистого SAST в части «доказуемости»</li>
    <li>Контроль внешнего периметра, проверка перед релизом</li>
    <li>Разовые сканы и встраивание в CI/CD; gate по интегральной оценке</li>
  </ul>
</div>

---

# Виды динамического анализа

<div class="grid-2-even">
  <div class="panel" style="margin-top:0">
    <div class="status warning">ручной</div>
    <div class="hero-line">Burp-подход</div>
    <p class="small">Не pentest как услуга — инструмент для гибкого взаимодействия. Полный контроль HTTP, быстрый feedback.</p>
    <div class="note">Эталон качества, но не масштабируется; дорог по времени и требует экспертизы.</div>
  </div>
  <div class="panel" style="margin-top:0">
    <div class="status active">авто + CI</div>
    <div class="hero-line">масштаб</div>
    <p class="small">Регулярные проверки, очередь задач, параллельное сканирование, встраивание в pipeline.</p>
    <div class="note">Ограниченное понимание контекста; прерывание сборки по порогу защищённости.</div>
  </div>
</div>

---

# Проблемы классического DAST

<div class="panel">
  <div class="status warning">боль</div>
  <div class="hero-line">находит проблемы, но не помогает их решать</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">шум</div>
      <div class="signal-value">False positives, непонятно как чинить</div>
    </div>
    <div class="signal">
      <div class="signal-label">процесс</div>
      <div class="signal-value">Долго, сложная настройка, ломает pipeline (blocking)</div>
    </div>
    <div class="signal">
      <div class="signal-label">контекст</div>
      <div class="signal-value">Нет бизнес-логики и авторизации → не видна реальная поверхность</div>
    </div>
  </div>
</div>

---

# Идеальный DAST

<div class="center-xy" style="min-height:auto; padding: 0.5rem 0;">
  <div class="hero-line" style="text-align:center;">не сканер, а платформа</div>
  <p class="muted" style="text-align:center; max-width: 36rem; margin: 0 auto;">
    Гибкость ручного анализа (как Burp) + масштаб автоматизации (DevSecOps): прозрачность, расширяемость, enterprise.
  </p>
</div>

<div class="metric-grid cols-2" style="margin-top: 0.5rem;">
  <div class="metric">
    <div class="metric-label">режимы</div>
    <div class="metric-value">auto + interactive</div>
  </div>
  <div class="metric">
    <div class="metric-label">контекст</div>
    <div class="metric-value">без разрыва</div>
  </div>
</div>

---

# Платформа: универсальность и покрытие

<div class="panel">
  <div class="status accent">coverage-by-design</div>
  <div class="grid-2-even">
    <div>
      <h3>Приложения</h3>
      <ul>
        <li>Классический web, SPA (React, Angular, Vue)</li>
        <li>HTTP / HTTPS, WebSocket</li>
        <li>REST, gRPC, SOAP, GraphQL</li>
      </ul>
    </div>
    <div>
      <h3>Смысл</h3>
      <p class="small">Не важно, как построено приложение — DAST должен его «понимать». Один инструмент: CI/CD и интерактив без потери контекста.</p>
    </div>
  </div>
</div>

---

# Прозрачность и наблюдаемость

<div class="panel">
  <div class="status active">не чёрный ящик</div>
  <ul>
    <li>Понятно, что делает сканер, какие запросы уходят и почему сработало правило</li>
    <li>OAST: blind XSS, SSRF, DNS/HTTP callbacks — то, что не видно в паре request/response</li>
    <li>Широкий охват CWE, не только «топ-10»</li>
    <li>Дашборды, карта приложения, наглядные отчёты</li>
  </ul>
  <div class="note">Результат: детали, объяснение «почему», воспроизводимый запрос для разработчика.</div>
</div>

---

# Деплой и enterprise

<div class="panel">
  <div class="status accent">от ноутбука до кластера</div>
  <div class="flow">
    <span class="node">CLI</span>
    <span class="arrow">→</span>
    <span class="node">K8s</span>
    <span class="arrow">→</span>
    <span class="node">масштаб сканеров</span>
  </div>
  <ul>
    <li>Открытый API, webhooks, кастомизация под процесс</li>
    <li>Логирование, аудит, RBAC, backup/restore, hardening</li>
  </ul>
  <div class="note"><span class="badge warning" style="margin-right:0.35rem">OSS</span>Парадокс идеала: бесплатный OSS при активной поддержке. Граница: сложный auth (SSO, OAuth, MFA) — сценарии, replay, стратегии обхода/сервисных аккаунтов.</div>
</div>

---

# Ключевой вывод (идеал)

<div class="panel">
  <div class="status active">платформа</div>
  <div class="hero-line">исследует как Burp · масштабируется как DevSecOps</div>
  <ul>
    <li>Прозрачная и управляемая</li>
    <li>DAST работает там, где сценарий воспроизводим; MFA ломает воспроизводимость</li>
  </ul>
</div>

---

# Практика: отчёт не помогает

<div class="panel">
  <div class="status warning">симптом</div>
  <div class="hero-line">разработчик не понимает, что делать</div>
  <ul>
    <li>DAST не находит то, чего не понимает в приложении</li>
    <li>Пользователь часто сам не знает систему</li>
  </ul>
  <div class="note">Инструмент должен помочь понять и исследовать приложение — и только потом искать уязвимости.</div>
</div>

---

# Кейс: SPA и «невидимое API»

<div class="panel">
  <div class="status accent">пилот</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">симптом</div>
      <div class="signal-value">«Сканер почти ничего не находит»</div>
    </div>
    <div class="signal">
      <div class="signal-label">реальность</div>
      <div class="signal-value">SPA, логика за API; сканер ходит по фронту и почти не видит backend. Нет OpenAPI — «где взять схему?»</div>
    </div>
    <div class="signal">
      <div class="signal-label">инсайт</div>
      <div class="signal-value">Проблема не в «плохом поиске», а в том, что неизвестно, где искать — и пользователь может этого не осознавать.</div>
    </div>
  </div>
</div>

---

# Решение: HAR

<div class="panel">
  <div class="status active">показать систему</div>
  <div class="flow">
    <span class="node">Chrome</span>
    <span class="arrow">→</span>
    <span class="node">HAR</span>
    <span class="arrow">→</span>
    <span class="node">DAST</span>
    <span class="arrow">→</span>
    <span class="node">endpoint'ы</span>
  </div>
  <ul>
    <li>Реальные endpoint'ы и пользовательские сценарии</li>
    <li>Виден backend, а не только фронт → рост покрытия и реальных находок</li>
  </ul>
  <div class="note">Если не знаешь, как пользоваться приложением — DAST тоже не знает.</div>
</div>

---

# Эволюция DAST

```mermaid
flowchart TB
  subgraph crawl [Краулинг]
    A[HTML-пауки] --> B[Headless / Chromium]
    B --> C[JS + DOM как у пользователя]
  end
  subgraph auth [Аутентификация]
    D[Селекторы форм] --> E[Запись + replay]
  end
  subgraph obs [Наблюдаемость]
    F[Request/response] --> G[OAST / SSRF]
  end
  subgraph data [Входные данные]
    H[OpenAPI] --- I[HAR]
    I --- J[Перехват трафика]
  end
```

<div class="note">Качество DAST = качество входных данных. Agentic AI для обхода — перспективно, но пока нестабильно для production.</div>

---

# Инженерные опоры

<div class="panel">
  <div class="status active">из практики</div>
  <div class="signal-list">
    <div class="signal">
      <div class="signal-label">OAST</div>
      <div class="signal-value">Например <code>kernel.transport.oast</code>, интеграции с interactsh / BOAST; модуль SSRF (без OAST проверки пропускаются, не ошибка).</div>
    </div>
    <div class="signal">
      <div class="signal-label">вывод</div>
      <div class="signal-value">DAST эволюционирует от набора техник к системе понимания приложения и поведения.</div>
    </div>
  </div>
</div>

---

# Расширенные сценарии

<div class="panel">
  <div class="status accent">продукт</div>
  <ul>
    <li>Сканирование микросервисов через OpenAPI</li>
    <li>Анализ периметра, история сканирований</li>
    <li>Отчёты: HTML, JSON, ссылки</li>
  </ul>
</div>

---

# Будущее DAST

<div class="panel">
  <div class="status warning">контекст</div>
  <div class="hero-line">поверхность растёт быстрее процессов безопасности</div>
  <ul>
    <li>Vibe coding, AI — приложения быстрее, чем выстраивание AppSec</li>
    <li>Нужен низкий порог входа: «взял и просканировал»; облако — без своей инфраструктуры</li>
    <li>Векторы: AI в анализе и explain, слияние DAST+SAST+SCA, business-aware security, от findings к fixing</li>
  </ul>
</div>

---

# От находки к исправлению

<div class="panel">
  <div class="status active">LLM How to fix</div>
  <ul>
    <li>Разработчик не понимает fix даже при найденной уязвимости</li>
    <li>LLM: тип уязвимости, endpoint, стек → простое объяснение, шаги, примеры кода/конфига</li>
  </ul>
  <div class="note">DAST как помощник разработчика, а не только поисковик.</div>
</div>

---

# Агентные технологии

<div class="panel">
  <div class="status accent">направления</div>
  <div class="grid-2-even">
    <div>
      <h3>Атака и логика</h3>
      <ul>
        <li>Адаптивные атаки по ответам приложения</li>
        <li>BOLA и бизнес-логика, роли и сценарии</li>
        <li>Think → Plan → Act; PoC, sandbox</li>
      </ul>
    </div>
    <div>
      <h3>Автономия</h3>
      <ul>
        <li>Авто-ремедиация, PR от агентов</li>
        <li>NHI / AI pipeline security, агентный триаж алертов</li>
      </ul>
      <p class="small muted">Strix, Escape, Terra, CHECKMATE, Furl, … — как вектор индустрии.</p>
    </div>
  </div>
  <div class="note">Будущее: система, которая атакует, доказывает и предлагает исправления — не «просто сканер».</div>
</div>

---
layout: center
---

<div class="center-xy">
  <div class="kicker">вывод</div>
  <div class="hero-title" style="font-size: 2.15em;">РЕАЛЬНАЯ АТАКУЕМОСТЬ</div>
  <div class="hero-sub">
    DAST дополняет картину безопасности · эффективность = инструмент + использование · дальше: помогать чинить и действовать автономно
  </div>
  <div class="badge-row">
    <span class="badge primary">runtime truth</span>
    <span class="badge success">понимание системы</span>
    <span class="badge danger">платформа</span>
  </div>
</div>
