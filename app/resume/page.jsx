"use client";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaVuejs,
  FaAngular, FaNodeJs, FaDocker, FaPython, FaJava, FaSwift, FaAws,
} from 'react-icons/fa';
import {
  SiCsharp, SiTypescript, SiTailwindcss, SiNextdotjs, SiDjango,
  SiCplusplus, SiSpring, SiExpress, SiFlask, SiCypress, SiVitest,
  SiFirebase, SiMongodb, SiSass, SiPostman, SiFlutter, SiMysql,
  SiPostgresql, SiJira, SiSqlite, SiPrisma, SiNestjs, SiAzuredevops,
} from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";

/* ─── DATA ──────────────────────────────────────────────────── */

const experience = {
  title: 'Work Experience',
  description:
    'Full-stack engineer with hands-on experience across AI platforms, enterprise auditing, RPA automation, and product development. I have shipped production software at C3.ai, KPMG, Cydsa, Wizeline, and several startups, always focusing on measurable impact.',
  items: [
    {
      company: 'SAP',
      position: 'Software Developer Next Gen ',
      duration: ' Apr 2026 - Now',
      bullets: [
        'To see',
      ],
    },
    {
      company: 'C3.ai',
      position: 'AI Demand Planning Developer',
      duration: 'Jan - Feb 2026',
      bullets: [
        'Built AI-powered supply-chain Demand Planning application',
        'Leveraged ML models for accurate demand forecasts',
        'Surfaced actionable AI recommendations, reducing manual planning effort',
      ],
    },
    {
      company: 'KPMG',
      position: 'IT Auditor',
      duration: 'Jun – Dec 2025',
      bullets: [
        'Executed IT audits for media, telecom & construction clients',
        'Identified 10+ critical vulnerabilities; reduced client risk by 40%',
        'Assessed controls via SQL queries across enterprise environments',
      ],
    },
    {
      company: 'Cydsa',
      position: 'RPA & Full Stack Developer',
      duration: 'Feb – Jun 2025',
      bullets: [
        'Python RPA solutions eliminated 40+ hours of manual work/week',
        'Deployed scalable web apps supporting 500+ concurrent users',
        'ASP.NET / C# / SQL Server solutions cut processing errors by 60%',
      ],
    },
    {
      company: 'Metepori',
      position: 'Software Developer Consultant',
      duration: 'Jan – Dec 2025',
      bullets: [
        'End-to-end solutions for 100+ users with performance optimization',
        'QR-based distribution system leveraging cloud services',
        'Real-time data pipelines for operational analytics',
      ],
    },
    {
      company: 'Wizeline',
      position: 'Full Stack Developer Intern',
      duration: 'Aug – Dec 2024',
      bullets: [
        'Slack bot with React + NestJS for employee feedback',
        'Algorithm-driven collaboration features: -25% meeting overhead',
        'CI/CD pipelines, automated testing & AWS infrastructure',
      ],
    },
    {
      company: 'Tec de Monterrey',
      position: 'iOS Developer',
      duration: 'Aug – Dec 2024',
      bullets: [
        'TECuido medical assistant app with SwiftUI & CoreML',
        'Led SwiftTec as VP, teaching CoreML to 100+ students',
      ],
    },
    {
      company: 'MAES',
      position: 'Lead Developer',
      duration: 'Aug 2023 – Dec 2024',
      bullets: [
        '3,200+ mentoring sessions facilitated across the platform',
        'Vue.js / Firebase real-time architecture for 800+ students',
        '1st Place Expo Ingenías 2024 — Software & Social Impact',
      ],
    },
    {
      company: 'Proyecto 99',
      position: 'Backend Developer',
      duration: 'Dec 2022 – Feb 2023',
      bullets: [
        'MongoDB + Express + Azure backend architecture',
        'Reduced average API response time by 85%',
      ],
    },
  ],
};

