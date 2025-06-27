"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoavatarise from "../../../public/logoavatarise.png";

export default function PrivacyPage() {
  const [isOpen, setIsOpen] = useState(false);

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
      <header className="relative z-10 w-full flex justify-start px-6 md:px-20 pt-10">
        <Image
          src={logoavatarise}
          alt="AvatarisAI logo"
          width={140}
          height={40}
        />
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-2 pt-10 pb-16">
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
      <footer className="text-gray-300">
        {/* Spacer above line */}
        <div className="pt-8" />

        {/* Centered purple line with responsive width */}
        <div className="flex justify-center px-4">
          <div
            className="h-px bg-[#534896]"
            style={{
              width: "min(90%, 1000px)",
            }}
          />
        </div>

        {/* Disclaimer toggle, centered */}
        <div className="flex justify-center px-4 py-6">
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="flex items-center space-x-2 text-sm md:text-base hover:text-white focus:outline-none transition-colors duration-200"
          >
            <span className="underline">Disclaimer</span>
            <span
              className={`text-xl leading-none transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {isOpen ? "−" : "+"}
            </span>
          </button>
        </div>

        {/* Expandable disclaimer content with smooth animation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 pb-8">
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
              <p>
                This presentation is provided for informational and discussion
                purposes only. It is not intended to constitute, and does not
                constitute, an offer to sell or the solicitation of an offer to
                buy any securities, financial instruments, or digital assets in
                any jurisdiction. No portion of this presentation shall be
                relied upon in connection with any investment decision.
              </p>
              <p>
                Avataris AI (a brand operated by Avataris Health Innovations
                Inc., a Canadian corporation) does not create, issue, or sell
                the MEDX token. The MEDX token is created and issued by a
                separate and independent entity, Medix Launch Partners, for use
                exclusively within the Avataris Ecosystem as a utility token.
                MEDX is not intended to function as an investment vehicle or
                store of value and is not offered as a security or financial
                instrument in any jurisdiction.
              </p>
              <p>
                All descriptions of token utility are illustrative of current
                and planned platform functionality only.
              </p>
              <p>
                The availability of such features may vary based on region,
                regulation, user eligibility, and ongoing platform development.
                Use of MEDX is subject to applicable terms of service and local
                regulations.
              </p>
              <p>
                This presentation may reference digital health, AI-powered
                diagnostics, and health-related use cases. Nothing herein should
                be construed as medical advice.
              </p>
              <p>
                All medical use cases are subject to local regulatory approval
                and platform compliance with applicable laws, including but not
                limited to HIPAA, PIPEDA, GDPR, and equivalent international
                standards for data protection and privacy. Past performance,
                product roadmaps, or adoption forecasts included in this
                presentation are not guarantees of future results. All
                statements herein are subject to change without notice.
              </p>
              <p className="font-semibold pt-2">
                DO NOT DISTRIBUTE WITHOUT EXPRESS WRITTEN CONSENT
                <br />
                Confidential © Avataris Health Innovations Inc. 2025. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: email, links, and logo block */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Mobile layout (stacked) */}
          <div className="block md:hidden space-y-4">
            {/* Top row: email and links */}
            <div className="flex flex-col sm:flex-row justify-between items-start space-y-2 sm:space-y-0">
              <div className="text-xs">info@avatarisai.com</div>
              <div className="flex space-x-4 text-xs">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Bottom row: logo and info */}
            <div className="flex justify-between items-end">
              <div className="flex items-center space-x-2">
                <Image
                  src={logoavatarise}
                  alt="AvatarisAI logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className="text-right space-y-1">
                <div className="text-xs text-gray-400">
                  Your Health. Your Data.
                  <br />
                  Your Avatar.
                </div>
                <div className="text-xs text-gray-400">© 2025 — Copyright</div>
              </div>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex justify-between items-end">
            {/* Left: contact email and links */}
            <div className="flex flex-col space-y-2">
              <div className="text-sm">info@avatarisai.com</div>
              <div className="flex space-x-6 text-sm">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Right: logo, name, slogan, copyright */}
            <div className="text-right">
              <div className="flex items-center justify-end space-x-3 mb-2">
                <Image
                  src={logoavatarise}
                  alt="AvatarisAI logo"
                  width={120}
                  height={120}
                />
              </div>
              <div className="text-xs text-gray-400 space-y-1">
                <div>
                  Your Health. Your Data.
                  <br />
                  Your Avatar.
                </div>
                <div>© 2025 — Copyright</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
