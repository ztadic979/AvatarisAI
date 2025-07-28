"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { TABS } from "../mockData/mockData";

// Register GSAP plugin on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function StackingCardsSection() {
  const [active, setActive] = useState<string>(TABS[0].key);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Update active state based on scroll progress
  const updateActiveState = (progress: number) => {
    const labels = TABS.map((tab) => tab.key);
    let newActive = labels[0];
    if (progress >= 0.7) newActive = labels[2];
    else if (progress >= 0.3) newActive = labels[1];
    if (newActive !== active) setActive(newActive);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || panels.length === 0) return;

    // Initial styling for desktop stacking
    gsap.set(panels, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transformOrigin: "center top",
    });
    panels.forEach((panel, i) => gsap.set(panel, { zIndex: i + 1 }));

    // Use matchMedia to apply ScrollTrigger only on desktop
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({ paused: true });
      tl.add("nutrisync");
      tl.to(panels[0], { scale: 0.85, duration: 0.5, ease: "power2.inOut" });

      tl.add("medicliniq");
      tl.set(panels[1], { zIndex: panels.length + 1 });
      tl.from(
        panels[1],
        { y: () => window.innerHeight, duration: 0.5, ease: "power2.inOut" },
        "<"
      );

      tl.add("strategic");
      tl.to(panels[1], { scale: 0.9, duration: 0.5, ease: "power2.inOut" });
      tl.set(panels[2], { zIndex: panels.length + 2 });
      tl.from(
        panels[2],
        { y: () => window.innerHeight, duration: 0.5, ease: "power2.inOut" },
        "<"
      );

      const trigger = ScrollTrigger.create({
        animation: tl,
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * panels.length}`,
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 0.5 },
          ease: "power2.out",
        },
        onUpdate(self) {
          updateActiveState(self.progress);
        },
      });

      return () => {
        trigger.kill();
        tl.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  const handleClick = (key: string) => setActive(key);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 lg:px-8"
      style={{ scrollSnapType: "y mandatory" }}
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

        {/* Desktop Stacking Cards */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[600px]">
            {TABS.map((tab, idx) => (
              <div
                key={tab.key}
                ref={(el) => {
                  panelRefs.current[idx] = el;
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="w-full h-full bg-[#07131D] backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
                  <div className="grid lg:grid-cols-2 h-full">
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-4 py-2 mb-4 bg-[#112A3B] backdrop-blur-sm rounded-full text-white/80 border border-white/15">
                          {tab.badge}
                        </span>
                        <h3
                          className="text-3xl font-light mb-4"
                          style={{
                            background:
                              "linear-gradient(180deg, #FFFFFF 60%, #71AECE 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {tab.heading}
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                          {tab.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                      <Image
                        src={tab.image}
                        alt={tab.label}
                        width={600}
                        height={300}
                        className="rounded-2xl w-full h-auto"
                      />
                    </div>
                    <div className="p-6 overflow-y-auto">
                      <ul className="space-y-4">
                        {tab.features.map((f, i) => (
                          <li key={i} className="flex items-start">
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
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Tabs without horizontal scroll */}
        <div className="block lg:hidden">
          <div className="flex justify-around mb-6">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleClick(tab.key)}
                className={`flex-1 text-center px-2 pb-1 mx-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  active === tab.key
                    ? "border-[#534896] text-white"
                    : "border-gray-700 text-gray-500 hover:text-white hover:border-gray-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="transition-all duration-300 ease-in-out">
            {TABS.filter((tab) => tab.key === active).map((tab) => (
              <div key={tab.key} className="space-y-4">
                <span className="inline-block px-3 py-1 bg-[#112A3B] backdrop-blur-sm rounded-full text-white/80 border border-white/15">
                  {tab.badge}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-light"
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 60%, #71AECE 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {tab.heading}
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {tab.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <Image
                  src={tab.image}
                  alt={tab.label}
                  width={280}
                  height={150}
                  className="rounded-2xl w-full h-auto"
                />
                <div className="border border-[#144354] rounded-2xl p-4 transition-all duration-200 hover:border-[#144354]/80">
                  <ul className="space-y-3">
                    {tab.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-xl mr-2">{f.emoji}</span>
                        <div>
                          <h4 className="font-medium text-white">{f.title}</h4>
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
      </div>
    </section>
  );
}
