import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Discord Time Converter",
  description:
    "Our privacy policy explaining how we handle your data and protect your privacy while using Discord Time Converter.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950/40 via-30% to-purple-950/40">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="glass-card prose prose-invert prose-lg max-w-none text-gray-300 p-8">
          <p className="text-gray-400 mb-8">
            <strong>Last Updated:</strong> January 15, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to Discord Time Converter ("we," "our," or "us"). We are
                committed to protecting your privacy and ensuring you have a
                positive experience on our website. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information
                when you visit our website.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree
                with the terms of this privacy policy, please do not access the
                site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">
                Information You Provide
              </h3>
              <p>
                Our website is designed to function without requiring any
                personal information. The timestamp converter tool operates
                entirely in your browser and does not send your input data to
                our servers. Any date or time you enter is processed locally on
                your device.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">
                Automatically Collected Information
              </h3>
              <p>
                We may automatically collect certain information when you visit
                our website, including:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Log Data:</strong> IP address, browser type, operating
                  system, referring URLs, and pages visited
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website, including timestamp conversion frequency
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, screen
                  resolution, and browser settings
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">
                Cookies and Tracking Technologies
              </h3>
              <p>
                We use cookies and similar tracking technologies to enhance your
                experience. These may include:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand website
                  usage patterns
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> Used by our advertising
                  partners (Google AdSense) to serve relevant ads
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p>
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>To operate and maintain our website</li>
                <li>To improve user experience and website performance</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>
                  To display relevant advertisements through Google AdSense
                </li>
                <li>
                  To detect and prevent technical issues and security threats
                </li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Third-Party Services
              </h2>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">
                Google AdSense
              </h3>
              <p>
                We use Google AdSense to display advertisements on our website.
                Google may use cookies and web beacons to collect information
                about your visits to this and other websites in order to provide
                advertisements about goods and services of interest to you. You
                can opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Google's Ads Settings
                </a>
                .
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">
                Vercel Analytics
              </h3>
              <p>
                We use Vercel Analytics and Speed Insights to monitor website
                performance and user experience. This service collects
                anonymized usage data to help us improve our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your information. However, please note that
                no method of transmission over the internet or electronic
                storage is 100% secure, and we cannot guarantee absolute
                security.
              </p>
              <p>
                Since our timestamp conversion tool operates entirely in your
                browser, your input data never leaves your device. We do not
                store or transmit the dates and times you convert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Your Privacy Rights
              </h2>
              <p>
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request access to the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Opt-Out:</strong> Opt out of marketing communications
                  and personalized advertising
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your data
                  in a portable format
                </li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at
                privacy@discordtime.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Children's Privacy
              </h2>
              <p>
                Our website is not directed to children under the age of 13. We
                do not knowingly collect personal information from children
                under 13. If you believe we have collected information from a
                child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in
                countries other than your own. These countries may have
                different data protection laws. By using our website, you
                consent to such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date. We encourage you
                to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>Email: privacy@discordtime.com</li>
                <li>
                  Contact Form:{" "}
                  <a
                    href="/contact"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    /contact
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
