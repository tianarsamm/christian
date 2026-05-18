"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "Chairman",
    org: "Dewan Perwakilan Mahasiswa (DPM) Satyadhara",
    company: "Primakara University",
    period: "2025 – Present",
    type: "Leadership",
    index: "01",
    color: "#a78bfa",
    points: [
      "Lead the student legislative body overseeing representation & oversight.",
      "Drive strategic decisions and evaluate student org performance.",
      "Represent student voices in campus-wide communication forums.",
    ],
  },
  {
    role: "Founder",
    org: "Veluxa Studio",
    company: "Veluxa Studio",
    period: "2025 – Present",
    type: "Entrepreneurship",
    index: "02",
    color: "#61dafb",
    points: [
      "Founded a digital studio focused on creative & product solutions.",
      "Build websites and digital products tailored to client needs.",
      "Manage full project lifecycle from scoping to deployment.",
    ],
  },
  {
    role: "Product & Dev Member",
    org: "Manajerku.id",
    company: "Manajerku.id",
    period: "2025 – Present",
    type: "Product",
    index: "03",
    color: "#3ecf8e",
    points: [
      "Contribute to web-based feature development for UMKM solutions.",
      "Collaborate on product improvements and system efficiency.",
      "Implement scalable, user-friendly tech for small businesses.",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Independent",
    company: "Self-employed",
    period: "2024 – Present",
    type: "Freelance",
    index: "04",
    color: "#f7df1e",
    points: [
      "Build modern web apps with React, Next.js, and Supabase.",
      "Develop automation systems using Google Apps Script.",
      "Handle deployment, maintenance, and performance optimization.",
    ],
  },
];

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const [activeExp, setActiveExp] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
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

  const active = experiences[activeExp];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        .exp-section {
          position: relative;
          padding: 120px 80px;
          background: #0a0a0a;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .exp-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4; pointer-events: none; z-index: 0;
        }
        .exp-grid-lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }
        .exp-cursor-glow {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%);
          pointer-events: none; transform: translate(-50%, -50%);
          transition: left 0.08s ease, top 0.08s ease; z-index: 0;
        }
        .exp-bg-number {
          position: absolute; right: 60px; top: 60px;
          font-family: 'Bebas Neue', sans-serif; font-size: 180px;
          color: rgba(255,255,255,0.015); line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }

        .exp-content { position: relative; z-index: 1; }

        .exp-top-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(59,130,246,0.4), rgba(255,255,255,0.06), transparent);
          margin-bottom: 72px;
        }

        .exp-header {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 64px;
        }

        .exp-eyebrow {
          display: flex; align-items: center; gap: 10px; margin-bottom: 24px;
          opacity: 0; transform: translateX(-16px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .exp-eyebrow.vis { opacity: 1; transform: translateX(0); }
        .exp-eline { width: 28px; height: 1px; background: #3b82f6; }
        .exp-etxt { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #3b82f6; font-weight: 500; }

        .exp-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 6vw, 88px);
          line-height: 0.88; color: #fff; margin-bottom: 0;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .exp-heading.vis { opacity: 1; transform: translateY(0); }
        .exp-heading em {
          display: block; font-style: normal; color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.18);
        }

        .exp-desc {
          font-size: 15px; font-weight: 300; color: #555; line-height: 1.8;
          border-left: 2px solid #3b82f6; padding-left: 20px;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;
        }
        .exp-desc.vis { opacity: 1; transform: translateY(0); }
        .exp-desc strong { color: #999; font-weight: 400; }

        /* TABS */
        .exp-tabs {
          display: flex; gap: 0; margin-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          opacity: 0; transition: opacity 0.6s ease 0.4s;
          overflow-x: auto;
        }
        .exp-tabs.vis { opacity: 1; }
        .exp-tab {
          display: flex; flex-direction: column; gap: 2px;
          padding: 12px 24px; cursor: pointer; white-space: nowrap;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
          background: none; border-top: none; border-left: none; border-right: none;
          font-family: 'DM Sans', sans-serif;
          text-align: left;
          margin-bottom: -1px;
        }
        .exp-tab-role {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          color: #3a3a3a; font-weight: 500;
          transition: color 0.2s;
        }
        .exp-tab-company {
          font-size: 10px; color: #2a2a2a;
          transition: color 0.2s;
        }
        .exp-tab:hover .exp-tab-role { color: #888; }
        .exp-tab:hover .exp-tab-company { color: #555; }
        .exp-tab.active { border-bottom-color: #3b82f6; }
        .exp-tab.active .exp-tab-role { color: #fff; }
        .exp-tab.active .exp-tab-company { color: #555; }

        /* MAIN CARD */
        .exp-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 4px;
          overflow: hidden;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .exp-card.vis { opacity: 1; transform: translateY(0); }

        .exp-card-left {
          padding: 36px 32px;
          background: #0a0a0a;
          display: flex; flex-direction: column; gap: 20px;
        }
        .exp-card-right {
          padding: 36px 32px;
          background: rgba(255,255,255,0.01);
          display: flex; flex-direction: column; gap: 16px;
        }

        .exp-type-badge {
          display: inline-flex; align-items: center;
          padding: 4px 10px;
          border-radius: 2px;
          font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase;
          font-weight: 500; width: fit-content;
        }

        .exp-role-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 42px; line-height: 1;
          color: #fff;
        }
        .exp-org-name {
          font-size: 13px; color: #555; font-weight: 300;
          display: flex; flex-direction: column; gap: 4px;
        }
        .exp-org-name span { color: #888; }
        .exp-period {
          display: flex; align-items: center; gap: 8px;
          font-size: 11px; color: #3b82f6; letter-spacing: 0.1em;
        }
        .exp-period::before {
          content: ''; display: block;
          width: 20px; height: 1px; background: #3b82f6;
        }

        .exp-points-title {
          font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase;
          color: #3a3a3a; font-weight: 500; margin-bottom: 4px;
        }
        .exp-point {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .exp-point:last-child { border-bottom: none; }
        .exp-point-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px; color: #2a2a2a;
          min-width: 20px; padding-top: 2px;
        }
        .exp-point-text {
          font-size: 13px; color: #666; font-weight: 300; line-height: 1.6;
        }

        /* TIMELINE OVERVIEW */
        .exp-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 4px;
          overflow: hidden;
          margin-top: 48px;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s;
        }
        .exp-timeline.vis { opacity: 1; transform: translateY(0); }

        .exp-tl-item {
          padding: 20px;
          background: rgba(255,255,255,0.01);
          cursor: pointer;
          transition: background 0.2s;
        }
        .exp-tl-item:hover { background: rgba(255,255,255,0.03); }
        .exp-tl-item.active { background: rgba(255,255,255,0.03); }

        .exp-tl-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px; color: #3b82f6; letter-spacing: 0.1em;
          margin-bottom: 8px;
        }
        .exp-tl-role {
          font-size: 12px; color: #ccc; font-weight: 500;
          margin-bottom: 4px; line-height: 1.3;
        }
        .exp-tl-org {
          font-size: 11px; color: #444; font-weight: 300;
          margin-bottom: 8px;
        }
        .exp-tl-bar {
          width: 100%; height: 1px;
          background: rgba(255,255,255,0.06);
          position: relative; overflow: visible;
        }
        .exp-tl-dot {
          width: 5px; height: 5px; border-radius: 50%;
          margin-top: -2px;
        }

        .exp-bottom-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          margin-top: 80px;
        }

        @media (max-width: 900px) {
          .exp-section { padding: 80px 24px; }
          .exp-header { grid-template-columns: 1fr; gap: 32px; }
          .exp-card { grid-template-columns: 1fr; }
          .exp-timeline { grid-template-columns: 1fr 1fr; }
          .exp-bg-number { display: none; }
        }
        @media (max-width: 600px) {
          .exp-timeline { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="exp-section" ref={ref}>
        <div className="exp-noise" />
        <div className="exp-grid-lines" />
        <div className="exp-cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />
        <div className="exp-bg-number">04</div>

        <div className="exp-content">
          <div className="exp-top-line" />

          {/* HEADER */}
          <div className="exp-header">
            <div>
              <div className={`exp-eyebrow ${visible ? "vis" : ""}`}>
                <div className="exp-eline" />
                <span className="exp-etxt">Work & Experience</span>
              </div>
              <div className={`exp-heading ${visible ? "vis" : ""}`}>
                <em>What</em>
                I've Done.
              </div>
            </div>
            <div className={`exp-desc ${visible ? "vis" : ""}`}>
              Roles spanning <strong>leadership</strong>, product development, entrepreneurship, and freelance work — each one sharpening a different edge.
            </div>
          </div>

          {/* TABS */}
          <div className={`exp-tabs ${visible ? "vis" : ""}`}>
            {experiences.map((exp, i) => (
              <button
                key={exp.index}
                className={`exp-tab ${activeExp === i ? "active" : ""}`}
                onClick={() => setActiveExp(i)}
              >
                <span className="exp-tab-role">{exp.role}</span>
                <span className="exp-tab-company">{exp.company}</span>
              </button>
            ))}
          </div>

          {/* MAIN CARD */}
          <div className={`exp-card ${visible ? "vis" : ""}`}>
            <div className="exp-card-left">
              <div
                className="exp-type-badge"
                style={{ background: `${active.color}18`, color: active.color, border: `1px solid ${active.color}30` }}
              >
                {active.type}
              </div>
              <div className="exp-role-title">{active.role}</div>
              <div className="exp-org-name">
                <span>{active.org}</span>
                {active.company !== active.org && active.company}
              </div>
              <div className="exp-period">{active.period}</div>
            </div>
            <div className="exp-card-right">
              <div className="exp-points-title">Key Contributions</div>
              {active.points.map((point, i) => (
                <div className="exp-point" key={i}>
                  <span className="exp-point-num">0{i + 1}</span>
                  <span className="exp-point-text">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE OVERVIEW */}
          <div className={`exp-timeline ${visible ? "vis" : ""}`}>
            {experiences.map((exp, i) => (
              <div
                key={exp.index}
                className={`exp-tl-item ${activeExp === i ? "active" : ""}`}
                onClick={() => setActiveExp(i)}
              >
                <div className="exp-tl-num">{exp.index}</div>
                <div className="exp-tl-role">{exp.role}</div>
                <div className="exp-tl-org">{exp.company} · {exp.period}</div>
                <div className="exp-tl-bar">
                  <div
                    className="exp-tl-dot"
                    style={{ background: activeExp === i ? exp.color : "#2a2a2a" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="exp-bottom-line" />
        </div>
      </section>
    </>
  );
}