const education = {
  title: 'Education & Certifications',
  description:
    'B.S. in Computer Science from Tecnológico de Monterrey, complemented by AWS certifications, industry courses, and continuous self-directed learning across the full stack.',
  items: [
    { institution: 'Tecnológico de Monterrey', degree: 'B.S. in Computer Science', duration: '2021 – 2025' },
    { institution: 'Udemy', degree: 'Python | machine learning', duration: 'Apr 2026' },
    { institution: 'Udemy', degree: 'Python & Django | The complete web development course', duration: 'Mar 2026' },
    { institution: 'AWS', degree: 'AWS Certified Cloud Practitioner', duration: 'Aug 2024' },
    { institution: 'AWS', degree: 'Getting Started DevOps on AWS', duration: 'Aug 2024' },
    { institution: 'Udemy', degree: 'CI/CD with Azure DevOps', duration: 'Jul 2024' },
    { institution: 'University of Michigan', degree: 'Database Architecture, Scale & NoSQL', duration: 'May 2024' },
    { institution: 'Int. Lean Six Sigma', degree: 'Lean Six Sigma Certification', duration: 'Apr 2024' },
    { institution: 'Udemy', degree: 'Microservices with Angular & Spring', duration: 'Dec 2023' },
    { institution: 'Udemy', degree: 'Vue.js', duration: 'Nov 2023' },
    { institution: 'Udemy', degree: 'Angular, Docker, SASS & Gitflow', duration: 'Jul 2023' },
    { institution: 'Udemy', degree: 'Angular & Ionic', duration: 'Apr 2023' },
    { institution: 'Udemy', degree: 'Java', duration: 'Jan 2023' },
    { institution: 'Udemy', degree: 'MongoDB', duration: 'Dec 2022' },
    { institution: 'Udemy', degree: 'Python', duration: 'Jul 2022' },
    { institution: 'Carlos Slim Foundation', degree: 'Diploma in Web & Mobile Apps', duration: 'Dec 2020' },
    { institution: 'Carlos Slim Foundation', degree: 'Technical Diploma in Cloud Computing', duration: 'Dec 2020' },
    { institution: 'Cisco', degree: 'Introduction to IoT', duration: 'Jun 2020' },
    { institution: 'Cisco', degree: 'Introduction to Cybersecurity', duration: 'Jun 2020' },
  ],
};

const skills = {
  title: 'Technical Skills',
  description:
    'Proficient across the full stack — from SwiftUI iOS apps and React/Vue frontends to Node.js / Spring backends, DevOps pipelines, and cloud infrastructure on AWS & Azure.',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML 5' },
    { icon: <FaCss3 />, name: 'CSS 3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaSwift />, name: 'Swift' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiCsharp />, name: 'C#' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaVuejs />, name: 'Vue.js' },
    { icon: <FaAngular />, name: 'Angular' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <SiSass />, name: 'SASS' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiNestjs />, name: 'NestJS' },
    { icon: <SiSpring />, name: 'Spring' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <SiPrisma />, name: 'Prisma' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <SiAzuredevops />, name: 'Azure' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiSqlite />, name: 'SQLite' },
    { icon: <SiCypress />, name: 'Cypress' },
    { icon: <SiVitest />, name: 'Vitest' },
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <SiPostman />, name: 'Postman' },
    { icon: <SiJira />, name: 'Jira' },
  ],
};

const awards = {
  title: 'Awards & Recognition',
  description:
    'Recognized across academia, industry, and Apple\'s global developer community for innovation, technical excellence, and measurable social impact.',
  items: [
    { awarded: 'ITESM', title: 'Honor Mention of Excellence — Top 5% of Program', date: 'Jul 2025' },
    { awarded: 'Apple', title: 'Swift Student Challenge 2025', date: 'Apr 2025' },
    { awarded: 'Tec de Monterrey', title: 'Outstanding Student', date: 'Mar 2025' },
    { awarded: 'Expo Ingenías', title: 'Software Category — 1st Place', date: 'Dec 2024' },
    { awarded: 'Tec de Monterrey', title: 'Outstanding Student', date: 'Sep 2024' },
    { awarded: 'EmprendiemientoTec', title: 'Outstanding Trajectory in Entrepreneurship', date: 'Jun 2024' },
    { awarded: 'Tec de Monterrey', title: 'Outstanding Student', date: 'May 2024' },
    { awarded: 'Apple', title: 'Swift Student Challenge 2024', date: 'May 2024' },
    { awarded: 'Expo Ingenías', title: 'Software & Social Impact Award', date: 'Dec 2023' },
    { awarded: 'Tec de Monterrey', title: 'Academic Talent Scholarship', date: 'Aug 2021' },
  ],
};

