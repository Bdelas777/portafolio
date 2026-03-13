"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { BsArrowUpRight, BsGithub, BsYoutube, BsX, BsStarFill } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"

const allProjects = [
  {
    num: '01', category: "full stack", title: "Vita", featured: true,
    description: "Vita is a comprehensive health application that offers personalized recommendations for nutrition, exercise, and sleep. Using artificial intelligence, it suggests exercise routines and analyzes calories and nutrients from food photographs.",
    stack: [{ name: 'Next' }, { name: 'Tailwind' }, { name: 'Gemini' }, { name: 'Open Ai' }, { name: 'Stripe' }, { name: 'WhatsApp Api' }, { name: 'Drizzle' }, { name: 'Cypress' }, { name: 'Vitest' }, { name: 'AWS' }, { name: 'Postgress' }, { name: 'Typescript' }, { name: 'Github Actions' }],
    image: '/assets/work/vitapro.png', live: 'https://d8vd0r6uuds8z.cloudfront.net/', github: '', youtube: 'https://www.youtube.com/watch?si=O_9DcWiUeaAuGUey&v=dXF64rgcdLI&feature=youtu.be'
  },
  {
    num: '02', category: "full stack", title: "Maes", featured: true,
    description: "Spearheaded the creation of a user-centric website for the administration of the Student Academic Mentorship program at Tec de Monterrey, serving on average 3,500 monthly users.",
    stack: [{ name: 'Vue' }, { name: 'Css 3' }, { name: 'Javascript' }, { name: 'Firebase' }, { name: 'Html 5' }],
    image: '/assets/work/MAE.png', live: 'https://maes.mx/', github: '', youtube: ''
  },
  {
    num: '04', category: "ios developer", title: "AcrossMexico", featured: true,
    description: "The application was developed using SpriteKit as the main foundation, focusing especially on scene generation for the game. This technology was employed to display information cards and allow the user to dismiss them.",
    stack: [{ name: 'SwiftUI' }, { name: 'UIKit' }, { name: 'MVVM' }, { name: 'RealityKit' }, { name: 'AVFoundation' }, { name: 'SpriteKit' }],
    image: '/assets/work/across.jpg', live: 'https://www.wwdcscholars.com/s/12441737-ECCF-4692-8BDA-83F0B9EBF97C/2024', github: 'https://github.com/Bdelas777/AcrossMexico', youtube: ''
  },
  {
    num: '05', category: "ios developer", title: "TECuido", featured: true,
    description: "TECuido is your personal medical assistant that will provide support for any emergency situation, from injury detection to prescription tracking.",
    stack: [{ name: 'SwiftUI' }, { name: 'UIKit' }, { name: 'MapKit' }, { name: 'CoreML' }, { name: 'Express' }, { name: 'Node.js' }, { name: 'Postman' }, { name: 'Dotenv' }],
    image: '/assets/work/TECuido.png', live: 'https://apps.apple.com/mx/app/tecuido-by-dilo-en-se%C3%B1as/id6476895704', github: '', youtube: 'https://www.youtube.com/watch?v=V1En6iZ9CLc'
  },
  {
    num: '23', category: "full stack", title: "ConsoliBanco", featured: true,
    description: "ConsoliBanco allows users to securely connect multiple bank accounts, view their total balance, review recent and categorized transactions, and transfer funds between accounts. Additionally, it generates financial analysis charts and offers tools to create personalized financial plans.",
    stack: [{ name: 'Next.js' }, { name: 'TypeScript' }, { name: 'Appwrite' }, { name: 'Plaid' }, { name: 'Dwolla' }, { name: 'Gemini' }, { name: 'Sentry' }],
    image: '/assets/work/ConsoliBanco.png', live: 'https://consoli-banco.vercel.app/sign-in', github: 'https://github.com/Bdelas777/ConsoliBanco', youtube: ''
  },
  {
    num: '24', category: "full stack", title: "CancerMama", featured: true,
    description: "CancerMama is a full-stack health application powered by AI that analyzes medical images using CNN models and provides personalized health recommendations. Built with React + TypeScript + Vite on the frontend and Flask + Python on the backend.",
    stack: [{ name: 'Flask' }, { name: 'Python' }, { name: 'React' }, { name: 'TypeScript' }, { name: 'Vite' }],
    image: '/assets/work/cancer.png', live: '', github: 'https://github.com/Bdelas777/CancerMama', youtube: ''
  },
  // ── More Projects ────────────────────────────────────────────
  {
    num: '03', category: "ios developer", title: "CivicMinds", featured: false,
    description: "CivicMinds is an innovative application designed to optimize the process of law creation and development in Mexico using augmented reality and artificial intelligence technologies.",
    stack: [{ name: 'SwiftUI' }, { name: 'UIKit' }, { name: 'VisionOS' }, { name: 'OpenAi Api' }],
    image: '/assets/work/vision.jpg', live: '', github: '', youtube: 'https://drive.google.com/file/d/17sKpes78WoAsWUj6f8hjyPspKJi_RoCt/view?usp=sharing'
  },
  {
    num: '06', category: "full stack", title: "Depas", featured: false,
    description: "This application facilitates the sale or rental of rooms, apartments, or houses.",
    stack: [{ name: 'Express' }, { name: 'MongoDB' }, { name: 'React' }, { name: 'MUI' }, { name: 'MapBox' }, { name: 'Google Cloud' }, { name: 'Javascript' }],
    image: '/assets/work/depas.png', live: 'https://depas2.netlify.app/', github: 'https://github.com/Bdelas777/depas', youtube: ''
  },
  {
    num: '07', category: "full stack", title: "Test Hero", featured: false,
    description: "This is an application that, through a web platform created in React, allows you to create exams that will be played by a video game created in Unity.",
    stack: [{ name: 'C#' }, { name: 'Unity' }, { name: 'MySql' }, { name: 'React' }, { name: 'MUI' }, { name: 'Google Cloud' }, { name: 'Javascript' }],
    image: '/assets/work/test.png', live: '', github: 'https://github.com/Kingsman-Construccion-de-software', youtube: 'https://drive.google.com/drive/folders/1lLyFCotX8I4_4QblLuyB3n5E-WPkR-cJ?usp=sharing'
  },
  {
    num: '08', category: "full stack", title: "Sistema Proyecto 99", featured: false,
    description: "Led backend development for the implementation of a comprehensive system for class registrations. Oversaw CRUD operations and contributed to UI design.",
    stack: [{ name: 'MongoDB' }, { name: 'Express' }, { name: 'Firebase' }, { name: 'Material UI' }, { name: 'React' }, { name: 'Azure' }],
    image: '/assets/work/P99.png', live: 'https://p99test.fly.dev/', github: 'https://github.com/TeraBlitz/P99_ProyectoInvierno2022?tab=readme-ov-file', youtube: ''
  },
  {
    num: '09', category: "full stack", title: "Iulius", featured: false,
    description: "Social Media platform.",
    stack: [{ name: 'Mongoose' }, { name: 'Express' }, { name: 'React' }, { name: 'Material UI' }],
    image: '/assets/work/social.png', live: '', github: 'https://github.com/Bdelas777/Iulius', youtube: ''
  },
  {
    num: '10', category: "full stack", title: "Creator Notes", featured: false,
    description: "Creating a Notes project involves developing an application that allows users to create, store, and manage their notes.",
    stack: [{ name: 'MySQL' }, { name: 'Express' }, { name: 'React' }, { name: 'Bootstrap' }],
    image: '/assets/work/Notes.png', live: '', github: 'https://github.com/Bdelas777/Iulius', youtube: ''
  },
  {
    num: '11', category: "full stack", title: "Rick and Morty app", featured: false,
    description: "This project is a notes web application that uses the Rick and Morty API to display information related to the characters from the series.",
    stack: [{ name: 'Next' }, { name: 'React' }, { name: 'Typescript' }, { name: 'Tailwind' }, { name: 'Drizzle' }, { name: 'Vercel' }, { name: 'Postgress' }],
    image: '/assets/work/Rick.png', live: 'https://rick-morty-eight-teal.vercel.app/', github: 'https://github.com/Bdelas777/WizelineClass', youtube: ''
  },
  {
    num: '12', category: "videogame", title: "VideoGame Python", featured: false,
    description: "At the start of the game, any key must be pressed to begin. The spaceship fires when the spacebar is pressed and moves left and right with the arrow keys.",
    stack: [{ name: 'Python' }, { name: 'Pygame' }],
    image: '/assets/work/Back.png', live: '', github: 'https://github.com/Bdelas777/VideogamePython', youtube: ''
  },
  {
    num: '13', category: "frontend", title: "AI Financial Analysis", featured: false,
    description: "Collaborated on the development of an AI-driven financial analysis project, focusing on the web.",
    stack: [{ name: 'React' }, { name: 'PostgreSQL' }, { name: 'TensorFlow' }],
    image: '/assets/work/Invest.png', live: '', github: 'https://github.com/Bdelas777/VideogamePython', youtube: 'https://www.youtube.com/watch?v=qawrHlVeF5U'
  },
  {
    num: '14', category: "frontend", title: "Tasks app", featured: false,
    description: "A tasks app is a digital tool designed to help users organize, manage, and track their daily activities and responsibilities.",
    stack: [{ name: 'React' }, { name: 'Html 5' }, { name: 'Css 3' }],
    image: '/assets/work/task.png', live: 'https://bdelas777.github.io/react-tasks-app/', github: 'https://github.com/Bdelas777/react-tasks-app', youtube: ''
  },
  {
    num: '15', category: "full stack", title: "Food4All", featured: false,
    description: "A food expiry tracking app to store and record data on food items approaching their expiration dates, helping manage inventory and reduce waste.",
    stack: [{ name: 'Django' }, { name: 'SwiftUI' }, { name: 'SQlite' }],
    image: '/assets/work/Food.jpg', live: '', github: '', youtube: ''
  },
  {
    num: '16', category: "console", title: "Dialogue Framework", featured: false,
    description: "This application allows us to see the different types of messages that Java launches using the awt and swing libraries.",
    stack: [{ name: 'Java' }, { name: 'Java.Awt' }, { name: 'Java.swing' }],
    image: '/assets/work/Dia.png', live: '', github: 'https://github.com/Bdelas777/MarcoDialogos?tab=readme-ov-file', youtube: ''
  },
  {
    num: '17', category: "console", title: "Threads", featured: false,
    description: "This practice is about thread and has 2 projects: A bank section and a ball simulation.",
    stack: [{ name: 'Java' }, { name: 'Java.Util' }, { name: 'Java.Awt' }, { name: 'Java.swing' }],
    image: '/assets/work/Ball.png', live: '', github: 'https://github.com/Bdelas777/ThreadsProjects/tree/main', youtube: ''
  },
  {
    num: '18', category: "investigation", title: "Genoma", featured: false,
    description: "The study of genomes using R involves leveraging statistical and computational tools to analyze large-scale genomic data.",
    stack: [{ name: 'R' }],
    image: '/assets/work/Genoma.png', live: '', github: 'https://github.com/Bdelas777/Genomas/tree/main', youtube: ''
  },
  {
    num: '19', category: "console", title: "Chat", featured: false,
    description: "A chat application built with Java sockets for real-time messaging.",
    stack: [{ name: 'Java' }, { name: 'Java.Net' }, { name: 'Java.swing' }, { name: 'Java.io' }],
    image: '/assets/work/Chat.png', live: '', github: 'https://github.com/Bdelas777/ChatAplication?tab=readme-ov-file', youtube: ''
  },
  {
    num: '20', category: "console", title: "Text editor", featured: false,
    description: "Here are the different stages to make a word processor and it is being done with Java through Events.",
    stack: [{ name: 'Java' }, { name: 'Java.Awt' }, { name: 'Java.swing' }],
    image: '/assets/work/text.png', live: '', github: 'https://github.com/Bdelas777/Procesadordetexto?tab=readme-ov-file', youtube: ''
  },
  {
    num: '21', category: "console", title: "AppCovid", featured: false,
    description: "This is a console application to analyze COVID information in the year 2021, using the PIL and Matplotlib libraries.",
    stack: [{ name: 'Python' }, { name: 'PIL' }, { name: 'Matplotlib' }],
    image: '/assets/work/covid.png', live: '', github: 'https://github.com/Bdelas777/AppCovid', youtube: ''
  },
  {
    num: '22', category: "console", title: "Salary calculator", featured: false,
    description: "This is a calculator of a worker's salary for the year 2020 and only works on console.",
    stack: [{ name: 'Python' }, { name: 'PIL' }, { name: 'Matplotlib' }],
    image: '/assets/work/isr.png', live: '', github: 'https://github.com/Bdelas777/Salario2020/tree/main', youtube: ''
  },
  {
    num: '25', category: "investigation", title: "Chat Whats", featured: false,
    description: "The study of genomes using R involves leveraging statistical and computational tools to analyze large-scale genomic data.",
    stack: [{ name: 'Python' }, { name: 'Flask' }, { name: 'Azure' }],
    image: '/assets/work/whats.png', live: '', github: 'https://github.com/Bdelas777/WhatsApp', youtube: ''
  },
  {
    num: '26', category: "investigation", title: "Compilador", featured: false,
    description: "Research project focused on building a compiler using Python. The project includes lexical and syntactic analysis to process source code and transform it into a structured representation that can be interpreted or executed by a machine.",
    stack: [{ name: 'Python' }],
    image: '/assets/work/Compi.png', live: '', github: 'https://github.com/Bdelas777/CompiladoresElda', youtube: ''
  },
]

