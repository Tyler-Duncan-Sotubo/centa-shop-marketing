import { HiOutlineDocumentText } from "react-icons/hi";
import LegalLayout from "@/features/legal/ui/legal-layout";

export const metadata = {
  title: "Terms of Service — SalesCenta",
};

export default function Page() {
  return (
    <LegalLayout
      icon={HiOutlineDocumentText}
      label="Legal"
      title="Terms of Service"
      updated="13 July 2026"
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and
        use of SalesCenta (the &quot;Service&quot;), operated by TXD Agency
        (&quot;TXD Agency&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;), a business based in Croydon, United Kingdom. By
        creating an account or using the Service, you agree to these Terms.
        If you do not agree, do not use the Service.
      </p>

      <h2>1. What SalesCenta is</h2>
      <p>
        SalesCenta is a commerce platform that lets merchants (&quot;you&quot;,
        the &quot;Merchant&quot;) create and run an online storefront,
        manage products, orders, and customers, accept payments, and sell
        through channels including WhatsApp. SalesCenta is a tool for
        running your business — it is not a party to the sales you make
        through it, and it does not take title to, inspect, or guarantee
        any goods or services you list or sell.
      </p>

      <h2>2. Your account</h2>
      <ul>
        <li>
          You must provide accurate information when creating your account
          and keep it up to date.
        </li>
        <li>
          You are responsible for maintaining the security of your account
          credentials and for all activity that happens under your account,
          including actions taken by staff you invite.
        </li>
        <li>
          You must be legally able to enter into a contract, and legally
          able to sell the products or services you list.
        </li>
      </ul>

      <h2>3. Plans, billing, and free trials</h2>
      <p>
        SalesCenta offers self-serve plans (Starter, Growth, Pro) billed
        monthly or yearly in Nigerian Naira (NGN), and an Enterprise plan
        with custom pricing. Where offered, a free trial gives you access
        to a paid plan for a limited period without charge; if you do not
        cancel before the trial ends, billing begins automatically.
      </p>
      <ul>
        <li>Subscription fees are billed in advance and are non-refundable except where required by law.</li>
        <li>You can upgrade, downgrade, or cancel your plan at any time from your billing settings. Downgrading may disable features tied to your previous plan; your storefront, products, and orders are not deleted.</li>
        <li>We may change plan pricing or features with reasonable notice. Continuing to use the Service after a pricing change takes effect means you accept the new pricing.</li>
      </ul>

      <h2>4. Payments and payment processors</h2>
      <p>
        SalesCenta integrates with third-party payment processors —
        currently Paystack, with Stripe and Fincra planned — to let your
        customers pay by card, bank transfer, or other supported methods.
        We do not hold or process your customers&apos; card details
        ourselves; that is handled directly by the payment processor under
        its own terms and privacy policy, which you and your customers are
        also bound by when a payment is made.
      </p>
      <p>
        Processing fees charged by payment processors are separate from
        your SalesCenta subscription fee and are set by the processor, not
        by us.
      </p>

      <h2>5. Your responsibilities as a merchant</h2>
      <p>
        You are solely responsible for the products and services you list,
        the accuracy of your product descriptions and pricing, fulfilling
        orders, handling returns and refunds with your customers, and
        complying with consumer protection, advertising, and tax laws that
        apply to your business. SalesCenta provides tools (invoicing, tax
        settings, shipping zones) to help with this, but using them does
        not transfer legal responsibility to us.
      </p>
      <p>
        You are also the data controller for your own customers&apos; data
        collected through your storefront — see our{" "}
        <a href="/page-privacy">Privacy Policy</a> for how this works.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to use SalesCenta to:</p>
      <ul>
        <li>Sell illegal goods or services, or goods that infringe someone else&apos;s intellectual property.</li>
        <li>Run fraudulent, deceptive, or pyramid/Ponzi-style schemes.</li>
        <li>Attempt to interfere with, disrupt, or gain unauthorised access to the Service or other merchants&apos; stores.</li>
        <li>Use the Service in a way that violates applicable law in Nigeria, the United Kingdom, or any jurisdiction you operate in.</li>
      </ul>
      <p>
        We may suspend or terminate accounts that violate this section,
        with or without notice depending on severity.
      </p>

      <h2>7. Your content</h2>
      <p>
        You retain ownership of the product listings, images, and store
        content you upload. By using the Service, you grant us a limited
        licence to host, display, and process that content solely to
        operate your storefront and the features you use.
      </p>

      <h2>8. API access and integrations</h2>
      <p>
        Plans that include API access, webhooks, or third-party
        integrations (such as Zoho) are subject to reasonable rate limits
        and usage guidelines. You are responsible for how you use data
        retrieved through the API, including keeping your API keys secure.
      </p>

      <h2>9. Service availability</h2>
      <p>
        We aim to keep SalesCenta available and reliable, but we do not
        guarantee uninterrupted access. We may perform maintenance,
        updates, or changes to the Service from time to time, and will try
        to give notice of anything that materially affects your store.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, TXD Agency is not liable
        for indirect, incidental, or consequential damages arising from
        your use of the Service, including lost sales, lost profits, or
        disputes between you and your customers. Nothing in these Terms
        limits liability that cannot be limited under UK law.
      </p>

      <h2>11. Termination</h2>
      <p>
        You may close your account at any time. We may suspend or
        terminate your access if you breach these Terms, misuse the
        Service, or fail to pay applicable fees. On termination, you
        remain responsible for any outstanding fees and obligations to
        your own customers.
      </p>

      <h2>12. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material
        changes, we&apos;ll make reasonable efforts to notify you before
        they take effect. Continued use of the Service after changes take
        effect means you accept the updated Terms.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These Terms are governed by the laws of England and Wales. This
        does not remove any statutory protections you&apos;re entitled to
        under the law of the country where you or your business are
        based.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:hello@salescenta.com">hello@salescenta.com</a> or
        via our <a href="/contact-one">contact page</a>.
      </p>
    </LegalLayout>
  );
}
