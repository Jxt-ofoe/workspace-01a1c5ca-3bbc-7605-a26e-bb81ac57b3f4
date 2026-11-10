/**
 * Dev-only smoke test: SSR-renders every route to catch runtime errors
 * (bad imports, undefined components, invalid JSX) without a browser.
 * Run with: node scripts/ssr-smoke.mjs
 */
import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import { createElement as h } from 'react'
import { MemoryRouter } from 'react-router-dom'

const routes = [
  '/',
  '/cars',
  '/cars/toyota-land-cruiser-prado-2021',
  '/cars/does-not-exist',
  '/import-services',
  '/about',
  '/contact',
  '/request-car',
  '/nope-404',
]

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
  ssr: { noExternal: ['lucide-react'] },
})

let failed = 0
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')

  for (const route of routes) {
    try {
      const html = renderToString(h(MemoryRouter, { initialEntries: [route] }, h(App)))
      const ok = html.length > 500
      console.log(`${ok ? 'PASS' : 'THIN'} ${route} (${html.length} chars)`)
      if (!ok) failed += 1
    } catch (err) {
      failed += 1
      console.log(`FAIL ${route}\n  ${err.message}`)
    }
  }
} finally {
  await server.close()
}

process.exit(failed ? 1 : 0)
