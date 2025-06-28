"use client";
import React from "react";
import Link from "next/link";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#03090E] text-white relative overflow-hidden font-sans">
      {/* Background Blur */}
      <div>
        <div
          className="rounded-full absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40"
          style={{
            width: "600px",
            height: "600px",
            backgroundColor: "#534896",
            filter: "blur(180px)",
          }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-2 pt-10 pb-16 mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Privacy Policy
        </h1>

        <section className="space-y-6 text-sm sm:text-base leading-relaxed text-gray-200">
          <p className="text-sm text-gray-400">Effective Date: June 25, 2025</p>
          <p>
            Welcome to AvatarisAI.com. Your privacy is important to us. This
            document outlines how we collect, use, and protect your personal
            information when you use our services.
          </p>

          <div>
            <h2 className="font-semibold text-white">1. Who We Are</h2>
            <p>
              AvatarisAI.com is operated by MediChain Health Innovations Inc., a
              health-tech company based in Vancouver, Canada. We offer a
              portfolio of innovative applications that may visually reflect
              health-related characteristics. We are committed to handling your
              data with transparency and care.
            </p>
            <p className="mt-2">
              Company Address: <br />
              MediChain Health Innovations Inc.
              <br /> 1055 West Georgia Street, 1500 Royal Centre,
              <br /> P.O. Box 11117, Vancouver BC V6E 4N7, Canada <br />
              Business No: 765800768BC0001
              <br /> Incorporation No: BC1536421
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">2. What We Collect</h2>
            <p>
              To provide our services effectively, we may collect the following
              data:
            </p>
            <ul className="list-disc pl-6 mt-1">
              <li>
                Your name and email address when you register or contact us
              </li>
              <li>
                Images, text, or other content you upload to create
                health-related characteristics
              </li>
              <li>Health-related traits submitted as input </li>
              <li>
                IP address, browser, and usage data via cookies and analytics{" "}
              </li>
            </ul>
            <p>
              We only collect the data necessary to provide and improve our
              service.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">
              3. How We Use Your Information
            </h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 mt-1">
              <li>
                Generate and personalize AI-based avatars within applications
              </li>
              <li>Communicate with you (support, updates, system messages)</li>
              <li>Improve the overall service experience </li>
              <li>Fulfill legal and regulatory obligations</li>
            </ul>
            <p>
              We <span className="font-bold">do not sell</span> or share your
              personal information with third parties without your consent.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">
              4. Third-Party Services
            </h2>
            <p>We work with trusted providers to deliver our service:</p>
            <ul className="list-disc pl-6 mt-1">
              <li>
                <span className="font-bold">Oracle Cloud</span> – for secure
                data storage (regions include US, EU, others)
              </li>
              <li>
                <span className="font-bold">OpenAI and similar APIs </span> – to
                process your images/text for health-related characteristics
              </li>

              <li>
                <span className="font-bold">OGoogle Analytics </span> – for
                anonymous user behavior analysis
              </li>
            </ul>
            <p>
              These services may temporarily process your data in line with
              their own privacy standards.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">
              5. Cookies and Tracking
            </h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 mt-1">
              <li>Keep the website functional and secure</li>
              <li>Understand how users interact with the site</li>

              <li>Personalize content and optimize performance</li>
            </ul>
            <p>You can manage cookies in your browser settings.</p>
          </div>

          <div>
            <h2 className="font-semibold text-white">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>

              <li>Download a copy of your data</li>
              <li>Withdraw consent for data use at any time</li>
            </ul>
            <p>
              To exercise these rights, contact us at:{" "}
              <span className="font-bold">privacy@avatarisai.com</span>{" "}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">7. Data Security</h2>
            <p>
              We use modern cloud infrastructure, encryption, and best practices
              to safeguard your data. While no system is impenetrable, we strive
              to provide a high level of security.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">8. Age Restriction</h2>
            <p>
              This service is intended only for users{" "}
              <span className="font-bold">aged 18 or older</span>. Please do not
              use the platform if you are under 18.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">9. Policy Updates</h2>
            <p>
              We may update this policy from time to time. If changes are
              significant, we’ll notify users directly or through a prominent
              notice on our site.
            </p>
          </div>
        </section>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {/* Footer */}
      </main>
      <Footer />
    </div>
  );
}
