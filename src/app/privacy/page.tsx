"use client";
import React from "react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Privacy Policy
        </h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              Privacy Policy for AvatarisAI.com
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Effective Date: June 25, 2025
            </p>
            <p className="text-gray-300 mb-6">
              Welcome to AvatarisAI.com. Your privacy is important to us. This
              document outlines how we collect, use, and protect your personal
              information when you use our services.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              1. Who We Are
            </h2>
            <p className="text-gray-300">
              AvatarisAI.com is operated by MediChain Health Innovations Inc., a
              health-tech company based in Vancouver, Canada. We offer a
              portfolio of innovative applications that may visually reflect
              health-related characteristics. We are committed to handling your
              data with transparency and care.
            </p>
            <p className="text-gray-300 mt-2">
              Company Address: MediChain Health Innovations Inc. 1055 West
              Georgia Street, 1500 Royal Centre, P.O. Box 11117, Vancouver BC
              V6E 4N7, Canada
              <br />
              Business No: 765800768BC0001
              <br />
              Incorporation No: BC1536421
            </p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, nisl eget ultricies tincidunt, nunc nunc lacinia nisi,
              eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec
              aliquam tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl
              sit amet nisl.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              2. Information We Collect
            </h2>
            <p className="text-gray-300">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui
              posuere blandit. Praesent sapien massa, convallis a pellentesque
              nec, egestas non nisi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300">
              Cras ultricies ligula sed magna dictum porta. Curabitur non nulla
              sit amet nisl tempus convallis quis ac lectus. Mauris blandit
              aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              4. Data Security
            </h2>
            <p className="text-gray-300">
              Nulla quis lorem ut libero malesuada feugiat. Pellentesque in
              ipsum id orci porta dapibus. Donec rutrum congue leo eget
              malesuada. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              5. Your Rights
            </h2>
            <p className="text-gray-300">
              Proin eget tortor risus. Curabitur aliquet quam id dui posuere
              blandit. Vivamus suscipit tortor eget felis porttitor volutpat.
              Sed porttitor lectus nibh. Sed porttitor lectus nibh.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              6. Contact Us
            </h2>
            <p className="text-gray-300">
              If you have any questions about our privacy policy, please contact
              us at
              <span className="text-purple-400"> privacy@avatarsai.com</span>
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400">Last updated: October 2024</p>
          <div className="mt-4">
            <Link
              href="/"
              className="text-blue-400 hover:text-purple-400 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
