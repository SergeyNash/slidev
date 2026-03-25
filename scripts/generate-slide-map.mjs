import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseSync } from '@slidev/parser'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const entry = resolve(root, 'slides.md')
const out = resolve(root, 'SLIDES-MAP.md')

const md = readFileSync(entry, 'utf8')
const { slides } = parseSync(md, entry)

function rowTitle(slide) {
  const c = slide.content?.trim() ?? ''
  if (!c)
    return '*(пустой слайд — артефакт разметки)*'

  let label = slide.title?.trim()
  if (!label) {
    const m = c.match(/^#\s+(.+)$/m)
    label = m ? m[1].trim() : '*(без заголовка `#`)*'
  }

  if (label === 'Вывод') {
    if (c.includes('автономные действия') || c.includes('не finding, а fixing'))
      label = 'Вывод *(финал: атакуемость → использование → fixing → автономность)*'
    else if (c.includes('управление реальным риском'))
      label = 'Вывод *(DAST = управление реальным риском)*'
    else if (c.includes('проверка реальной атакуемости'))
      label = 'Вывод *(DAST = проверка реальной атакуемости)*'
  }

  return label
}

const rows = slides.map((slide, i) => {
  const label = rowTitle(slide)
  return `| ${i + 1} | ${label.replace(/\|/g, '\\|')} |`
})

const body = `# Карта слайдов: \`slides.md\`

Файл **генерируется** из разметки Slidev. После любых правок \`slides.md\` обновите карту:

\`\`\`bash
npm run slide-map
\`\`\`

Нумерация совпадает с Slidev (прогресс-бар, обзор, докладчик).

| № | Заголовок / содержание |
|---|------------------------|
${rows.join('\n')}

**Всего слайдов: ${slides.length}**
`

writeFileSync(out, body, 'utf8')
console.log(`Wrote SLIDES-MAP.md (${slides.length} slides)`)
