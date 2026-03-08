export const CALENDLY_URL = 'https://calendly.com/peytonbrooks6'
export const EMAIL = 'peytonbrooks6@gmail.com'
export const CTA_TEXT = 'Book a Strategy Call'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Results', href: '/results' },
  { label: 'Contact', href: '/contact' },
]

export const BUSINESS_TYPES = [
  { name: 'Restaurants', icon: 'utensils', description: 'Fill tables and get found on Google Maps' },
  { name: 'Dental Practices', icon: 'tooth', description: 'Attract new patients searching for care nearby' },
  { name: 'Plumbers & HVAC', icon: 'wrench', description: 'Show up first when pipes burst at midnight' },
  { name: 'Law Firms', icon: 'scale', description: 'Turn local searches into booked consultations' },
  { name: 'Home Services', icon: 'home', description: 'Dominate your service area online' },
  { name: 'Retail & Shops', icon: 'store', description: 'Drive foot traffic with local visibility' },
]

export const PROCESS_STEPS_MINI = [
  { step: '1', title: 'Audit', description: 'We analyze your online presence and find what\'s holding you back.' },
  { step: '2', title: 'Build & Optimize', description: 'We fix your foundation — website, SEO, Google Business Profile, citations.' },
  { step: '3', title: 'Grow', description: 'Ongoing content, ads, and reviews that compound over time.' },
]

export const PROCESS_STEPS_FULL = [
  {
    step: '1',
    title: 'Strategy Call',
    description: 'A quick conversation about your business, your goals, and where you\'re losing customers online. Free, no pressure.',
    color: 'bg-brand-50 border-brand-200 text-brand-700',
  },
  {
    step: '2',
    title: 'Audit & Roadmap',
    description: 'We do a deep-dive into your website, search rankings, Google Business Profile, and competitors. You get a clear action plan.',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
  },
  {
    step: '3',
    title: 'Build & Launch',
    description: 'We build or rebuild your website, optimize your listings, and set up the systems that get you found online.',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    step: '4',
    title: 'Optimize & Grow',
    description: 'Ongoing SEO, content creation, review generation, and ad management that compounds month over month.',
    color: 'bg-purple-50 border-purple-200 text-purple-700',
  },
  {
    step: '5',
    title: 'Report & Adjust',
    description: 'Monthly reports showing exactly what\'s working. We adjust the strategy based on real data, not guesses.',
    color: 'bg-teal-50 border-teal-200 text-teal-700',
  },
]

export const PACKAGES = {
  foundation: {
    name: 'Foundation',
    tagline: 'Everything you need to get found online.',
    features: [
      'Custom website (built to convert)',
      'On-page SEO optimization',
      'Google Business Profile setup & optimization',
      'Local citation building',
      'Monthly performance reporting',
      'Ongoing website maintenance',
    ],
  },
  growth: {
    name: 'Growth',
    tagline: 'Foundation + the engine that keeps you growing.',
    features: [
      'Everything in Foundation',
      'Monthly blog content (SEO-optimized)',
      'Review generation system',
      'Google Ads management',
      'Monthly strategy calls',
      'Competitor monitoring',
    ],
  },
}

export const METRICS = [
  { value: 'Page 1', label: 'Google rankings for local searches' },
  { value: '3x', label: 'More reviews in 90 days' },
  { value: '40%', label: 'Lower cost per lead' },
  { value: '24/7', label: 'Website that works while you sleep' },
]

export const SCENARIOS = [
  {
    business: 'Local Dentist',
    challenge: 'Invisible on Google Maps, losing patients to the practice down the street.',
    solution: 'Rebuilt website for conversions, optimized Google Business Profile, launched review generation.',
    results: ['Page 1 for "dentist near me"', '47 new reviews in 90 days', '3x more appointment requests'],
  },
  {
    business: 'Plumbing Company',
    challenge: 'Spending $3k/month on ads with no idea what was working.',
    solution: 'Rebuilt landing pages, restructured Google Ads, added call tracking.',
    results: ['Cost per lead dropped 52%', 'Phone calls up 80%', 'Stopped wasting budget on bad keywords'],
  },
  {
    business: 'Italian Restaurant',
    challenge: 'Great food, empty tables on weekdays. No online presence beyond a basic Facebook page.',
    solution: 'Built a fast website, optimized for local search, launched Google Business Profile strategy.',
    results: ['Weekday reservations up 35%', '"Italian restaurant near me" — page 1', '60+ new Google reviews'],
  },
]
