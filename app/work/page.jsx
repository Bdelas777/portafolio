"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import { BsArrowUpRight, BsGithub, BsYoutube, BsX, BsStarFill } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "../../components/WorkSliderBtns"

const allProjects = [
  {
    num: '01', category: "full stack", title: "Vita", featured: true,
    description: "Vita is a comprehensive health application that offers personalized recommendations for nutrition, exercise, and sleep. Using artificial intelligence, it suggests exercise routines and analyzes calories and nutrients from food photographs.",
    stack: [{ name: 'Next' }, { name: 'Tailwind' }, { name: 'Gemini' }, { name: 'Open Ai' }, { name: 'Stripe' }, { name: 'WhatsApp Api' }, { name: 'Drizzle' }, { name: 'Cypress' }, { name: 'Vitest' }, { name: 'AWS' }, { name: 'Postgress' }, { name: 'Dotenv' }, { name: 'Typescript' }, { name: 'Github Actions' }],
    image: '/assets/work/vitapro.png', live: 'https://d8vd0r6uuds8z.cloudfront.net/', github: '', youtube: 'https://www.youtube.com/watch?si=O_9DcWiUeaAuGUey&v=dXF64rgcdLI&feature=youtu.be'
  },
  {
    num: '02', category: "full stack", title: "Maes", featured: true,
    description: "Spearheaded the creation of a user-centric website for the administration of the Student Academic Mentorship program at Tec de Monterrey, serving on average 3,500 monthly users",
    stack: [{ name: 'Vue' }, { name: 'Css 3' }, { name: 'Javascript' }, { name: 'Firebase' }, { name: 'Html 5' }],
    image: '/assets/work/MAE.png', live: 'https://maes.mx/', github: '', youtube: ''
  },
  {
    num: '03', category: "ios developer", title: "CivicMinds", featured: false,
    description: "CivicMinds is an innovative application designed to optimize the process of law creation and development in Mexico using augmented reality and artificial intelligence technologies.",
    stack: [{ name: 'SwiftUI' }, { name: 'UIKit' }, { name: 'VisionOS' }, { name: 'OpenAi Api' }],
    image: '/assets/work/vision.jpg', live: '', github: '', youtube: 'https://drive.google.com/file/d/17sKpes78WoAsWUj6f8hjyPspKJi_RoCt/view?usp=sharing'
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
    num: '08', category: "full stack", title: "Sistema de inscripciones para Proyecto 99", featured: false,
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
    description: "A food expiry tracking app is designed to store and record data on food items that are approaching their expiration dates, helping to manage inventory and reduce waste.",
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
]

const featuredProjects = allProjects.filter(p => p.featured)
const otherProjects = allProjects.filter(p => !p.featured)

const categoryLabels = {
  "full stack": "Full Stack",
  "ios developer": "iOS",
  "frontend": "Frontend",
  "console": "Console",
  "videogame": "Videogame",
  "investigation": "Research",
}

const categoryIcons = {
  "full stack": "⚡",
  "ios developer": "📱",
  "frontend": "🎨",
  "console": "⌨️",
  "videogame": "🎮",
  "investigation": "🔬",
}

const categories = [...new Set(otherProjects.map(p => p.category))]

// ── Project Links ────────────────────────────────────────────────────────────
const ProjectLinks = ({ project }) => (
  <div className="flex items-center gap-2">
    {project.live && (
      <Link href={project.live} target="_blank" passHref>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex justify-center items-center hover:bg-accent hover:border-accent transition-all duration-200 group">
                <BsArrowUpRight className="text-accent text-sm group-hover:text-primary" />
              </button>
            </TooltipTrigger>
            <TooltipContent><p>Live project</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    )}
    {project.github && (
      <Link href={project.github} target="_blank" passHref>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex justify-center items-center hover:bg-white/15 hover:border-white/30 transition-all duration-200 group">
                <BsGithub className="text-white/60 text-sm group-hover:text-white" />
              </button>
            </TooltipTrigger>
            <TooltipContent><p>GitHub</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    )}
    {project.youtube && (
      <Link href={project.youtube} target="_blank" passHref>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex justify-center items-center hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-200 group">
                <BsYoutube className="text-red-400 text-sm group-hover:text-red-300" />
              </button>
            </TooltipTrigger>
            <TooltipContent><p>Demo Video</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    )}
  </div>
)

// ── Featured Slide Info ──────────────────────────────────────────────────────
const FeaturedInfo = ({ project }) => (
  <motion.div
    key={project.num}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="flex flex-col gap-5 h-full justify-between"
  >
    <div className="flex flex-col gap-4">
      {/* Number + badge */}
      <div className="flex items-center gap-4">
        <span className="text-[72px] leading-none font-black text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.12)' }}>
          {project.num}
        </span>
        <div className="flex flex-col gap-1.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/20 border border-accent/40 text-accent text-[10px] font-bold uppercase tracking-[0.15em]">
            <BsStarFill className="text-[8px]" /> Featured
          </span>
          <span className="text-xs text-white/35 font-medium uppercase tracking-widest">
            {categoryLabels[project.category] || project.category}
          </span>
        </div>
      </div>

      {/* Title */}
      <div>
        <h2 className="text-4xl xl:text-5xl font-black text-white leading-[1.05] tracking-tight">
          {project.title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-white/55 text-sm leading-relaxed max-w-md">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((item, i) => (
          <span key={i}
            className="text-[11px] font-semibold text-accent/80 bg-accent/8 border border-accent/15 px-2.5 py-1 rounded-md tracking-wide">
            {item.name}
          </span>
        ))}
      </div>
    </div>

    {/* Links */}
    <div className="flex items-center gap-4 pt-2">
      <ProjectLinks project={project} />
      {!project.live && !project.github && !project.youtube && (
        <span className="text-xs text-white/25 italic">No public links</span>
      )}
    </div>
  </motion.div>
)

