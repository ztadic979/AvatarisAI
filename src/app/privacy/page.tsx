"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoavatarise from "../../../public/logoavatarise.png";

export default function PrivacyPage() {
  const [isOpen, setIsOpen] = useState(false);

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
    </main>
  );
}
