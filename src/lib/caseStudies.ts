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
    slug: 'marketing-agency',
    title: 'Marketing Agency Cuts Content Production Time by 65%',
    industry: 'Marketing',
    emoji: '📈',
    location: '12 employees, $1.8M revenue',
    problem:
      'A growing marketing agency was hitting a content production bottleneck that limited client capacity. Proposal generation took 3+ hours per prospect, client reporting was manual and time-consuming, and ad copy testing took weeks instead of days. The team was burning out from high-volume demands.',
    solution:
      'We deployed an AI-powered content generation system that creates initial drafts for blogs, social posts, and campaigns in minutes. An automated proposal builder pulls from a smart template library and client data to generate customized proposals. Client reporting automation pulls metrics from all platforms and generates branded reports instantly, while an AI ad testing framework rapidly generates and tests multiple copy variations.',
    results: [
      '65% faster content production cycles',
      '40% more client capacity without new hires',
      'Proposal time cut from 3 hours to 20 minutes',
      '28% improvement in average ad performance',
    ],
    highlight: '65%',
    highlightLabel: 'Faster Content',
    quote: 'We can now take on more clients without burning out our team. The AI handles the first draft, we add the magic.',
    quoteAuthor: 'Agency Owner',
  },
  {
    slug: 'ecommerce-brand',
    title: 'E-Commerce Brand Recovers $180K in Lost Revenue with AI',
    industry: 'E-Commerce',
    emoji: '🛒',
    location: 'DTC skincare, 8 employees, $2.1M revenue',
    problem:
      'A direct-to-consumer skincare brand was losing revenue from abandoned carts, spending too much time on generic product descriptions, drowning in customer service tickets, and had no systematic way to test ad creative variations. Customer acquisition costs were climbing while conversion rates stayed flat.',
    solution:
      'We implemented AI customer support triage that handles common questions instantly and escalates complex issues to humans. Automated abandoned cart sequences send personalized recovery emails with AI-generated product recommendations. AI-generated product descriptions are created at scale while maintaining brand voice, and an ad creative generation system produces and tests multiple variations automatically.',
    results: [
      '$180K recovered from abandoned cart automation alone',
      '73% of support tickets now auto-resolved',
      '3x faster product listing creation',
      '34% lower customer acquisition cost',
    ],
    highlight: '$180K',
    highlightLabel: 'Revenue Recovered',
    quote: 'Finally, we can scale without hiring a huge customer service team. The AI handles the routine stuff, we handle the relationships.',
    quoteAuthor: 'Founder',
  },
  {
    slug: 'roofing-company',
    title: 'Roofing Company Doubles Close Rate with AI Lead System',
    industry: 'Local Service',
    emoji: '🏗️',
    location: '15 employees, $3.2M revenue',
    problem:
      'A roofing company was losing 30% of leads because calls went unanswered on evenings and weekends. Manual estimates took 3+ days to generate, follow-up was inconsistent without a proper CRM system, and the quoting process required multiple site visits and phone calls that often led nowhere.',
    solution:
      'We deployed a 24/7 AI lead capture system that answers calls, qualifies prospects, and schedules estimates automatically. Automated estimate workflows use photos and property data to generate preliminary quotes in hours. Smart follow-up sequences nurture leads through email and SMS, while review request automation ensures satisfied customers leave feedback.',
    results: [
      'Close rate doubled from 22% to 47%',
      'Zero missed leads (was losing 30% before)',
      'Estimate turnaround from 3 days to 4 hours',
      'Google rating improved from 4.8 to 4.9 stars',
    ],
    highlight: '47%',
    highlightLabel: 'Close Rate',
    quote: 'We used to lose leads every weekend when nobody was in the office. Now every call gets answered, every lead gets followed up.',
    quoteAuthor: 'Company Owner',
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
