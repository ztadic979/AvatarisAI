"use client";
import Image from "next/image";
import skeleton from "../../public/skeleton.png";
import AIModel from "../../public/AIModel.png";
import kopi from "../../public/kopi.png";
import sales from "../../public/sales.png";
import photoshelter from "../../public/photoshelter.png";
import flatfile from "../../public/flatfile.png";
import ailabs from "../../public/ailabs.png";
import phone from "../../public/phone.png";
import DNK from "../../public/DNK.png";
import earth from "../../public/earth.png";

import React, { useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { TABS, TEAM } from "./mockData/mockData";
import { useIsMobile } from "./hooks/useIsMobile";

export default function HomePage() {
  const isMobile = useIsMobile(768);

  const cyanSize = isMobile ? 200 : 500;
  const purpleSize = isMobile ? 240 : 800;
  const cyanTop = isMobile ? "90%" : "85%";
  const purpleTop = isMobile ? "95%" : "90%";

  const cyanCircle: React.CSSProperties = {
    position: "absolute",
    top: cyanTop,
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `${cyanSize}px`,
    height: `${cyanSize}px`,
    backgroundColor: "#1BD1DB",
    filter: "blur(3rem)",
    opacity: 0.5,
    borderRadius: "50%",
  };

  const purpleCircle: React.CSSProperties = {
    position: "absolute",
    top: purpleTop,
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `${purpleSize}px`,
    height: `${purpleSize}px`,
    backgroundColor: "#534896",
    filter: "blur(3rem)",
    opacity: 0.5,
    borderRadius: "50%",
  };

  const [active, setActive] = useState(TABS[0].key);

  const panelRefs = useRef<HTMLDivElement[]>([]);

  const handleClick = (key: string, idx: number) => {
    setActive(key);
    // only scroll on desktop
    if (window.innerWidth >= 768) {
      panelRefs.current[idx]?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#03090E" }}
    >
      <Header />

      {/* Push content down so it doesn’t sit under the fixed header */}
      <div className="pt-[72px]" />
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-x-hidden bg-[#03090E]">
        <div
          className="absolute rounded-full border border-gray-500 opacity-10
               w-[300px] h-[300px]    /* mobile */
               sm:w-48 sm:h-48  /* ≥640px */
               md:w-[800px] md:h-[800px] /* ≥768px and up */"
        />
        <div
          className="absolute rounded-full border-2 border-gray-400 opacity-10 border-dashed
                w-[200px] h-[200px]  
               sm:w-36 sm:h-36
               md:w-[600px] md:h-[600px]"
        />
        <div
          className="absolute rounded-full border border-white opacity-10
           
                 w-[140px] h-[140px]  
               sm:w-24 sm:h-24
               md:w-[300px] md:h-[300px]"
        />

        <div
          className="absolute rounded-full bg-[#534896] filter blur-[120px] opacity-50
               w-90 h-90
               sm:w-64 sm:h-64
               md:w-[850px] md:h-[850px]"
        />
        <div
          className="absolute rounded-full bg-[#1BD1DB] filter blur-[90px] opacity-50
               w-40 h-40
               sm:w-32 sm:h-32
               md:w-[350px] md:h-[350px]"
        />

        {/* main content */}
        <div className="relative text-center max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-6 z-10 animate-fade-in-up">
          <span className="inline-block px-4 py-1 sm:px-6 sm:py-2 bg-[#112A3B4D] backdrop-blur-sm rounded-full text-white/80 text-xs sm:text-sm border border-white/20 mb-4">
            A New Era of Intelligence in Medicine
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold text-white mb-3 leading-tight">
            Your Health. Your Data.
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 54.17%, #71AECE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Avatar.
            </span>
          </h1>

          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-lg mx-auto">
            Innovating tech for your personal wellbeing
          </p>

          <a href="https://www.linkedin.com/company/avatarisai" target="_blank">
            <button className="bg-white cursor-pointer text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </a>
        </div>

        {/* trust logos */}
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <p className="text-center text-white/80 text-xs sm:text-sm mb-10">
            Trusted by leading biotech companies worldwide
          </p>
          <div className="flex w-[70%] m-auto flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-8 opacity-60">
            {[photoshelter, kopi, flatfile, ailabs, sales].map((Logo, i) => (
              <Image
                key={i}
                src={Logo}
                alt=""
                width={100}
                height={32}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* video */}
      <section className="py-16 px-4 bg-[#03090E] text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-6">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 54.17%, #71AECE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Be part of Advance Healthcare
          </span>
        </h2>

        <video
          controls
          className="mx-auto w-full max-w-3xl rounded-2xl shadow-xl"
        >
          <source src="/videopresentation.mp4" type="video/mp4" />
          Your browser doesn’t support HTML5 video.
        </video>
      </section>

      {/* Mission Section */}

      <section
        className="relative hidden sm:block py-16 px-4 sm:px-6 lg:px-8 z-5 mt-10"
        style={{ backgroundColor: "#03090E", height: "600px" }}
      >
        <div
          className="max-w-6xl mx-auto rounded-2xl h-[400px] p-8 flex flex-col md:flex-row items-center relative"
          style={{ backgroundColor: "#011D35" }}
        >
          <div className="md:w-1/2 text-white">
            <h2 className="text-2xl md:text-4xl lg:text-[35px] font-normal leading-tight">
              Our mission is to bridge the gap between innovation and
              accessibility — using artificial intelligence, blockchain, and{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                biology to personalize health and wellness at scale.
              </span>
            </h2>
          </div>

          <div className="md:w-1/2 relative mt-8 md:mt-0">
            <div className="absolute right-[-20px] md:right-[-95px] -top-32 md:-top-96 lg:-top-[19rem]">
              <Image
                src={AIModel}
                alt="AI Model"
                width={400}
                height={400}
                className="relative z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* mobile-only */}
      <section className="block md:hidden px-4 py-8 bg-[#03090E]">
        <style jsx>{`
          @media screen and (max-width: 361px) {
            .s8-text {
              font-size: 1.25rem; /* text-xl */
            }
          }
        `}</style>
        <div
          className="max-w-sm mx-auto bg-[#011D35] rounded-2xl p-6 flex flex-col justify-between"
          style={{ minHeight: "380px" }}
        >
          <h2 className="text-white text-2xl leading-snug z-20 relative s8-text">
            Our mission is to bridge the gap between innovation and
            accessibility — using artificial intelligence, blockchain, and{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              biology to personalize health and wellness at scale.
            </span>
          </h2>

          <div className="flex ">
            <Image
              src={AIModel}
              alt="AI Model"
              width={240}
              height={240}
              className="w-56 h-56 object-contain relative"
              style={{
                marginTop: "-15%",
                marginLeft: "55%",
                marginBottom: "-7%",
              }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-[#03090E] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-4xl font-normal mb-12">
            Why “Healthy” Advice
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Doesn’t Work Anymore
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 border border-[#534896] rounded-2xl p-6">
              <span className="inline-block bg-[#112A3B] px-4 py-1 rounded-full text-white text-sm mb-4">
                For Individuals
              </span>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Generic wellness advice isn’t built for real people.</li>
                <li>
                  It ignores your biology, your lifestyle, and your needs.
                </li>
                <li>Most apps offer guesswork.</li>
                <li>Most health tools offer little ownership.</li>
              </ul>
            </div>

            <div className="flex-1 border border-[#534896] rounded-2xl p-6 ">
              <span className="inline-block bg-[#112A3B] px-4 py-1 rounded-full text-white text-sm mb-4">
                For Practitioners
              </span>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Doctors are overwhelmed by data and time limits.</li>
                <li>Rare diseases are missed.</li>
                <li>There’s no time to build personalized plans.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="rounded-full hidden sm:flex relative z-15"
            style={{
              width: "420px",
              height: "420px",
              backgroundColor: "#30BED44D",
              filter: "blur(120px)",
            }}
          />

          <div
            className="block md:hidden rounded-full relative z-15"
            style={{
              width: "220px",
              height: "220px",
              backgroundColor: "#30BED44D",
              filter: "blur(120px)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h2
            className="text-4xl font-normal mb-12"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Solution
          </h2>

          {/* Mobile view */}
          <div className="block md:hidden relative min-h-[550px]">
            {/* Skeleton image */}
            <div className="flex justify-center">
              <Image src={skeleton} alt="Skeleton" width={220} height={440} />

              {/* Cards overlay */}
              <div className="absolute inset-0">
                {/* 1. Head level */}
                <div
                  className="absolute opacity-85 inset-x-0 mx-auto w-[90%] max-w-sm backdrop-blur-sm bg-[#07131D]/70 border border-white/10 rounded-2xl p-3"
                  style={{ top: "20px" }}
                >
                  <h3 className="font-semibold text-white text-sm mb-1">
                    AI-driven Avatar that evolves
                  </h3>
                  <p className="text-gray-300 text-xs">
                    with your health inputs
                  </p>
                </div>

                {/* 2. Upper torso */}
                <div
                  className="absolute  opacity-85 inset-x-0 mx-auto w-[90%] max-w-sm backdrop-blur-sm bg-[#07131D]/70 border border-white/10 rounded-2xl p-3"
                  style={{ top: "100px" }}
                >
                  <h3 className="font-semibold text-white text-sm mb-1">
                    Tailored wellness plans and
                  </h3>
                  <p className="text-gray-300 text-xs">
                    adaptive recommendations
                  </p>
                </div>

                {/* 3. Mid torso */}
                <div
                  className="absolute  opacity-85 inset-x-0 mx-auto w-[90%] max-w-sm backdrop-blur-sm bg-[#07131D]/70 border border-white/10 rounded-2xl p-3"
                  style={{ top: "180px" }}
                >
                  <h3 className="font-semibold text-white text-sm mb-1">
                    Full ownership and optional
                  </h3>
                  <p className="text-gray-300 text-xs">
                    monetization of health data
                  </p>
                </div>

                {/* 4. Lower torso */}
                <div
                  className="absolute opacity-85 inset-x-0 mx-auto w-[90%] max-w-sm backdrop-blur-sm bg-[#07131D]/70 border border-white/10 rounded-2xl p-3"
                  style={{ top: "260px" }}
                >
                  <h3 className="font-semibold text-white text-sm mb-1">
                    AI diagnostic assistant
                  </h3>
                  <p className="text-gray-300 text-xs">(MediClinIQ)</p>
                </div>

                {/* 5. Upper legs */}
                <div
                  className="absolute opacity-85 inset-x-0 mx-auto w-[90%] max-w-sm backdrop-blur-sm bg-[#07131D]/70 border border-white/10 rounded-2xl p-3"
                  style={{ top: "340px" }}
                >
                  <h3 className="font-semibold text-white text-sm mb-1">
                    Personalized treatment plans
                  </h3>
                  <p className="text-gray-300 text-xs">
                    (drugs + natural compounds)
                  </p>
                </div>

                {/* 6. Lower legs */}
                <div
                  className="absolute opacity-85 inset-x-0 mx-auto w-[90%] max-w-sm backdrop-blur-sm bg-[#07131D]/70 border border-white/10 rounded-2xl p-3"
                  style={{ top: "420px" }}
                >
                  <h3 className="font-semibold text-white text-sm mb-1">
                    Exportable plans with
                  </h3>
                  <p className="text-gray-300 text-xs">
                    lifestyle, nutrition, and supplement guidance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="relative  flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0"> */}
          <div className="hidden sm:flex relative flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
            <div className="absolute left-0 md:left-1/4 transform md:-translate-x-full md:-translate-x-20 z-10">
              <div
                className="rounded-2xl p-6 w-[300px] text-left backdrop-blur-sm absolute"
                style={{
                  backgroundColor: "rgba(7, 19, 29, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  top: "-260px",
                  left: "-120px",
                }}
              >
                AI-driven Avatar that evolves
                <br />
                with your health inputs
              </div>

              <div
                className="rounded-2xl p-6 w-[300px] text-left backdrop-blur-sm absolute"
                style={{
                  backgroundColor: "rgba(7, 19, 29, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  top: "-70px",
                  left: "-150px",
                }}
              >
                Tailored wellness plans and
                <br />
                adaptive recommendations
              </div>

              <div
                className="rounded-2xl p-6 w-[300px] text-left backdrop-blur-sm absolute"
                style={{
                  backgroundColor: "rgba(7, 19, 29, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  top: "120px",
                  left: "-90px",
                }}
              >
                Full ownership and optional
                <br />
                monetization of health data
              </div>
            </div>

            <div className="relative z-20">
              <Image src={skeleton} alt="Skeleton" width={300} height={600} />
            </div>

            <div className="absolute right-0 md:right-1/4 transform md:translate-x-full md:translate-x-20 z-10">
              <div
                className="rounded-2xl w-[300px] p-6  text-left backdrop-blur-sm absolute"
                style={{
                  backgroundColor: "rgba(7, 19, 29, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  top: "-260px",
                  right: "-115px",
                }}
              >
                AI diagnostic assistant
                <br />
                (MediClinIQ)
              </div>

              <div
                className="rounded-2xl p-6 w-[300px] text-left backdrop-blur-sm absolute"
                style={{
                  backgroundColor: "rgba(7, 19, 29, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  top: "-70px",
                  right: "-150px",
                }}
              >
                Personalized treatment plans
                <br />
                (drugs + natural compounds)
              </div>

              <div
                className="rounded-2xl p-6 w-[320px] text-left backdrop-blur-sm absolute"
                style={{
                  backgroundColor: "rgba(7, 19, 29, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  top: "120px",
                  right: "-110px",
                }}
              >
                Exportable plans with lifestyle,
                <br />
                nutrition, and supplement guidance
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-1 sm:py-16 px-6 lg:px-8 z-5"
        style={{ scrollSnapType: "y mandatory" }}
        data-tabs-section
      >
        <div className="max-w-6xl mx-auto text-white">
          <h2
            className="text-4xl font-normal mb-10"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Explore the Ecosystem
          </h2>
          <div className="space-y-12 hidden md:block">
            {TABS.map((tab, i) => (
              <div
                key={tab.key}
                ref={(el) => {
                  if (el) panelRefs.current[i] = el;
                }}
                className="flex mb-1"
              >
                {/* Left border - dynamic height based on active state */}
                <div
                  className={`border-l-2 transition-colors duration-500 ${
                    active === tab.key ? "border-[#534896]" : "border-gray-700"
                  }`}
                />
                <div className="ml-6 w-full">
                  <button
                    onClick={() => handleClick(tab.key, i)}
                    className={`text-2xl font-semibold mb-4 block transition-colors duration-200 cursor-pointer ${
                      active === tab.key
                        ? "text-white"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {active !== tab.key ? tab.label : ""}
                  </button>

                  <AnimatePresence initial={false}>
                    {active === tab.key && (
                      <motion.div
                        key={tab.key} // ← unique per tab!
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="overflow-hidden "
                      >
                        <div className="pl-2">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div>
                              <span className="inline-block px-4 py-2 mb-4 bg-[#112A3B] backdrop-blur-sm rounded-full text-white/80 border border-[#FFFFFF]/15">
                                {tab.badge}
                              </span>
                              <h3 className="text-3xl font-semibold mb-4">
                                {tab.heading}
                              </h3>
                              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                                {tab.bullets.map((b, j) => (
                                  <li key={j}>{b}</li>
                                ))}
                              </ul>
                              <Image
                                src={tab.image}
                                alt={tab.label}
                                width={600}
                                height={300}
                                className="rounded-2xl w-full h-auto"
                              />
                            </div>

                            {/* Right Column */}
                            <div className="border border-[#144354] rounded-2xl p-6">
                              <ul className="space-y-4">
                                {tab.features.map((f, k) => (
                                  <li key={k} className="flex items-start">
                                    <span className="text-2xl mr-3">
                                      {f.emoji}
                                    </span>
                                    <div>
                                      <h4 className="font-medium text-white">
                                        {f.title}
                                      </h4>
                                      <p className="text-gray-300">{f.text}</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    {/* </div> */}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          <section className="block md:hidden py-6 px-2 bg-[#03090E]">
            {/* 1) Horizontal tab list */}
            <div className="overflow-x-auto whitespace-nowrap pb-2 -mx-4 px-4">
              {TABS.map((tab, i) => (
                <button
                  key={tab.key}
                  onClick={() => handleClick(tab.key, i)}
                  className={`
          inline-block px-3 pb-1 mr-1
          text-sm font-medium
          border-b-2
          mb-5
          ${
            active === tab.key
              ? "border-[#534896] text-white"
              : "border-gray-700 text-gray-500 hover:text-white hover:border-gray-500"
          }
        `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 2) Active tab content */}
            <div className="overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out">
              <div className="max-w-none">
                {/* replicate the same grid/content you have for one panel: */}
                {TABS.filter((tab) => tab.key === active).map((tab) => (
                  <div key={tab.key} className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-[#112A3B] backdrop-blur-sm rounded-full text-white/80 border border-[#FFFFFF]/15">
                      {tab.badge}
                    </span>
                    <h3 className="text-2xl font-semibold text-white">
                      {tab.heading}
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {tab.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                    <Image
                      src={tab.image}
                      alt={tab.label}
                      width={600}
                      height={300}
                      className="rounded-2xl w-full h-auto"
                    />
                    <div className="border border-[#144354] rounded-2xl p-4">
                      <ul className="space-y-3">
                        {tab.features.map((f, k) => (
                          <li key={k} className="flex items-start">
                            <span className="text-xl mr-2">{f.emoji}</span>
                            <div>
                              <h4 className="font-medium text-white">
                                {f.title}
                              </h4>
                              <p className="text-gray-300">{f.text}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 px-4 z-10">
        {/* ──────────────── Single DNA Background ──────────────── */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          {/* Constrain the DNA to never grow past 1200px, but shrink on small screens */}
          <div className="w-full max-w-[1200px]">
            <Image
              src={DNK}
              alt="DNA pattern"
              // fill would stretch the parent, so we give explicit dimensions instead:
              width={1200}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ──────────────── Your Main Content ──────────────── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-4 items-center">
              {/* Left */}
              <div className="space-y-6  lg:ml-0">
                <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
                  M1 Super App
                </h2>
                <h3 className="text-3xl md:text-4xl font-light text-white leading-tight">
                  Central Command for the
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Avataris AI Ecosystem
                  </span>
                </h3>
              </div>

              {/* Right */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src={phone}
                  alt="M1 Super App phone"
                  width={300}
                  height={600}
                  className="relative z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl font-normal">Meet the Team Driving</h2>
          <h3
            className="text-3xl mb-12"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Avataris AI Forward
          </h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(107.08deg, #0C1D2A 0.54%, #03090E 99.46%)",
                  border: "1px solid #14435433",
                }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="px-6 py-4">
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed text-left">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0f172a",
          height: "800px",
        }}
      >
        {/* earth */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src={earth}
            alt="Earth from space"
            fill
            priority
            className="
        object-cover
        object-top   /* mobile: focus on the top of the image */
        sm:object-center  /* tablet+ center it again */
      "
          />
        </div>

        {/* your two circles */}
        <div style={cyanCircle} className="rounded-full pointer-events-none" />
        <div
          style={purpleCircle}
          className="rounded-full pointer-events-none"
        />

        {/* headline */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "3rem",
              lineHeight: 1.2,
              maxWidth: "90%",
            }}
          >
            Join Us in Shaping the Future of
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #ffffff, #1BD1DB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Intelligence in Medicine
            </span>
          </h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}
