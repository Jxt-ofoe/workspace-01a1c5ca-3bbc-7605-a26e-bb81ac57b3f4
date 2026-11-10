# Urban Junction — Car Importation & Vehicle Sales (Ghana)

> **Drive Better. Live Bigger.**
> A premium, fully responsive marketing + inventory website for Urban Junction,
> built with **React + Vite + JavaScript + Tailwind CSS v4 + React Router + Lucide React + Framer Motion**.

---

## 1. Run it

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # serve the production build
```

Useful checks (dev-only, no browser needed for the first one):

```bash
npm run smoke      # SSR-renders every route to catch runtime errors
npm run shots      # Playwright screenshots of key routes into /qa (needs `npx playwright install chromium`)
```

---

## 2. Project map

```
src/
├── data/                  ← ALL editable business content lives here
│   ├── config.js          ← brand, slogan, NAV, contact + social PLACEHOLDERS, WhatsApp number
│   ├── vehicles.js        ← SAMPLE inventory array (edit/extend for real stock)
│   ├── testimonials.js    ← clearly-labelled placeholder testimonials
│   ├── faqs.js            ← FAQ accordion content
│   └── content.js         ← import steps, "why choose" cards, about copy
├── components/
│   ├── layout/            ← Navbar (glass on scroll + mobile drawer), Footer, Layout, ScrollToTop, WhatsAppFab
│   ├── ui/                ← Button, Reveal, SectionHeading, Badge/StatusBadge/SampleTag, Accordion, Field, Logo, SuccessPanel
│   ├── cars/              ← CarCard, CarFilters (search + 6 filters), CarGallery
│   └── home/              ← Hero, FeaturedCars, ImportSteps, WhyChoose, AboutTeaser, Testimonials, FAQSection, CTABanner
├── pages/                 ← Home, Cars, CarDetail, ImportServices, About, Contact, RequestCar, NotFound
├── lib/                   ← format.js (GHS/mileage/WhatsApp links), validate.js, useSeo.js
└── index.css              ← Tailwind v4 theme tokens (brand blues, fonts, shadows) + base/component layers
public/images/             ← hero, about, import + vehicle photography
scripts/                   ← ssr-smoke.mjs, shots.mjs (QA helpers)
```

---

## 3. Editing guide (no code changes needed for content)

### Brand & contact — `src/data/config.js`
- `BUSINESS.contact.*` — phone, WhatsApp number (`digits only, country code first`), email, address, hours.
  **All are placeholders** and are visibly labelled as such in the UI until real details are supplied.
- `BUSINESS.socials` — replace `href: '#'` with real profile URLs.
- Slogan, hero headline/subline and nav links are editable here too.

### Inventory — `src/data/vehicles.js`
Each vehicle is one object in `VEHICLES`:

```js
{
  slug: 'toyota-corolla-cross-hybrid-2023',   // unique, used in the URL
  make, model, trim, year, category,
  priceGHS: 465000,                            // shown as "GHS 465,000"
  transmission, fuel, mileageKm,
  status: 'Available',                         // Available | Reserved | In Transit | Sold
  exteriorColor, interiorColor, engine, drivetrain, seats,
  images: ['/images/cars/corolla-cross.jpg'],  // add more paths → gallery shows thumbnails
  description: '…',
  features: ['…'],
}
```

- Drop new photos into `public/images/cars/` and reference them as `/images/cars/name.jpg`.
- Filters (make / category / year / price / transmission / fuel) and the search box derive
  automatically from this array — nothing else to update.
- **The current listings, prices, mileage, statuses and photos are sample data for design
  purposes only.** They are marked with "Sample inventory" tags in the UI and must be replaced
  with real stock before launch.

### Testimonials — `src/data/testimonials.js`
Placeholder-only by design. Replace with verified customer feedback (with permission) or delete
the `<Testimonials />` section from `src/pages/Home.jsx`.

### WhatsApp
One configurable number (`BUSINESS.contact.whatsappNumber`) drives the floating button, the nav
button, every vehicle card, every detail page and the contact section.

---

## 4. Design system

| Token          | Hex       | Use                          |
| -------------- | --------- | ---------------------------- |
| `midnight`     | `#071B36` | Dark sections, headings      |
| `deep`         | `#123E70` | Deep blue accents            |
| `royal`        | `#2474BD` | Gradients, rings             |
| `electric`     | `#168BEB` | Primary actions, highlights  |
| `sky`          | `#63A9E8` | Text on dark backgrounds     |
| `ice`          | `#EAF3FC` | Soft section backgrounds     |
| `white`        | `#FFFFFF` | Surfaces                     |

Typography: **Manrope** (display) + **Inter** (body), loaded in `index.html` with system fallbacks.
Motion: Framer Motion scroll reveals, page transitions, glass navbar — all disabled under
`prefers-reduced-motion`.

---

## 5. Forms

Contact and Request-a-Car validate in the browser (required fields, email + phone patterns) and
show an animated confirmation panel. **There is no backend yet** — the confirmation offers a
"Continue on WhatsApp" hand-off that pre-fills the enquiry so real leads still reach the business.
Wire `handleSubmit` in `src/pages/Contact.jsx` / `RequestCar.jsx` to your API or form service when
ready.

---

## 6. Pre-launch checklist

- [ ] Replace placeholder phone / WhatsApp / email / address / hours in `src/data/config.js`
- [ ] Add real social profile URLs
- [ ] Replace sample inventory (and photos) with real stock in `src/data/vehicles.js`
- [ ] Replace or remove placeholder testimonials
- [ ] Connect forms to a backend / email service
- [ ] Update `index.html` canonical URL + OG image to the live domain
