import React from "react";

export const metadata = {
  title: "Terms of Service | AvatarsAI",
  description:
    "Read our terms of service to understand your rights and obligations when using AvatarsAI services.",
};

export default function TermsPage() {
  return (
    <div className=" mx-auto py-12 px-4 md:px-6 bg-[#03090E] text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Terms of Service
      </h1>
      <div className="prose prose-lg max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mt-6">
          Terms of Service for AvatarisAI.com
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Effective Date: June 25, 2025
        </p>
        <p>
          By using AvatarisAI.com, you agree to the following Terms of Service:
        </p>

        <h3 className="text-lg font-semibold mt-6">1. Service Overview</h3>
        <p>
          AvatarisAI is a platform that uses a variety of innovative
          applications to reflect health-related characteristics. These
          applications may reflect health-related traits based on user inputs.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          2. Who Can Use the Service
        </h3>
        <p>
          You must be at least 18 years old to use AvatarisAI. By using this
          service, you confirm that you meet this requirement.
        </p>

        <h3 className="text-lg font-semibold mt-6">3. Account Registration</h3>
        <p>
          Some features require registration. You must provide accurate
          information (name, email, etc.) and are responsible for maintaining
          the confidentiality of your login credentials.
        </p>

        <h3 className="text-lg font-semibold mt-6">4. Acceptable Use</h3>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Upload illegal, offensive, or harmful content</li>
          <li>
            Misuse the service to impersonate others or spread misinformation
          </li>
          <li>Interfere with or harm our systems or users</li>
        </ul>
        <p>
          Violation of these terms may result in suspension or termination of
          your account.
        </p>

        <h3 className="text-lg font-semibold mt-6">5. Content Ownership</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>You retain rights to your original uploads</li>
          <li>
            AvatarisAI retains rights to the AI tools, models, and backend
          </li>
          <li>
            With your explicit consent, we may use generated health-related
            characteristics for research or service improvement
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">6. Payments and Refunds</h3>
        <p>If the service includes paid features:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>All payments are considered final</li>
          <li>Refunds may be granted in special cases upon request</li>
          <li>
            Subscription terms, if any, will be clearly outlined at point of
            sale
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6">7. Account Termination</h3>
        <p>
          We reserve the right to suspend or terminate accounts that breach
          these terms. In such cases, access to stored data may be revoked.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          8. Disclaimer of Warranty
        </h3>
        <p>
          The service is provided &quot;as is&quot;, without guarantees of
          accuracy, availability, or suitability. Use at your own risk,
          especially in health or legal contexts.
        </p>

        <h3 className="text-lg font-semibold mt-6">9. Governing Law</h3>
        <p>
          These Terms are governed by the laws of the Province of British
          Columbia, Canada. Disputes will be handled in Canadian courts.
        </p>

        <h3 className="text-lg font-semibold mt-6">10. Contact</h3>
        <p>
          If you have questions or legal concerns, please contact: 📩{" "}
          <a
            href="mailto:support@avatarisai.com"
            className="text-blue-600 hover:underline"
          >
            support@avatarisai.com
          </a>
        </p>
      </div>
    </div>
  );
}
