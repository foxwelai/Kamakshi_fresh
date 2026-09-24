import type { Metadata } from "next";
import { LegalHeader } from "../components/LegalHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  LegalCallout,
  LegalEmail,
  LegalHero,
  LegalList,
  LegalSection,
  LegalSubheading,
  LegalToc,
} from "../components/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Kamakshi Fresh Delivery Partner App",
  description:
    "Privacy Policy for the Kamakshi Fresh Delivery Partner mobile app: what we collect, how we use it, who we share it with, and your choices.",
};

const TOC = [
  { id: "introduction", label: "Introduction" },
  { id: "who", label: "Who this applies to" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use your information" },
  { id: "legal-bases", label: "Legal bases" },
  { id: "how-we-share", label: "How we share information" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Data security" },
  { id: "your-rights", label: "Your rights and choices" },
  { id: "children", label: "Children's privacy" },
  { id: "international", label: "International transfers" },
  { id: "changes", label: "Changes to this Policy" },
  { id: "contact", label: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-white">
      <LegalHeader />

      <LegalHero
        eyebrow="Delivery Partner App"
        title="Privacy Policy"
        updated="24 September 2026"
      />

      <LegalToc items={TOC} />

      <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-5">
        <LegalSection id="introduction" title="Introduction">
          <p>
            Kamakshi Fresh (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) operates the Kamakshi Fresh Delivery Partner
            mobile application (the &ldquo;App&rdquo;) for delivery partners
            who fulfill hotel and customer orders on behalf of Kamakshi
            Fresh.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we
            use it, with whom we share it, and the choices available to you.
            By using the App, you agree to this Policy.
          </p>
          <div className="grid gap-x-8 gap-y-1.5 rounded-2xl border border-brand-100 bg-brand-50/50 p-5 text-sm sm:grid-cols-[auto_1fr]">
            <span className="font-semibold text-brand-900">App name</span>
            <span>Kamakshi Fresh (Delivery Partner)</span>
            <span className="font-semibold text-brand-900">Website</span>
            <span>
              <a
                href="https://kamakshifresh.com"
                className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700"
              >
                kamakshifresh.com
              </a>
            </span>
            <span className="font-semibold text-brand-900">Contact</span>
            <span>
              <LegalEmail address="privacy@kamakshifresh.com" /> /{" "}
              <LegalEmail address="delivery@kamakshifresh.com" />
            </span>
          </div>
        </LegalSection>

        <LegalSection id="who" title="Who this Policy applies to">
          <p>
            This Policy applies to delivery partners, riders, and temporary
            cover riders who sign in to the App. It does not replace the
            privacy practices of hotels, customers, or other Kamakshi Fresh
            products unless stated otherwise.
          </p>
        </LegalSection>

        <LegalSection id="information-we-collect" title="Information we collect">
          <LegalSubheading>A. Account and identity information</LegalSubheading>
          <LegalList
            items={[
              "Name",
              "Email address",
              "Phone number",
              "Login credentials (password is stored securely in hashed form on our servers; we do not store plain-text passwords in the App)",
              "Role / partner status (e.g. delivery partner, temporary account, account expiry where applicable)",
            ]}
          />

          <LegalSubheading>B. Authentication and session data</LegalSubheading>
          <LegalList
            items={[
              "Access and refresh tokens",
              "Device session information needed to keep you signed in",
              "Optional “remember email” preference stored on your device",
            ]}
          />

          <LegalSubheading>C. Location information</LegalSubheading>
          <p>
            With your permission, we collect precise GPS location while you
            use delivery features, including to:
          </p>
          <LegalList
            items={[
              "Show maps and navigation to drop locations",
              "Verify that you are near a delivery location before marking a stop as delivered",
            ]}
          />
          <p>
            You can revoke location permission in your device settings. Some
            features may not work without location access.
          </p>

          <LegalSubheading>D. Delivery and operational data</LegalSubheading>
          <LegalList
            items={[
              "Assigned routes and stops",
              "Order / fulfillment status (e.g. dispatched, on the road, delivered)",
              "Hotel or drop addresses and related delivery notes provided for the job",
              "Call actions you initiate to contact a hotel or customer using numbers provided for that delivery",
            ]}
          />

          <LegalSubheading>E. Notifications</LegalSubheading>
          <p>
            With your permission, we collect a push notification token (via
            Firebase Cloud Messaging) so we can send:
          </p>
          <LegalList
            items={[
              "New assignment alerts",
              "Delivery-related updates",
              "Operational messages from Kamakshi Fresh",
            ]}
          />

          <LegalSubheading>F. Device and technical information</LegalSubheading>
          <LegalList
            items={[
              "Device type, OS version, and App version",
              "Basic diagnostic / crash-related technical logs where needed to keep the App reliable",
              "IP address and standard server logs when you connect to our API",
            ]}
          />

          <LegalSubheading>
            G. Information we do not intentionally collect through the App
          </LegalSubheading>
          <LegalList
            items={[
              "We do not request access to your contacts list, photos, camera, or microphone for core delivery partner features.",
              "We do not sell your personal information.",
            ]}
          />
        </LegalSection>

        <LegalSection id="how-we-use" title="How we use your information">
          <p>We use the information above to:</p>
          <LegalList
            items={[
              "Create and manage your partner account",
              "Authenticate you and secure your session",
              "Assign, display, and update delivery tasks",
              "Support navigation and delivery confirmation",
              "Send push notifications related to your work",
              "Communicate with you about account status, shifts, or support",
              "Improve App reliability, security, and performance",
              "Comply with legal obligations and prevent fraud or misuse",
            ]}
          />
        </LegalSection>

        <LegalSection id="legal-bases" title="Legal bases (where applicable)">
          <p>Where required by law, we process data based on:</p>
          <LegalList
            items={[
              "Performance of a contract (providing the partner App and delivery tools)",
              "Legitimate interests (security, operations, fraud prevention)",
              "Consent (e.g. location and notifications, where required)",
              "Legal obligation",
            ]}
          />
        </LegalSection>

        <LegalSection id="how-we-share" title="How we share information">
          <p>We may share information with:</p>
          <LegalList
            items={[
              "Kamakshi Fresh operations / store teams who manage routes and partner accounts",
              "Service providers who help us run the App (e.g. cloud hosting, Firebase for push notifications, Google Maps for maps and navigation) under appropriate agreements",
              "Authorities when required by law or to protect rights, safety, or security",
            ]}
          />
          <p>
            We do not sell personal data to third parties for advertising.
            Third-party services (such as Google Maps and Firebase) process
            limited data under their own terms and privacy policies when
            those features are used.
          </p>
        </LegalSection>

        <LegalSection id="retention" title="Data retention">
          <p>
            We retain account and operational data for as long as your
            partner relationship is active and as needed for:
          </p>
          <LegalList
            items={[
              "Delivery records and business operations",
              "Security, dispute resolution, and legal compliance",
            ]}
          />
          <p>
            When an account is deleted or deactivated, we delete or
            anonymize personal data as described in our{" "}
            <a
              href="/account-deletion"
              className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700"
            >
              Account &amp; Data Deletion Policy
            </a>
            , except where retention is required by law.
          </p>
        </LegalSection>

        <LegalSection id="security" title="Data security">
          <p>
            We use reasonable technical and organizational measures to
            protect your information, including encrypted transport (HTTPS),
            authenticated API access, and restricted internal access. No
            method of transmission or storage is 100% secure.
          </p>
        </LegalSection>

        <LegalSection id="your-rights" title="Your rights and choices">
          <p>Depending on applicable law, you may have the right to:</p>
          <LegalList
            items={[
              "Access the personal data we hold about you",
              "Correct inaccurate data",
              "Request deletion of your account and related personal data",
              "Withdraw consent for location or notifications via device settings",
              "Log out and clear local session data on your device",
            ]}
          />
          <p>
            To exercise these rights, contact us at{" "}
            <LegalEmail address="privacy@kamakshifresh.com" /> or follow the
            deletion process in our{" "}
            <a
              href="/account-deletion"
              className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700"
            >
              Deletion Policy
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection id="children" title="Children's privacy">
          <p>
            The App is intended for adult delivery partners authorized by
            Kamakshi Fresh. It is not directed to children under 13 (or the
            minimum age required in your jurisdiction).
          </p>
        </LegalSection>

        <LegalSection id="international" title="International transfers">
          <p>
            Your information may be processed on servers or by service
            providers located outside your country. Where required, we take
            steps to protect such transfers.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="Changes to this Policy">
          <p>
            We may update this Policy from time to time. The &ldquo;Last
            updated&rdquo; date will change when we do. Continued use of the
            App after updates means you accept the revised Policy, unless
            applicable law requires additional consent.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="Contact us">
          <p>For privacy questions or requests:</p>
          <LegalList
            items={[
              <>
                Email: <LegalEmail address="privacy@kamakshifresh.com" />
              </>,
              <>
                Operations / partner support:{" "}
                <LegalEmail address="delivery@kamakshifresh.com" />
              </>,
              <>
                Postal address: Kamakshi Fresh, Magadi Road, Bangalore,
                Karnataka, India
              </>,
            ]}
          />
          <LegalCallout icon="lock" title="Related policy">
            See our{" "}
            <a
              href="/account-deletion"
              className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2 hover:text-brand-800"
            >
              Account &amp; Data Deletion Policy
            </a>{" "}
            for how to request deletion of your delivery partner account.
          </LegalCallout>
        </LegalSection>
      </article>

      <SiteFooter />
    </main>
  );
}
