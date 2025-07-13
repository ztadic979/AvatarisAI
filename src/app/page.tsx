/* eslint-disable */
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
import React, { useEffect, useRef, useState } from "react";
import { Easing, motion, Transition, useInView, Variants } from "framer-motion";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { TABS, TEAM } from "./mockData/mockData";
import { useIsMobile } from "./hooks/useIsMobile";
import { StackingCardsSection } from "./components/StackingCardsSection";

export default function HomePage() {
  const isMobile = useIsMobile(768);
  const ref = useRef(null);
  const refTwo = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isInViewTwo = useInView(refTwo, { once: true, amount: 0.2 });

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

  // const [active, setActive] = useState(TABS[0].key);
  const [activeTab, setActiveTab] = useState(0);

  const sectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      // @ts-expect-error not lib type
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in view
      if (rect.bottom < 0 || rect.top > windowHeight) {
        return;
      }

      // Calculate scroll progress through the section
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / sectionHeight)
      );

      // Map to tab index
      const tabIndex = Math.floor(scrollProgress * TABS.length);
      const clampedIndex = Math.max(0, Math.min(tabIndex, TABS.length - 1));

      setActiveTab(clampedIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const easeOut: Easing = "easeOut";
  const cubicBezier: Easing = [0.25, 0.1, 0.25, 1];

  const textTransition: Transition = {
    duration: 0.8,
    ease: easeOut,
    staggerChildren: 0.2,
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: textTransition,
    },
  };

  const childTransition: Transition = {
    duration: 0.6,
    ease: cubicBezier,
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: childTransition,
    },
  };

  const containerTransition: Transition = {
    duration: 0.8,
    ease: easeOut,
    staggerChildren: 0.3,
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: containerTransition,
    },
  };

  const imageTransition: Transition = {
    duration: 0.8,
    ease: easeOut,
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: imageTransition,
    },
  };

  const cardBaseTransition = (delay: number): Transition => ({
    duration: 0.8,
    ease: easeOut,
    delay,
  });

  const leftCardVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: cardBaseTransition(i * 0.2),
    }),
  };

  const rightCardVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: cardBaseTransition(i * 0.2),
    }),
  };

  const skeletonTransition: Transition = {
    duration: 1,
    ease: easeOut,
    delay: 0.3,
  };

  const skeletonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: skeletonTransition,
    },
  };

  const titleTransition: Transition = {
    duration: 0.6,
    ease: easeOut,
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: titleTransition,
    },
  };

  const mobileCardTransition = (delay: number): Transition => ({
    duration: 0.6,
    ease: easeOut,
    delay,
  });

  const mobileCardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: mobileCardTransition(i * 0.1),
    }),
  };

  const mobileSkeletonTransition: Transition = {
    duration: 0.8,
    ease: easeOut,
    delay: 0.2,
  };

  const mobileSkeletonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: mobileSkeletonTransition,
    },
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

        {/* Animated blur circles */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: isMobile ? "200px" : "850px", // Increased mobile size
            height: isMobile ? "200px" : "850px",
            backgroundColor: "#534896",
            filter: isMobile ? "blur(60px)" : "blur(120px)", // Reduced mobile blur
            opacity: 0.7, // Increased opacity
            zIndex: 1, // Ensure it's visible
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: isMobile ? "120px" : "350px",
            height: isMobile ? "120px" : "350px",
            backgroundColor: "#1BD1DB",
            filter: isMobile ? "blur(30px)" : "blur(90px)",
            opacity: isMobile ? 0.8 : 0.5,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5, // Offset the animation
          }}
        />

        {/* main content with fade-in animation */}
        <motion.div
          className="relative text-center max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-6 z-10"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.span
            className="inline-block px-4 py-1 sm:px-6 sm:py-2 bg-[#112A3B4D] backdrop-blur-sm rounded-full text-white/80 text-xs sm:text-sm border border-white/20 mb-4"
            variants={childVariants}
          >
            A New Era of Intelligence in Medicine
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-5xl font-semibold text-white mb-3 leading-tight"
            variants={childVariants}
          >
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
          </motion.h1>

          <motion.p
            className="text-white/60 text-base sm:text-lg mb-8 max-w-lg mx-auto"
            variants={childVariants}
          >
            Innovating tech for your personal wellbeing
          </motion.p>

          <motion.div variants={childVariants}>
            <a
              href="https://www.linkedin.com/company/avatarisai"
              target="_blank"
            >
              <button className="bg-white cursor-pointer text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* trust logos with fade-in animation */}
        <motion.div
          className="absolute bottom-4 left-0 right-0 px-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.p
            className="text-center text-white/80 text-xs sm:text-sm mb-10"
            variants={childVariants}
          >
            Trusted by leading biotech companies worldwide
          </motion.p>
          <motion.div
            className="flex w-[70%] m-auto flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-8 opacity-60"
            variants={childVariants}
          >
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
          </motion.div>
        </motion.div>
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

        <div className="mx-auto w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/FktyT3BEcik?si=WX3_F7D7_jZWexIs"
            title="Avataris AI - Advanced Healthcare Presentation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            // className="rounded-2xl"
            className="rounded-2xl sm:h-[500px] md:h-[600px]"
          ></iframe>
        </div>
      </section>

      <section
        ref={ref}
        className="relative hidden sm:block py-16 px-4 sm:px-6 lg:px-8 z-5 mt-10"
        style={{ backgroundColor: "#03090E", height: "600px" }}
      >
        <motion.div
          className="max-w-6xl mx-auto rounded-2xl h-[400px] p-8 flex flex-col md:flex-row items-center relative"
          style={{ backgroundColor: "#011D35" }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="md:w-1/2 text-white" variants={textVariants}>
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
          </motion.div>

          <motion.div
            className="md:w-1/2 relative mt-8 md:mt-0"
            variants={imageVariants}
          >
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
          </motion.div>
        </motion.div>
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
      <section ref={refTwo} className="relative py-16 px-4 sm:px-6 lg:px-8">
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
          <motion.h2
            className="text-4xl font-normal mb-12"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variants={titleVariants}
            initial="hidden"
            animate={isInViewTwo ? "visible" : "hidden"}
          >
            Our Solution
          </motion.h2>

          {/* Mobile view */}
          <div className="block md:hidden relative min-h-[550px]">
            {/* Skeleton image */}
            <div className="flex justify-center">
              <motion.div
                variants={mobileSkeletonVariants}
                initial="hidden"
                animate={isInViewTwo ? "visible" : "hidden"}
              >
                <Image src={skeleton} alt="Skeleton" width={220} height={440} />
              </motion.div>

              {/* Cards overlay */}
              <div className="absolute inset-0">
                {/* Mobile cards with staggered bottom entrance */}
                {[
                  {
                    top: "20px",
                    title: "AI-driven Avatar that evolves",
                    subtitle: "with your health inputs",
                  },
                  {
                    top: "100px",
                    title: "Tailored wellness plans and",
                    subtitle: "adaptive recommendations",
                  },
                  {
                    top: "180px",
                    title: "Full ownership and optional",
                    subtitle: "monetization of health data",
                  },
                  {
                    top: "260px",
                    title: "AI diagnostic assistant",
                    subtitle: "(MediClinIQ)",
                  },
                  {
                    top: "340px",
                    title: "Personalized Protocols generated",
                    subtitle: "with our Patent pending technology",
                  },
                  {
                    top: "420px",
                    title: "Exportable plans with",
                    subtitle: "lifestyle, nutrition, and supplement guidance",
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="absolute opacity-85 inset-x-0 mx-auto w-[90%] max-w-sm backdrop-blur-sm bg-[#07131D]/70 border border-white/10 rounded-2xl p-3"
                    style={{ top: card.top }}
                    variants={mobileCardVariants}
                    initial="hidden"
                    animate={isInViewTwo ? "visible" : "hidden"}
                    custom={index}
                  >
                    <h3 className="font-semibold text-white text-sm mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-xs">{card.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden sm:flex relative flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
            {/* Left side cards */}
            <div className="absolute left-0 md:left-1/4 transform md:-translate-x-full md:-translate-x-20 z-10">
              {[
                {
                  top: "-260px",
                  left: "-120px",
                  text: "AI-driven Avatar that evolves\nwith your health inputs",
                },
                {
                  top: "-70px",
                  left: "-150px",
                  text: "Tailored wellness plans and\nadaptive recommendations",
                },
                {
                  top: "120px",
                  left: "-90px",
                  text: "Full ownership and optional\nmonetization of health data",
                },
              ].map((card, index) => (
                <motion.div
                  key={`left-${index}`}
                  className="rounded-2xl p-6 w-[300px] text-left backdrop-blur-sm absolute"
                  style={{
                    backgroundColor: "rgba(7, 19, 29, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    top: card.top,
                    left: card.left,
                  }}
                  variants={leftCardVariants}
                  initial="hidden"
                  animate={isInViewTwo ? "visible" : "hidden"}
                  custom={index}
                >
                  {card.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Center skeleton */}
            <motion.div
              className="relative z-20"
              variants={skeletonVariants}
              initial="hidden"
              animate={isInViewTwo ? "visible" : "hidden"}
            >
              <Image src={skeleton} alt="Skeleton" width={300} height={600} />
            </motion.div>

            {/* Right side cards */}
            <div className="absolute right-0 md:right-1/4 transform md:translate-x-full md:translate-x-20 z-10">
              {[
                {
                  top: "-260px",
                  right: "-115px",
                  text: "AI diagnostic assistant\n(MediClinIQ)",
                  width: "w-[300px]",
                },
                {
                  top: "-70px",
                  right: "-160px",
                  text: "Personalized Protocols generated\nwith our Patent pending technology",
                  width: "w-[320px]",
                },
                {
                  top: "120px",
                  right: "-110px",
                  text: "Exportable plans with lifestyle,\nnutrition, and supplement guidance",
                  width: "w-[320px]",
                },
              ].map((card, index) => (
                <motion.div
                  key={`right-${index}`}
                  className={`rounded-2xl p-6 ${card.width} text-left backdrop-blur-sm absolute`}
                  style={{
                    backgroundColor: "rgba(7, 19, 29, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    top: card.top,
                    right: card.right,
                  }}
                  variants={rightCardVariants}
                  initial="hidden"
                  animate={isInViewTwo ? "visible" : "hidden"}
                  custom={index}
                >
                  {card.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StackingCardsSection />

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
