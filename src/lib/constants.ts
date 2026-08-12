export const CALENDLY_URL = 'https://calendly.com/peytonbrooks6'
export const EMAIL = 'peyton@tryastor.com'
export const CTA_TEXT = 'Schedule a Call'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Meet the Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

// The trades we build for: residential supplier-installer subs forced onto the
// builder's portal (Hyphen / BuildPro / SupplyPro) who run multiple site visits
// per lot on production-builder communities.
export const TRADES = [
  {
    name: 'Doors & Trim',
    icon: 'door',
    description: 'Deliver, install, and punch across exterior, trim, and final — swings, prehang counts, and field changes captured once, not retyped off a drive sheet.',
  },
  {
    name: 'Windows',
    icon: 'window',
    description: 'RO measures, glass and grid orders, install routing, and warranty service calls — on one lot record instead of four inboxes.',
  },
  {
    name: 'Plumbing',
    icon: 'plumbing',
    description: 'Rough-in, trim-out, and set — fixture releases and inspections tracked against what’s on-site, not the builder’s date.',
  },
  {
    name: 'Electrical',
    icon: 'electrical',
    description: 'Rough, trim, and final trips sequenced against real lot readiness — panel schedules and change orders caught before fab, not after.',
  },
  {
    name: 'HVAC',
    icon: 'hvac',
    description: 'Set, rough, and start-up phases coordinated with the build — equipment releases and inspections without chasing the schedule.',
  },
  {
    name: 'Roofing',
    icon: 'roofing',
    description: 'Dry-in and finish trips scheduled off real lot status — loads staged to what’s framed and ready, not what the builder’s schedule guessed last week.',
  },
  {
    name: 'Drywall',
    icon: 'drywall',
    description: 'Hang, finish, and punch tracked lot by lot — crews routed to the lots that are actually ready, with the back-charges documented.',
  },
]

// The places work breaks today — mapped to the operational steps a production
// sub runs every day, from PO arrival to draw collection. Each entry pairs the
// gap (what breaks, in the crew's own words) with the close (what Astor does).
export const BREAKS = [
  {
    title: 'The builder’s portal is lying to you',
    body: 'SupplyPro says a lot won’t be ready till next Tuesday. Your super is standing in it today — cabinets in, ready to trim. The office schedules off the portal; the field knows the truth.',
    solution: 'Lot status comes from your field super’s drive, not the portal. The office sees what’s on-site today — not what the builder’s record said yesterday.',
    step: 'Ground truth',
  },
  {
    title: 'It all lives in your super’s head',
    body: 'The real schedule, the door swings, which lots are actually ready — it’s on the drive sheet and in one person’s head. They take PTO or quit, and the lot history walks out with them.',
    solution: 'Every visit, spec check, and status update is logged to the lot. When a super is out, the next person picks up the lot — not a notebook.',
    step: 'Field knowledge',
  },
  {
    title: 'Handwritten takeoffs are where the money leaks',
    body: 'Paper off the truck → retyped into a shop ticket → wrong unit ships. The retype is where it goes wrong — and you eat the back-charge.',
    solution: 'The field super verifies ordered specs against the real lot inside Astor before fab releases. Mismatches surface in time to fix — not on install day.',
    step: 'Takeoff',
  },
  {
    title: 'Scheduling is a babysat spreadsheet',
    body: 'One person owns the board. Every builder reroute, weather day, and trade-stack collision rebuilds it from scratch — and the installers still get it late, in the wrong language.',
    solution: 'Astor coordinates every visit — deliver, install, punch — against the lot’s real readiness, and pushes the installer schedule in English or Spanish. The office and the super work the same view.',
    step: 'Schedule',
  },
  {
    title: 'You hear about problems too late',
    body: 'A bad frame, missing glass, a builder recordable that says “not done” — it’s buried in the portal, a text, or a phone call. Nobody sees what’s actually open on a lot until it’s a callback or a blown date.',
    solution: 'Every open issue lands on the lot the moment it’s logged — builder recordables, your super’s field flags, and punch — so the office and the super see what’s wrong on a lot at a glance, not after it’s a fire.',
    step: 'Open issues',
  },
  {
    title: 'Three punch lists, zero queues',
    body: 'Builder QA and recordables, your super’s own punch, homeowner warranty — all on paper, all in different inboxes, and the builder only lets you log one item at a time.',
    solution: 'Supervisors build punch lists in Astor as the lot moves. Builder punch and your punch, aggregated into one queue per lot — not three inboxes to chase.',
    step: 'Punch & warranty',
  },
  {
    title: 'No proof when the work gets challenged',
    body: 'A lawsuit or a bill-back lands years after the work is done. The super who installed it left, the homeowner never signed for the warranty visit, and you can’t prove a thing — so you eat it.',
    solution: 'Every lot keeps a full audit trail — who did what, when, to what spec — and punch and warranty visits get signed off on-site. When a claim lands two years later, the signed record is already there to defend completed work.',
    step: 'Audit trail',
  },
]

// The connective tissue we replace — the tools, portals, and paper a single lot
// bleeds across on the same day. None of it was built for the sub.
export const DISCONNECTED_STACK = [
  'Hyphen / BuildPro / SupplyPro',
  'Builder email POs',
  'The drive sheet',
  'Excel delivery log',
  'Handwritten shop tickets',
  'Fab board',
  'QuickBooks',
  'WhatsApp & group texts',
]
