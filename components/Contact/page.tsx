"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
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

  const links = [
    {
      label: "Email",
      value: "tianarsam18@email.com",
      href: "mailto:tianarsam18@email.com",
      accent: "#3b82f6",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="#3b82f6" strokeWidth="1.5"/>
          <path d="M2 8l10 6 10-6" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      value: "+62 813 3885 8678",
      href: "https://wa.me/6281338858678",
      accent: "#25d366",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.11-1.34A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" stroke="#25d366" strokeWidth="1.5"/>
          <path d="M9 8.5c.4 1 1.3 2.7 2.3 3.7 1 1 2.7 1.9 3.7 2.3.2.1.5.1.7-.1l.8-.8c.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7l-.7.7c-.5.5-1.2.7-1.8.5C14 16.4 11.4 15.1 9.7 13.4 7.9 11.6 6.6 9 6.1 7.9c-.2-.6 0-1.3.5-1.8l.7-.7c.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7l-.8.8c-.2.2-.2.5-.1.7z" fill="#25d366"/>
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "tianarsamm",
      href: "https://github.com/tianarsamm",
      accent: "#e4e4e4",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.4c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" fill="#e4e4e4"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "Tian Arsam",
      href: "https://www.linkedin.com/in/tian-arsam-b36a983b5/",
      accent: "#0a66c2",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" stroke="#0a66c2" strokeWidth="1.5"/>
          <path d="M7 10v7M7 7v.5" stroke="#0a66c2" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M11 17v-4a2 2 0 014 0v4M11 10v7" stroke="#0a66c2" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      value: "tianarsamm",
      href: "https://www.instagram.com/tianarsamm/",
      accent: "#e1306c",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="#e1306c" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="4" stroke="#e1306c" strokeWidth="1.5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="#e1306c"/>
        </svg>
      ),
    },
  ];

  const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, color: "#2a2a2a", transition: "color 0.2s, transform 0.2s" }}>
      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-section {
          position: relative; padding: 120px 80px;
          background: #0a0a0a; overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .contact-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4; pointer-events: none; z-index: 0;
        }
        .contact-grid-lines {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px; pointer-events: none; z-index: 0;
        }
        .contact-cursor-glow {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%);
          pointer-events: none; transform: translate(-50%, -50%);
          transition: left 0.08s ease, top 0.08s ease; z-index: 0;
        }
        .contact-bg-number {
          position: absolute; right: 60px; top: 60px;
          font-family: 'Bebas Neue', sans-serif; font-size: 180px;
          color: rgba(255,255,255,0.015); line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }
        .contact-content { position: relative; z-index: 1; }
        .contact-top-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(59,130,246,0.4), rgba(255,255,255,0.06), transparent);
          margin-bottom: 72px;
        }
        .contact-header {
          display: grid; grid-template-columns: 1fr 1.4fr;
          gap: 80px; align-items: start; margin-bottom: 64px;
        }
        .ct-eyebrow {
          display: flex; align-items: center; gap: 10px; margin-bottom: 24px;
          opacity: 0; transform: translateX(-16px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .ct-eyebrow.vis { opacity: 1; transform: translateX(0); }
        .ct-eline { width: 28px; height: 1px; background: #3b82f6; }
        .ct-etxt { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #3b82f6; font-weight: 500; }
        .ct-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 6vw, 88px);
          line-height: 0.88; color: #fff; margin: 0;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .ct-heading.vis { opacity: 1; transform: translateY(0); }
        .ct-heading em { display: block; font-style: normal; color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.18); }
        .ct-desc {
          font-size: 15px; font-weight: 300; color: #555; line-height: 1.8;
          border-left: 2px solid #3b82f6; padding-left: 20px;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;
        }
        .ct-desc.vis { opacity: 1; transform: translateY(0); }
        .ct-desc strong { color: #999; font-weight: 400; }

        .contact-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          border-radius: 4px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s;
        }
        .contact-links.vis { opacity: 1; transform: translateY(0); }

        .contact-link {
          display: flex; align-items: center; gap: 20px;
          padding: 24px 28px; text-decoration: none;
          background: rgba(15, 15, 15, 0.95);
          border: 1px solid rgba(255,255,255,0.06);
          transition: background 0.2s, border-color 0.2s;
          position: relative; overflow: hidden;
        }
        .contact-link::after {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 0;
          background: var(--accent, #3b82f6);
          transition: width 0.3s ease;
        }
        .contact-link:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.12); }
        .contact-link:hover::after { width: 4px; }
        .contact-link:hover .link-arrow { color: #fff; transform: translate(3px, -3px); }

        .link-icon-wrap {
          width: 52px; height: 52px; border-radius: 14px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.04);
        }
        .link-info { flex: 1; min-width: 0; }
        .link-label { font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: #e4e4e4; font-weight: 500; margin-bottom: 4px; }
        .link-value { font-size: 14px; color: #d1d5db; font-weight: 300; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .link-arrow { color: #d1d5db; flex-shrink: 0; transition: color 0.2s, transform 0.2s; }

        .contact-bottom-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          margin-top: 80px;
        }

        @media (max-width: 900px) {
          .contact-section { padding: 80px 24px; }
          .contact-header { grid-template-columns: 1fr; gap: 32px; }
          .contact-bg-number { display: none; }
          .contact-links { grid-template-columns: 1fr; }
          .contact-divider-v { display: none; }
        }
      `}</style>

      <section className="contact-section" ref={ref}>
        <div className="contact-noise" />
        <div className="contact-grid-lines" />
        <div className="contact-cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />
        <div className="contact-bg-number">05</div>

        <div className="contact-content">
          <div className="contact-top-line" />

          <div className="contact-header">
            <div>
              <div className={`ct-eyebrow ${visible ? "vis" : ""}`}>
                <div className="ct-eline" />
                <span className="ct-etxt">Contact</span>
              </div>
              <div className={`ct-heading ${visible ? "vis" : ""}`}>
                <em>Let's</em>
                Connect.
              </div>
            </div>
            <div className={`ct-desc ${visible ? "vis" : ""}`}>
              Open for <strong>collaboration</strong>, freelance projects, and conversations about technology. Feel free to reach out through any channel below.
            </div>
          </div>

          <div className={`contact-links ${visible ? "vis" : ""}`}>
            {links.map((link) => (
              <a
                key={link.label}
                className="contact-link"
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{ ["--accent" as string]: link.accent }}
              >
                <div className="link-icon-wrap">{link.icon}</div>
                <div className="link-info">
                  <div className="link-label">{link.label}</div>
                  <div className="link-value">{link.value}</div>
                </div>
                <ArrowIcon />
              </a>
            ))}
          </div>

          <div className="contact-bottom-line" />
        </div>
      </section>
    </>
  );
}