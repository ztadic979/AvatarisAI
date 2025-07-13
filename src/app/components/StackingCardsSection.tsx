"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { TABS } from "../mockData/mockData";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Observer);
}

export function StackingCardsSection() {
  const [active, setActive] = useState("nutrisync");
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const observerRef = useRef<unknown>(null);

  // Function to update active state based on timeline progress
  const updateActiveState = (progress: number) => {
    const labels = ["nutrisync", "medicliniq", "strategic"];
    let newActive = labels[0];

    // Adjust thresholds to be more responsive to scroll up
    if (progress >= 0.7) {
      newActive = labels[2]; // strategic
    } else if (progress >= 0.3) {
      newActive = labels[1]; // medicliniq
    } else {
      newActive = labels[0]; // nutrisync
      setActive(labels[0]); // Force update for first card
    }

    if (newActive !== active) {
      setActive(newActive);
    }
  };

  const handleClick = (key: string) => {
    // Mobile version - simple state change
    setActive(key);
  };

  useEffect(() => {
    if (!sectionRef.current || !panelRefs.current[0]) return;

    const panels = panelRefs.current.filter(Boolean);
    let animating = false;
    const time = 0.5;

    // Set initial positions for stacking effect
    gsap.set(panels, {
      y: 0,
      x: 0,
      width: "100%",
      height: "100%",
      transformOrigin: "center top",
      position: "absolute",
      top: 0,
      left: 0,
    });

    // Set initial z-index
    panels.forEach((panel, index) => {
      if (panel) {
        gsap.set(panel, { zIndex: index + 1 });
      }
    });

    // Create the timeline
    const tl = gsap.timeline({
      paused: true,
      onUpdate: function () {
        // Update active state based on timeline progress
        updateActiveState(this.progress());
      },
    });
    tlRef.current = tl;

    // Timeline setup
    tl.add("card1");
    tl.set({}, {}, 0);

    // Card 1 to Card 2
    tl.add("card2");
    tl.to(panels[0], {
      scale: 0.85,
      duration: time,
      ease: "power2.inOut",
    });
    tl.set(panels[1], { zIndex: 20 });
    tl.from(
      panels[1],
      {
        y: () => window.innerHeight,
        duration: time,
        ease: "power2.inOut",
      },
      "<"
    );

    // Card 2 to Card 3
    tl.add("card3");
    tl.to(panels[1], {
      scale: 0.9,
      duration: time,
      ease: "power2.inOut",
    });
    tl.set(panels[2], { zIndex: 30 });
    tl.from(
      panels[2],
      {
        y: () => window.innerHeight,
        duration: time,
        ease: "power2.inOut",
      },
      "<"
    );

    tl.add("card4");

    function tweenToLabel(direction: string | null, isScrollingDown: boolean) {
      if (
        (!tl.nextLabel() && isScrollingDown) ||
        (!tl.previousLabel() && !isScrollingDown)
      ) {
        if (observerRef.current) {
          // @ts-expect-error not lib type
          observerRef.current.disable();
        }
        return;
      }

      if (!animating && direction) {
        animating = true;

        tl.tweenTo(direction, {
          onComplete: () => {
            animating = false;
          },
        });
      }
    }

    // Observer plugin for scroll control
    const cardsObserver = Observer.create({
      wheelSpeed: -1,
      onDown: () => tweenToLabel(tl.previousLabel(), false),
      onUp: () => tweenToLabel(tl.nextLabel(), true),
      tolerance: 10,
      preventDefault: true,
      onEnable(self: any) {
        const savedScroll = self.scrollY();
        self._restoreScroll = () => self.scrollY(savedScroll);
        document.addEventListener("scroll", self._restoreScroll, {
          passive: false,
        });
      },
      onDisable: (self: any) => {
        if (self._restoreScroll) {
          document.removeEventListener("scroll", self._restoreScroll);
        }
      },
    });

    observerRef.current = cardsObserver;
    cardsObserver.disable();

    // ScrollTrigger to pin section and enable Observer (desktop only)
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: "+=100vh",
        onEnter: () => {
          if (!cardsObserver.isEnabled) {
            cardsObserver.enable();
          }
        },
        onEnterBack: () => {
          if (!cardsObserver.isEnabled) {
            cardsObserver.enable();
          }
        },
        onLeave: () => {
          if (cardsObserver.isEnabled) {
            cardsObserver.disable();
          }
        },
        onLeaveBack: () => {
          if (cardsObserver.isEnabled) {
            cardsObserver.disable();
          }
        },
      });
    });

    return () => {
      if (observerRef.current) {
        // @ts-expect-error not lib type
        observerRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []);

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

        {/* Desktop Version with Stacking Cards */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[600px]">
            {/* Stacking cards - clean and smooth */}
            <div className="relative w-full h-full">
              {TABS.map((tab, i) => (
                <div
                  key={tab.key}
                  ref={(el) => {
                    if (el) panelRefs.current[i] = el;
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="w-full h-full bg-[#07131D] backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0 h-full">
                      {/* Left Column */}
                      <div className="p-8 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-4 py-2 mb-4 bg-[#112A3B] backdrop-blur-sm rounded-full text-white/80 border border-[#FFFFFF]/15">
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
                          <ul className="list-disc list-inside text-gray-300 text-[16px] space-y-2 mb-6">
                            {tab.bullets.map((b, j) => (
                              <li key={j}>{b}</li>
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

                      {/* Right Column */}
                      <div className="p-6 overflow-y-auto">
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
              ))}
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Version */}
        <section className="block lg:hidden py-6 px-2">
          {/* Horizontal tab list */}
          <div className="overflow-x-auto whitespace-nowrap pb-2 -mx-4 px-4">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleClick(tab.key)}
                className={`
                  inline-block px-3 pb-1 mr-1
                  text-sm font-medium
                  border-b-2
                  mb-5
                  transition-colors duration-200
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

          {/* Active tab content */}
          <div className="overflow-hidden transition-all duration-300 ease-in-out">
            <div className="max-w-none">
              {TABS.filter((tab) => tab.key === active).map((tab) => (
                <div
                  key={tab.key}
                  className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-300"
                >
                  <span className="inline-block px-3 py-1 bg-[#112A3B] backdrop-blur-sm rounded-full text-white/80 border border-[#FFFFFF]/15">
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
                  <ul className="list-disc list-inside text-gray-300 text-[16px] space-y-1">
                    {tab.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
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
  );
}
