import { Clock, Globe, Heart, Users } from "lucide-react";
import type { Metadata } from "next";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "About Us - Discord Time Converter",
  description:
    "Learn about our mission to make Discord timestamp conversion easy and accessible for global communities everywhere.",
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950/40 via-30% to-purple-950/40">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4">
            About Discord Time Converter
          </h1>
          <p className="text-lg text-gray-400">
            Making global communication seamless, one timestamp at a time
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="glass-card p-8 mb-12">
            <p className="text-gray-300 leading-relaxed">
              Discord Time Converter exists to solve a simple but critical
              problem: coordinating time across global communities. We believe
              that timezone confusion shouldn't prevent people from connecting,
              collaborating, and building communities together.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Our free tool makes it effortless to convert any date and time
              into Discord's timestamp format, ensuring everyone sees events in
              their local timezone. We're committed to keeping this tool free,
              fast, and privacy-focused for all users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-6">
              <Clock className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Instant Conversion
              </h3>
              <p className="text-gray-400">
                Convert timestamps in seconds with real-time previews showing
                exactly how they'll appear in Discord.
              </p>
            </div>

            <div className="glass-card p-6">
              <Users className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Built for Communities
              </h3>
              <p className="text-gray-400">
                Designed specifically for server admins, moderators, and
                community managers who coordinate global events.
              </p>
            </div>

            <div className="glass-card p-6">
              <Globe className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Global First
              </h3>
              <p className="text-gray-400">
                Support for all timezones, DST handling, and international date
                formats ensure worldwide accessibility.
              </p>
            </div>

            <div className="glass-card p-6">
              <Heart className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Privacy Focused
              </h3>
              <p className="text-gray-400">
                No data collection, no tracking cookies, no sign-ups. Your
                privacy is our priority.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <AdBanner slot="1234567900" />
          </div>

          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Discord Time Converter was born from personal frustration. As
              server admins managing international communities, we constantly
              struggled with timezone conversions. Manually calculating "8 PM
              EST is 1 AM GMT" for every announcement was tedious and
              error-prone.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              When Discord introduced Unix timestamp support, we saw the
              potential but noticed many community leaders didn't know about it
              or found the conversion process confusing. We built this tool to
              bridge that gap - making timestamp conversion accessible to
              everyone, regardless of technical expertise.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Today, thousands of Discord communities use our converter to
              coordinate events, schedule meetings, and communicate
              time-sensitive information across timezones. We're proud to
              support the global Discord ecosystem and help communities thrive.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>
                  <strong className="text-white">
                    Free Timestamp Converter:
                  </strong>{" "}
                  Convert any date and time to Discord format instantly
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>
                  <strong className="text-white">All 7 Formats:</strong> Support
                  for every Discord timestamp format with live previews
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>
                  <strong className="text-white">Templates Library:</strong>{" "}
                  Pre-built templates for common use cases
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>
                  <strong className="text-white">Educational Resources:</strong>{" "}
                  Comprehensive guides and blog posts
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>
                  <strong className="text-white">Mobile Responsive:</strong>{" "}
                  Works perfectly on desktop, tablet, and mobile
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>
                  <strong className="text-white">Always Free:</strong> No
                  premium tiers, no paywalls, no limitations
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