const featuredProjects = allProjects.filter(p => p.featured)
const otherProjects = allProjects.filter(p => !p.featured)

const categoryMeta = {
  "full stack":    { label: "Full Stack",   icon: "⚡" },
  "ios developer": { label: "iOS",          icon: "📱" },
  "frontend":      { label: "Frontend",     icon: "🎨" },
  "console":       { label: "Console",      icon: "⌨️"  },
  "videogame":     { label: "Videogame",    icon: "🎮" },
  "investigation": { label: "Research",     icon: "🔬" },
}

const categories = [...new Set(otherProjects.map(p => p.category))]

// ── Link buttons ─────────────────────────────────────────────────────────────
const LinkBtn = ({ href, icon: Icon, label, variant = "default" }) => {
  const styles = {
    default: "bg-white/8 border-white/15 text-white/70 hover:bg-white/15 hover:text-white hover:border-white/30",
    accent:  "bg-accent/15 border-accent/40 text-accent hover:bg-accent hover:text-primary hover:border-accent",
    red:     "bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/25 hover:border-red-500/50 hover:text-red-300",
  }
  return (
    <Link href={href} target="_blank" passHref>
      <TooltipProvider delayDuration={80}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-200 ${styles[variant]}`}>
              <Icon className="text-[15px]" />
            </button>
          </TooltipTrigger>
          <TooltipContent><p>{label}</p></TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  )
}

const ProjectLinks = ({ project, size = "md" }) => (
  <div className="flex items-center gap-2">
    {project.live    && <LinkBtn href={project.live}    icon={BsArrowUpRight} label="Live project" variant="accent" />}
    {project.github  && <LinkBtn href={project.github}  icon={BsGithub}       label="GitHub"       variant="default" />}
    {project.youtube && <LinkBtn href={project.youtube} icon={BsYoutube}      label="Demo video"   variant="red" />}
  </div>
)

// ── Detail Modal ──────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null
  const cat = categoryMeta[project.category] || { label: project.category, icon: "📁" }
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-white/12 shadow-[0_32px_80px_rgba(0,0,0,0.7)] bg-[#0f0f13]"
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-sm border border-white/12 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/80 transition-all duration-200"
          >
            <BsX className="text-xl" />
          </button>

          {/* Hero image */}
          <div className="relative h-[260px] md:h-[320px] w-full overflow-hidden">
            <Image src={project.image} layout="fill" className="object-cover" alt={project.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-[#0f0f13]/30 to-transparent" />

            {/* Badges on image */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              {project.featured && (
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-primary text-[10px] font-black uppercase tracking-[0.12em] shadow-lg shadow-accent/30">
                  <BsStarFill className="text-[8px]" /> Featured
                </span>
              )}
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-sm border border-white/12 text-white/70 text-[10px] font-bold uppercase tracking-[0.1em]">
                {cat.icon} {cat.label}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-7 pt-5">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">{project.title}</h2>
            <p className="text-white/55 text-sm leading-relaxed mb-6">{project.description}</p>

            {/* Stack */}
            <div className="mb-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/25 mb-2.5">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, i) => (
                  <span key={i} className="text-xs font-semibold text-accent/85 bg-accent/10 border border-accent/20 px-3 py-1 rounded-lg">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center justify-between pt-4 border-t border-white/8">
              <ProjectLinks project={project} />
              {!project.live && !project.github && !project.youtube && (
                <span className="text-xs text-white/25 italic">No public links available</span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
const Work = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [modalProject, setModalProject] = useState(null)
  const categoryProjects = otherProjects.filter(p => p.category === activeCategory)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-screen flex flex-col py-12 xl:py-0"
    >
      <div className="container mx-auto">

        {/* ══════════════════════════════════════════════════
            FEATURED — section label
        ══════════════════════════════════════════════════ */}
        <div className="flex items-center gap-3 mb-8">
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/15 border border-accent/35 text-accent text-[11px] font-black uppercase tracking-[0.18em]">
            <BsStarFill className="text-[9px]" /> Featured Projects
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/20 to-transparent" />
          <span className="text-white/20 text-xs font-mono">{featuredProjects.length} selected</span>
        </div>

        {/* ══════════════════════════════════════════════════
            FEATURED — 6 Cards Grid
        ══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project, index) => {
            const cat = categoryMeta[project.category] || { label: project.category, icon: "📁" }
            return (
              <motion.div
                key={project.num}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/12 bg-white/[0.04] cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.6)] hover:border-accent/50 transition-all duration-350"
                onClick={() => setModalProject(project)}
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 40px rgba(var(--accent-rgb,200,200,0),0.07)' }} />

                {/* Image */}
                <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    layout="fill"
                    className="object-cover transition-transform duration-600 group-hover:scale-[1.07]"
                    alt={project.title}
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent text-primary text-[9px] font-black uppercase tracking-[0.12em] shadow-md shadow-accent/40">
                      <BsStarFill className="text-[7px]" /> Featured
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white/70 text-[9px] font-bold uppercase tracking-[0.1em]">
                      {cat.icon} {cat.label}
                    </span>
                  </div>

                  {/* Hover CTA overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-primary text-xs font-black uppercase tracking-[0.1em] shadow-lg shadow-accent/30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View details <BsArrowUpRight className="text-[11px]" />
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-xl font-black text-white leading-tight mb-1.5 tracking-tight">{project.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.slice(0, 5).map((s, i) => (
                      <span key={i} className="text-[10px] font-semibold text-accent/75 bg-accent/8 border border-accent/18 px-2 py-0.5 rounded-lg">
                        {s.name}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="text-[10px] text-white/30 px-1.5 py-0.5 rounded-lg bg-white/5 border border-white/8">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Bottom row: links */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/8">
                    <ProjectLinks project={project} />
                    <span className="text-[10px] text-white/25 font-medium group-hover:text-accent/60 transition-colors duration-200">
                      Click to expand →
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ══════════════════════════════════════════════════
            MORE PROJECTS — section label (mismo estilo que Featured)
        ══════════════════════════════════════════════════ */}
        <div className="flex items-center gap-3 mb-8">
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/8 border border-white/15 text-white/70 text-[11px] font-black uppercase tracking-[0.18em]">
            📁 More Projects
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
          <span className="text-white/20 text-xs font-mono">{otherProjects.length} projects</span>
        </div>

        {/* ══════════════════════════════════════════════════
            CATEGORY TABS
        ══════════════════════════════════════════════════ */}
        <div className="mb-8 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
          <div className="flex gap-2 min-w-max">
            {categories.map(cat => {
              const meta = categoryMeta[cat] || { label: cat, icon: "📁" }
              const count = otherProjects.filter(p => p.category === cat).length
              const isActive = activeCategory === cat
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0, scale: 0.97 }}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border
                    transition-all duration-250 whitespace-nowrap
                    ${isActive
                      ? 'bg-accent text-primary border-accent shadow-[0_4px_18px_rgba(var(--accent-rgb,200,200,0),0.3)]'
                      : 'bg-white/4 text-white/50 border-white/8 hover:bg-white/7 hover:text-white/75 hover:border-white/18'
                    }
                  `}
                >
                  <span>{meta.icon}</span>
                  <span>{meta.label}</span>
                  <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-md ${isActive ? 'bg-primary/25 text-primary' : 'bg-white/8 text-white/35'}`}>
                    {count}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            PROJECT GRID
        ══════════════════════════════════════════════════ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16"
          >
            {categoryProjects.map((project, index) => {
              const cat = categoryMeta[project.category] || { label: project.category, icon: "📁" }
              return (
                <motion.div
                  key={project.num}
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.28, delay: index * 0.055 }}
                  className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] hover:bg-white/[0.055] hover:border-white/18 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 cursor-pointer"
                  onClick={() => setModalProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-[185px] overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      layout="fill"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                    {/* Category chip */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/65 bg-black/50 backdrop-blur-sm border border-white/10 px-2 py-1 rounded-lg">
                        {cat.icon} {cat.label}
                      </span>
                    </div>

                    {/* Hover reveal CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/65 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold">
                        View details →
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-white leading-tight mb-2">{project.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>

                    {/* Stack preview */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.stack.slice(0, 4).map((item, i) => (
                        <span key={i} className="text-[10px] font-semibold text-accent/65 bg-accent/6 border border-accent/12 px-2 py-0.5 rounded-md">
                          {item.name}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="text-[10px] text-white/25 px-1.5 py-0.5">+{project.stack.length - 4}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ══════════════════════════════════════════════════
          DETAIL MODAL
      ══════════════════════════════════════════════════ */}
      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </motion.section>
  )
}

export default Work