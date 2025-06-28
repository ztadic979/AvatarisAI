"use client";
import React from "react";
import Image from "next/image";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function InvestorsPage() {
  const investorList = [
    {
      name: "One",
      img: "/food.png",
      description:
        "Biotech expert with over 20 years of experience leading health innovation initiatives.",
    },
    {
      name: "Two",
      img: "/food.png",
      description:
        "Series A lead investor specializing in AI-driven medical platforms.",
    },
    {
      name: "Three",
      img: "/food.png",
      description:
        "Partner at HealthTech Ventures, backing disruptive healthcare startups.",
    },
    {
      name: "Four",
      img: "/food.png",
      description:
        "Angel investor and mentor for digital health entrepreneurs.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#03090E] overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Spacer */}
      <div className="pt-[72px]" />

      {/* Hero Section with Blurs */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center bg-[#03090E] overflow-hidden z-20">
        <div className="absolute rounded-full border border-gray-500 opacity-10 w-[300px] h-[300px] sm:w-48 sm:h-48 md:w-[800px] md:h-[800px]" />
        <div className="absolute rounded-full border-2 border-gray-400 opacity-10 border-dashed w-[200px] h-[200px] sm:w-36 sm:h-36 md:w-[600px] md:h-[600px]" />
        <div className="absolute rounded-full border border-white opacity-10 w-[140px] h-[140px] sm:w-24 sm:h-24 md:w-[300px] md:h-[300px]" />
        <div className="absolute rounded-full bg-[#534896] filter blur-[120px] opacity-50 w-90 h-90 sm:w-64 sm:h-64 md:w-[850px] md:h-[850px]" />
        <div className="absolute rounded-full bg-[#1BD1DB] filter blur-[90px] opacity-50 w-40 h-40 sm:w-32 sm:h-32 md:w-[350px] md:h-[350px]" />

        <h1 className="text-4xl sm:text-6xl font-semibold text-white mb-4 z-10">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 54.17%, #71AECE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Invest in the Future of Healthcare
          </span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl mb-8 z-10">
          Join us on our mission to revolutionize personalized medicine.
        </p>
        <div className="flex space-x-4 z-10">
          <a
            href="/pitch-deck.pdf"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Download Pitch Deck
          </a>
          <a
            href="mailto:investors@avatarisai.com"
            className="bg-[#534896] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Why Invest Section with Blur */}
      <section className="relative h-[400px] py-16 px-4 lg:px-8  overflow-hidden z-0">
        <div className="absolute rounded-full bg-[#534896] filter blur-[120px] opacity-20 w-[400px] h-[400px] -top-20 -right-20" />
        <div className="absolute rounded-full bg-[#1BD1DB] filter blur-[90px] opacity-20 w-[300px] h-[300px] -bottom-12 -left-16" />
        <div className="max-w-6xl mx-auto text-white relative">
          <h2 className="text-3xl font-normal mb-6 text-center">
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
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-inside text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="text-2xl">💡</span>
              <p>
                Proven traction with over <strong>10,000 active users</strong>.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-2xl">📈</span>
              <p>
                Year-over-year revenue growth of <strong>150%</strong>.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-2xl">🤝</span>
              <p>
                Strategic partnerships with{" "}
                <strong>leading biotech firms</strong>.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-2xl">🔒</span>
              <p>
                Patented <strong>AI-driven diagnostics</strong> for personalized
                care.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Investors Grid */}
      <section className="py-16 px-4 lg:px-8 bg-[#03090E] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-normal mb-8 text-center text-white">
            Our Investors
          </h2>
          <div className="space-y-16">
            {investorList.map((inv, idx) => (
              <div
                key={inv.name}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <Image
                  src={inv.img}
                  alt={inv.name}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{inv.name}</h3>
                  <p className="text-gray-300">{inv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 bg-[#03090E]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Active Users", value: "10K+" },
            { label: "Annual Growth", value: "150%" },
            { label: "Partners", value: "50+" },
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