// ── Main Component ───────────────────────────────────────────────────────────
const Work = () => {
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")
  const [expandedCard, setExpandedCard] = useState(null)

  const featuredProject = featuredProjects[activeFeaturedIndex]

  const openImageModal = (image, e) => {
    e?.stopPropagation()
    setSelectedImage(image)
    setIsImageOpen(true)
  }

  const closeImageModal = () => {
    setIsImageOpen(false)
    setSelectedImage("")
  }

  const categoryProjects = otherProjects.filter(p => p.category === activeCategory)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-screen flex flex-col py-12 xl:py-0"
    >
      <div className="container mx-auto">

        {/* ══ FEATURED SECTION ══════════════════════════════════════════ */}
        <div className="mb-20">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-accent/20 border border-accent/40 flex items-center justify-center">
                <BsStarFill className="text-accent text-[11px]" />
              </div>
              <h2 className="text-lg font-bold text-white tracking-[0.08em] uppercase">Featured Projects</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
            <span className="text-xs text-white/25 font-mono">{featuredProjects.length} projects</span>
          </div>

          {/* Featured layout */}
          <div className="grid xl:grid-cols-2 gap-10 xl:gap-16 items-start">

            {/* LEFT: Info panel */}
            <div className="order-2 xl:order-1 xl:pt-4">
              <FeaturedInfo project={featuredProject} />
            </div>

            {/* RIGHT: Slider */}
            <div className="order-1 xl:order-2">
              <div className="relative">
                {/* Decorative glow behind slider */}
                <div className="absolute -inset-4 rounded-2xl bg-accent/5 blur-2xl pointer-events-none" />

                <Swiper
                  spaceBetween={24}
                  slidesPerView={1}
                  className="rounded-2xl overflow-hidden"
                  onSlideChange={(swiper) => setActiveFeaturedIndex(swiper.activeIndex)}
                  style={{ position: 'relative' }}
                >
                  {featuredProjects.map((project, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="relative h-[380px] xl:h-[460px] cursor-zoom-in overflow-hidden rounded-2xl"
                        onClick={(e) => openImageModal(project.image, e)}
                      >
                        {/* Featured pill */}
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-primary text-[10px] font-black uppercase tracking-[0.12em] shadow-lg shadow-accent/25">
                          <BsStarFill className="text-[8px]" /> Featured
                        </div>

                        {/* Project number overlay */}
                        <div className="absolute bottom-4 right-5 z-20 font-black text-[56px] leading-none text-white/10 select-none">
                          {project.num}
                        </div>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

                        {/* Image */}
                        <Image
                          src={project.image}
                          layout="fill"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          alt={project.title}
                        />

                        {/* Bottom info strip */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                          <p className="text-white font-bold text-lg leading-tight">{project.title}</p>
                          <p className="text-white/50 text-xs mt-0.5 capitalize">{project.category}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <WorkSliderBtns
                    containerStyles="flex gap-2 absolute right-4 bottom-4 z-30"
                    btnStyles="w-9 h-9 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white text-sm flex justify-center items-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-200"
                  />
                </Swiper>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {featuredProjects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFeaturedIndex(i)}
                      className={`transition-all duration-300 rounded-full ${
                        activeFeaturedIndex === i
                          ? 'w-6 h-2 bg-accent'
                          : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ SECTION DIVIDER ════════════════════════════════════════════ */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/8" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/3">
            <span className="text-white/30 text-xs uppercase tracking-[0.25em] font-semibold">All Projects</span>
          </div>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        {/* ══ CATEGORY TABS ══════════════════════════════════════════════ */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => {
              const count = otherProjects.filter(p => p.category === cat).length
              const isActive = activeCategory === cat
              return (
                <motion.button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setExpandedCard(null) }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0, scale: 0.97 }}
                  className={`
                    relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold
                    transition-all duration-300 border whitespace-nowrap
                    ${isActive
                      ? 'bg-accent text-primary border-accent shadow-[0_4px_20px_rgba(var(--accent-rgb,0,0,0),0.35)]'
                      : 'bg-white/4 text-white/50 border-white/8 hover:bg-white/8 hover:text-white/80 hover:border-white/20'
                    }
                  `}
                >
                  <span className="text-base">{categoryIcons[cat]}</span>
                  <span>{categoryLabels[cat] || cat}</span>
                  <span className={`
                    text-[11px] font-bold px-1.5 py-0.5 rounded-md min-w-[20px] text-center
                    ${isActive ? 'bg-primary/25 text-primary' : 'bg-white/8 text-white/35'}
                  `}>
                    {count}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* ══ PROJECT GRID ═══════════════════════════════════════════════ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-20"
          >
            {categoryProjects.map((project, index) => {
              const isExpanded = expandedCard === project.num
              return (
                <motion.div
                  key={project.num}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.06, ease: "easeOut" }}
                  className={`
                    group relative flex flex-col rounded-2xl overflow-hidden
                    border transition-all duration-300 cursor-pointer
                    ${isExpanded
                      ? 'bg-white/8 border-accent/50 shadow-[0_0_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]'
                      : 'bg-white/4 border-white/8 hover:bg-white/6 hover:border-white/18 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
                    }
                  `}
                  onClick={() => setExpandedCard(isExpanded ? null : project.num)}
                >
                  {/* Image */}
                  <div
                    className="relative h-[190px] overflow-hidden flex-shrink-0"
                    onClick={(e) => openImageModal(project.image, e)}
                  >
                    <Image
                      src={project.image}
                      layout="fill"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      alt={project.title}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                    {/* Category chip */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white/70 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                        {categoryIcons[project.category]}
                        {categoryLabels[project.category] || project.category}
                      </span>
                    </div>

                    {/* Zoom hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <BsArrowUpRight className="text-white text-sm rotate-0" />
                      </div>
                    </div>

                    {/* Number watermark */}
                    <div className="absolute bottom-2 right-3 font-black text-4xl leading-none text-white/10 select-none z-10">
                      {project.num}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-4">
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
                      <span className={`text-sm mt-0.5 flex-shrink-0 transition-transform duration-300 text-white/30 ${isExpanded ? 'rotate-180' : ''}`}>
                        ▾
                      </span>
                    </div>

                    {/* Collapsed: show first 4 tags */}
                    {!isExpanded && (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.stack.slice(0, 4).map((item, i) => (
                          <span key={i}
                            className="text-[11px] text-accent/65 bg-accent/6 border border-accent/12 px-2 py-0.5 rounded-md font-medium">
                            {item.name}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="text-[11px] text-white/25 px-2 py-0.5">
                            +{project.stack.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Expanded: full info */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/50 text-sm leading-relaxed mb-3 mt-1">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.stack.map((item, i) => (
                              <span key={i}
                                className="text-[11px] text-accent/80 bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-md font-semibold">
                                {item.name}
                              </span>
                            ))}
                          </div>
                          {/* Divider */}
                          <div className="h-px bg-white/8 mb-3" />
                          <ProjectLinks project={project} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ══ IMAGE MODAL ══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex justify-center items-center z-50 p-6"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-xl bg-black/70 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/90 hover:border-white/30 transition-all duration-200"
                onClick={closeImageModal}
              >
                <BsX className="text-xl" />
              </button>
              <Image
                src={selectedImage}
                width={900}
                height={600}
                className="object-contain w-full"
                alt="Preview"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default Work