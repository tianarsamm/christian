"use client";
import { useEffect, useRef, useState } from "react";

const projects = [

  {
    index: "01",
    name: "SIPTAX",
    fullName: "Sistem Perhitungan Pajak",
    description: "A comprehensive tax calculation system built for accuracy and efficiency in managing Indonesian tax obligations.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    stackIcons: [
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ],
    color: "#a78bfa",
    type: "Web App",
    image: "/project/7.png",
    demo: "https://siptax.vercel.app/",
  },
  {
    index: "02",
    name: "Embelish Flower",
    fullName: "Flower Shop Website",
    description: "An elegant e-commerce storefront for a flower boutique with smooth browsing and ordering experience.",
    stack: ["Next.js", "TypeScript", "JavaScript", "CSS"],
    stackIcons: [
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { label: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    color: "#f472b6",
    type: "E-Commerce",
    image: "/project/1.png",
    demo: "https://embelishflower.vercel.app/",
  },
  {
    index: "03",
    name: "Sanpio 62",
    fullName: "Batch Landing Page",
    description: "A vibrant landing page representing an academic batch, built to commemorate shared memories and achievements.",
    stack: ["Next.js", "TypeScript", "JavaScript", "CSS"],
    stackIcons: [
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { label: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    color: "#61dafb",
    type: "Landing Page",
    image: "/project/3.png",
    demo: "https://sanpio62.vercel.app/",
  },
  {
    index: "04",
    name: "Skytopup",
    fullName: "Game Top-Up Platform",
    description: "A fast and intuitive platform for purchasing in-game credits across multiple popular mobile and PC titles.",
    stack: ["Next.js", "TypeScript", "JavaScript", "CSS"],
    stackIcons: [
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { label: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    color: "#f7df1e",
    type: "Web App",
    image: "/project/5.png",
    demo: "https://skytopup.vercel.app/",
  },
  {
    index: "05",
    name: "Luvia Herbals",
    fullName: "Herbal UMKM Website",
    description: "A clean product showcase website for a local herbal beverage UMKM, designed to grow their online presence.",
    stack: ["Next.js", "TypeScript"],
    stackIcons: [
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
    color: "#3ecf8e",
    type: "Business",
    image: "/project/2.png",
    demo: "https://luviaherbals.my.id/",
  },
  {
    index: "06",
    name: "MyProfil",
    fullName: "Personal Profile Website",
    description: "A personal portfolio and profile site that expresses identity, skills, and work in a cohesive digital space.",
    stack: ["Next.js", "TypeScript", "JavaScript", "CSS"],
    stackIcons: [
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { label: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    color: "#fb923c",
    type: "Portfolio",
    image: "/project/6.png",
    demo: "https://myprofil-ashy.vercel.app/",
  },
  {
    index: "07",
    name: "Veluxa Studio",
    fullName: "Creative Agency Website",
    description: "The official website for Veluxa Studio, showcasing digital services, portfolio, and brand identity.",
    stack: ["Next.js", "TypeScript", "JavaScript", "CSS"],
    stackIcons: [
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { label: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    color: "#38bdf8",
    type: "Agency",
    image: "/project/4.png",
    demo: "https://veluxa-studio.vercel.app/",
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const handleLeave = () => setMousePos({ x: -999, y: -999 });
    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        .proj-section {
          position: relative;
          padding: 120px 80px;
          background: #0a0a0a;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .proj-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4; pointer-events: none; z-index: 0;
        }
        .proj-grid-lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }
        .proj-cursor-glow {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%);
          pointer-events: none; transform: translate(-50%, -50%);
          transition: left 0.08s ease, top 0.08s ease; z-index: 0;
        }
        .proj-bg-number {
          position: absolute; right: 60px; top: 60px;
          font-family: 'Bebas Neue', sans-serif; font-size: 180px;
          color: rgba(255,255,255,0.015); line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }

        .proj-content { position: relative; z-index: 1; }

        .proj-top-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(59,130,246,0.4), rgba(255,255,255,0.06), transparent);
          margin-bottom: 72px;
        }

        .proj-header {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 64px;
        }

        .proj-eyebrow {
          display: flex; align-items: center; gap: 10px; margin-bottom: 24px;
          opacity: 0; transform: translateX(-16px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .proj-eyebrow.vis { opacity: 1; transform: translateX(0); }
        .proj-eline { width: 28px; height: 1px; background: #3b82f6; }
        .proj-etxt { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #3b82f6; font-weight: 500; }

        .proj-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 6vw, 88px);
          line-height: 0.88; color: #fff; margin-bottom: 0;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .proj-heading.vis { opacity: 1; transform: translateY(0); }
        .proj-heading em {
          display: block; font-style: normal; color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.18);
        }

        .proj-desc {
          font-size: 15px; font-weight: 300; color: #555; line-height: 1.8;
          border-left: 2px solid #3b82f6; padding-left: 20px;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;
        }
        .proj-desc.vis { opacity: 1; transform: translateY(0); }
        .proj-desc strong { color: #999; font-weight: 400; }

        /* SCROLL WRAPPER */
        .proj-scroll-outer {
          position: relative;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .proj-scroll-outer.vis { opacity: 1; transform: translateY(0); }

        /* Fade edges */
        .proj-scroll-outer::before,
        .proj-scroll-outer::after {
          content: '';
          position: absolute; top: 0; bottom: 0; width: 80px;
          pointer-events: none; z-index: 2;
        }
        .proj-scroll-outer::before {
          left: 0;
          background: linear-gradient(90deg, #0a0a0a, transparent);
        }
        .proj-scroll-outer::after {
          right: 0;
          background: linear-gradient(-90deg, #0a0a0a, transparent);
        }

        .proj-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 2px;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 4px;
          background: rgba(255,255,255,0.05);
        }
        .proj-track::-webkit-scrollbar { display: none; }

        /* NAV ARROWS */
        .proj-nav {
          display: flex; gap: 8px; align-items: center;
          margin-bottom: 20px; justify-content: flex-end;
        }
        .proj-nav-btn {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px; cursor: pointer;
          color: #555;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .proj-nav-btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          background: rgba(59,130,246,0.06);
        }
        .proj-nav-btn svg { width: 14px; height: 14px; }

        /* SCROLL PROGRESS */
        .proj-progress {
          margin-top: 20px;
          height: 1px;
          background: rgba(255,255,255,0.06);
          border-radius: 1px;
          overflow: hidden;
        }
        .proj-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, rgba(59,130,246,0.3));
          border-radius: 1px;
          transition: width 0.15s ease;
        }

        /* CARD */
        .proj-card {
          background: #0a0a0a;
          display: flex; flex-direction: column;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
          scroll-snap-align: start;
          flex-shrink: 0;
          width: 320px;
        }
        .proj-card:hover { background: rgba(255,255,255,0.025); }

        /* Color bar on hover */
        .proj-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 1px;
          background: var(--proj-color, #3b82f6);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          z-index: 2;
        }
        .proj-card:hover::before { transform: scaleX(1); }

        .proj-thumbnail {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: #111;
          position: relative;
          flex-shrink: 0;
        }
        .proj-thumb-img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: grayscale(30%) brightness(0.85);
          transition: filter 0.4s ease, transform 0.5s ease;
        }
        .proj-card:hover .proj-thumb-img {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.04);
        }
        .proj-thumb-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 60%);
          pointer-events: none;
        }
        .proj-thumb-num {
          position: absolute; top: 12px; left: 14px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.35);
          z-index: 1;
        }

        .proj-body {
          padding: 20px 20px 18px;
          display: flex; flex-direction: column; flex: 1;
          gap: 9px;
        }

        .proj-type-badge {
          display: inline-flex; align-items: center;
          padding: 3px 9px;
          border-radius: 2px;
          font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase;
          font-weight: 500; width: fit-content;
        }

        .proj-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px; line-height: 1;
          color: #fff;
        }
        .proj-fullname {
          font-size: 11px; color: #444; font-weight: 300;
          letter-spacing: 0.04em;
          margin-top: -4px;
        }

        .proj-description {
          font-size: 12px; color: #555; font-weight: 300; line-height: 1.7;
        }

        /* STACK ICONS */
        .proj-stack {
          display: flex; align-items: center; gap: 6px;
          flex-wrap: wrap;
          margin-top: 2px;
        }
        .proj-icon-wrap {
          display: flex; align-items: center; gap: 5px;
          padding: 3px 7px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 3px;
          transition: border-color 0.2s, background 0.2s;
        }
        .proj-card:hover .proj-icon-wrap {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.1);
        }
        .proj-icon {
          width: 12px; height: 12px; object-fit: contain;
          filter: brightness(0.8);
          transition: filter 0.2s;
        }
        .proj-card:hover .proj-icon { filter: brightness(1); }
        .proj-icon-label {
          font-size: 9px; letter-spacing: 0.1em;
          color: #444; font-weight: 500;
          transition: color 0.2s;
        }
        .proj-card:hover .proj-icon-label { color: #666; }

        /* DEMO BUTTON */
        .proj-footer {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: auto; padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .proj-demo-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 14px;
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
          font-weight: 500;
          color: #fff;
          background: none;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.25s, background 0.25s, color 0.25s;
        }
        .proj-demo-btn:hover {
          border-color: var(--proj-color, #3b82f6);
          background: rgba(59,130,246,0.08);
          color: var(--proj-color, #3b82f6);
        }
        .proj-demo-arrow {
          width: 11px; height: 11px;
          transition: transform 0.2s;
        }
        .proj-demo-btn:hover .proj-demo-arrow { transform: translate(2px, -2px); }

        .proj-bottom-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          margin-top: 80px;
        }

        @media (max-width: 768px) {
          .proj-section { padding: 80px 24px; }
          .proj-header { grid-template-columns: 1fr; gap: 32px; }
          .proj-card { width: 280px; }
          .proj-bg-number { display: none; }
        }
      `}</style>

      <section className="proj-section" ref={ref}>
        <div className="proj-noise" />
        <div className="proj-grid-lines" />
        <div
          className="proj-cursor-glow"
          style={{ left: mousePos.x, top: mousePos.y }}
        />
        <div className="proj-bg-number">05</div>

        <div className="proj-content">
          <div className="proj-top-line" />

          {/* HEADER */}
          <div className="proj-header">
            <div>
              <div className={`proj-eyebrow ${visible ? "vis" : ""}`}>
                <div className="proj-eline" />
                <span className="proj-etxt">Selected Works</span>
              </div>
              <div className={`proj-heading ${visible ? "vis" : ""}`}>
                <em>What</em>
                I've Built.
              </div>
            </div>
            <div className={`proj-desc ${visible ? "vis" : ""}`}>
              A collection of <strong>7 projects</strong> spanning web applications, e-commerce, landing pages, and digital products — each crafted with care and purpose.
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="proj-nav">
            <button
              className="proj-nav-btn"
              onClick={() => {
                const track = document.querySelector('.proj-track');
                if (track) track.scrollBy({ left: -340, behavior: 'smooth' });
              }}
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="proj-nav-btn"
              onClick={() => {
                const track = document.querySelector('.proj-track');
                if (track) track.scrollBy({ left: 340, behavior: 'smooth' });
              }}
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* PROJECT SCROLL */}
          <div className={`proj-scroll-outer ${visible ? "vis" : ""}`}>
            <div className="proj-track">
              {projects.map((project, i) => (
                <div
                  key={project.index}
                  className={`proj-card ${i === 0 ? "featured" : ""}`}
                  style={{ "--proj-color": project.color } as React.CSSProperties}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Thumbnail */}
                  <div className="proj-thumbnail">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="proj-thumb-img"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="proj-thumb-overlay" />
                    <div className="proj-thumb-num">{project.index}</div>

                    {/* Fallback gradient if image missing */}
                    <div
                      style={{
                        position: "absolute", inset: 0,
                        background: `linear-gradient(135deg, ${project.color}12 0%, transparent 70%)`,
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Body */}
                  <div className="proj-body">
                    <div
                      className="proj-type-badge"
                      style={{
                        background: `${project.color}18`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {project.type}
                    </div>

                    <div className="proj-name">{project.name}</div>
                    <div className="proj-fullname">{project.fullName}</div>
                    <div className="proj-description">{project.description}</div>

                    {/* Tech Stack */}
                    <div className="proj-stack">
                      {project.stackIcons.map((tech) => (
                        <div className="proj-icon-wrap" key={tech.label}>
                          <img
                            src={tech.icon}
                            alt={tech.label}
                            className="proj-icon"
                          />
                          <span className="proj-icon-label">{tech.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="proj-footer">
                      <a
                        href={project.demo}
                        className="proj-demo-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <svg
                          className="proj-demo-arrow"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M2 10L10 2M10 2H4M10 2V8" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="proj-bottom-line" />
        </div>
      </section>
    </>
  );
}