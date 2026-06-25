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
    name: 'Doors & Trim',
    icon: 'door',
    description: 'Takeoffs, prehang schedules, and field changes captured once — without a clipboard or a retype.',
  },
  {
    name: 'Windows',
    icon: 'window',
    description: 'RO measurements, glass and grid orders, install routing, and warranty service calls — all on the same lot record.',
  },
  {
    name: 'Plumbing',
    icon: 'plumbing',
    description: 'Rough-in, trim-out, and final stages tracked per lot — fixture releases and inspections that match the build.',
  },
  {
    name: 'Electrical',
    icon: 'electrical',
    description: 'Rough, trim, and final visits sequenced against real lot status — panel schedules and change orders captured once.',
  },
  {
    name: 'HVAC',
    icon: 'hvac',
    description: 'Set, rough, and start-up phases coordinated with the build — equipment releases and inspections without the guesswork.',
  },
]

// The places work breaks today — mapped to the operational steps a finish-trade
// sub runs every day, from PO arrival to draw collection. Each entry pairs the
// gap (what breaks) with the close (what Astor does about it).
export const BREAKS = [
  {
    title: 'The builder portal is lying to you',
    body: 'SupplyPro and Hyphen dates drift from the lot every week. Your office is scheduling against fiction while your supervisor knows the truth.',
    solution: 'Lot status comes from your field super, not the portal. The office sees what’s actually happening on the lot today — not what Hyphen said was supposed to happen yesterday.',
    step: 'Ground truth',
  },
  {
    title: 'Your supervisor’s knowledge is trapped in their head',
    body: 'When they’re sick, on PTO, or quit, the lot history walks out with them. New hires take six months to ramp.',
    solution: 'Every visit, spec check, and status update is logged to the lot record. When a super takes PTO or moves on, the next person picks up the lot — not a notebook.',
    step: 'Field knowledge',
  },
  {
    title: 'POs come in wrong — and you catch it by eye',
    body: 'Bad SKUs, stale rates, missing options. The office reconciles every PO against the master by hand, line by line.',
    solution: 'Astor pipes Hyphen POs in and compares each one to your master contract automatically. The office PM sees mismatches at the top of the screen and accepts the rest in one click.',
    step: 'PO review',
  },
  {
    title: 'Handwritten takeoffs cause the most rework',
    body: 'Paper from the truck → retyped into the shop ticket → wrong unit ships. The retype is where the money leaks out.',
    solution: 'The field super verifies ordered specs against the actual lot inside Astor before fab releases. Mismatches surface in time to fix — not on install day.',
    step: 'Takeoff',
  },
  {
    title: 'Scheduling is a babysat spreadsheet',
    body: 'One person owns the board. Every builder reroute, weather day, and trade-stack collision rebuilds it from scratch.',
    solution: 'Astor coordinates all four install visits — exterior, interior, hardware, punch-out — against the lot’s real readiness. The office and the super work from the same view.',
    step: 'Schedule',
  },
  {
    title: 'Three issue streams, zero queues',
    body: 'Builder QA, supervisor punch, homeowner warranty — all on paper, all in different inboxes, none in one list.',
    solution: 'Supervisors build punch lists in Astor as the lot progresses. One queue per lot — not three inboxes for the office to chase.',
    step: 'Punch & warranty',
  },
  {
    title: 'Draws sit because the builder forgot to push',
    body: 'Work is done, billable, and invisible. Your AP team is doing forensic work to figure out which lots are collectable.',
    solution: 'When the builder issues to bill via Hyphen, Astor pipes it in for the office to accept. You see at a glance which lots are ready to bill — and which are stuck waiting on the builder.',
    step: 'Draws',
  },
  {
    title: 'No audit trail when work is challenged',
    body: 'A bill-back lands two years later. The supervisor who installed it left last spring. You’re writing the check.',
    solution: 'Every lot keeps its full history — who did what, when, with what spec. When a bill-back lands two years later, the record is sitting there waiting.',
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
