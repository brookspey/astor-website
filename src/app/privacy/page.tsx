import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy — Astor',
  description:
    'How Astor collects, uses, and shares information in the Astor Field app and on tryastor.com.',
}

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Privacy policy
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            How Astor handles information in the Astor Field app and on this
            site. Last updated August 12, 2026.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <article className="max-w-2xl mx-auto space-y-10 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Who we are</h2>
            <p>
              Astor builds software for residential production-home
              subcontractors. This policy covers the Astor Field iOS app
              (bundle ID <code className="text-sm">com.astor.field</code>), the
              office web product, and the public site at{' '}
              <a
                href="https://www.tryastor.com"
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                tryastor.com
              </a>
              . Field is invite-only: your company admin creates accounts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              What we collect
            </h2>
            <p className="mb-3">
              What we store depends on which product you use.
            </p>
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Astor Field
            </h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Account: email address, password (handled by our auth
                provider), and a signed-in session stored in iOS Secure Store.
              </li>
              <li>
                Job records your team enters or syncs: company and community
                scoping, lots, schedule and work items, issues, punch,
                warranty, and comments.
              </li>
              <li>
                Photos you take with the camera or pick from the photo library.
                The app asks for those permissions so you can attach job-site
                photos to comments and punch. Photos are uploaded to Astor and
                tied to the lot or work item.
              </li>
              <li>
                A local copy of recent job data on the device (SQLite) so the
                app can work offline and sync when you are back online.
              </li>
            </ul>
            <p className="mb-4">
              Field does not include ads or third-party advertising SDKs. We
              do not request tracking permission (App Tracking Transparency).
              If you share a handout from the app, iOS&apos;s share sheet
              sends that file to the app you choose.
            </p>
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Office web product
            </h3>
            <p className="mb-4">
              If your company also uses Astor in the office, the same job
              records live there so office and field share one lot history.
              Field does not access personal Gmail or other personal email
              inboxes.
            </p>
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              This website
            </h3>
            <p>
              If you use the contact form, we collect name, business, phone,
              email, and message so we can reply. If you book a call, Calendly
              collects whatever you enter on their scheduling page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              How we use it
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sign you in and keep you signed in on your device.</li>
              <li>
                Show the lots, schedule, issues, punch, warranty, comments, and
                photos your company scoped you to.
              </li>
              <li>Sync offline changes back to your company&apos;s records.</li>
              <li>Deliver app updates through Expo.</li>
              <li>Respond to support and sales inquiries.</li>
              <li>Keep the service running, secure, and backed up.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Sharing and processors
            </h2>
            <p className="mb-3">
              We do not sell your information. We share it with the companies
              that run the product for us:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Supabase: authentication, database, and file storage.</li>
              <li>Expo / EAS: iOS builds and over-the-air app updates.</li>
              <li>Vercel: hosting for this site and the office web app.</li>
              <li>Apple: App Store and TestFlight distribution.</li>
              <li>Resend: sending contact-form messages to us.</li>
              <li>
                Calendly: scheduling, if you book a call from this site.
              </li>
            </ul>
            <p>
              Apple, Expo, and our hosts may process technical data needed to
              run the app, such as crash reports and update delivery. Your
              company admins can see the job records and photos for accounts
              they manage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Retention</h2>
            <p>
              We keep account and job records (including photos) while your
              company uses Astor, and for a limited time after if we need them
              for backups, support, or legal obligations. Contact-form messages
              are kept as long as we need them to respond. You can delete the
              Field app at any time; that removes the local cache on the
              device. It does not delete your company&apos;s records on our
              servers. Ask your admin or email us to request account or data
              deletion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Your rights</h2>
            <p>
              You can ask us for a copy of the personal information we hold
              about you, to correct it, or to delete it. For job records owned
              by your employer, we may need your company admin to approve
              changes. Email{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                {EMAIL}
              </a>
              . If you are in a region with additional privacy rights, we will
              honor requests we are required to honor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Children</h2>
            <p>
              Astor is built for construction companies and their crews. It is
              not directed at children under 13, and we do not knowingly
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Changes to this policy
            </h2>
            <p>
              We will update this page when our practices change. The date at
              the top is the latest version. Continued use of Astor after a
              change means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Contact</h2>
            <p className="mb-4">
              Questions about this policy or your data: email{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                {EMAIL}
              </a>
              . We are based in Palm Beach County, Florida.
            </p>
            <p className="text-sm text-slate-400">
              Need product help instead? See{' '}
              <Link
                href="/support"
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                support
              </Link>
              .
            </p>
          </section>
        </article>
      </section>

      <Footer />
    </main>
  )
}
