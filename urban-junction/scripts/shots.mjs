/**
 * Dev-only visual QA: screenshots key routes (desktop + mobile) into /qa.
 * Run with: node scripts/shots.mjs
 */
import { chromium } from 'playwright'

const BASE = 'http://localhost:5173'
const OUT = '/home/user/qa'

async function autoScroll(page) {
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto'
    await new Promise((resolve) => {
      let y = 0
      const step = () => {
        y += 500
        window.scrollTo({ top: y, behavior: 'instant' })
        if (y < document.body.scrollHeight + 900) setTimeout(step, 160)
        else {
          window.scrollTo({ top: 0, behavior: 'instant' })
          setTimeout(resolve, 900)
        }
      }
      step()
    })
  })
}

const shots = [
  { name: 'hero-viewport', path: '/', width: 1440, height: 900, full: false },
  { name: 'home-desktop', path: '/', width: 1440, height: 900, full: true },
  { name: 'home-mobile', path: '/', width: 390, height: 844, full: true },
  { name: 'cars-desktop', path: '/cars', width: 1440, height: 900, full: true },
  { name: 'detail-desktop', path: '/cars/toyota-land-cruiser-prado-2021', width: 1440, height: 900, full: true },
  { name: 'import-desktop', path: '/import-services', width: 1440, height: 900, full: true },
  { name: 'request-desktop', path: '/request-car', width: 1440, height: 900, full: true },
  { name: 'cars-mobile', path: '/cars', width: 390, height: 844, full: true },
]

const browser = await chromium.launch()
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.width, height: s.height } })
  await page.goto(BASE + s.path, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await autoScroll(page)
  await page.waitForTimeout(600)
  await page.screenshot({ path: `${OUT}/${s.name}.png`, fullPage: s.full })
  console.log('shot', s.name)
  await page.close()
}
await browser.close()
