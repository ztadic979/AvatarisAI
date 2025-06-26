"use client";
import Image from "next/image";
import skeleton from "../../public/skeleton.png";
import AIModel from "../../public/AIModel.png";
import food from "../../public/food.png";
import NN from "../../public/NN.png";
import kopi from "../../public/kopi.png";
import sales from "../../public/sales.png";
import photoshelter from "../../public/photoshelter.png";
import flatfile from "../../public/flatfile.png";
import ailabs from "../../public/ailabs.png";
import logoavatarise from "../../public/logoavatarise.png";
import phone from "../../public/phone.png";
import DNK from "../../public/DNK.png";
import earth from "../../public/earth.png";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  // const [active, setActive] = useState("nutri");
  const [isOpen, setIsOpen] = useState(false);

  // Team members data
  const team = [
    {
      name: "Terry O’Hearn",
      role: "CEO, Co-Founder & Strategist",
      desc: "Visionary entrepreneur with a background in public markets, blockchain, and AI-integrated healthcare. Leads strategy, governance, and capital structuring across the Avataris Ecosystem.",
    },
    {
      name: "Dr. Edwin Gershom, PhD",
      role: "VP, Strategic Alliances",
      desc: "Health sciences expert with extensive experience in clinical business development. Skilled public speaker and global partnership builder, leading commercial alignment and integrative product strategy.",
    },
    {
      name: "Dr. Sazzad Hossain",
      role: "Chief Science Officer",
      desc: "Former Chief Scientist at a publicly listed Canadian tech firm. Specialist in AI model training, algorithmic validation, and translational research in healthcare and drug response prediction.",
    },
    {
      name: "Zoran Tadic",
      role: "Chief Technology Officer",
      desc: "Full-stack technologist and Web3 architect. Builder of decentralized systems, enterprise-grade platforms, and real-time machine learning infrastructures. Leads M1 Super App development and AI integration.",
    },
    {
      name: "Viktor Uzunov",
      role: "Advisor, Web3 Strategy",
      desc: "Blockchain veteran and smart contract advisor. Brings experience from DeFi, token architecture, and DAO governance, ensuring Avataris AI’s Web3 stack is scalable and secure.",
    },
  ];

  // Tabs data
  const tabs = [
    {
      key: "nutri",
      label: "NutriSync",
      badge: "The AI-Driven Wellness App for the World",
      heading: "NutriSync",
      bullets: [
        "Custom wellness plans based on real inputs (not just user guesses)",
        "AI and incentives keep users engaged and progressing",
        "Full ownership of health data, with monetization options",
        "Inclusive, global-first design for underserved regions",
      ],
      features: [
        {
          emoji: "🍽️",
          title: "Smart Meal Planning from Fridge Photos & Videos",
          text: "Turn leftovers into nutrition-optimized meals using AI image recognition",
        },
        {
          emoji: "🏃",
          title: "Fitness & Nutrition Tracking",
          text: "Daily logs of workouts, calories, macros — with adaptive guidance",
        },
        {
          emoji: "🧠",
          title: "NPM Coaching Modes",
          text: "Personalized coaching powered by Avataris’s integrative intelligence",
        },
        {
          emoji: "🌐",
          title: "Multilingual & Cultural Localization",
          text: "Region-specific meals, movement routines, and health tips",
        },
        {
          emoji: "🎁",
          title: "Gamified Rewards with MEDX",
          text: "Earn tokens for consistency, referrals, and health progress",
        },
        {
          emoji: "🔗",
          title: "Avatar Sync (Coming Soon)",
          text: "Build your digital health twin — own it, improve it, and benefit from it",
        },
      ],
    },
    {
      key: "medi",
      label: "MediClinIQ",
      badge: "AI Diagnostics for Real-World Clinics",
      heading: "MediClinIQ",
      bullets: [
        "Saves time — AI processes vast data in seconds",
        "Improves patient outcomes via integrative, evidence-informed plans",
        "Supports regulatory compliance, privacy, and trust",
        "Boosts clinical capacity without hiring more staff",
      ],
      features: [
        {
          emoji: "🤖",
          title: "AI Diagnostic Assistant",
          text: "Pinpoints rare and complex diseases with speed and confidence",
        },
        {
          emoji: "💊",
          title: "Treatment Protocol Generator",
          text: "Integrates pharma, natural remedies, and nutrition into actionable plans",
        },
        {
          emoji: "📋",
          title: "Instant Exportable Reports",
          text: "Patient-friendly summaries that blend clinical and wellness guidance",
        },
        {
          emoji: "🔗",
          title: "Enterprise Integration",
          text: "Scalable access via API for hospitals, insurers, and national systems",
        },
        {
          emoji: "🔒",
          title: "Access via Token Locking (MEDX)",
          text: "Payable in fiat or crypto; commercial users gain platform access through MEDX",
        },
      ],
    },
    {
      key: "strategic",
      label: "Strategic Projects",
      badge: "Strategic Integrations, Licensing & Global Access",
      heading: "Strategic Projects",
      bullets: [
        "Access to patent-pending technologies",
        "Integration into our Avatar data pipeline",
        "Web3-native options for tracking, rewards, or data contribution",
        "Flexible, structured licensing via MEDX",
      ],
      features: [
        {
          emoji: "🏭",
          title: "Pharma & Biotech",
          text: "Use Avataris’s AI to optimize drug + natural compound combinations",
        },
        {
          emoji: "🏛️",
          title: "Government & NGO Collaborations",
          text: "Deploy localized wellness models, Avatar-based care, or disease-prevention apps",
        },
        {
          emoji: "💼",
          title: "Digital Health Startups",
          text: "License Avataris APIs or integrate into M1 Super App for instant scalability",
        },
        {
          emoji: "🔬",
          title: "Academic & Research Partners",
          text: "Access to anonymized data pools for training, discovery, and validation",
        },
      ],
    },
  ];
  const [active, setActive] = useState(tabs[0].key);

  const panelRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    tabs.forEach((tab, idx) => {
      const el = panelRefs.current[idx];
      if (!el) return;

      // Trigger when the panel crosses 60% down the viewport (for smoother dwell)
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(tab.key);
          }
        },
        {
          root: null,
          rootMargin: "-60% 0px -40% 0px", // wait until top is lower on screen
          threshold: 0,
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return (
    <div className="min-h-screen " style={{ backgroundColor: "#03090E" }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4">
        <header className="absolute top-10 left-20 right-0 p-6">
          <div className="flex items-center">
            <Image src={logoavatarise} alt="logo" />
          </div>
        </header>

        <section className="relative flex flex-col items-center justify-center h-screen z-10 mb-3">
          <div
            className="rounded-full absolute"
            style={{
              width: "800px",
              height: "800px",
              border: "1px solid gray",
              opacity: 0.1,
            }}
          />
          <div
            className="rounded-full absolute"
            style={{
              width: "600px",
              height: "600px",
              border: "1px dashed gray",
              opacity: 0.15,
            }}
          />
          <div
            className="rounded-full absolute"
            style={{
              width: "300px",
              height: "300px",
              border: "1px solid #FFFFFF",
              opacity: 0.2,
            }}
          />

          <div
            className="rounded-full absolute"
            style={{
              width: "734px",
              height: "734px",
              backgroundColor: "#534896",
              filter: "blur(300px)",
            }}
          />

          <div
            className="rounded-full absolute"
            style={{
              width: "224px",
              height: "224px",
              backgroundColor: "#1BD1DB",
              filter: "blur(200px)",
            }}
          />

          {/* <div className="relative text-center max-w-6xl mx-auto px-4"> */}
          <div className="relative text-center max-w-6xl mx-auto px-4 opacity-0 animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-[#112A3B4D] backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/20">
                A New Era of Intelligence in Medicine
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight">
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

            <p className="text-white/60 text-lg mb-12 max-w-md mx-auto">
              Description here, for SEO
            </p>

            <button className="cursor-pointer bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 transform">
              Join Now
            </button>
          </div>

          <div className="absolute bottom-12  left-0 right-0">
            <div className="text-center">
              <p className="text-white/80 text-sm mb-9">
                Trusted by leading biotech companies worldwide
              </p>
              <div className="flex justify-between items-center space-x-12 opacity-60">
                <Image
                  src={photoshelter}
                  alt="PhotoShelter"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src={kopi}
                  alt="copy.ai"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src={flatfile}
                  alt="Flatfile"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src={ailabs}
                  alt="AI21labs"
                  width={120}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src={sales}
                  alt="SALESHOOP"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Mission Section */}

      <section
        className="relative py-16 px-4 sm:px-6 lg:px-8 z-5"
        style={{ backgroundColor: "#03090E", height: "600px" }}
      >
        <div
          className="max-w-6xl mx-auto rounded-2xl h-[400px] p-8 flex flex-col md:flex-row items-center relative"
          style={{ backgroundColor: "#011D35" }}
        >
          {/* Text Content */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-2xl md:text-4xl lg:text-[35px] font-normal leading-tight">
              Our mission is to bridge the gap between innovation and
              accessibility — using artificial intelligence, blockchain, and{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 54.17%, #71AECE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                biology to personalize health and wellness at scale.
              </span>
            </h2>
          </div>

          {/* Image Container */}
          <div className="md:w-1/2 relative mt-8 md:mt-0">
            {/* The image is pulled up above the card - responsive positioning */}
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

      <section className="bg-[#03090E] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-4xl font-semibold mb-12">
            Why “Healthy” Advice
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
              Doesn’t Work Anymore
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Individuals Card */}
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

            {/* Practitioners Card */}
            <div className="flex-1 border border-[#534896] rounded-2xl p-6">
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

      <section className="relative  py-16 px-4 sm:px-6 lg:px-8">
        {/* Background blur circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="rounded-full"
            style={{
              width: "510px",
              height: "510px",
              backgroundColor: "#30BED44D",
              filter: "blur(150px)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl font-semibold mb-12">Our Solution</h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0">
            {/* Left Column Cards */}
            <div className="flex flex-col space-y-8">
              <div className="bg-[#07131D] rounded-2xl p-6 w-64 text-left ">
                AI-driven Avatar that evolves
                <br />
                with your health inputs
              </div>
              <div className="bg-[#07131D] rounded-2xl p-6 w-64 text-left ">
                Tailored wellness plans and
                <br />
                adaptive recommendations
              </div>
              <div className="bg-[#07131D] rounded-2xl p-6 w-64 text-left ">
                Full ownership and optional
                <br />
                monetization of health data
              </div>
            </div>

            {/* Center Skeleton Image */}
            <div className="relative">
              <Image src={skeleton} alt="Skeleton" width={300} height={600} />
            </div>

            {/* Right Column Cards */}
            <div className="flex flex-col space-y-8 ">
              <div className="bg-[#07131D] rounded-2xl p-6 w-64 text-left ">
                AI diagnostic assistant
                <br />
                (MediClinIQ)
              </div>
              <div className="bg-[#07131D] rounded-2xl p-6 w-64 text-left ">
                Personalized treatment plans
                <br />
                (drugs + natural compounds)
              </div>
              <div className="bg-[#07131D] rounded-2xl p-6 w-64 text-left">
                Exportable plans with lifestyle,
                <br />
                nutrition, and supplement guidance
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 z-5">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-4xl font-semibold mb-10">
            Explore the Ecosystem
          </h2>
          <div className="space-y-12">
            {tabs.map((tab, i) => (
              // 1) Attach a ref to each top‐level wrapper
              <div
                key={tab.key}
                ref={(el) => {
                  if (el) panelRefs.current[i] = el;
                }}
                className="flex mb-1"
              >
                {/* your left border + label */}
                <div
                  className={`border-l-2 transition-colors duration-500 ${
                    active === tab.key ? "border-[#534896]" : "border-gray-600"
                  }`}
                />
                <div className="ml-6 w-full">
                  <button
                    onClick={() => setActive(tab.key)}
                    className={`text-2xl font-semibold mb-4 block transition-colors duration-200 ${
                      active === tab.key
                        ? "text-white"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>

                  {/* 2) The exact same collapse logic you had */}
                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out ${
                      active === tab.key
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                          <span className="inline-block px-4 py-2 mb-4 bg-[#112A3B] backdrop-blur-sm rounded-full text-white/80 border border-[#112A3B]/15">
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
                            src={food}
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
                                <span className="text-2xl mr-3">{f.emoji}</span>
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
                  </div>
                  {/* end collapse */}
                </div>
              </div>
            ))}
          </div>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                M1 Super App
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-300 leading-tight">
                Central Command
                <br />
                for a Health AI Ecosystem
              </h3>
            </div>

            {/* Right Column */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={phone}
                alt="M1 Super App phone"
                width={350}
                height={700}
                className="relative z-20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl font-semibold">Meet the Team Driving</h2>
          <h3 className="text-3xl text-blue-300 mb-12">Avataris AI Forward</h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6"
                style={{
                  background:
                    "linear-gradient(107.08deg, #0C1D2A 0.54%, #03090E 99.46%)",
                  border: "1px solid #14435433",
                }}
              >
                <div className="w-full h-40  rounded mb-4 overflow-hidden flex items-center justify-center">
                  <Image
                    src={NN}
                    alt={member.name}
                    width={150}
                    height={200}
                    className="object-cover h-[200px]"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 h-[800px]">
        {/* 1) Full-bleed Earth */}
        <div className="absolute inset-0">
          <Image
            src={earth}
            alt="Earth from space"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* 2) Cyan blur top-left */}
        <div
          className="
          absolute top-0 left-1/4
          w-72 h-72
          bg-[#1BD1DB] rounded-full
          filter blur-3xl
          opacity-50
        "
        />

        {/* 3) Purple blur bottom-right */}
        <div
          className="
          absolute bottom-0 right-1/3
          w-96 h-96
          bg-[#534896] rounded-full
          filter blur-3xl
          opacity-50
        "
        />

        {/* 4) Centered headline */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Join Us in Shaping the Future of
            <br />
            <span className="bg-gradient-to-r from-white to-[#1BD1DB] bg-clip-text text-transparent">
              Intelligence in Medicine
            </span>
          </h2>
        </div>
      </section>

      <footer className=" text-gray-300">
        {/* Spacer above line */}
        <div className="pt-8" />

        {/* Centered purple line */}
        <div className="flex justify-center">
          <div className="w-[1000px] h-px bg-[#534896]" />
        </div>

        {/* Disclaimer toggle, centered */}
        <div className="flex justify-center px-4 py-4">
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="flex items-center space-x-2 text-sm hover:text-white focus:outline-none"
          >
            <span className="underline">Disclaimer</span>
            <span className="text-xl leading-none">{isOpen ? "−" : "+"}</span>
          </button>
        </div>

        {/* Expandable disclaimer content */}
        <div
          className={
            `max-w-7xl mx-auto px-4 overflow-hidden transition-all duration-300 ease-in-out ` +
            (isOpen ? "max-h-[800px] py-4" : "max-h-0")
          }
        >
          <p className="text-sm leading-relaxed mb-4">
            This presentation is provided for informational and discussion
            purposes only. It is not intended to constitute, and does not
            constitute, an offer to sell or the solicitation of an offer to buy
            any securities, financial instruments, or digital assets in any
            jurisdiction. No portion of this presentation shall be relied upon
            in connection with any investment decision.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            Avataris AI (a brand operated by Avataris Health Innovations Inc., a
            Canadian corporation) does not create, issue, or sell the MEDX
            token. The MEDX token is created and issued by a separate and
            independent entity, Medix Launch Partners, for use exclusively
            within the Avataris Ecosystem as a utility token. MEDX is not
            intended to function as an investment vehicle or store of value and
            is not offered as a security or financial instrument in any
            jurisdiction.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            All descriptions of token utility are illustrative of current and
            planned platform functionality only.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            The availability of such features may vary based on region,
            regulation, user eligibility, and ongoing platform development. Use
            of MEDX is subject to applicable terms of service and local
            regulations.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            This presentation may reference digital health, AI-powered
            diagnostics, and health-related use cases. Nothing herein should be
            construed as medical advice.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            All medical use cases are subject to local regulatory approval and
            platform compliance with applicable laws, including but not limited
            to HIPAA, PIPEDA, GDPR, and equivalent international standards for
            data protection and privacy. Past performance, product roadmaps, or
            adoption forecasts included in this presentation are not guarantees
            of future results. All statements herein are subject to change
            without notice.
          </p>
          <p className="text-sm leading-relaxed mb-4 font-semibold">
            DO NOT DISTRIBUTE WITHOUT EXPRESS WRITTEN CONSENT
            <br />
            Confidential © Avataris Health Innovations Inc. 2025. All Rights
            Reserved.
          </p>
        </div>

        {/* Bottom row: email and logo block */}
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-start">
          {/* Left: contact email */}
          <div className="text-sm">info@avataris.ai</div>
          <Link href="/privacy" className="text-sm">
            privacy policy
          </Link>
          <Link href="/tearms" className="text-sm">
            tearms of service
          </Link>

          {/* Right: logo, name, slogan, copyright */}
          <div className="text-right space-y-1">
            <div className="flex items-center justify-end space-x-2">
              <Image
                src={logoavatarise}
                alt="AvatarisAI logo"
                width={150}
                height={150}
                className="mb-2"
              />
            </div>
            <div className="text-xs text-gray-400">
              Your Health. Your Data.
              <br />
              Your Avatar.
            </div>
            <div className="text-xs text-gray-400">© 2025 — Copyright</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
