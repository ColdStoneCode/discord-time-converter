import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Discord Time Converter",
  description:
    "Terms of Service for using Discord Time Converter. Read our terms and conditions before using our service.",
};

export default function TermsPage() {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950/40 via-30% to-purple-950/40">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="glass-card prose prose-invert prose-lg max-w-none text-gray-300 p-8">
          <p className="text-gray-400 mb-8">
            <strong>Last Updated:</strong> January 15, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Discord Time Converter ("the Service"),
                you accept and agree to be bound by the terms and provisions of
                this agreement. If you do not agree to these Terms of Service,
                please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Description of Service
              </h2>
              <p>
                Discord Time Converter is a free web-based tool that converts
                dates and times into Discord's Unix timestamp format. The
                Service includes:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Timestamp conversion tool with multiple format options</li>
                <li>Educational content including guides and blog posts</li>
                <li>Templates and examples for common use cases</li>
                <li>Timezone comparison and conversion utilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. User Obligations
              </h2>
              <p>When using the Service, you agree to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Use the Service only for lawful purposes</li>
                <li>
                  Not attempt to gain unauthorized access to any part of the
                  Service
                </li>
                <li>Not interfere with or disrupt the Service or servers</li>
                <li>
                  Not use automated systems to access the Service except as
                  permitted
                </li>
                <li>
                  Not reproduce, distribute, or create derivative works without
                  permission
                </li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Intellectual Property Rights
              </h2>
              <p>
                All content on this website, including but not limited to text,
                graphics, logos, code, and software, is the property of Discord
                Time Converter or its content suppliers and is protected by
                international copyright and intellectual property laws.
              </p>
              <p className="mt-4">
                You may use the Service for personal or commercial purposes, but
                you may not copy, modify, or redistribute the website's code or
                content without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. User-Generated Content
              </h2>
              <p>
                If you submit feedback, suggestions, or ideas about the Service,
                you grant us the right to use and incorporate such feedback
                without compensation or attribution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Disclaimer of Warranties
              </h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT
                WARRANT THAT:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  The Service will be uninterrupted, timely, secure, or
                  error-free
                </li>
                <li>
                  The results obtained from using the Service will be accurate
                  or reliable
                </li>
                <li>
                  The quality of any information obtained through the Service
                  will meet your expectations
                </li>
                <li>Any errors in the Service will be corrected</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, DISCORD TIME CONVERTER
                SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
                REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS
                OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING
                FROM:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Your use or inability to use the Service</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>
                  Any interruption or cessation of transmission to or from the
                  Service
                </li>
                <li>
                  Any bugs, viruses, or similar that may be transmitted through
                  the Service
                </li>
                <li>
                  Any errors or omissions in any content or for any loss or
                  damage incurred as a result of the use of any content posted,
                  emailed, transmitted, or otherwise made available through the
                  Service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Accuracy of Timestamps
              </h2>
              <p>
                While we strive to provide accurate timestamp conversions, we
                cannot guarantee perfect accuracy in all cases. Users are
                responsible for verifying timestamp accuracy for critical
                applications. Factors affecting accuracy may include:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Browser timezone settings</li>
                <li>Daylight Saving Time transitions</li>
                <li>System clock accuracy</li>
                <li>Timezone database updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Third-Party Links and Services
              </h2>
              <p>
                The Service may contain links to third-party websites or
                services that are not owned or controlled by Discord Time
                Converter. We have no control over and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Advertising
              </h2>
              <p>
                The Service displays advertisements through Google AdSense. We
                are not responsible for the content of advertisements or the
                practices of advertisers. Clicking on advertisements is at your
                own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Service Modifications
              </h2>
              <p>
                We reserve the right to modify or discontinue, temporarily or
                permanently, the Service (or any part thereof) with or without
                notice at any time. You agree that we shall not be liable to you
                or any third party for any modification, suspension, or
                discontinuance of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Termination
              </h2>
              <p>
                We may terminate or suspend your access to the Service
                immediately, without prior notice or liability, for any reason,
                including if you breach these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which Discord Time
                Converter operates, without regard to its conflict of law
                provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                14. Changes to Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms of Service
                at any time without prior notice. Your continued use of the
                Service after any changes constitutes acceptance of those
                changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                15. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>Email: legal@discordtime.com</li>
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

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                16. Severability
              </h2>
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision will be limited or eliminated to the
                minimum extent necessary so that the Terms will otherwise remain
                in full force and effect.
              </p>
            </section>

            <section className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Agreement
              </h2>
              <p>
                By using Discord Time Converter, you acknowledge that you have
                read, understood, and agree to be bound by these Terms of
                Service.
              </p>
            </section>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
