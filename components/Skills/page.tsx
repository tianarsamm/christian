"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";

const skills = [
  {
    category: "Frontend Development",
    icon: "🖥️",
    index: "01",
    items: [
      { name: "HTML & CSS", icon: "html", color: "#e34f26" },
      { name: "JavaScript", icon: "js", color: "#f7df1e" },
      { name: "TypeScript", icon: "ts", color: "#3178c6" },
      { name: "React.js", icon: "react", color: "#61dafb" },
      { name: "Next.js", icon: "next", color: "#ffffff" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#38bdf8" },
    ],
  },
  {
    category: "Backend & Database",
    icon: "🗄️",
    index: "02",
    items: [
      { name: "Supabase", icon: "supabase", color: "#3ecf8e" },
      { name: "PostgreSQL", icon: "postgres", color: "#336791" },
      { name: "REST API", icon: "api", color: "#ff6b35" },
      { name: "Auth System", icon: "auth", color: "#a78bfa" },
    ],
  },
  {
    category: "Automation",
    icon: "⚙️",
    index: "03",
    items: [
      { name: "Google Apps Script", icon: "gscript", color: "#4285f4" },
      { name: "Spreadsheet Auto", icon: "sheets", color: "#34a853" },
      { name: "Workflow Optimization", icon: "workflow", color: "#fbbc04" },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    index: "04",
    items: [
      { name: "Git & GitHub", icon: "github", color: "#ffffff" },
      { name: "Vercel", icon: "vercel", color: "#ffffff" },
      { name: "VS Code", icon: "vscode", color: "#007acc" },
      { name: "Figma", icon: "figma", color: "#f24e1e" },
      { name: "Notion", icon: "notion", color: "#ffffff" },
    ],
  },
  {
    category: "Soft Skills",
    icon: "🧠",
    index: "05",
    items: [
      { name: "Problem Solving", icon: "ps", color: "#3b82f6" },
      { name: "Leadership", icon: "lead", color: "#3b82f6" },
      { name: "Communication", icon: "comm", color: "#3b82f6" },
      { name: "Team Collaboration", icon: "team", color: "#3b82f6" },
    ],
  },
];

// SVG icons for tech
const TechIcon = ({ icon, color }: { icon: string; color: string }) => {
  const icons: Record<string, React.ReactNode> = {
    html: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path d="M6 2l2.4 27L16 31l7.6-2L26 2H6z" fill="#e34f26"/>
        <path d="M16 29.2l6.1-1.7 2.1-23.5H16v25.2z" fill="#ef652a"/>
        <path d="M16 13h-4.5l-.3-3.5H16V6H8l.8 9h7.2v-2zm.1 8.5l-3.9-1-.3-3h-3.1l.5 6 6.8 1.9v-3.9z" fill="#fff"/>
        <path d="M16 13v2.5h4.2l-.4 4.5-3.8 1v3.9l6.8-1.9 1-11H16z" fill="#ebebeb"/>
      </svg>
    ),
    js: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <rect width="32" height="32" rx="3" fill="#f7df1e"/>
        <path d="M19.5 24.5c.5.9 1.2 1.5 2.4 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.8-3-3.8 0-1.9 1.4-3.3 3.7-3.3 1.6 0 2.7.6 3.5 2l-1.9 1.2c-.4-.7-.9-1-1.6-1-.7 0-1.2.5-1.2 1 0 .7.5 1 1.6 1.5l.6.3c2.1.9 3.3 1.9 3.3 3.9 0 2.3-1.8 3.5-4.2 3.5-2.3 0-3.8-1.1-4.6-2.6l2.2-1.1zM10.5 24.7c.4.7.7 1.3 1.5 1.3.8 0 1.2-.3 1.2-1.5v-8h2.5v8.1c0 2.5-1.5 3.6-3.6 3.6-1.9 0-3-1-3.6-2.2l2-1.3z" fill="#000"/>
      </svg>
    ),
    ts: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <rect width="32" height="32" rx="3" fill="#3178c6"/>
        <path d="M18.6 22.2v2.3c.4.2.8.4 1.3.5.5.1 1 .2 1.6.2.5 0 1-.1 1.5-.2.5-.1.9-.3 1.2-.6.3-.3.6-.6.8-1 .2-.4.3-.9.3-1.5 0-.4-.1-.8-.2-1.1-.1-.3-.3-.6-.5-.9-.2-.2-.5-.5-.8-.7-.3-.2-.7-.4-1.1-.6-.3-.1-.5-.3-.8-.4-.2-.1-.4-.3-.5-.4-.1-.1-.2-.3-.3-.4-.1-.2-.1-.3-.1-.5 0-.2 0-.3.1-.5.1-.1.2-.3.3-.3.1-.1.3-.2.5-.2.2-.1.4-.1.6-.1.2 0 .3 0 .5.1.2 0 .3.1.5.2.2.1.3.2.5.3.2.1.3.3.5.4v-2.2c-.4-.2-.7-.3-1.1-.4-.4-.1-.9-.1-1.4-.1-.5 0-1 .1-1.5.2-.5.2-.9.4-1.2.7-.3.3-.6.6-.8 1-.2.4-.3.9-.3 1.4 0 .7.2 1.3.6 1.8.4.5 1 .9 1.8 1.2.3.1.6.3.8.4.2.1.4.3.6.4.2.1.3.3.4.4.1.2.1.3.1.5 0 .2 0 .3-.1.5-.1.1-.2.3-.3.4-.2.1-.3.2-.5.2-.2.1-.5.1-.7.1-.5 0-1-.1-1.4-.4-.4-.2-.8-.5-1.1-.9zM12 17.5H15v-2H6v2h3v9h3v-9z" fill="#fff"/>
      </svg>
    ),
    react: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <circle cx="16" cy="16" r="3" fill="#61dafb"/>
        <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5" fill="none"/>
        <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
      </svg>
    ),
    next: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <circle cx="16" cy="16" r="14" fill="#000"/>
        <path d="M10 22V10l14 16h-3L10 13v9h-0z" fill="#fff"/>
        <path d="M19 10h3v8.5L19 14V10z" fill="#fff"/>
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <path d="M16 6c-4.4 0-7.2 2.2-8.3 6.6 1.7-2.2 3.6-3 5.8-2.5 1.3.3 2.2 1.3 3.2 2.3 1.6 1.7 3.5 3.6 7.6 3.6 4.4 0 7.2-2.2 8.3-6.6-1.7 2.2-3.6 3-5.8 2.5-1.3-.3-2.2-1.3-3.2-2.3C21.9 7.9 20 6 16 6zM7.7 16c-4.4 0-7.2 2.2-8.3 6.6 1.7-2.2 3.6-3 5.8-2.5 1.3.3 2.2 1.3 3.2 2.3 1.6 1.7 3.5 3.6 7.6 3.6 4.4 0 7.2-2.2 8.3-6.6-1.7 2.2-3.6 3-5.8 2.5-1.3-.3-2.2-1.3-3.2-2.3C21.6 17.9 19.7 16 15.7 16H7.7z" fill="#38bdf8"/>
      </svg>
    ),
    supabase: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <path d="M17.5 3L5 19h8.5v10L29 13H20.5V3H17.5z" fill="#3ecf8e"/>
      </svg>
    ),
    postgres: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <ellipse cx="16" cy="10" rx="10" ry="5" fill="#336791"/>
        <path d="M6 10v12c0 2.8 4.5 5 10 5s10-2.2 10-5V10" stroke="#336791" strokeWidth="2" fill="none"/>
        <ellipse cx="16" cy="10" rx="10" ry="5" fill="none" stroke="#5b9bd5" strokeWidth="1.5"/>
        <path d="M6 16c0 2.8 4.5 5 10 5s10-2.2 10-5" stroke="#5b9bd5" strokeWidth="1" fill="none" strokeDasharray="2,2"/>
      </svg>
    ),
    api: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
        <rect x="2" y="8" width="28" height="16" rx="3" stroke="#ff6b35" strokeWidth="1.5"/>
        <text x="5" y="20" fontSize="8" fill="#ff6b35" fontFamily="monospace" fontWeight="bold">API</text>
        <circle cx="25" cy="16" r="2" fill="#ff6b35"/>
      </svg>
    ),
    auth: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
        <rect x="8" y="14" width="16" height="12" rx="2" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M11 14v-4a5 5 0 0110 0v4" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="16" cy="20" r="2" fill="#a78bfa"/>
      </svg>
    ),
    gscript: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <rect width="32" height="32" rx="4" fill="#4285f4"/>
        <path d="M8 12h16M8 16h12M8 20h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    sheets: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <rect width="32" height="32" rx="4" fill="#34a853"/>
        <rect x="6" y="6" width="20" height="20" rx="1" fill="#fff" opacity="0.15"/>
        <path d="M6 12h20M6 18h20M12 6v20" stroke="#fff" strokeWidth="1.5"/>
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
        <circle cx="6" cy="16" r="4" stroke="#fbbc04" strokeWidth="1.5"/>
        <circle cx="26" cy="8" r="4" stroke="#fbbc04" strokeWidth="1.5"/>
        <circle cx="26" cy="24" r="4" stroke="#fbbc04" strokeWidth="1.5"/>
        <path d="M10 16h6l4-8M10 16h6l4 8" stroke="#fbbc04" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    github: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <path d="M16 2C8.27 2 2 8.27 2 16c0 6.18 4.01 11.42 9.57 13.27.7.13.96-.3.96-.67v-2.35c-3.89.85-4.71-1.87-4.71-1.87-.64-1.61-1.55-2.04-1.55-2.04-1.27-.87.1-.85.1-.85 1.4.1 2.14 1.44 2.14 1.44 1.25 2.13 3.27 1.52 4.07 1.16.13-.9.49-1.52.89-1.87-3.1-.35-6.36-1.55-6.36-6.9 0-1.52.54-2.77 1.44-3.74-.14-.35-.62-1.77.14-3.68 0 0 1.17-.38 3.85 1.43A13.4 13.4 0 0116 9.2c1.19.01 2.39.16 3.5.47 2.67-1.81 3.85-1.43 3.85-1.43.76 1.91.28 3.33.14 3.68.9.97 1.44 2.22 1.44 3.74 0 5.36-3.27 6.54-6.38 6.88.5.43.95 1.28.95 2.58v3.83c0 .37.25.81.96.67C25.99 27.42 30 22.18 30 16c0-7.73-6.27-14-14-14z" fill="#fff"/>
      </svg>
    ),
    vercel: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <path d="M16 4L30 28H2L16 4z" fill="#fff"/>
      </svg>
    ),
    vscode: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <path d="M24 4L12 15 6 10 2 13v6l4 3 6-5 12 11 4-2V6l-4-2z" fill="#007acc"/>
        <path d="M2 13l4-3 6 5-6 5-4-3v-4z" fill="#fff" opacity="0.3"/>
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <rect x="10" y="2" width="12" height="8" rx="4" fill="#f24e1e"/>
        <rect x="10" y="10" width="6" height="8" rx="3" fill="#ff7262"/>
        <circle cx="21" cy="14" r="4" fill="#1abcfe"/>
        <rect x="10" y="18" width="6" height="8" rx="3" fill="#0acf83"/>
        <rect x="16" y="10" width="6" height="8" rx="3" fill="#a259ff"/>
      </svg>
    ),
    notion: (
      <svg viewBox="0 0 32 32" width="20" height="20">
        <rect width="32" height="32" rx="4" fill="#fff"/>
        <path d="M8 8h10l6 6v10H8V8z" fill="#fff" stroke="#333" strokeWidth="1.5"/>
        <path d="M18 8v6h6" stroke="#333" strokeWidth="1.5" fill="none"/>
        <path d="M11 14h10M11 18h8M11 22h6" stroke="#333" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    ps: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
        <path d="M16 4a12 12 0 100 24A12 12 0 0016 4z" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M12 13c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.5V19" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="22" r="1" fill="#3b82f6"/>
      </svg>
    ),
    lead: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
        <circle cx="16" cy="10" r="4" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 8l2 2-2 2M10 8L8 10l2 2" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    comm: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
        <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H8l-4 4V8a2 2 0 012-2z" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M12 18v2a2 2 0 002 2h12l4 4V14a2 2 0 00-2-2h-2" stroke="#3b82f6" strokeWidth="1.5"/>
      </svg>
    ),
    team: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
        <circle cx="12" cy="10" r="3.5" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="22" cy="10" r="3.5" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M4 26c0-4 3.6-7 8-7s8 3 8 7" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 19c2.5 0 6 1.5 6 7" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };

  return icons[icon] || <span style={{ fontSize: 18 }}>•</span>;
};

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const [activeCategory, setActiveCategory] = useState(0);
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        .skills-section {
          position: relative;
          padding: 120px 80px;
          background: #0a0a0a;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .skills-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4; pointer-events: none; z-index: 0;
        }
        .skills-grid-lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }
        .skills-cursor-glow {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%);
          pointer-events: none; transform: translate(-50%, -50%);
          transition: left 0.08s ease, top 0.08s ease; z-index: 0;
        }

        .skills-bg-number {
          position: absolute; right: 60px; top: 60px;
          font-family: 'Bebas Neue', sans-serif; font-size: 180px;
          color: rgba(255,255,255,0.015); line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }

        .skills-content { position: relative; z-index: 1; }

        .skills-top-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(59,130,246,0.4), rgba(255,255,255,0.06), transparent);
          margin-bottom: 72px;
        }

        /* HEADER ROW */
        .skills-header {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 64px;
        }

        .sk-eyebrow {
          display: flex; align-items: center; gap: 10px; margin-bottom: 24px;
          opacity: 0; transform: translateX(-16px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .sk-eyebrow.vis { opacity: 1; transform: translateX(0); }
        .sk-eline { width: 28px; height: 1px; background: #3b82f6; }
        .sk-etxt { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #3b82f6; font-weight: 500; }

        .sk-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 6vw, 88px);
          line-height: 0.88; color: #fff; margin-bottom: 0;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .sk-heading.vis { opacity: 1; transform: translateY(0); }
        .sk-heading em {
          display: block; font-style: normal; color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.18);
        }

        .sk-desc {
          font-size: 15px; font-weight: 300; color: #555; line-height: 1.8;
          border-left: 2px solid #3b82f6; padding-left: 20px;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;
        }
        .sk-desc.vis { opacity: 1; transform: translateY(0); }
        .sk-desc strong { color: #999; font-weight: 400; }

        /* CATEGORY TABS */
        .cat-tabs {
          display: flex; gap: 0; margin-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          opacity: 0; transition: opacity 0.6s ease 0.4s;
          overflow-x: auto;
        }
        .cat-tabs.vis { opacity: 1; }
        .cat-tab {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 20px; cursor: pointer; white-space: nowrap;
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          color: #3a3a3a; font-weight: 500;
          border-bottom: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          background: none; border-top: none; border-left: none; border-right: none;
          font-family: 'DM Sans', sans-serif;
          margin-bottom: -1px;
        }
        .cat-tab:hover { color: #888; }
        .cat-tab.active { color: #fff; border-bottom-color: #3b82f6; }
        .cat-tab-icon { font-size: 14px; }
        .cat-tab-num { font-size: 9px; color: #3b82f6; font-family: 'Bebas Neue', sans-serif; letter-spacing: 0; }

        /* SKILLS GRID */
        .skill-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 4px;
          overflow: hidden;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .skill-cards.vis { opacity: 1; transform: translateY(0); }

        .skill-card {
          padding: 24px 20px;
          background: #0a0a0a;
          display: flex; flex-direction: column; gap: 12px;
          transition: background 0.2s;
          cursor: default;
        }
        .skill-card:hover { background: rgba(255,255,255,0.03); }

        .skill-icon-wrap {
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.04);
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .skill-name {
          font-size: 13px; color: #ccc; font-weight: 400; line-height: 1.3;
        }
        .skill-dot {
          width: 24px; height: 2px; border-radius: 1px;
          background: rgba(59,130,246,0.3);
        }

        /* ALL SKILLS OVERVIEW at bottom */
        .overview-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 4px;
          overflow: hidden;
          margin-top: 48px;
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s;
        }
        .overview-grid.vis { opacity: 1; transform: translateY(0); }

        .overview-col { padding: 24px 20px; background: rgba(255,255,255,0.01); }
        .overview-col-title {
          font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase;
          color: #3b82f6; font-weight: 500; margin-bottom: 14px;
          display: flex; align-items: center; gap: 6px;
        }
        .overview-col-title span { font-size: 12px; }
        .overview-item {
          font-size: 12px; color: #444; font-weight: 300;
          padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.03);
          display: flex; align-items: center; gap: 6px;
        }
        .overview-item:last-child { border-bottom: none; }
        .overview-dot { width: 3px; height: 3px; border-radius: 50%; background: #3b82f6; flex-shrink: 0; opacity: 0.5; }

        .skills-bottom-line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          margin-top: 80px;
        }

        @media (max-width: 900px) {
          .skills-section { padding: 80px 24px; }
          .skills-header { grid-template-columns: 1fr; gap: 32px; }
          .overview-grid { grid-template-columns: 1fr 1fr; }
          .skills-bg-number { display: none; }
          .skill-cards { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); }
        }
        @media (max-width: 600px) {
          .overview-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="skills-section" ref={ref}>
        <div className="skills-noise" />
        <div className="skills-grid-lines" />
        <div className="skills-cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />
        <div className="skills-bg-number">03</div>

        <div className="skills-content">
          <div className="skills-top-line" />

          {/* HEADER */}
          <div className="skills-header">
            <div>
              <div className={`sk-eyebrow ${visible ? "vis" : ""}`}>
                <div className="sk-eline" />
                <span className="sk-etxt">Skills & Technologies</span>
              </div>
              <div className={`sk-heading ${visible ? "vis" : ""}`}>
                <em>What</em>
                I Use.
              </div>
            </div>
            <div className={`sk-desc ${visible ? "vis" : ""}`}>
              A growing toolkit spanning <strong>frontend development</strong>, backend systems, automation, and modern dev tools — built through real projects and continuous learning.
            </div>
          </div>

          {/* TABS */}
          <div className={`cat-tabs ${visible ? "vis" : ""}`}>
            {skills.map((cat, i) => (
              <button
                key={cat.category}
                className={`cat-tab ${activeCategory === i ? "active" : ""}`}
                onClick={() => setActiveCategory(i)}
              >
                <span className="cat-tab-icon">{cat.icon}</span>
                {cat.category}
                <span className="cat-tab-num">{cat.index}</span>
              </button>
            ))}
          </div>

          {/* SKILL CARDS */}
          <div className={`skill-cards ${visible ? "vis" : ""}`}>
            {skills[activeCategory].items.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon-wrap">
                  <TechIcon icon={skill.icon} color={skill.color} />
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-dot" style={{ background: `${skill.color}44` }} />
              </div>
            ))}
          </div>

          {/* OVERVIEW ALL */}
          <div className={`overview-grid ${visible ? "vis" : ""}`}>
            {skills.map((cat) => (
              <div className="overview-col" key={cat.category}>
                <div className="overview-col-title">
                  <span>{cat.icon}</span>
                  {cat.category}
                </div>
                {cat.items.map((item) => (
                  <div className="overview-item" key={item.name}>
                    <div className="overview-dot" />
                    {item.name}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="skills-bottom-line" />
        </div>
      </section>
    </>
  );
}