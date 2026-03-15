"use client";

import { motion } from "framer-motion";

const expertise = [
  {
    num: "01",
    title: "Full Stack\nDevelopment",
    tags: ["React", "Next.js", "Vue.js", "Node.js", "NestJS", "TypeScript"],
    description:
      "End-to-end web applications from pixel-perfect UIs to scalable server-side architectures. 500+ concurrent users supported in production.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="4" y="10" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <polyline points="12,17 8,21 12,25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="20,17 24,21 20,25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="15" y1="25" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "iOS & Mobile\nDevelopment",
    tags: ["SwiftUI", "VisionOS", "UIKit", "RealityKit", "MVVM"],
    description:
      "Native Apple ecosystem apps from iPhone to spatial computing. Swift Student Challenge winner 2024 & 2025 — top 350 globally.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="11" y="3" width="18" height="34" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="33" r="1.5" fill="currentColor"/>
        <line x1="16" y1="7" x2="24" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Cloud &\nDevOps",
    tags: ["AWS", "Azure", "Firebase", "Docker", "CI/CD", "PostgreSQL"],
    description:
      "Cloud-native infrastructure, containerized deployments, and automated pipelines. Reduced API response times by 85% through architecture optimization.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <path d="M8 26a7 7 0 1 1 2.1-13.7A9 9 0 1 1 30 20a5 5 0 0 1-1 9.9H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="23" x2="20" y2="33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <polyline points="16,29 20,33 24,29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Backend &\nAPI Engineering",
    tags: ["C#", "ASP.NET", "Express", "MongoDB", "SQL Server", "REST"],
    description:
      "High-performance APIs and enterprise-grade backends. Accelerated internal workflows by 35% and cut processing errors by 60%.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <ellipse cx="20" cy="12" rx="12" ry="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12v8c0 2.8 5.4 5 12 5s12-2.2 12-5v-8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 20v8c0 2.8 5.4 5 12 5s12-2.2 12-5v-8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Automation &\nData Engineering",
    tags: ["Python", "RPA", "ML Models", "Data Pipelines", "Analytics"],
    description:
      "Robotic Process Automation and intelligent data pipelines. Eliminated 40+ hours of manual processing weekly across enterprise operations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="14" y="4" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="26" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="20" y1="14" x2="20" y2="18" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="20" y1="23" x2="20" y2="29" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="20" cy="26" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: "06",
    title: "IT Audit &\nCybersecurity",
    tags: ["SOX Compliance", "IT Controls", "SQL Forensics", "Risk Analysis"],
    description:
      "Enterprise IT audits covering cybersecurity, SOX compliance, and control testing. Identified 10+ critical vulnerabilities, reducing client risk by 40%.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <path d="M20 4 L32 9v10c0 8-6 14-12 17C14 33 8 27 8 19V9L20 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <polyline points="14,20 18,24 26,16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Expertise = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 xl:py-20 relative overflow-hidden bg-[#0d0d12]">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex items-end justify-between mb-16 pb-8 border-b border-white/[0.06]"
        >
          <div>
            <p className="text-accent text-[11px] font-mono tracking-[0.28em] uppercase mb-4 flex items-center gap-2.5 before:content-[''] before:w-6 before:h-px before:bg-accent">
              Expertise
            </p>
            <h1 className="font-extrabold leading-[0.95] tracking-tight text-5xl xl:text-7xl text-white">
              What I{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}
              >
                Master
              </span>
            </h1>
          </div>
          <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pb-1.5">
            06 disciplines
          </span>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden"
        >
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative bg-[#13131b] p-9 flex flex-col gap-5
                hover:bg-[#15151e] transition-colors duration-300 overflow-hidden cursor-default"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-accent
                scale-y-0 group-hover:scale-y-100 transition-transform duration-[400ms]
                origin-bottom rounded-r-full" />

              {/* Glow */}
              <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px]
                rounded-full bg-[radial-gradient(circle,rgba(200,240,77,0.06)_0%,transparent_70%)]
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/15
                  group-hover:text-accent transition-colors duration-300 pt-0.5">
                  {item.num}
                </span>
                <div className="text-white/20 group-hover:text-accent transition-colors duration-400">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-[22px] font-bold text-white/85 group-hover:text-white
                transition-colors duration-300 whitespace-pre-line leading-snug tracking-tight">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-[13.5px] leading-[1.75] text-white/35
                group-hover:text-white/55 transition-colors duration-300 flex-1">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {item.tags.map((tag, j) => (
                  <span key={j}
                    className="font-mono text-[10px] tracking-[0.12em] uppercase
                      px-2.5 py-1 rounded-full border border-white/10 text-white/35
                      group-hover:border-accent/20 group-hover:text-accent/60
                      transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;