import LegalLayout from "@/features/legal/ui/legal-layout";

export const metadata = {
  title: "Privacy Policy — SalesCenta",
};

export default function Page() {
  return (
    <LegalLayout title="Privacy Policy" updated="13 July 2026">
      <p>
        This Privacy Policy explains how TXD Agency (&quot;we&quot;,
        &quot;us&quot;, &quot;our&quot;), based in Croydon, United Kingdom,
        collects and uses data when you use SalesCenta. It covers two
        different things, and it&apos;s important to keep them separate:
        the data we collect about you as a Merchant using the Service, and
        the data your own customers give you through your storefront.
      </p>

      <h2>1. Two roles: platform data vs. your customers&apos; data</h2>
      <p>
        When it comes to <strong>your account data</strong> — your name,
        business details, billing information, and how you use SalesCenta
        — TXD Agency is the <strong>data controller</strong>. We decide
        why and how that data is processed, as described below.
      </p>
      <p>
        When it comes to <strong>your customers&apos; data</strong> —
        anyone who buys from your storefront, messages you on WhatsApp
        through the Service, or is added to your customer list — you, the
        Merchant, are the <strong>data controller</strong>. You decide what
        you collect from your customers and what you do with it.
        SalesCenta acts as your <strong>data processor</strong> in this
        case: we store and process that data on your behalf, using it only
        to provide the Service to you, not for our own purposes.
      </p>
      <p>
        In practice, this means: if a customer wants their data deleted,
        corrected, or exported from your store, that request goes to you
        as the merchant, and we provide the tools to act on it. If you have
        questions about your own obligations to your customers under
        applicable data protection law, we&apos;d encourage you to seek
        your own legal advice — we can&apos;t give legal advice on your
        business specifically.
      </p>

      <h2>2. Information we collect about you as a Merchant</h2>
      <ul>
        <li>
          <strong>Account information:</strong> name, email, phone number,
          business name, and address you provide when signing up.
        </li>
        <li>
          <strong>Billing information:</strong> subscription plan, billing
          history, and payment method details, processed through Paystack
          (and, once available, Stripe or Fincra) rather than stored
          directly by us.
        </li>
        <li>
          <strong>Store configuration:</strong> your product catalogue,
          storefront theme settings, staff accounts and roles, and
          integration settings (such as Google Analytics, Meta Pixel, or
          Zoho, where you choose to connect them).
        </li>
        <li>
          <strong>Usage data:</strong> how you interact with the dashboard,
          which features you use, device and browser information, and
          diagnostic logs, used to keep the Service reliable and improve
          it.
        </li>
      </ul>

      <h2>3. How we use your data</h2>
      <ul>
        <li>To provide, maintain, and improve the Service.</li>
        <li>To process billing and communicate about your subscription.</li>
        <li>To provide customer support when you contact us.</li>
        <li>To send you service updates, security notices, and, where you&apos;ve agreed to it, product updates.</li>
        <li>To detect and prevent fraud, abuse, or violations of our Terms of Service.</li>
      </ul>
      <p>We do not sell your data or your customers&apos; data to third parties.</p>

      <h2>4. Who we share data with</h2>
      <p>
        We share data only where necessary to operate the Service:
      </p>
      <ul>
        <li>
          <strong>Payment processors</strong> (Paystack, and in future
          Stripe/Fincra) to process transactions.
        </li>
        <li>
          <strong>Infrastructure and email/SMS providers</strong> we use to
          host the Service and deliver notifications, campaigns, and
          transactional messages on your behalf.
        </li>
        <li>
          <strong>Integrations you choose to enable</strong>, such as
          Google Analytics, Meta Pixel, or Zoho — data only flows to these
          if you connect them yourself.
        </li>
        <li>
          <strong>Legal or regulatory authorities</strong>, where we&apos;re
          required to disclose information by law.
        </li>
      </ul>

      <h2>5. Cookies</h2>
      <p>
        We use cookies to keep you signed in, remember your preferences,
        and understand how the Service is used. If you connect analytics
        or advertising integrations (like Google Analytics or Meta Pixel)
        to your own storefront, those tools may set their own cookies on
        your customers&apos; devices — that is governed by your own use of
        those tools and their respective privacy policies.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We keep your account data for as long as your account is active.
        Depending on your plan, revenue reports and staff activity logs
        are retained for 90 or 365 days as described on our{" "}
        <a href="/page-pricing">pricing page</a>. If you close your
        account, we delete or anonymise your data within a reasonable
        period, except where we&apos;re required to keep records for legal
        or tax purposes.
      </p>

      <h2>7. Your rights</h2>
      <p>
        If you&apos;re in the UK or EU, you have rights under UK GDPR and
        the EU GDPR — including the right to access, correct, delete, or
        export your account data, and to object to certain processing. If
        you&apos;re in Nigeria, similar rights apply under the Nigeria Data
        Protection Act (NDPA). To exercise these rights over your own
        account data, contact us using the details below. If your request
        concerns data collected by a merchant&apos;s storefront, we&apos;ll
        direct you to that merchant, since they are the controller of that
        data.
      </p>

      <h2>8. International data transfers</h2>
      <p>
        We operate from the UK and serve merchants mainly in Nigeria.
        Where data crosses borders, we protect it to a standard consistent
        with UK data protection law.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make
        material changes, we&apos;ll make reasonable efforts to notify
        you before they take effect.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this policy, or requests relating to your own
        account data, can be sent to{" "}
        <a href="mailto:hello@salescenta.com">hello@salescenta.com</a> or
        via our <a href="/contact-one">contact page</a>.
      </p>
    </LegalLayout>
  );
}
