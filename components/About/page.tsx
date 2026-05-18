"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
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

        .about-section {
          position: relative;
          padding: 120px 80px;
          background: #0a0a0a;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .about-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
        }

        .about-grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        .about-cursor-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: left 0.08s ease, top 0.08s ease;
          z-index: 0;
        }

        .about-content {
          position: relative;
          z-index: 1;
        }

        .about-bg-number {
          position: absolute;
          right: 60px;
          top: 60px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 180px;
          color: rgba(255,255,255,0.015);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        .about-top-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(59,130,246,0.4), rgba(255,255,255,0.06), transparent);
          margin-bottom: 72px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }

        .about-left { position: relative; }

        .section-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          opacity: 0;
          transform: translateX(-16px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .section-eyebrow.vis { opacity: 1; transform: translateX(0); }
        .ey-line { width: 28px; height: 1px; background: #3b82f6; }
        .ey-text {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3b82f6;
          font-weight: 500;
        }

        .about-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 6vw, 88px);
          line-height: 0.88;
          color: #fff;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .about-heading.vis { opacity: 1; transform: translateY(0); }
        .about-heading em {
          display: block;
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.18);
        }

        .name-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 4px;
          padding: 20px 24px;
          background: rgba(255,255,255,0.02);
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;
        }
        .name-card.vis { opacity: 1; transform: translateY(0); }
        .name-card-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3b3b3b;
          margin-bottom: 6px;
        }
        .name-card-name { font-size: 16px; color: #d4d4d4; font-weight: 400; letter-spacing: 0.01em; }
        .name-card-sub { font-size: 12px; color: #4a4a4a; margin-top: 4px; font-weight: 300; }
        .name-card-sub span { color: #3b82f6; }

        .left-tags { display: flex; flex-direction: column; gap: 8px; opacity: 0; transition: opacity 0.6s ease 0.5s; }
        .left-tags.vis { opacity: 1; }
        .left-tag-row { display: flex; align-items: center; gap: 10px; }
        .left-tag-dot { width: 4px; height: 4px; border-radius: 50%; background: #3b82f6; flex-shrink: 0; }
        .left-tag-text { font-size: 12px; color: #444; letter-spacing: 0.05em; text-transform: uppercase; }

        .about-right { display: flex; flex-direction: column; gap: 40px; }

        .bio-block { opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s; }
        .bio-block.vis { opacity: 1; transform: translateY(0); }

        .bio-intro {
          font-size: 20px; font-weight: 300; color: #d4d4d4; line-height: 1.6;
          margin-bottom: 20px; border-left: 2px solid #3b82f6; padding-left: 20px;
        }
        .bio-body { font-size: 15px; font-weight: 300; color: #666; line-height: 1.9; }
        .bio-body + .bio-body { margin-top: 12px; }
        .bio-body strong { color: #aaa; font-weight: 400; }

        .divider-fade { height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0.06), transparent); }

        .traits-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 4px; overflow: hidden;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s;
        }
        .traits-grid.vis { opacity: 1; transform: translateY(0); }
        .trait-item { padding: 24px; background: #0a0a0a; transition: background 0.2s; }
        .trait-item:hover { background: rgba(255,255,255,0.025); }
        .trait-icon { font-size: 20px; margin-bottom: 10px; display: block; }
        .trait-label { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #fff; font-weight: 500; margin-bottom: 6px; }
        .trait-desc { font-size: 12px; color: #444; line-height: 1.6; font-weight: 300; }

        .philosophy {
          border: 1px solid rgba(59,130,246,0.15); border-left: 2px solid #3b82f6;
          border-radius: 0 4px 4px 0; padding: 20px 24px; background: rgba(59,130,246,0.03);
          opacity: 0; transform: translateY(16px); transition: opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s;
        }
        .philosophy.vis { opacity: 1; transform: translateY(0); }
        .philosophy-label { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: #3b82f6; margin-bottom: 8px; }
        .philosophy-text { font-size: 14px; color: #888; line-height: 1.7; font-weight: 300; font-style: italic; }
        .philosophy-text strong { color: #bbb; font-style: normal; font-weight: 400; }

        .about-bottom-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          margin-top: 80px;
        }

        @media (max-width: 900px) {
          .about-section { padding: 80px 24px; }
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
          .traits-grid { grid-template-columns: 1fr; }
          .about-bg-number { display: none; }
        }
      `}</style>

      <section id="about" className="about-section" ref={ref}>
        {/* Background layers — same as Hero */}
        <div className="about-noise" />
        <div className="about-grid-lines" />
        <div
          className="about-cursor-glow"
          style={{ left: mousePos.x, top: mousePos.y }}
        />
        <div className="about-bg-number">02</div>

        <div className="about-content">
          <div className="about-top-line" />

          <div className="about-grid">

            {/* LEFT */}
            <div className="about-left">
              <div className={`section-eyebrow ${visible ? "vis" : ""}`}>
                <div className="ey-line" />
                <span className="ey-text">About Me</span>
              </div>

              <div className={`about-heading ${visible ? "vis" : ""}`}>
                <em>Who</em>
                I Am.
              </div>

              <div className={`name-card ${visible ? "vis" : ""}`}>
                <div className="name-card-label">Full Name</div>
                <div className="name-card-name">Syrillus Christiano Putra Arsam</div>
                <div className="name-card-sub">
                  IT Student · <span>Primakara University</span>
                </div>
              </div>

              <div className={`left-tags ${visible ? "vis" : ""}`}>
                {[
                  "Web Development",
                  "Automation Systems",
                  "Digital Innovation",
                  "DPM Satyadhara",
                  "UMKM Tech Solutions",
                ].map((t) => (
                  <div className="left-tag-row" key={t}>
                    <div className="left-tag-dot" />
                    <span className="left-tag-text">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="about-right">
              <div className={`bio-block ${visible ? "vis" : ""}`}>
                <p className="bio-intro">
                  A builder who believes the best technology solves real problems — simply, efficiently, and with lasting impact.
                </p>
                <p className="bio-body">
                  I'm an <strong>Information Technology student</strong> at Primakara University with a deep interest in web development, automation, and digital innovation. I enjoy the process of crafting digital solutions that help businesses, organizations, and individuals work more effectively.
                </p>
                <p className="bio-body" style={{ marginTop: "12px" }}>
                  My projects span <strong>web application development</strong>, automation systems, and technology solutions tailored for local SMEs — bridging the gap between technology and real-world business needs.
                </p>
                <p className="bio-body" style={{ marginTop: "12px" }}>
                  Beyond code, I actively contribute to student life through <strong>DPM Satyadhara</strong>, an experience that has sharpened my communication, leadership, and collaborative skills in meaningful ways.
                </p>
              </div>

              <div className="divider-fade" />

              <div className={`traits-grid ${visible ? "vis" : ""}`}>
                {[
                  { label: "Web Developer", desc: "Building clean, performant web apps from concept to deployment" },
                  { label: "Automation", desc: "Designing systems that streamline repetitive workflows" },
                  { label: "SME Solutions", desc: "Creating tech tailored to local businesses and communities" },
                  { label: "Leader", desc: "Driving initiatives within DPM Satyadhara student organization" },
                ].map((t) => (
                  <div className="trait-item" key={t.label}>
                    {/* <span className="trait-icon">{t.icon}</span> */}
                    <div className="trait-label">{t.label}</div>
                    <div className="trait-desc">{t.desc}</div>
                  </div>
                ))}
              </div>

              <div className={`philosophy ${visible ? "vis" : ""}`}>
                <div className="philosophy-label">Personal Philosophy</div>
                <p className="philosophy-text">
                  "The best technology is the one that solves{" "}
                  <strong>real problems</strong> in the simplest,{" "}
                  most efficient way — and leaves a{" "}
                  <strong>genuine impact</strong> on the people who use it."
                </p>
              </div>
            </div>

          </div>

          <div className="about-bottom-line" />
        </div>
      </section>
    </>
  );
}