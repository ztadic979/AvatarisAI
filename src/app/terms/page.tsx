"use client";
import Link from "next/link";
import logoavatarise from "../../../public/logoavatarise.png";
import Image from "next/image";
import { useState } from "react";

export default function TermsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#03090E] text-white relative overflow-hidden">
      <div>
        <div
          className="rounded-full absolute top-200 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#1BD1DB",
            filter: "blur(160px)",
          }}
        />
        <div
          className="rounded-full absolute top-216 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "600px",
            height: "700px",
            backgroundColor: "#534896",
            filter: "blur(240px)",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Logo */}
          <header className="relative md:absolute top-6 left-0 md:left-20 p-4 md:p-6 flex justify-center md:justify-start">
            <Image src={logoavatarise} alt="logo" width={120} height={40} />
          </header>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 mt-24">
            Terms of Service
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Terms of Service for AvatarisAI.com
            </h2>
            <p className="text-xs text-gray-400 mb-4">
              Effective Date: June 25, 2025
            </p>
            <p>
              By using AvatarisAI.com, you agree to the following Terms of
              Service:
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
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
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              2. Who Can Use the Service
            </h3>
            <p>
              You must be at least 18 years old to use AvatarisAI. By using this
              service, you confirm that you meet this requirement.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              3. Account Registration
            </h3>
            <p>
              Some features require registration. You must provide accurate
              information (name, email, etc.) and are responsible for
              maintaining the confidentiality of your login credentials.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              4. Acceptable Use
            </h3>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
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
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              5. Content Ownership
            </h3>
            <ul className="list-disc pl-5 space-y-1">
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
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              6. Payments and Refunds
            </h3>
            <p className="mb-2">If the service includes paid features:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>All payments are considered final</li>
              <li>Refunds may be granted in special cases upon request</li>
              <li>
                Subscription terms, if any, will be clearly outlined at point of
                sale
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              7. Account Termination
            </h3>
            <p>
              We reserve the right to suspend or terminate accounts that breach
              these terms. In such cases, access to stored data may be revoked.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              8. Disclaimer of Warranty
            </h3>
            <p>
              The service is provided &quot;as is&quot;, without guarantees of
              accuracy, availability, or suitability. Use at your own risk,
              especially in health or legal contexts.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              9. Governing Law
            </h3>
            <p>
              These Terms are governed by the laws of the Province of British
              Columbia, Canada. Disputes will be handled in Canadian courts.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
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
          <Link
            href="/"
            className="w-full sm:w-auto text-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-gray-300 mt-16">
          <div className="pt-8" />
          <div className="flex justify-center px-4">
            <div
              className="h-px bg-[#534896]"
              style={{ width: "min(90%, 1000px)" }}
            />
          </div>

          {/* Disclaimer Toggle */}
          <div className="flex justify-center px-4 py-6">
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="flex items-center justify-center gap-2 text-sm md:text-base hover:text-white transition-colors px-4 py-2"
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

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 pb-8 text-xs sm:text-sm leading-relaxed space-y-4">
              <p>
                This presentation is provided for informational and discussion
                purposes only. It is not intended to constitute, and does not
                constitute, an offer to sell or the solicitation of an offer to
                buy any securities...
              </p>
              {/* Truncated for brevity — keep full content in your file */}
            </div>
          </div>

          {/* Footer Layout */}
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="block md:hidden space-y-4">
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

              <div className="flex justify-between items-end">
                <div className="flex items-center space-x-2">
                  <Image
                    src={logoavatarise}
                    alt="AvatarisAI logo"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="text-right text-xs text-gray-400 space-y-1">
                  <div>Your Health. Your Data. Your Avatar.</div>
                  <div>© 2025 — Copyright</div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-between items-end">
              <div className="flex flex-col space-y-2 text-sm">
                <div>info@avataris.ai</div>
                <div className="flex space-x-6">
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
                  <div>Your Health. Your Data. Your Avatar.</div>
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
