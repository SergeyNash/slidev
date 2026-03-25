# Slidev Templates

## cyberpunk.md

Дизайн-система в terminal/cyberpunk стиле.

**Запуск** (из корня репозитория, чтобы подтянулись зависимости):
```
npx slidev templates/cyberpunk.md --open
```

Стили для этого входа: [templates/styles/index.css](templates/styles/index.css) → импорт [styles/cyberpunk.css](../styles/cyberpunk.css) (корень проекта).

**Для создания новой презентации:**
1. Скопируй `cyberpunk.md` в корень проекта под новым именем
2. Замени фронтматтер `title`
3. Удали демо-слайды, оставив только нужные
4. Добавляй слайды используя компоненты из дизайн-системы

---

### Компоненты

| Класс | Описание |
|---|---|
| `.kicker` | Метка над заголовком `[ LABEL ]` |
| `.hero-title` | Большой заголовок обложки с `>` и мигающим `_` |
| `.hero-sub` | Подзаголовок обложки |
| `.hero-line` | Акцентная строка с `//` внутри слайда |
| `.panel` | Карточка с neon-бордером и угловым маркером |
| `.status` | Статус-бейдж `.active` / `.warning` / `.accent` |
| `.badge` | Тег `.primary` / `.success` / `.danger` / `.accent` / `.warning` |
| `.badge-row` | Контейнер для row из badges (добавь `.left`) |
| `.metric-grid` | Сетка метрик (`.cols-2` / `.cols-5`) |
| `.metric` | Карточка метрики |
| `.signal-list` | Список сигналов key → value |
| `.flow` | Горизонтальный flow из `.node` и `.arrow` |
| `.note` | Сноска внизу панели |
| `.stack` | Вертикальный grid-контейнер |
| `.grid-2-even` | Сетка 2 колонки 1fr 1fr |
| `.big-num` | Большое число с `.c-primary` / `.c-accent` / ... |
| `.map-table` | Таблица маппинга с `.check` / `.partial` / `.none` |

### Цветовая палитра

| Переменная | Цвет | HEX |
|---|---|---|
| `--primary` | cyan | `#00d4ff` |
| `--danger` | magenta | `#ff2d78` |
| `--success` | neon green | `#00ff9f` |
| `--accent` | purple | `#bf5af2` |
| `--warning` | yellow | `#ffe600` |

### Layouts (Slidev встроенные)

- `layout: center` — вертикальное центрирование
- `layout: two-cols` — две колонки, правая через `::right::`
