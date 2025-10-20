import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Discord Time Converter",
  description:
    "Legal disclaimer for Discord Time Converter. Important information about our service and its limitations.",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950/40 via-30% to-purple-950/40">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Disclaimer</h1>

        <div className="glass-card prose prose-invert prose-lg max-w-none text-gray-300 p-8">
          <p className="text-gray-400 mb-8">
            <strong>Last Updated:</strong> January 15, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. General Disclaimer
              </h2>
              <p>
                The information provided by Discord Time Converter ("we," "us,"
                or "our") on this website is for general informational purposes
                only. All information on the site is provided in good faith;
                however, we make no representation or warranty of any kind,
                express or implied, regarding the accuracy, adequacy, validity,
                reliability, availability, or completeness of any information on
                the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. No Affiliation with Discord
              </h2>
              <p>
                <strong>
                  Discord Time Converter is NOT affiliated with, endorsed by, or
                  officially connected to Discord Inc. or any of its
                  subsidiaries or affiliates.
                </strong>{" "}
                The official Discord website can be found at{" "}
                <a
                  href="https://discord.com"
                  className="text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  discord.com
                </a>
                .
              </p>
              <p className="mt-4">
                "Discord" is a trademark of Discord Inc. Our use of the name
                "Discord Time Converter" is purely descriptive of the tool's
                functionality (converting times for use in Discord) and does not
                imply any official relationship, partnership, or endorsement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Timestamp Accuracy
              </h2>
              <p>
                While we strive to provide accurate timestamp conversions, we
                cannot guarantee 100% accuracy in all situations. Timestamp
                accuracy may be affected by:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>User's browser timezone settings</li>
                <li>System clock accuracy</li>
                <li>Daylight Saving Time (DST) transitions</li>
                <li>Timezone database updates</li>
                <li>Historical timezone changes</li>
                <li>Browser compatibility</li>
              </ul>
              <p className="mt-4">
                <strong>
                  Users are responsible for verifying timestamp accuracy
                </strong>
                , especially for critical applications, important events, or
                time-sensitive communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. External Links Disclaimer
              </h2>
              <p>
                This website may contain links to external websites that are not
                provided or maintained by or in any way affiliated with Discord
                Time Converter. We do not guarantee the accuracy, relevance,
                timeliness, or completeness of any information on these external
                websites.
              </p>
              <p className="mt-4">
                We have no control over the nature, content, and availability of
                those sites. The inclusion of any links does not necessarily
                imply a recommendation or endorse the views expressed within
                them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Professional Advice Disclaimer
              </h2>
              <p>
                The content on Discord Time Converter is provided for
                informational purposes only and should not be considered
                professional advice. We are not responsible for any decisions or
                actions taken based on the information provided on this website.
              </p>
              <p className="mt-4">
                For specific technical, legal, or professional advice, please
                consult with qualified professionals in the relevant field.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. No Warranty Disclaimer
              </h2>
              <p>
                THE WEBSITE AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS,
                AND SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU
                THROUGH THIS WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS
                AVAILABLE" BASIS.
              </p>
              <p className="mt-4">
                WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
                COMPLETENESS OF THIS WEBSITE'S CONTENT OR THE CONTENT OF ANY
                WEBSITES LINKED TO THIS WEBSITE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                IN NO EVENT SHALL DISCORD TIME CONVERTER, ITS OWNERS, EMPLOYEES,
                OR AFFILIATES BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT,
                CONSEQUENTIAL, OR INCIDENTAL DAMAGES OR ANY DAMAGES WHATSOEVER,
                WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORT,
                ARISING OUT OF OR IN CONNECTION WITH:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>The use of or inability to use the Service</li>
                <li>Inaccurate timestamp conversions</li>
                <li>Missed events or appointments due to timestamp errors</li>
                <li>Loss of data or profits</li>
                <li>Business interruption</li>
                <li>Any other matter relating to the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Educational Content Disclaimer
              </h2>
              <p>
                The guides, blog posts, and tutorials on this website are
                provided for educational purposes. While we strive to provide
                accurate and up-to-date information:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Information may become outdated as Discord or related
                  technologies change
                </li>
                <li>
                  Code examples are provided as-is and may require modification
                  for your specific use case
                </li>
                <li>
                  Implementation strategies may not be suitable for all
                  applications or communities
                </li>
                <li>
                  We are not responsible for any issues arising from following
                  our guides or tutorials
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Third-Party Services
              </h2>
              <p>
                This website uses third-party services including but not limited
                to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Google AdSense:</strong> For displaying advertisements
                </li>
                <li>
                  <strong>Vercel:</strong> For hosting and analytics
                </li>
                <li>
                  <strong>Other Services:</strong> As disclosed in our Privacy
                  Policy
                </li>
              </ul>
              <p className="mt-4">
                We are not responsible for the practices, policies, or content
                of these third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. User Responsibility
              </h2>
              <p>Users of Discord Time Converter are solely responsible for:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Verifying the accuracy of generated timestamps before use
                </li>
                <li>
                  Ensuring timestamps work correctly in their intended context
                </li>
                <li>
                  Testing timestamps across different timezones when necessary
                </li>
                <li>
                  Providing alternative time information for critical events
                </li>
                <li>Backing up important data and information</li>
                <li>
                  Complying with Discord's Terms of Service and Community
                  Guidelines
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Service Availability
              </h2>
              <p>
                We do not guarantee that the Service will be available at all
                times. Website access may be interrupted due to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Maintenance and updates</li>
                <li>Technical difficulties</li>
                <li>Server issues</li>
                <li>Internet connectivity problems</li>
                <li>Force majeure events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Changes to Disclaimer
              </h2>
              <p>
                We reserve the right to modify this disclaimer at any time.
                Changes will be effective immediately upon posting to the
                website. Your continued use of the website following any changes
                constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Contact Us
              </h2>
              <p>
                If you have any questions about this disclaimer, please contact
                us:
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

            <section className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                ⚠️ Important Notice
              </h2>
              <p>
                By using Discord Time Converter, you acknowledge and agree that
                you have read, understood, and accepted this disclaimer. If you
                do not agree with any part of this disclaimer, you should not
                use this website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
