export const CALENDLY_URL = 'https://calendly.com/peytonbrooks6'
export const EMAIL = 'peyton@tryastor.com'
export const CTA_TEXT = 'Schedule a Call'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Meet the Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

// The trades we build for: residential supplier-installer subs running multiple
// site visits per lot on production-builder communities.
export const TRADES = [
  {
    name: 'Cabinets',
    icon: 'cabinet',
    description: 'Shop tickets, install sequencing, and punch tracking that actually match what the supervisor saw on the lot.',
  },
  {
    name: 'Countertops',
    icon: 'counter',
    description: 'Template-to-install workflows that survive cabinet changes, builder reroutes, and last-minute SKU swaps.',
  },
  {
    name: 'Doors & Trim',
    icon: 'door',
    description: 'Takeoffs, prehang schedules, and field changes captured once — without a clipboard or a retype.',
  },
  {
    name: 'Flooring',
    icon: 'floor',
    description: 'Square-foot takeoffs, material releases, and install scheduling tied to the lot’s real construction state.',
  },
]

// The places work breaks today — mapped to the operational steps a finish-trade
// sub runs every day, from PO arrival to draw collection.
export const BREAKS = [
  {
    title: 'The builder portal is lying to you',
    body: 'SupplyPro and Hyphen dates drift from the lot every week. Your office is scheduling against fiction while your supervisor knows the truth.',
    step: 'Ground truth',
  },
  {
    title: 'Your supervisor’s knowledge is trapped in their head',
    body: 'When they’re sick, on PTO, or quit, the lot history walks out with them. New hires take six months to ramp.',
    step: 'Field knowledge',
  },
  {
    title: 'POs come in wrong — and you catch it by eye',
    body: 'Bad SKUs, stale rates, missing options. The office reconciles every PO against the master by hand, line by line.',
    step: 'PO review',
  },
  {
    title: 'Handwritten takeoffs cause the most rework',
    body: 'Paper from the truck → retyped into the shop ticket → wrong cabinet ships. The retype is where the money leaks out.',
    step: 'Takeoff',
  },
  {
    title: 'Scheduling is a babysat spreadsheet',
    body: 'One person owns the board. Every builder reroute, weather day, and trade-stack collision rebuilds it from scratch.',
    step: 'Schedule',
  },
  {
    title: 'Three issue streams, zero queues',
    body: 'Builder QA, supervisor punch, homeowner warranty — all on paper, all in different inboxes, none in one list.',
    step: 'Punch & warranty',
  },
  {
    title: 'Draws sit because the builder forgot to push',
    body: 'Work is done, billable, and invisible. Your AP team is doing forensic work to figure out which lots are collectable.',
    step: 'Draws',
  },
  {
    title: 'No audit trail when work is challenged',
    body: 'A bill-back lands two years later. The supervisor who installed it left last spring. You’re writing the check.',
    step: 'Audit',
  },
]

// The connective tissue we replace — the tools and channels work bleeds out of today.
export const DISCONNECTED_STACK = [
  'Hyphen SupplyPro',
  'Builder email POs',
  'Shop ticket spreadsheets',
  'Supervisor’s phone',
  'Fab board',
  'QuickBooks',
  'WhatsApp threads',
]
