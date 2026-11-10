/**
 * Dev-only QA: renders the single-file offline build from file:// with the
 * network fully disabled, proving it works with no connectivity at all.
 * Run with: node scripts/shots-offline.mjs
 */
import { chromium } from 'playwright'

const FILE = 'file:///home/user/urban-junction/dist-single/index.html'
const OUT = '/home/user/qa'

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, offline: true })
const page = await context.newPage()

// Hard-block every network request so only inline resources can load
await page.route('**/*', (route) => {
  const url = route.request().url()
  if (url.startsWith('file://') || url.startsWith('data:') || url.startsWith('blob:')) return route.continue()
  return route.abort()
})

await page.goto(FILE, { waitUntil: 'load' })
await page.waitForTimeout(1500)
await page.screenshot({ path: `${OUT}/offline-home.png` })
console.log('offline home ok')

await page.goto(FILE + '#/cars', { waitUntil: 'load' })
await page.waitForTimeout(1500)
await page.evaluate(() => window.scrollTo({ top: 700, behavior: 'instant' }))
await page.waitForTimeout(900)
await page.screenshot({ path: `${OUT}/offline-cars.png` })
console.log('offline cars ok')

await browser.close()
