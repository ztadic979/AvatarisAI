"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const mediaItems = [
  {
    title: "Introduction to AI in Medicine",
    url: "https://www.youtube.com/embed/8mAITcNt710",
    description:
      "Learn the basics of artificial intelligence and its applications in healthcare.",
  },
  {
    title: "Deep Learning for Diagnostics",
    url: "https://www.youtube.com/embed/SGUCcjHTmGY",
    description:
      "Discover how deep learning models are revolutionizing medical diagnostics.",
  },
  {
    title: "AI-Powered Drug Discovery",
    url: "https://www.youtube.com/embed/tb-MZD_8IYY",
    description:
      "An overview of how AI accelerates the drug discovery process.",
  },
  {
    title: "Ethics of AI in Healthcare",
    url: "https://www.youtube.com/embed/j9rhKMNePnU",
    description:
      "A discussion on the ethical considerations of deploying AI in clinical settings.        test s",
  },
];

const testimonials = [
  {
    name: "Dr. Laura Smith",
    img: "/Anita.png",
    quote:
      "Avataris AI is revolutionizing healthcare with its predictive analytics. Truly impressive work!",
  },
  {
    name: "James Lee",
    img: "/Viktor.png",
    quote:
      "The personalized medicine platform has changed how we treat patients. Outstanding tech!",
  },
  {
    name: "Diego Martinez",
    img: "/Sazzad.png",
    quote:
      "Their AI diagnostics engine is a game-changer for early detection and intervention.",
  },
];

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-[#03090E] overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Spacer for header */}
      <div className="pt-[72px]" />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center bg-[#03090E] overflow-hidden">
        <div className="absolute rounded-full border border-gray-500 opacity-10 w-[300px] h-[300px] sm:w-48 sm:h-48 md:w-[800px] md:h-[800px]" />
        <div className="absolute rounded-full border-2 border-gray-400 opacity-10 border-dashed w-[200px] h-[200px] sm:w-36 sm:h-36 md:w-[600px] md:h-[600px]" />
        <div className="absolute rounded-full border border-white opacity-10 w-[140px] h-[140px] sm:w-24 sm:h-24 md:w-[300px] md:h-[300px]" />
        <div className="absolute rounded-full bg-[#534896] filter blur-[120px] opacity-50 w-90 h-90 sm:w-64 sm:h-64 md:w-[850px] md:h-[850px]" />
        <div className="absolute rounded-full bg-[#1BD1DB] filter blur-[90px] opacity-50 w-40 h-40 sm:w-32 sm:h-32 md:w-[350px] md:h-[350px]" />
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
            In the Media
          </span>
        </h1>
        <p className="text-white/60 text-xl max-w-2xl mb-12 z-10">
          Explore our latest video features and see what industry leaders are
          saying about Avataris AI.
        </p>
      </section>

      {/* Media Rows */}
      <section className="relative py-24 px-4 lg:px-8 bg-[#03090E] overflow-hidden">
        <div className="absolute rounded-full bg-[#534896] filter blur-[120px] opacity-20 w-[400px] h-[400px] -top-20 -right-20" />
        <div className="absolute rounded-full bg-[#1BD1DB] filter blur-[90px] opacity-20 w-[300px] h-[300px] -bottom-12 -left-16" />
        <div className="max-w-6xl mx-auto space-y-24">
          {mediaItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="relative w-full md:w-1/2 pb-[40%] max-h-[250px]">
                <iframe
                  src={item.url}
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="md:w-1/2 text-white">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 lg:px-8 bg-[#03090E] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-normal mb-8 text-center">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl p-8 flex flex-col items-center text-center bg-gradient-to-b from-[#0C1D2A] to-[#03090E] border border-[#144354] border-opacity-20"
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  width={120}
                  height={120}
                  className="rounded-full mb-6"
                />
                <p className="text-gray-300 italic mb-4">“{person.quote}”</p>
                <h3 className="text-white font-semibold">{person.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
