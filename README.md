# Slidev: DAST или не DAST

Презентация на [Slidev](https://sli.dev/).

## Локальная разработка

```bash
npm ci
npm run dev
```

Сборка для корня сайта (`/`), как для Vercel/Netlify:

```bash
npm run build
```

Файлы из папки `public/` в слайдах можно указывать как `/имя.png` — при сборке с `--base /repo-name/` Vite подставляет нужный префикс в HTML и бандл.

Проверка сборки под GitHub Pages (подкаталог `/<имя-репозитория>/`), как в CI:

```bash
# PowerShell
$env:SLIDEV_BASE_NAME="my-repo-name"; npm run build

# bash
SLIDEV_BASE_NAME=my-repo-name npm run build
```

Статику можно открыть локально через любой статический сервер, например `npx serve dist` (при подкаталоге задайте соответствующий префикс или используйте `serve` с опцией для корректного base).

## Публикация на GitHub Pages

1. Создайте репозиторий на GitHub (имя репозитория станет частью URL: `https://<user>.github.io/<repo>/`).
2. Инициализируйте git в этой папке, добавьте remote и запушьте в ветку `main` или `master`.
3. В репозитории: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. После первого успешного запуска workflow презентация будет доступна по адресу  
   `https://<ваш-username>.github.io/<имя-репозитория>/`.

5. Проверьте вкладку **Actions** в репозитории: job **deploy** должен завершиться зелёным; в **Settings → Pages** появится фактический URL сайта.

Сборка в CI использует переменную `GITHUB_REPOSITORY`: скрипт `scripts/build-pages.mjs` выставляет `base` как `/<имя-репозитория>/`, чтобы работали JS/CSS и публичные файлы из `public/`.

## Полезные команды

| Команда        | Описание                          |
|----------------|-----------------------------------|
| `npm run dev`  | Локальный предпросмотр            |
| `npm run build`| Сборка в `dist/`                  |
| `npm run export` | Экспорт в PDF (если настроено) |
