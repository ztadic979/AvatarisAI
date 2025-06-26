"use client";
import Link from "next/link";
import logoavatarise from "../../../public/logoavatarise.png";
import Image from "next/image";
import { useState } from "react";

export default function TermsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#03090E] text-white relative overflow-hidden">
      {/* Background blur effects */}

      <div
        className="rounded-full absolute top-170 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "570px",
          height: "550px",
          backgroundColor: "#1BD1DB",
          filter: "blur(200px)",
        }}
      />

      <div
        className="rounded-full absolute top-170 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "800px",
          height: "900px",
          backgroundColor: "#534896",
          filter: "blur(300px)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Logo */}
          <header className="absolute top-10 left-20 right-0 p-6">
            <div className="flex items-center">
              <Image src={logoavatarise} alt="logo" />
            </div>
          </header>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 mt-26">
            Terms of Service
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-8 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Terms of Service for AvatarisAI.com
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Effective Date: June 25, 2025
            </p>
            <p className="mb-6">
              By using AvatarisAI.com, you agree to the following Terms of
              Service:
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              1. Service Overview
            </h3>
            <p>
              AvatarisAI is a platform that uses a variety of innovative
              applications to reflect health-related characteristics. These
              applications may reflect health-related traits based on user
              inputs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              2. Who Can Use the Service
            </h3>
            <p>
              You must be at least 18 years old to use AvatarisAI. By using this
              service, you confirm that you meet this requirement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              3. Account Registration
            </h3>
            <p>
              Some features require registration. You must provide accurate
              information (name, email, etc.) and are responsible for
              maintaining the confidentiality of your login credentials.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              4. Acceptable Use
            </h3>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Upload illegal, offensive, or harmful content</li>
              <li>
                Misuse the service to impersonate others or spread
                misinformation
              </li>
              <li>Interfere with or harm our systems or users</li>
            </ul>
            <p>
              Violation of these terms may result in suspension or termination
              of your account.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              5. Content Ownership
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>You retain rights to your original uploads</li>
              <li>
                AvatarisAI retains rights to the AI tools, models, and backend
              </li>
              <li>
                With your explicit consent, we may use generated health-related
                characteristics for research or service improvement
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              6. Payments and Refunds
            </h3>
            <p className="mb-3">If the service includes paid features:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>All payments are considered final</li>
              <li>Refunds may be granted in special cases upon request</li>
              <li>
                Subscription terms, if any, will be clearly outlined at point of
                sale
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              7. Account Termination
            </h3>
            <p>
              We reserve the right to suspend or terminate accounts that breach
              these terms. In such cases, access to stored data may be revoked.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              8. Disclaimer of Warranty
            </h3>
            <p>
              The service is provided &quot;as is&quot;, without guarantees of
              accuracy, availability, or suitability. Use at your own risk,
              especially in health or legal contexts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              9. Governing Law
            </h3>
            <p>
              These Terms are governed by the laws of the Province of British
              Columbia, Canada. Disputes will be handled in Canadian courts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              10. Contact
            </h3>
            <p>
              If you have questions or legal concerns, please contact: 📩{" "}
              <a
                href="mailto:support@avatarisai.com"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                support@avatarisai.com
              </a>
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Back to Home
          </button>
        </div>

        {/* Footer */}
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
                  constitute, an offer to sell or the solicitation of an offer
                  to buy any securities, financial instruments, or digital
                  assets in any jurisdiction. No portion of this presentation
                  shall be relied upon in connection with any investment
                  decision.
                </p>
                <p>
                  Avataris AI (a brand operated by Avataris Health Innovations
                  Inc., a Canadian corporation) does not create, issue, or sell
                  the MEDX token. The MEDX token is created and issued by a
                  separate and independent entity, Medix Launch Partners, for
                  use exclusively within the Avataris Ecosystem as a utility
                  token. MEDX is not intended to function as an investment
                  vehicle or store of value and is not offered as a security or
                  financial instrument in any jurisdiction.
                </p>
                <p>
                  All descriptions of token utility are illustrative of current
                  and planned platform functionality only.
                </p>
                <p>
                  The availability of such features may vary based on region,
                  regulation, user eligibility, and ongoing platform
                  development. Use of MEDX is subject to applicable terms of
                  service and local regulations.
                </p>
                <p>
                  This presentation may reference digital health, AI-powered
                  diagnostics, and health-related use cases. Nothing herein
                  should be construed as medical advice.
                </p>
                <p>
                  All medical use cases are subject to local regulatory approval
                  and platform compliance with applicable laws, including but
                  not limited to HIPAA, PIPEDA, GDPR, and equivalent
                  international standards for data protection and privacy. Past
                  performance, product roadmaps, or adoption forecasts included
                  in this presentation are not guarantees of future results. All
                  statements herein are subject to change without notice.
                </p>
                <p className="font-semibold pt-2">
                  DO NOT DISTRIBUTE WITHOUT EXPRESS WRITTEN CONSENT
                  <br />
                  Confidential © Avataris Health Innovations Inc. 2025. All
                  Rights Reserved.
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
                <div className="text-xs">info@avataris.ai</div>
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
                  <div className="text-xs text-gray-400">
                    © 2025 — Copyright
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:flex justify-between items-end">
              {/* Left: contact email and links */}
              <div className="flex flex-col space-y-2">
                <div className="text-sm">info@avataris.ai</div>
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
    </div>
  );
}
