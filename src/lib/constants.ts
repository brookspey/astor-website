export const CALENDLY_URL = 'https://calendly.com/peytonbrooks6'
export const EMAIL = 'peyton@tryastor.com'
export const CTA_TEXT = 'Book a Strategy Call'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Results', href: '/results' },
  { label: 'Meet the Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

export const BUSINESS_TYPES = [
  { name: 'Restaurants', icon: 'utensils', description: 'Astor gets you found when hungry people search — filling tables with customers who are already looking for you.' },
  { name: 'Dental Practices', icon: 'tooth', description: 'Astor puts you at the top of local search results and keeps you there — so new patients find you first.' },
  { name: 'Plumbers & HVAC', icon: 'wrench', description: 'When pipes burst at 2am, Astor makes sure you\'re the first result they see. Emergency searches, handled.' },
  { name: 'Law Firms', icon: 'scale', description: 'Astor turns local searches into booked consultations — consistently, measurably, and at a fraction of traditional marketing costs.' },
  { name: 'Home Services', icon: 'home', description: 'Astor doesn\'t just get you a listing — it dominates your entire service area online so you own every search.' },
  { name: 'Retail & Shops', icon: 'store', description: 'Foot traffic starts with a Google search. Astor makes sure it ends at your door.' },
]

export const AGENCY_PROBLEMS = [
  { problem: 'You\'re paying $3–5k/month', detail: 'Most of that goes to overhead, account managers, and fancy offices — not your results.' },
  { problem: 'Your "strategist" manages 40 accounts', detail: 'They spend maybe 2 hours a month on yours. The rest is copy-paste templates.' },
  { problem: 'You get a PDF report you don\'t understand', detail: 'Vanity metrics designed to look impressive. No real accountability for growth.' },
  { problem: 'SEO "best practices" from 2019', detail: 'Google\'s algorithm changes weekly. Your agency\'s playbook doesn\'t.' },
]

export const PROCESS_STEPS_MINI = [
  { step: '1', title: 'Full SEO Audit', description: 'Astor runs a comprehensive audit of your online presence and stacks you up against your competitors. You\'ll see exactly where you stand and where the opportunities are.' },
  { step: '2', title: 'Connect & Execute', description: 'Give Astor access to your website, Google Business Profile, and accounts. Astor implements every fix from the audit — fast.' },
  { step: '3', title: 'Optimize & Grow', description: 'Astor monitors your competitors, tracks every KPI, and adapts your strategy daily. Your marketing gets smarter every single week.' },
]

export const PROCESS_STEPS_FULL = [
  {
    step: '1',
    title: 'Full SEO Audit',
    description: 'Astor runs a deep competitive audit — your website, rankings, Google Business Profile, citations, reviews, and content vs. your top local competitors. You get a clear picture of where you stand and what to fix first.',
    color: 'bg-brand-50 border-brand-200 text-brand-700',
  },
  {
    step: '2',
    title: 'Connect Your Accounts',
    description: 'Give Astor access to your website, Google Business Profile, Google Ads, and analytics. Simple setup, no drawn-out onboarding. Astor gets to work immediately.',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
  },
  {
    step: '3',
    title: 'Astor Executes the Audit',
    description: 'Astor takes every recommendation from the audit and implements it — on-page SEO fixes, content optimization, GBP updates, citation cleanup, technical fixes. Days, not weeks.',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    step: '4',
    title: 'Optimize & Grow',
    description: 'Astor monitors your rankings, competitors, and KPIs daily — adjusting strategy based on what\'s actually working. Ongoing content, reviews, and ad optimization that compounds month over month.',
    color: 'bg-purple-50 border-purple-200 text-purple-700',
  },
  {
    step: '5',
    title: 'Report & Adjust',
    description: 'Transparent reporting on the metrics that matter — calls, leads, rankings, revenue. You see exactly what moved, what\'s working, and what Astor is doing next.',
    color: 'bg-teal-50 border-teal-200 text-teal-700',
  },
]

export const PACKAGES = {
  foundation: {
    name: 'Foundation',
    tagline: 'Your AI marketing agent — always on, always optimizing your online presence.',
    features: [
      'Custom website built to convert',
      'AI-driven SEO that evolves with Google\'s algorithm',
      'Google Business Profile optimization & management',
      'Local citation building & cleanup',
      'Continuous competitor monitoring',
      'Monthly KPI reporting with real numbers',
    ],
  },
  growth: {
    name: 'Growth',
    tagline: 'Everything in Foundation + the full growth engine to scale your business.',
    features: [
      'Everything in Foundation',
      'AI-generated blog content optimized for what people actually search',
      'Automated review generation system',
      'Google Ads management (with AI bid optimization)',
      'Monthly strategy calls with real humans',
      'Competitor strategy teardowns',
    ],
  },
}

export const METRICS = [
  { value: 'Page 1', label: 'Google rankings for local searches' },
  { value: '3x', label: 'More reviews in 90 days via automated outreach' },
  { value: '40%', label: 'Lower cost per lead on average' },
  { value: '24/7', label: 'Astor never stops monitoring, optimizing, and adapting' },
]

export const SCENARIOS = [
  {
    business: 'Local Dentist',
    challenge: 'Invisible on Google Maps. New patients were going to competitors who showed up first. Existing marketing wasn\'t moving the needle.',
    solution: 'Astor rebuilt the site for conversions, rewrote every page for search intent, optimized the Google Business Profile, and launched automated review generation.',
    results: ['Page 1 for "dentist near me" in 8 weeks', '47 new reviews in 90 days', '3x more appointment requests'],
  },
  {
    business: 'Plumbing Company',
    challenge: 'Spending $3k/month on Google Ads with no visibility into what was working. Cost per lead kept climbing with no explanation.',
    solution: 'Astor audited the ad account, killed wasteful keywords, rebuilt landing pages for conversion, and added call tracking for full attribution.',
    results: ['Cost per lead dropped 52% in 60 days', 'Phone calls up 80%', 'Full visibility into which dollars drive results'],
  },
  {
    business: 'Italian Restaurant',
    challenge: 'Great food, empty tables on weekdays. Outdated website, no Google Business Profile strategy, zero local search visibility.',
    solution: 'Astor built a fast, conversion-optimized site, optimized for local search, and manages ongoing SEO, GBP updates, and content.',
    results: ['Weekday reservations up 35%', '"Italian restaurant near me" — page 1 in 6 weeks', '60+ new Google reviews via automated system'],
  },
]
