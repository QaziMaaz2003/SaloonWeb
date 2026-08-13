// Central service catalogue.

export const services = [
  {
    id: 'classic-haircut',
    slug: 'classic-haircut',
    name: 'Classic Haircut',
    category: 'Hair',
    image: 'classic haircut.jpg',
    description:
      'A precision cut tailored to your face shape and lifestyle, finished with a hot towel and styling consultation.',
    longDescription:
      'The Classic Haircut is where every Gentry client starts — a clean, disciplined cut built around your natural growth pattern and face shape. Your barber begins with a short consultation, then works through scissor and clipper technique to build shape, followed by a hot towel refresh and a light finishing product so you leave looking exactly like you asked.',
    included: [
      'Style consultation',
      'Precision scissor & clipper cut',
      'Hot towel refresh',
      'Wash and blow-dry',
      'Finishing product & style',
    ],
    price: '$45',
  },

  {
    id: 'premium-haircut',
    slug: 'premium-haircut',
    name: 'Premium Haircut',
    category: 'Hair',
    image: 'premium haircut.jpg',
    description:
      'An elevated cutting ritual with scalp massage, detailed finishing work, and a signature Gentry pomade style.',
    longDescription:
      'The Premium Haircut takes the classic ritual and slows it down. Expect a longer consultation, a relaxing scalp massage before the cut, and meticulous detail work around the crown, neckline, and part — finished with a signature Gentry pomade style built to hold from morning meetings to evening plans.',
    included: [
      'Extended style consultation',
      'Scalp massage',
      'Precision cut with detail finishing',
      'Hot towel treatment',
      'Signature pomade styling',
      'Complimentary touch-up within 7 days',
    ],
    price: '$65',
  },

  {
    id: 'beard-styling',
    slug: 'beard-styling',
    name: 'Beard Styling',
    category: 'Beard',
    image: 'beard styling.jpg',
    description:
      'Straight-razor shaping, symmetry line-up, and conditioning oils for a beard that holds its edge all week.',
    longDescription:
      'A full beard architecture session — your barber maps your natural growth and jawline before shaping with a straight razor for crisp, symmetrical lines. We finish with hot towel conditioning and a lightweight beard oil so the shape holds and the skin underneath stays healthy.',
    included: [
      'Beard shape consultation',
      'Straight-razor line-up',
      'Symmetry & jawline definition',
      'Hot towel conditioning',
      'Beard oil finish',
    ],
    price: '$35',
  },

  {
    id: 'hair-beard-package',
    slug: 'hair-beard-package',
    name: 'Hair & Beard Package',
    category: 'Package',
    image: 'hair and beard package.jpg',
    description:
      'Our most requested ritual — a full haircut paired with beard shaping and a hot towel finish, in one seamless session.',
    longDescription:
      'Our most booked appointment for a reason: a complete Premium Haircut paired seamlessly with a full Beard Styling session, so your cut and beard line are shaped together for total symmetry. One consultation, one chair, one cohesive look — finished with hot towel treatment throughout.',
    included: [
      'Full style & beard consultation',
      'Premium haircut',
      'Straight-razor beard shaping',
      'Hot towel treatment',
      'Pomade styling and beard oil finish',
    ],
    price: '$85',
    featured: true,
  },

  {
    id: 'hair-styling',
    slug: 'hair-styling',
    name: 'Hair Styling',
    category: 'Hair',
    image: 'hair styling.jpg',
    description:
      'Event-ready styling with premium products, built to hold its shape from the boardroom to the evening.',
    longDescription:
      'For when the cut is already right and you just need the finish. Our stylists work premium waxes, clays, and creams into dry or freshly washed hair to build a shape that holds cleanly through a long day — ideal before interviews, events, or photography.',
    included: [
      'Style consultation',
      'Wash & prep if needed',
      'Premium product application',
      'Precision styling & hold check',
    ],
    price: '$30',
  },

  {
    id: 'facial-grooming',
    slug: 'facial-grooming',
    name: 'Facial / Grooming',
    category: 'Skin',
    image: 'facial grooming.jpg',
    description:
      'A deep-cleanse facial with steam, exfoliation, and cooling mask — restoring clarity to tired, city-worn skin.',
    longDescription:
      'A restorative skin session designed specifically for men — deep cleanse, steam to open the pores, gentle exfoliation, and a cooling mask to calm irritation from daily shaving and city air. You leave with visibly clearer, calmer skin and a short home-care tip from your barber.',
    included: [
      'Skin consultation',
      'Deep cleanse & steam',
      'Exfoliation',
      'Cooling mask treatment',
      'Moisturiser & SPF finish',
    ],
    price: '$55',
  },

  {
    id: 'premium-grooming-package',
    slug: 'premium-grooming-package',
    name: 'Premium Grooming Package',
    category: 'Package',
    image: 'premium grooming package.jpg',
    description:
      'The complete Gentry experience: haircut, beard sculpt, facial, and scalp treatment across an unhurried session.',
    longDescription:
      'The full house ritual. Move through a Premium Haircut, full Beard Styling, a restorative Facial, and a scalp treatment — with hot towels and consultations woven throughout. This is the appointment clients book before a wedding, a big interview, or simply when they want the complete Gentry standard in one visit.',
    included: [
      'Premium haircut',
      'Straight-razor beard styling',
      'Facial with steam & mask',
      'Scalp treatment & massage',
      'Full styling finish',
      'Complimentary refreshments',
    ],
    price: '$125',
    featured: true,
  },
]

export const featuredServices = services.filter((s) => s.featured)

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(service, count = 3) {
  if (!service) return services.slice(0, count)

  const sameCategory = services.filter(
    (s) => s.slug !== service.slug && s.category === service.category
  )

  const rest = services.filter(
    (s) => s.slug !== service.slug && s.category !== service.category
  )

  return [...sameCategory, ...rest].slice(0, count)
}