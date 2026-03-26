import fs from 'node:fs'

const p = new URL('../public/0.svg', import.meta.url)
let s = fs.readFileSync(p, 'utf8')

const inj = `<style type="text/css"><![CDATA[@font-face{font-family:'Gilroy';src:url('font/gilroy-regular.ttf') format('truetype');font-weight:400;font-style:normal;font-display:swap;}]]></style>`

if (!s.includes('gilroy-regular.ttf')) {
  s = s.replace('<defs><clipPath', `<defs>${inj}<clipPath`)
}

s = s.replace(
  'font-family="3,3_MSFontService,sans-serif"',
  'font-family="Gilroy,sans-serif"',
)

fs.writeFileSync(p, s)
console.log('patched', p.pathname, 'has @font-face:', s.includes('@font-face'))
