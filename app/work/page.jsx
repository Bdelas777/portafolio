"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import { BsArrowUpRight, BsGithub, BsYoutube, BsX, BsStar, BsStarFill } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
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
  "ios developer": "iOS Developer",
  "frontend": "Frontend",
  "console": "Console",
  "videogame": "Videogame",
  "investigation": "Investigation",
}

const categories = [...new Set(otherProjects.map(p => p.category))]

// Project Links Row
const ProjectLinks = ({ project }) => (
  <div className="flex items-center gap-3">
    {project.live && (
      <Link href={project.live} passHref>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[44px] h-[44px] rounded-full bg-white/5 flex justify-center items-center group">
              <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
            </TooltipTrigger>
            <TooltipContent><p>Live project</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    )}
    {project.github && (
      <Link href={project.github} passHref>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[44px] h-[44px] rounded-full bg-white/5 flex justify-center items-center group">
              <BsGithub className="text-white text-xl group-hover:text-accent" />
            </TooltipTrigger>
            <TooltipContent><p>Github</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    )}
    {project.youtube && (
      <Link href={project.youtube} passHref>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[44px] h-[44px] rounded-full bg-white/5 flex justify-center items-center group">
              <BsYoutube className="text-white text-xl group-hover:text-accent" />
            </TooltipTrigger>
            <TooltipContent><p>YouTube</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    )}
  </div>
)

const Work = () => {
  const [featuredProject, setFeaturedProject] = useState(featuredProjects[0])
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")
  const [expandedCard, setExpandedCard] = useState(null)

  const handleFeaturedSlideChange = (swiper) => {
    setFeaturedProject(featuredProjects[swiper.activeIndex])
  }

  const openImageModal = (image) => {
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

        {/* ── FEATURED SECTION ─────────────────────────────────── */}
        <div className="mb-16">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <BsStarFill className="text-accent text-2xl" />
            <h2 className="text-3xl font-bold text-white tracking-wide">Featured Projects</h2>
            <div className="flex-1 h-px bg-white/10 ml-2" />
          </div>

          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            {/* Info panel */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[24px] h-[50%]">
                <div className="flex items-center gap-3">
                  <span className="text-6xl leading-none font-extrabold text-transparent text-outline">
                    {featuredProject.num}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-semibold uppercase tracking-widest">
                    <BsStarFill className="text-[10px]" /> Featured
                  </span>
                </div>
                <div>
                  <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                    {featuredProject.title}
                  </h2>
                  <h3 className="text-[20px] font-semibold text-accent capitalize mt-1">
                    {featuredProject.category} project
                  </h3>
                </div>
                <p className="text-white/60 text-justify text-sm leading-relaxed">
                  {featuredProject.description}
                </p>
                <ul className="flex gap-2 flex-wrap">
                  {featuredProject.stack.map((item, index) => (
                    <li key={index} className="text-sm text-accent">
                      {item.name}{index !== featuredProject.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20" />
                <ProjectLinks project={featuredProject} />
              </div>
            </div>

            {/* Swiper */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleFeaturedSlideChange}
              >
                {featuredProjects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 cursor-pointer"
                      onClick={() => openImageModal(project.image)}
                    >
                      {/* Featured badge on image */}
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-wider shadow-lg">
                        <BsStarFill className="text-[10px]" /> Featured
                      </div>
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          layout="fill"
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>

        {/* ── DIVIDER ───────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-sm uppercase tracking-[4px] font-medium">More Projects</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* ── CATEGORIES TABS ───────────────────────────────────── */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count = otherProjects.filter(p => p.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-accent text-primary border-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.4)]'
                      : 'bg-white/5 text-white/60 border-white/10 hover:border-accent/40 hover:text-white'
                  }`}
                >
                  {categoryLabels[cat] || cat}
                  <span className={`ml-2 text-xs rounded-full px-1.5 py-0.5 ${activeCategory === cat ? 'bg-primary/30' : 'bg-white/10'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── CATEGORY GRID ─────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16"
          >
            {categoryProjects.map((project, index) => (
              <motion.div
                key={project.num}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === project.num ? null : project.num)}
              >
                {/* Image */}
                <div
                  className="relative h-[200px] overflow-hidden"
                  onClick={(e) => { e.stopPropagation(); openImageModal(project.image) }}
                >
                  <Image
                    src={project.image}
                    layout="fill"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50 bg-black/40 px-2 py-1 rounded-md">
                      {categoryLabels[project.category] || project.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-xs text-white/30 font-mono">#{project.num}</span>
                      <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedCard === project.num && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/50 text-sm leading-relaxed mb-3">{project.description}</p>
                        <ul className="flex flex-wrap gap-1.5 mb-4">
                          {project.stack.map((item, i) => (
                            <li key={i} className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                              {item.name}
                            </li>
                          ))}
                        </ul>
                        <ProjectLinks project={project} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expandedCard !== project.num && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.stack.slice(0, 4).map((item, i) => (
                        <span key={i} className="text-xs text-accent/70 bg-accent/5 px-2 py-0.5 rounded-full border border-accent/10">
                          {item.name}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="text-xs text-white/30 px-2 py-0.5">+{project.stack.length - 4} more</span>
                      )}
                    </div>
                  )}

                  <div className="mt-3 text-xs text-white/30 text-right">
                    {expandedCard === project.num ? '▲ collapse' : '▼ expand'}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image modal */}
      {isImageOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg">
            <button
              className="absolute top-4 right-4 rounded-full bg-blue-500 text-3xl"
              onClick={closeImageModal}
            >
              <BsX />
            </button>
            <Image
              src={selectedImage}
              width={800}
              height={600}
              className="object-contain"
              alt="Full size image"
            />
          </div>
        </div>
      )}
    </motion.section>
  )
}

export default Work