/* ─── STYLED SUBCOMPONENTS ──────────────────────────────────── */

const glassCard = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(12px)',
  borderRadius: '16px',
};

const accentGlow = { color: 'var(--accent, #00ff99)', filter: 'drop-shadow(0 0 6px var(--accent, #00ff99))' };

const SectionHeader = ({ title, description }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3
      style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        marginBottom: '0.75rem',
        background: 'linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.5) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {title}
    </h3>
    <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '680px', fontSize: '0.92rem' }}>
      {description}
    </p>
  </div>
);

const ExperienceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.07 }}
    style={{
      ...glassCard,
      padding: '1.5rem 1.75rem',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '1rem',
    }}
    whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
  >
    {/* Left accent bar */}
    <div style={{
      position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
      background: 'linear-gradient(180deg, var(--accent, #00ff99), transparent)',
    }} />

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <div>
        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.1rem' }}>
          {item.position}
        </h4>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, ...accentGlow, letterSpacing: '0.05em' }}>
          {item.company}
        </span>
      </div>
      <span style={{
        fontSize: '0.72rem', fontFamily: 'monospace',
        background: 'rgba(255,255,255,0.06)', padding: '3px 10px',
        borderRadius: '999px', color: 'rgba(255,255,255,0.5)',
        border: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap',
      }}>
        {item.duration}
      </span>
    </div>

    <ul style={{ listStyle: 'none', padding: 0, margin: '0.6rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      {item.bullets.map((b, i) => (
        <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>
          <span style={{ color: 'var(--accent, #00ff99)', flexShrink: 0, fontSize: '0.65rem', marginTop: '5px' }}>▸</span>
          {b}
        </li>
      ))}
    </ul>
  </motion.div>
);

const EduCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.04 }}
    style={{
      ...glassCard,
      padding: '1.25rem 1.5rem',
      display: 'flex', flexDirection: 'column', gap: '0.35rem',
      position: 'relative', overflow: 'hidden',
    }}
    whileHover={{ borderColor: 'rgba(var(--accent-rgb, 0,255,153),0.3)', transition: { duration: 0.2 } }}
  >
    <div style={{
      position: 'absolute', top: 0, right: 0, width: '60px', height: '60px',
      background: 'radial-gradient(circle at top right, rgba(0,255,153,0.08), transparent 70%)',
      pointerEvents: 'none',
    }} />
    <span style={{ fontSize: '0.7rem', color: 'var(--accent, #00ff99)', fontFamily: 'monospace', fontWeight: 600, letterSpacing: '0.04em' }}>
      {item.duration}
    </span>
    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>{item.degree}</p>
    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{item.institution}</p>
  </motion.div>
);

const AwardCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.06 }}
    style={{
      ...glassCard,
      padding: '1.25rem 1.5rem',
      display: 'flex', alignItems: 'center', gap: '1.25rem',
    }}
    whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
  >
    <div style={{
      width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0,
      background: 'linear-gradient(135deg, rgba(0,255,153,0.15), rgba(0,255,153,0.03))',
      border: '1px solid rgba(0,255,153,0.25)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '1.2rem',
    }}>
      {item.awarded === 'Apple' ? '🍎' : item.awarded === 'ITESM' || item.awarded === 'Tec de Monterrey' ? '🏛️' : '🏆'}
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', marginBottom: '0.15rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {item.title}
      </p>
      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{item.awarded}</p>
    </div>
    <span style={{
      fontSize: '0.68rem', fontFamily: 'monospace', flexShrink: 0,
      background: 'rgba(0,255,153,0.08)', color: 'var(--accent, #00ff99)',
      padding: '3px 10px', borderRadius: '999px', border: '1px solid rgba(0,255,153,0.2)',
    }}>
      {item.date}
    </span>
  </motion.div>
);

