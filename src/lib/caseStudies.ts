export interface CaseStudy {
  slug: string
  title: string
  industry: string
  emoji: string
  location: string
  problem: string
  solution: string
  results: string[]
  highlight: string
  highlightLabel: string
  quote: string
  quoteAuthor: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'real-estate-brokerage',
    title: 'Real Estate Brokerage',
    industry: 'Real Estate',
    emoji: '🏠',
    location: 'Fort Lauderdale, FL',
    problem:
      'A 5-agent brokerage was drowning in lead follow-up. Agents spent more time writing listing descriptions, pulling market reports, and updating the CRM than actually meeting with clients. Hot leads were going cold because no one had time to nurture them.',
    solution:
      'We deployed AI-powered lead nurturing that automatically engages new inquiries with personalized messages and qualifies them before an agent ever picks up the phone. Market reports now generate on demand, listing descriptions write themselves in seconds, and the CRM updates automatically from emails and calls.',
    results: [
      '3x more leads engaged per month',
      '15% higher close rate within 6 months',
      'Listing descriptions written in under 2 minutes',
      'Agents reclaimed 12+ hours per week for showings and client meetings',
    ],
    highlight: '3x',
    highlightLabel: 'More Leads Engaged',
    quote: 'I used to spend my mornings writing emails and reports. Now I spend them closing deals.',
    quoteAuthor: 'Team Lead, 5-agent brokerage',
  },
  {
    slug: 'insurance-brokerage',
    title: 'Insurance Brokerage',
    industry: 'Insurance',
    emoji: '🛡️',
    location: 'Palm Beach County, FL',
    problem:
      'A growing insurance brokerage was losing renewals because their manual follow-up process couldn\'t keep up. Client onboarding took days of back-and-forth paperwork, claims follow-ups fell through the cracks, and agents were manually comparing quotes across carriers — a process that ate hours every day.',
    solution:
      'We automated the entire renewal pipeline with AI-triggered reminders that start 90 days before expiration. Client onboarding now uses smart forms that pre-fill from existing data and route documents automatically. For quotes, we built an AI comparison tool that pulls rates from multiple carriers and generates a side-by-side recommendation in minutes.',
    results: [
      'Renewal retention improved from 78% to 94%',
      'Client onboarding time cut from 5 days to same-day',
      'Quote comparison time reduced by 70%',
      'Claims follow-up response time improved from 48hrs to 4hrs',
    ],
    highlight: '94%',
    highlightLabel: 'Renewal Rate',
    quote: 'We were losing clients because we literally couldn\'t keep up. Now the system does the remembering for us.',
    quoteAuthor: 'Owner, independent insurance brokerage',
  },
  {
    slug: 'restaurant-group',
    title: 'Restaurant Group',
    industry: 'Food & Beverage',
    emoji: '🍽️',
    location: 'Palm Beach County, FL',
    problem:
      'A family-owned restaurant group with 3 locations was bleeding money on food waste and overtime. Managers spent their weekends building schedules in spreadsheets instead of running their restaurants. Customer feedback got buried in Google reviews with no systematic way to respond or learn from it, and reservation management was a mess of phone calls and sticky notes.',
    solution:
      'We implemented AI-powered inventory forecasting that automatically generates orders based on sales history, weather, and local events. Staff scheduling now optimizes against predicted demand, cutting overtime. Customer feedback from every platform feeds into a single dashboard with AI-generated response suggestions. Reservations route through a smart system that optimizes table turns.',
    results: [
      'Saved 15 hours per week across all locations',
      'Reduced food waste by 22%',
      'Cut overtime costs by $1,400/month',
      'Online review response rate went from 20% to 95%',
    ],
    highlight: '15hrs/wk',
    highlightLabel: 'Time Saved',
    quote: 'I used to spend my Sundays doing schedules and inventory. Now I spend them with my family.',
    quoteAuthor: 'Owner, 3-location restaurant group',
  },
  {
    slug: 'accounting-firm',
    title: 'Accounting Firm',
    industry: 'Professional Services',
    emoji: '📊',
    location: 'West Palm Beach, FL',
    problem:
      'A 6-person accounting firm was buried in admin during tax season and never fully recovered the rest of the year. Document intake was a nightmare of email attachments and misnamed files. Client communication meant hours of repetitive status update emails. Tax prep workflows lived in the partners\' heads, not in any system, and billing was always late because nobody had time to do it.',
    solution:
      'We built an AI-powered client portal that handles document intake — clients upload, and the system automatically categorizes, extracts key data, and flags missing items. Routine client updates now send automatically based on engagement status. Tax prep follows a smart workflow that assigns tasks, tracks deadlines, and escalates blockers. Billing generates automatically from tracked time.',
    results: [
      'Document intake time cut by 60%',
      'Client onboarding reduced from 1 week to 1 day',
      'Tax season overtime reduced by 30%',
      'Billing collected 15% faster with automated invoicing',
    ],
    highlight: '60%',
    highlightLabel: 'Faster Intake',
    quote: 'Tax season used to nearly break us every year. This year, we actually left the office before 8pm.',
    quoteAuthor: 'Managing Partner, accounting firm',
  },
]
