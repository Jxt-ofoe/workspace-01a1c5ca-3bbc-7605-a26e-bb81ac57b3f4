/**
 * ============================================================================
 *  SAMPLE VEHICLE INVENTORY  (EDIT ME)
 * ============================================================================
 *  IMPORTANT: The listings below are SAMPLE DATA used to design and demo the
 *  website. Prices, mileage, availability and photographs are illustrative
 *  placeholders — they are NOT confirmed stock or confirmed prices.
 *
 *  To publish real inventory: replace/extend this array. Each vehicle needs a
 *  unique `slug`, and images placed in /public/images/cars/ referenced as
 *  "/images/cars/<file>.jpg". Add as many photos per vehicle as you like —
 *  the detail-page gallery renders every entry in `images`.
 * ============================================================================
 */

import imgLandCruiser from '../assets/images/cars/land-cruiser.jpg'
import imgGle from '../assets/images/cars/gle.jpg'
import imgCorollaCross from '../assets/images/cars/corolla-cross.jpg'
import imgAccord from '../assets/images/cars/accord.jpg'
import imgRx from '../assets/images/cars/rx.jpg'
import imgHilux from '../assets/images/cars/hilux.jpg'
import imgX5 from '../assets/images/cars/x5.jpg'

export const VEHICLES = [
  {
    slug: 'toyota-land-cruiser-prado-2021',
    make: 'Toyota',
    model: 'Land Cruiser Prado',
    trim: 'TX-L',
    year: 2021,
    category: 'SUV',
    priceGHS: 1150000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileageKm: 42000,
    status: 'Available',
    exteriorColor: 'Pearl White',
    interiorColor: 'Black leather',
    engine: '2.8L Turbo Diesel-ready V6',
    drivetrain: '4WD',
    seats: 7,
    images: [imgLandCruiser],
    description:
      'A commanding full-size SUV built for Ghanaian roads — confident highway cruising, genuine off-road capability and seven comfortable seats. This sample listing showcases how a flagship inventory item is presented, with full specifications, photography and a one-tap enquiry path.',
    features: [
      'Seven-seat configuration',
      'Multi-terrain select',
      'Adaptive cruise control',
      '360° camera system',
      'Heated & ventilated front seats',
      'Power tailgate',
    ],
  },
  {
    slug: 'mercedes-benz-gle-450-2022',
    make: 'Mercedes-Benz',
    model: 'GLE 450',
    trim: '4MATIC AMG Line',
    year: 2022,
    category: 'SUV',
    priceGHS: 1480000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileageKm: 28000,
    status: 'Available',
    exteriorColor: 'Graphite Grey',
    interiorColor: 'Macchiato beige leather',
    engine: '3.0L inline-6 mild hybrid',
    drivetrain: 'AWD',
    seats: 5,
    images: [imgGle],
    description:
      'Executive presence with everyday comfort. A sample premium SUV listing demonstrating the top of the inventory range — air suspension, a whisper-quiet cabin and a commanding driving position for city and interstate alike.',
    features: [
      'AIRMATIC air suspension',
      'MBUX widescreen cockpit',
      'Burmester surround sound',
      'Panoramic sliding roof',
      'Keyless-go & hands-free access',
      'Active parking assist',
    ],
  },
  {
    slug: 'toyota-corolla-cross-hybrid-2023',
    make: 'Toyota',
    model: 'Corolla Cross',
    trim: 'Hybrid HEV',
    year: 2023,
    category: 'Crossover',
    priceGHS: 465000,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    mileageKm: 15000,
    status: 'Available',
    exteriorColor: 'Silver Metallic',
    interiorColor: 'Black fabric',
    engine: '1.8L hybrid',
    drivetrain: 'FWD',
    seats: 5,
    images: [imgCorollaCross],
    description:
      'The sensible sweet spot: hybrid efficiency, SUV practicality and Toyota reliability. An excellent sample entry for customers seeking low running costs without giving up ride height or boot space.',
    features: [
      'Hybrid synergetic drive',
      'Toyota Safety Sense',
      'Reverse camera',
      'Apple CarPlay & Android Auto',
      'Automatic climate control',
      'Alloy wheels',
    ],
  },
  {
    slug: 'honda-accord-sport-2021',
    make: 'Honda',
    model: 'Accord',
    trim: 'Sport',
    year: 2021,
    category: 'Sedan',
    priceGHS: 395000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileageKm: 51000,
    status: 'Reserved',
    exteriorColor: 'Sonic Blue',
    interiorColor: 'Black cloth',
    engine: '1.5L VTEC Turbo',
    drivetrain: 'FWD',
    seats: 5,
    images: [imgAccord],
    description:
      'A driver-focused midsize sedan with a sporty stance and a spacious, well-built cabin. This sample listing demonstrates the "Reserved" availability state on cards, filters and the detail page.',
    features: [
      'Honda SENSING suite',
      'Sport-tuned suspension',
      'Dual-zone climate control',
      '8-inch touchscreen',
      'Lane-keeping assist',
      'LED headlights',
    ],
  },
  {
    slug: 'lexus-rx-350-2022',
    make: 'Lexus',
    model: 'RX 350',
    trim: 'Luxury',
    year: 2022,
    category: 'SUV',
    priceGHS: 1020000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileageKm: 33000,
    status: 'Available',
    exteriorColor: 'Black',
    interiorColor: 'Cream leather',
    engine: '3.5L V6',
    drivetrain: 'AWD',
    seats: 5,
    images: [imgRx],
    description:
      'Quiet luxury, effortless power and legendary build quality. A sample premium crossover listing for customers who want first-class comfort with understated styling.',
    features: [
      'Mark Levinson audio',
      'Lexus Safety System+',
      'Heated & cooled seats',
      'Head-up display',
      'Power rear door',
      'Triple-beam LED headlights',
    ],
  },
  {
    slug: 'toyota-hilux-double-cab-2022',
    make: 'Toyota',
    model: 'Hilux',
    trim: 'Double Cab SR5',
    year: 2022,
    category: 'Pickup',
    priceGHS: 640000,
    transmission: 'Manual',
    fuel: 'Diesel',
    mileageKm: 47000,
    status: 'Available',
    exteriorColor: 'Grey Metallic',
    interiorColor: 'Black',
    engine: '2.4L D-4D diesel',
    drivetrain: '4WD',
    seats: 5,
    images: [imgHilux],
    description:
      'The workhorse that never quits. A sample double-cab pickup listing showing diesel + manual combinations in the filters, ideal for site work, farming and everything in between.',
    features: [
      'Selectable 4WD with low range',
      'Reinforced load bed',
      'Tow bar & trailer brake controller',
      'Downhill assist control',
      'Touchscreen infotainment',
      'Side steps & sports bar',
    ],
  },
  {
    slug: 'bmw-x5-xdrive40i-2021',
    make: 'BMW',
    model: 'X5',
    trim: 'xDrive40i M Sport',
    year: 2021,
    category: 'SUV',
    priceGHS: 1120000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileageKm: 39000,
    status: 'In Transit',
    exteriorColor: 'Phytonic Blue',
    interiorColor: 'Vernasca black leather',
    engine: '3.0L inline-6 turbo',
    drivetrain: 'AWD',
    seats: 5,
    images: [imgX5],
    description:
      'Athletic, technological and endlessly refined. This sample listing uses the "In Transit" status to show how incoming imports are presented before they arrive in the showroom.',
    features: [
      'M Sport package',
      'Live Cockpit Professional',
      'Harman Kardon sound',
      'Adaptive M suspension',
      'Laserlight headlights',
      'Comfort access',
    ],
  },
]