/* ─── MAIN COMPONENT ─────────────────────────────────────────── */

const Resume = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .resume-tabs-list button {
          font-family: 'JetBrains Mono', monospace !important;
          font-size: 0.78rem !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
          padding: 0.65rem 1.2rem !important;
          border-radius: 10px !important;
          border: 1px solid rgba(255,255,255,0.07) !important;
          background: transparent !important;
          color: rgba(255,255,255,0.4) !important;
          transition: all 0.2s !important;
          width: 100% !important;
          text-align: left !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .resume-tabs-list button[data-state="active"] {
          background: rgba(255,255,255,0.06) !important;
          color: #fff !important;
          border-color: rgba(0,255,153,0.3) !important;
          box-shadow: 0 0 20px rgba(0,255,153,0.08) inset !important;
        }
        .resume-tabs-list button:hover {
          color: rgba(255,255,255,0.8) !important;
          background: rgba(255,255,255,0.04) !important;
        }
        .skill-tile {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          height: 90px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 8px; cursor: default;
          transition: all 0.25s;
        }
        .skill-tile:hover {
          background: rgba(0,255,153,0.06);
          border-color: rgba(0,255,153,0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,255,153,0.08);
        }
        .skill-tile .icon { font-size: 1.7rem; color: rgba(255,255,255,0.6); transition: all 0.25s; }
        .skill-tile:hover .icon { color: var(--accent, #00ff99); filter: drop-shadow(0 0 8px var(--accent, #00ff99)); }
        .skill-tile .label { font-size: 0.65rem; font-family: 'JetBrains Mono', monospace; color: rgba(255,255,255,0.35); letter-spacing: 0.04em; }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5, ease: 'easeOut' } }}
        style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 0', fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[48px]">

            {/* ── Sidebar ── */}
            <TabsList className="resume-tabs-list flex flex-col w-full max-w-[220px] mx-auto xl:mx-0 gap-2" style={{ background: 'transparent', height: 'auto', padding: 0 }}>
              {[
                { value: 'experience', label: '01 · Experience' },
                { value: 'education',  label: '02 · Education' },
                { value: 'skills',     label: '03 · Skills' },
                { value: 'awards',     label: '04 · Awards' },
              ].map(tab => (
                <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
              ))}
            </TabsList>

            {/* ── Content ── */}
            <div style={{ flex: 1, minHeight: '70vh' }}>

              {/* EXPERIENCE */}
              <TabsContent value="experience" className="w-full">
                <SectionHeader title={experience.title} description={experience.description} />
                <ScrollArea className="h-[560px]" style={{ paddingRight: '1rem' }}>
                  {experience.items.map((item, i) => (
                    <ExperienceCard key={i} item={item} index={i} />
                  ))}
                </ScrollArea>
              </TabsContent>

              {/* EDUCATION */}
              <TabsContent value="education" className="w-full">
                <SectionHeader title={education.title} description={education.description} />
                <ScrollArea className="h-[560px]">
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem', paddingRight: '0.5rem' }}>
                    {education.items.map((item, i) => (
                      <EduCard key={i} item={item} index={i} />
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* SKILLS */}
              <TabsContent value="skills" className="w-full">
                <SectionHeader title={skills.title} description={skills.description} />
                <ScrollArea className="h-[560px]">
                  <TooltipProvider delayDuration={80}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: '0.6rem', paddingRight: '0.5rem' }}>
                      {skills.skillList.map((skill, i) => (
                        <Tooltip key={i}>
                          <TooltipTrigger asChild>
                            <motion.div
                              className="skill-tile"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.025 }}
                            >
                              <div className="icon">{skill.icon}</div>
                              <span className="label">{skill.name}</span>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </ScrollArea>
              </TabsContent>

              {/* AWARDS */}
              <TabsContent value="awards" className="w-full">
                <SectionHeader title={awards.title} description={awards.description} />
                <ScrollArea className="h-[560px]">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingRight: '0.5rem' }}>
                    {awards.items.map((item, i) => (
                      <AwardCard key={i} item={item} index={i} />
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;