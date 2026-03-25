/**
 * Slidev build with optional base path for GitHub Pages (project site).
 * - In GitHub Actions, GITHUB_REPOSITORY is set → base = /repo-name/
 * - Locally, set SLIDEV_BASE_NAME=my-repo to test a subpath build
 * - Otherwise base defaults to / (Vercel, Netlify, local preview)
 */
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const slidev = resolve(root, 'node_modules/@slidev/cli/bin/slidev.mjs')

const repo =
  process.env.GITHUB_REPOSITORY?.split('/')[1] || process.env.SLIDEV_BASE_NAME || ''

const args = [slidev, 'build', 'slides.md']
if (repo) {
  const clean = repo.replace(/^\/+|\/+$/g, '')
  args.push('--base', `/${clean}/`)
}

execFileSync(process.execPath, args, { cwd: root, stdio: 'inherit' })
execFileSync(process.execPath, [resolve(root, 'scripts/generate-slide-map.mjs')], {
  cwd: root,
  stdio: 'inherit',
})

// Avoid Jekyll on legacy branch deploys; harmless for Actions artifact uploads
writeFileSync(resolve(root, 'dist/.nojekyll'), '')
