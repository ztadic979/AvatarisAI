"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TermsPage() {
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

      <div className="relative z-10 pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Logo */}
          <Header />

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 mt-24">
            Terms of Service
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-16 ">
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

        <Footer />
      </div>
    </div>
  );
}
