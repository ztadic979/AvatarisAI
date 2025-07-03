"use client";
import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-[#03090E] overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Spacer */}
      {/* <div className="pt-[72px]" /> */}

      {/* Hero Section with Blurs */}
      <section className="relative  min-h-[950px] md:min-h-[1200px] flex flex-col justify-center items-center px-4 text-center overflow-hidden z-20">
        <div className="absolute rounded-full border border-gray-500 opacity-10 w-[300px] h-[300px] sm:w-48 sm:h-48 md:w-[800px] md:h-[800px]" />
        <div className="absolute rounded-full border-2 border-gray-400 opacity-10 border-dashed w-[200px] h-[200px] sm:w-36 sm:h-36 md:w-[600px] md:h-[600px]" />
        <div className="absolute rounded-full border border-white opacity-10 w-[140px] h-[140px] sm:w-24 sm:h-24 md:w-[300px] md:h-[300px]" />
        <div className="absolute rounded-full bg-[#534896] filter blur-[120px] opacity-50 w-90 h-90 sm:w-64 sm:h-64 md:w-[850px] md:h-[850px]" />
        <div className="absolute rounded-full bg-[#1BD1DB] filter blur-[90px] opacity-50 w-40 h-40 sm:w-32 sm:h-32 md:w-[350px] md:h-[350px]" />

        <span className="inline-block px-4 py-1 sm:px-6 sm:py-2 bg-[#112A3B4D] backdrop-blur-sm rounded-full text-white/80 text-xs sm:text-sm border border-white/20 mb-4 mt-24 sm:mt-0">
          Let&apos;s Work Together
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white mb-4 z-10">
          Invest in the Future of <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 54.17%, #71AECE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Healthcare
          </span>
        </h1>
        <p className="text-white/60 text-base sm:text-lg max-w-xl mb-6 sm:mb-8 z-10">
          Join us on our mission to revolutionize personalized medicine
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 z-10 mb-12 sm:mb-16">
          {/* <a href="/pitch-deck.pdf">
            <button className="bg-white cursor-pointer text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Download Pitchdeck
            </button>
          </a> */}

          <a
            href="/Avataris-AI-Pitch-Deck.pdf"
            download="Avataris-AI-Pitch-Deck.pdf"
          >
            <button className="bg-white cursor-pointer text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Download Pitchdeck
            </button>
          </a>

          <a href="https://www.linkedin.com/company/avatarisai" target="_blank">
            <button className="bg-transparent border cursor-pointer text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </a>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-16 md:gap-32 text-center mt-16 sm:mt-24 md:mt-32 md:mb-20 z-0">
          {[
            { label: "Active Users", value: "10k+" },
            { label: "Annual Growth", value: "150%" },
            { label: "Partners", value: "50+" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-3">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 54.17%, #71AECE 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Metrics Section - Now in Hero */}

      {/* Why Invest Section with Blur */}
      <section className="relative py-8 sm:py-12 px-4 lg:px-8 overflow-hidden z-0">
        <div className="absolute rounded-full bg-[#534896] filter blur-[120px] opacity-20 w-[400px] h-[400px] -top-20 -right-20" />
        <div className="absolute rounded-full bg-[#1BD1DB] filter blur-[90px] opacity-20 w-[300px] h-[300px] -bottom-12 -left-16" />
        <div className="max-w-6xl mx-auto text-white relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-8 sm:mb-12 text-center">
            <span
              className="text-transparent bg-clip-text"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Why Invest with Avataris AI
            </span>
          </h2>

          {/* Updated content sections */}
          <div className="space-y-8 sm:space-y-12">
            <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 text-white">
                Category-Defining Innovation in Personalized Healthcare
              </h3>
              <p className="text-white font-normal text-sm sm:text-base leading-relaxed">
                Avataris AI is not just another wellness app — it&apos;s a
                platform that fuses AI, diagnostics, and blockchain to deliver
                precision health at scale. From AI-driven diagnostics for
                practitioners to biometric-guided wellness plans for
                individuals, Avataris is pioneering a new standard: healthcare
                that&apos;s intelligent, ethical, and user-owned.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 text-white">
                Tokenized Ecosystem with Real-World Utility
              </h3>
              <p className="text-white font-normal text-sm sm:text-base leading-relaxed">
                Unlike speculative crypto projects, Avataris&apos;s MEDX token
                has intrinsic value: it powers access to clinical tools, unlocks
                premium features, and enables participation in research and data
                monetization. This token utility model aligns economic
                incentives across users, clinicians, and partners — creating a
                sustainable flywheel of demand.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 text-white">
                Built for Global Scale, Backed by Patent-Pending Tech
              </h3>
              <p className="text-white font-normal text-sm sm:text-base leading-relaxed">
                Avataris is designed from day one for international deployment —
                with multilingual UX, low-bandwidth support, and regional
                integrations. Combined with a pipeline of proprietary
                technologies (like the MediClinic AI engine and avatar-driven
                diagnostics), the company is positioned to scale fast and
                license across digital health, pharma, and public health
                sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