/* ---------------------------------------------------------------------------
   Derived filter options
--------------------------------------------------------------------------- */

export const VEHICLE_CATEGORIES = ['SUV', 'Crossover', 'Sedan', 'Pickup', 'Hatchback', 'Van']

export const AVAILABILITY_STATUSES = ['Available', 'Reserved', 'In Transit', 'Sold']

export const TRANSMISSIONS = ['Automatic', 'Manual']

export const FUELS = ['Petrol', 'Diesel', 'Hybrid', 'Electric']

export const IMPORT_COUNTRIES = [
  'United States',
  'Canada',
  'Japan',
  'South Korea',
  'Germany',
  'United Arab Emirates',
  'China',
  'Belgium',
]

export function uniqueMakes() {
  return [...new Set(VEHICLES.map((v) => v.make))].sort()
}

export function uniqueYears() {
  return [...new Set(VEHICLES.map((v) => v.year))].sort((a, b) => b - a)
}

export function priceBounds() {
  const prices = VEHICLES.map((v) => v.priceGHS)
  return { min: Math.min(...prices), max: Math.max(...prices) }
}

export function getVehicle(slug) {
  return VEHICLES.find((v) => v.slug === slug)
}

/** A few related vehicles (same category or make), excluding the current one. */
export function relatedVehicles(slug, count = 3) {
  const current = getVehicle(slug)
  if (!current) return []
  return VEHICLES.filter((v) => v.slug !== slug)
    .sort((a, b) => {
      const score = (v) =>
        (v.category === current.category ? 2 : 0) + (v.make === current.make ? 1 : 0)
      return score(b) - score(a)
    })
    .slice(0, count)
}
