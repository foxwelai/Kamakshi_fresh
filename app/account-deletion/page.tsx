import type { Metadata } from "next";
import { LegalHeader } from "../components/LegalHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  LegalCallout,
  LegalCode,
  LegalEmail,
  LegalHero,
  LegalList,
  LegalSection,
  LegalSubheading,
  LegalToc,
} from "../components/LegalContent";

export const metadata: Metadata = {
  title: "Account & Data Deletion — Kamakshi Fresh Delivery Partner App",
  description:
    "How Kamakshi Fresh Delivery Partner App users can request deletion of their account and personal data, and what happens after a request is made.",
};

const TOC = [
  { id: "purpose", label: "Purpose" },
  { id: "scope", label: "Scope" },
  { id: "how-to-request", label: "How to request deletion" },
  { id: "what-we-delete", label: "What we delete" },
  { id: "what-we-retain", label: "What we may retain" },
  { id: "not-deleted", label: "What isn't deleted" },
  { id: "timing", label: "Processing time" },
  { id: "temporary-accounts", label: "Temporary / inactive accounts" },
  { id: "after-deletion", label: "After deletion" },
  { id: "contact", label: "Contact" },
];

export default function AccountDeletionPage() {
  return (
    <main className="flex-1 bg-white">
      <LegalHeader />

      <LegalHero
        eyebrow="Delivery Partner App"
        title="Account & Data Deletion Policy"
        updated="24 September 2026"
      />

      <LegalToc items={TOC} />

      <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-5">
        <LegalSection id="purpose" title="Purpose">
          <p>
            This Policy explains how delivery partners can request deletion
            of their Kamakshi Fresh Delivery Partner account and related
            personal data, and what happens after a request is made.
          </p>
          <p>
            This page is provided to meet Google Play and user transparency
            requirements for account deletion.
          </p>
        </LegalSection>

        <LegalSection id="scope" title="Scope">
          <p>
            This Policy covers accounts used in the Kamakshi Fresh Delivery
            Partner App (<LegalCode>com.foxwelai.kfdelpartnerapp</LegalCode>),
            including permanent partners and temporary / cover rider accounts
            created by Kamakshi Fresh.
          </p>
        </LegalSection>

        <LegalSection id="how-to-request" title="How to request account deletion">
          <LegalSubheading>Option A — Email request (primary)</LegalSubheading>
          <p>
            Send an email to: <LegalEmail address="privacy@kamakshifresh.com" />
            <br />
            (CC optional: <LegalEmail address="delivery@kamakshifresh.com" />)
          </p>
          <p>
            Use subject line: <LegalCode>Account Deletion Request – Delivery Partner App</LegalCode>
          </p>
          <p>Include:</p>
          <LegalList
            items={[
              "Full name",
              "Registered email address used to sign in",
              "Registered phone number (if used for OTP login)",
              "City / store or route name (if known)",
              "A clear statement that you want your Delivery Partner account and personal data deleted",
            ]}
          />

          <LegalSubheading>
            Option B — Through your store / operations contact
          </LegalSubheading>
          <p>
            You may also ask your Kamakshi Fresh store or dispatcher to
            submit a deletion request on your behalf. We will still verify
            identity before deleting.
          </p>
          <p>
            We may ask for reasonable verification (e.g. confirming the
            registered email/phone) before processing the request.
          </p>
        </LegalSection>

        <LegalSection id="what-we-delete" title="What we delete">
          <p>
            After verification, we delete or irreversibly anonymize personal
            data associated with your partner account, including where
            applicable:
          </p>
          <LegalList
            items={[
              "Account profile details (name, email, phone)",
              "Login credentials and authentication tokens",
              "Device push notification tokens linked to your account",
              "App session / “remember me” preferences on our systems",
            ]}
          />
          <p>
            Local data on your phone (cached session tokens, remembered
            email) is cleared when you uninstall the App or sign out; you
            should uninstall the App after deletion is completed.
          </p>
        </LegalSection>

        <LegalSection id="what-we-retain" title="What we may retain (and why)">
          <p>
            We may retain limited information when required for legitimate
            business or legal reasons, for example:
          </p>
          <LegalList
            items={[
              "Delivery / fulfillment records needed for accounting, audits, or dispute resolution",
              "Records required by tax, labor, or other applicable law",
              "Security logs needed to investigate fraud or abuse",
            ]}
          />
          <p>
            Where retention is required, we keep only what is necessary and
            for no longer than needed. Retained delivery history may be
            stored without your active login account (e.g. anonymized or
            limited operational records).
          </p>
        </LegalSection>

        <LegalSection id="not-deleted" title="What is not deleted by an App account deletion request">
          <LegalList
            items={[
              "Data belonging to hotels or customers that is not your personal account data",
              "Business records owned by Kamakshi Fresh that are not solely your personal profile",
              "Information already shared with third parties under separate lawful processing (we will stop active processing tied to your account where feasible)",
            ]}
          />
        </LegalSection>

        <LegalSection id="timing" title="Processing time">
          <p>We aim to:</p>
          <LegalList
            items={[
              "Acknowledge your request within 7 business days",
              "Complete deletion (or confirm lawful retention exceptions) within 30 days of verification",
            ]}
          />
          <p>
            If more time is needed (e.g. identity verification or legal
            review), we will notify you.
          </p>
        </LegalSection>

        <LegalSection id="temporary-accounts" title="Temporary / inactive accounts">
          <p>
            Temporary cover rider accounts may already expire automatically.
            Even if an account has expired or been deactivated, you may
            still request deletion of remaining personal data using the
            process above.
          </p>
        </LegalSection>

        <LegalSection id="after-deletion" title="After deletion">
          <p>Once deletion is complete:</p>
          <LegalList
            items={[
              "You will no longer be able to sign in to the Delivery Partner App with that account",
              "Push notifications to that account will stop",
              "A new account can only be created if Kamakshi Fresh re-invites / re-registers you as a partner",
            ]}
          />
        </LegalSection>

        <LegalSection id="contact" title="Contact">
          <LegalList
            items={[
              <>
                Privacy / deletion requests:{" "}
                <LegalEmail address="privacy@kamakshifresh.com" />
              </>,
              <>
                Partner operations support:{" "}
                <LegalEmail address="delivery@kamakshifresh.com" />
              </>,
              <>
                Website:{" "}
                <a
                  href="https://kamakshifresh.com"
                  className="font-semibold text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700"
                >
                  kamakshifresh.com
                </a>
              </>,
            ]}
          />
          <LegalCallout icon="trash" title="Ready to request deletion?">
            Email{" "}
            <a
              href="mailto:privacy@kamakshifresh.com?subject=Account%20Deletion%20Request%20%E2%80%93%20Delivery%20Partner%20App"
              className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2 hover:text-brand-800"
            >
              privacy@kamakshifresh.com
            </a>{" "}
            with the subject line &ldquo;Account Deletion Request – Delivery
            Partner App&rdquo; and the details listed above.
          </LegalCallout>
        </LegalSection>
      </article>

      <SiteFooter />
    </main>
  );
}
