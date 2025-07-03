"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Mark from "../../../public/Mark.png";

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-[#03090E] overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Spacer for header */}
      <div className="pt-[72px]" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center bg-[#03090E] overflow-hidden">
        {/* Background blur elements */}
        <div className="absolute rounded-full border border-gray-500 opacity-10 w-[300px] h-[300px] sm:w-48 sm:h-48 md:w-[800px] md:h-[800px]" />
        <div className="absolute rounded-full border-2 border-gray-400 opacity-10 border-dashed w-[200px] h-[200px] sm:w-36 sm:h-36 md:w-[600px] md:h-[600px]" />
        <div className="absolute rounded-full border border-white opacity-10 w-[140px] h-[140px] sm:w-24 sm:h-24 md:w-[300px] md:h-[300px]" />
        <div className="absolute rounded-full bg-[#534896] filter blur-[120px] opacity-50 w-90 h-90 sm:w-64 sm:h-64 md:w-[850px] md:h-[850px]" />
        <div className="absolute rounded-full bg-[#1BD1DB] filter blur-[90px] opacity-50 w-40 h-40 sm:w-32 sm:h-32 md:w-[350px] md:h-[350px]" />

        {/* Content */}
        <span className="inline-block px-4 py-1 sm:px-6 sm:py-2 bg-[#112A3B4D] backdrop-blur-sm rounded-full text-white/80 text-xs sm:text-sm border border-white/20 mb-4">
          Learn More About Us
        </span>
        <h1 className="text-5xl sm:text-7xl font-semibold text-white mb-6 z-10">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 54.17%, #71AECE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            In The Media
          </span>
        </h1>
        <p className="text-white/60 text-xl max-w-2xl mb-12 z-10">
          Explore our latest video features and see what industry leaders are
          saying about Avataris AI
        </p>

        {/* Featured Video */}
        <div className="relative max-w-4xl w-full z-10">
          <div className="aspect-video mb-6 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/FktyT3BEcik?si=WX3_F7D7_jZWexIs"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-normal text-white mb-4">
              Our latest update on AvatarisAI features
            </h2>
            <p className="text-white/80 mb-2">
              Discover the latest news from our ecosystem.
            </p>
            <p className="text-white/80">
              Learn more about what Avataris AI tech can do for you and your
              health.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-8 bg-[#03090E]">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-normal mb-12 text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 60%, #71AECE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our press releases
          </h2>

          {/* Press Release Items */}
          <div className="space-y-8">
            {/* First Item */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2">
                <div className="aspect-video bg-[#222222] rounded-lg"></div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center self-center">
                <h3 className="text-2xl md:text-3xl font-normal  text-white mb-3">
                  AI is for everyone
                </h3>
                <p className="text-gray-400 text-lg">
                  Learn how you can use AI in your everyday life
                </p>
              </div>
            </div>

            {/* Second Item */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2">
                <div className="aspect-video bg-[#222222] rounded-lg"></div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center  self-center">
                <h3 className="text-2xl md:text-3xl font-normal text-white mb-3">
                  AI is for everyone
                </h3>
                <p className="text-gray-400 text-lg">
                  Learn how you can use AI in your everyday life
                </p>
              </div>
            </div>

            {/* Third Item */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2">
                <div className="aspect-video bg-[#222222] rounded-lg"></div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center  self-center">
                <h3 className="text-2xl md:text-3xl font-normal text-white mb-3">
                  AI is for everyone
                </h3>
                <p className="text-gray-400 text-lg">
                  Learn how you can use AI in your everyday life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-8 bg-[#03090E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-normal text-white mb-4">
              Don&apos;t take our word for it.
            </h2>
            <span
              className="text-transparent bg-clip-text text-3xl"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 54.17%, #71AECE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              See what our customers are saying.
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-transparent border border-[#112A3B] rounded-lg p-6">
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &quot;I&apos;ve tried dozens of wellness apps, but nothing
                compares to this. The AI actually learns from my habits and mood
                patterns, offering guidance that feels incredibly personal. It
                helped me balance my sleep, stress, and nutrition in a way I
                didn&apos;t think was possible without a real coach.&quot;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={Mark}
                  width={48}
                  height={48}
                  alt="Mark Wallace"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-white font-normal text-sm">
                    Mark Wallace
                  </h4>
                  <p className="text-gray-400 text-xs">CEO of Health Inc</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-transparent border border-[#112A3B] rounded-lg p-6">
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &quot;I&apos;ve tried dozens of wellness apps, but nothing
                compares to this. The AI actually learns from my habits and mood
                patterns, offering guidance that feels incredibly personal. It
                helped me balance my sleep, stress, and nutrition in a way I
                didn&apos;t think was possible without a real coach.&quot;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  width={48}
                  height={48}
                  src={Mark}
                  alt="Mark Wallace"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-white font-normal text-sm">
                    Mark Wallace
                  </h4>
                  <p className="text-gray-400 text-xs">CEO of Health Inc</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-transparent border border-[#112A3B] rounded-lg p-6">
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &quot;I&apos;ve tried dozens of wellness apps, but nothing
                compares to this. The AI actually learns from my habits and mood
                patterns, offering guidance that feels incredibly personal. It
                helped me balance my sleep, stress, and nutrition in a way I
                didn&apos;t think was possible without a real coach.&quot;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  width={48}
                  height={48}
                  src={Mark}
                  alt="Mark Wallace"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-white font-normal text-sm">
                    Mark Wallace
                  </h4>
                  <p className="text-gray-400 text-xs">CEO of Health Inc</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
