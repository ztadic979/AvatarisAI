import logoavatarise from "../../../public/logoavatarise.png";
import Image from "next/image";

export default function TermsPage() {
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
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Disclaimer
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src={logoavatarise}
                alt="AvatarsAI"
                className="w-50 h-50"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              Your Health, Your Data, Your Avatar
            </p>
            <p className="text-xs text-gray-500 mt-1">© 2025 — Copyright</p>
            <p className="text-xs text-gray-500 mt-1">info@avatarisai.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
