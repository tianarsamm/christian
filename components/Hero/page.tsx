"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-section {
          position: relative;
          min-height: 100vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
          z-index: 1;
        }

        .grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 1;
        }

        .cursor-glow {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: left 0.1s ease, top 0.1s ease;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: stretch;
          min-height: 100vh;
        }

        /* LEFT SIDE */
        .left-col {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 0 64px 0 80px;
          justify-content: center;
          min-height: 100vh;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .eyebrow.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .eyebrow-line {
          width: 32px;
          height: 1px;
          background: #3b82f6;
        }
        .eyebrow-text {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3b82f6;
          font-weight: 500;
        }

        .headline {
          font-family: 'Bebas Neue', sans-serif;
          line-height: 0.9;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s;
        }
        .headline.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .headline-hello {
          display: block;
          font-size: clamp(56px, 6vw, 90px);
          color: #1e1e1e;
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
        }
        .headline-name {
          display: block;
          font-size: clamp(70px, 8vw, 112px);
          color: #ffffff;
          letter-spacing: -1px;
        }
        .headline-here {
          display: block;
          font-size: clamp(56px, 6vw, 90px);
          color: #1e1e1e;
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
        }

        .divider-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(59,130,246,0.3), transparent);
          margin-bottom: 28px;
          opacity: 0;
          transition: opacity 0.8s ease 0.4s;
        }
        .divider-line.visible {
          opacity: 1;
        }

        .bio {
          font-size: 15px;
          line-height: 1.8;
          color: #8a8a8a;
          font-weight: 300;
          margin-bottom: 36px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;
          max-width: 440px;
        }
        .bio.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .bio strong {
          color: #d4d4d4;
          font-weight: 400;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
          opacity: 0;
          transition: opacity 0.7s ease 0.6s;
        }
        .tags.visible {
          opacity: 1;
        }
        .tag {
          padding: 4px 12px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #555;
          background: rgba(255,255,255,0.02);
        }

        .cta-row {
          display: flex;
          gap: 16px;
          align-items: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s;
        }
        .cta-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #1d4ed8;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.2s ease;
          text-decoration: none;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-primary:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }
        .btn-primary:hover::before {
          opacity: 1;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: transparent;
          color: #aaa;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer;
          border-radius: 2px;
          transition: border-color 0.3s, color 0.3s, transform 0.2s;
          text-decoration: none;
        }
        .btn-secondary:hover {
          border-color: rgba(255,255,255,0.35);
          color: #fff;
          transform: translateY(-1px);
        }

        /* RIGHT SIDE */
        .right-col {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: stretch;
          opacity: 0;
          transform: scale(0.98);
          transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
          height: 100vh;
          overflow: hidden;
        }
        .right-col.visible {
          opacity: 1;
          transform: scale(1);
        }

        .photo-frame {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .photo-wrapper {
          position: relative;
          flex: 1;
          overflow: hidden;
        }

        .photo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          filter: contrast(1.05) brightness(0.92);
          display: block;
        }

        .photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(10,10,10,0.1) 0%,
            transparent 20%,
            rgba(10,10,10,0.45) 100%
          );
        }

        .photo-border-tl {
          position: absolute;
          top: 32px;
          left: -12px;
          width: 60px;
          height: 60px;
          border-top: 1px solid #3b82f6;
          border-left: 1px solid #3b82f6;
          border-radius: 0;
        }
        .photo-border-br {
          display: none;
        }

        .photo-label {
          position: absolute;
          bottom: 120px;
          left: 32px;
          right: 20px;
        }
        .photo-label-text {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        .stats-row {
          display: flex;
          gap: 0;
          background: rgba(10,10,10,0.95);
          border-top: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .stat-item {
          flex: 1;
          padding: 20px 24px;
          border-right: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.01);
        }
        .stat-item:last-child {
          border-right: none;
        }
        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 30px;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-num span {
          color: #3b82f6;
        }
        .stat-label {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #444;
        }

        .floating-badge {
          position: absolute;
          top: 40px;
          right: 32px;
          background: rgba(10,10,10,0.9);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 3px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          backdrop-filter: blur(8px);
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3b82f6;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .badge-text {
          font-size: 11px;
          color: #888;
          letter-spacing: 0.05em;
        }

        /* SCROLL INDICATOR */
        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transition: opacity 1s ease 1.2s;
          z-index: 2;
        }
        .scroll-indicator.visible {
          opacity: 1;
        }
        .scroll-text {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #333;
        }
        .scroll-line {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, #3b82f6, transparent);
          animation: scrollAnim 1.5s ease infinite;
        }
        @keyframes scrollAnim {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        /* NUMBER ROW LEFT */
        .index-label {
          position: absolute;
          left: 80px;
          bottom: 80px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 140px;
          color: rgba(255,255,255,0.015);
          line-height: 1;
          pointer-events: none;
          z-index: 1;
          user-select: none;
        }

        .vertical-sep {
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.05) 80%, transparent);
          z-index: 1;
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 0;
            min-height: auto;
          }
          .left-col {
            padding: 80px 24px 48px;
            min-height: auto;
          }
          .right-col {
            height: 60vh;
          }
          .floating-badge { display: none; }
          .scroll-indicator { display: none; }
        }
      `}</style>

      <div className="hero-section" ref={sectionRef}>
        <div className="noise-overlay" />
        <div className="grid-lines" />
        <div
          className="cursor-glow"
          style={{ left: mousePos.x, top: mousePos.y }}
        />
        <div className="index-label">01</div>
        <div className="vertical-sep" />

        <div className="hero-inner">
          {/* LEFT */}
          <div className="left-col">
            <div className={`eyebrow ${visible ? "visible" : ""}`}>
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Portfolio — 2025</span>
            </div>

            <div className={`headline ${visible ? "visible" : ""}`}>
              <span className="headline-hello">Hello,</span>
              <span className="headline-name">Christian</span>
              <span className="headline-here">here.</span>
            </div>

            <div className={`divider-line ${visible ? "visible" : ""}`} />

            <p className={`bio ${visible ? "visible" : ""}`}>
              An <strong>Informatics student</strong> at Primakara University,
              building things at the intersection of technology and business.
              Passionate entrepreneur in the making and a{" "}
              <strong>junior web developer</strong> who turns ideas into
              clean, functional digital experiences.
            </p>

            <div className={`tags ${visible ? "visible" : ""}`}>
              {["Web Dev", "Entrepreneur", "Primakara Univ", "Open to Work"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className={`cta-row ${visible ? "visible" : ""}`}>
              <a
                href="/cv/CV.pdf"
                download
                className="btn-primary"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>

                Download CV
              </a>
              <a href="#about" className="btn-secondary">
                About Me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className={`right-col ${visible ? "visible" : ""}`}>
            <div className="photo-frame">
              <div className="photo-wrapper">
                <img
                  src="img/photo2.png"
                  alt="Christian"
                />
                <div className="photo-overlay" />
                <div className="photo-label">
                  <span className="photo-label-text">Bali, Indonesia</span>
                </div>
              </div>
              <div className="photo-border-tl" />

              <div className="floating-badge">
                <div className="badge-dot" />
                <span className="badge-text">Available for opportunities</span>
              </div>

              <div className="stats-row">
                <div className="stat-item">
                  <div className="stat-num">2<span>+</span></div>
                  <div className="stat-label">Years coding</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">10<span>+</span></div>
                  <div className="stat-label">Projects built</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num"><span>∞</span></div>
                  <div className="stat-label">Ideas brewing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`scroll-indicator ${visible ? "visible" : ""}`}>
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </>
  );
}