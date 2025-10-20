"use client";

import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to a backend API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950/40 via-30% to-purple-950/40">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-400">
            Have questions, feedback, or suggestions? We'd love to hear from
            you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="glass-card text-center">
            <Mail className="h-10 w-10 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <p className="text-gray-400 text-sm">support@discordtime.com</p>
          </div>

          <div className="glass-card text-center">
            <MessageSquare className="h-10 w-10 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Discord Server
            </h3>
            <p className="text-gray-400 text-sm">Join our community</p>
          </div>

          <div className="glass-card text-center">
            <Send className="h-10 w-10 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Response Time
            </h3>
            <p className="text-gray-400 text-sm">Within 24-48 hours</p>
          </div>
        </div>

        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 text-gray-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 text-gray-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-gray-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a topic</option>
                <option value="support">Technical Support</option>
                <option value="feature">Feature Request</option>
                <option value="bug">Bug Report</option>
                <option value="feedback">General Feedback</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-gray-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={submitted}
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
              ✓ Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </div>

        <div className="mt-12 bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-2">
            Before You Contact Us
          </h3>
          <p className="text-gray-400 mb-3">
            For faster assistance, check out our resources:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>
              •{" "}
              <a href="/guides" className="text-blue-400 hover:text-blue-300">
                Read our comprehensive guides
              </a>{" "}
              for detailed tutorials
            </li>
            <li>
              •{" "}
              <a href="/blog" className="text-blue-400 hover:text-blue-300">
                Browse the blog
              </a>{" "}
              for tips and best practices
            </li>
            <li>
              •{" "}
              <a
                href="/converter"
                className="text-blue-400 hover:text-blue-300"
              >
                Try the converter
              </a>{" "}
              to see it in action
            </li>
          </ul>
        </div>
      </div>
      </section>
    </main>
  );
}
