import food from "../../../public/food.png";
import Terry from "../../../public/Terry.png";
import Edwin from "../../../public/Edwin.png";
import Sazzad from "../../../public/Sazzad.png";
import Zoran from "../../../public/Zoran.png";
import Viktor from "../../../public/Viktor.png";
import Anita from "../../../public/Anita.png";
import strategy from "../../../public/strategy.png";

import hands from "../../../public/hands.png";

export const TEAM = [
  {
    name: "Terry O’Hearn",
    role: "CEO, Co-Founder & Strategist",
    desc: "Visionary entrepreneur with a background in public markets, blockchain, and AI-integrated healthcare. Leads strategy, governance, and capital structuring across the Avataris Ecosystem.",
    imageSrc: Terry,
  },
  {
    name: "Edwin Gershom, PhD",
    role: "VP, Strategic Alliances",
    desc: "Health sciences expert with extensive experience in clinical business development. Skilled public speaker and global partnership builder, leading commercial alignment and integrative product strategy.",
    imageSrc: Edwin,
  },
  {
    name: "Dr. Sazzad Hossain, PhD",
    role: "Chief Science Officer",
    desc: "Former Chief Scientist at a publicly listed Canadian tech firm. Specialist in AI model training, algorithmic validation, and translational research in healthcare and drug response prediction.",
    imageSrc: Sazzad,
  },
  {
    name: "Zoran Tadic",
    role: "Chief Technology Officer",
    desc: "Full-stack technologist and Web3 architect. Builder of decentralized systems, enterprise-grade platforms, and real-time machine learning infrastructures. Leads M1 Super App development and AI integration.",
    imageSrc: Zoran,
  },
  {
    name: "Viktor Uzunov",
    role: "Advisor, Web3 Strategy",
    desc: "Blockchain veteran and smart contract advisor. Brings experience from DeFi, token architecture, and DAO governance, ensuring Avataris AI’s Web3 stack is scalable and secure.",
    imageSrc: Viktor,
  },
  {
    name: "Anita Permata Sari",
    role: "KOL & Digital Communications Strategist",
    desc: "Actively leading influencer and marketing strategies since 2019, with a foundation as a TV Host, actress and digital creator since2014. Specializes in building brand value through KOL management and bridging brands with impactful voices to drive growth and engagement.",
    imageSrc: Anita,
  },
];

export const TABS = [
  {
    key: "nutri",
    label: "NutriSync",
    badge: "The AI-Driven Wellness App for the World",
    heading: "NutriSync",
    image: food,
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
    image: strategy,
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
    image: hands,
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

export const NAV_ITEMS = ["Media", "Investors"];
