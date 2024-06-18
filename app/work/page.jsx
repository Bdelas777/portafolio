"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import {Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import {BsArrowUpRight, BsGithub, BsYoutube} from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider,  TooltipTrigger } from "../../components/ui/tooltip";
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "../../components/WorkSliderBtns"

const projects = [
  {
    num: '01',
    category:"full stack",
    title:"Vita",
    description:"Vita is a comprehensive health application that offers personalized recommendations for nutrition, exercise, and sleep. Using artificial intelligence, it suggests exercise routines and analyzes calories and nutrients from food photographs.",
    stack: [
      {name: 'Next'},
      {name: 'Tailwind'},
      {name: 'Gemini'},
      {name: 'Open Ai'},
      {name: 'Stripe'},
      {name: 'WhatsApp Api'},
      {name: 'Drizzle'},
      {name: 'Cypress'},
      {name: 'Vitest'},
      {name: 'AWS'},
      {name: 'Postgress'},
      {name: 'Dotenv'},
      {name: 'Typescript'},
    ],
    image: '/assets/work/vitapro.png',
    live: 'https://d8vd0r6uuds8z.cloudfront.net/',
    github: '',
    youtube: 'https://www.youtube.com/watch?si=O_9DcWiUeaAuGUey&v=dXF64rgcdLI&feature=youtu.be'
  },
  {
    num: '02',
    category:"full stack",
    title:"Maes",
    description:"Spearheaded the creation of a user-centric website for the administration of the Student Academic Mentorship program at Tec de Monterrey, serving on average 3,500 monthly users",
    stack: [
      {name: 'Vue'},
      {name: 'Css 3'},
      {name: 'Javascript'},
      {name: 'Firebase'},
      {name: 'Html 5'},
    ],
    image: '/assets/work/MAE.png',
    live: 'https://maes.mx/student/home#/inicio',
    github: '',
    youtube: ''
  },
  {
    num: '03',
    category:"ios developer",
    title:"CivicMinds",
    description:"CivicMinds is an innovative application designed to optimize the process of law creation and development in Mexico using augmented reality and artificial intelligence technologies.",
    stack: [
      {name: 'SwiftUI'},
      {name: 'UIKit'},
      {name: 'VisionOS'},
      {name: 'OpenAi Api'},
    ],
    image: '/assets/work/Civic.png',
    live: '',
    github: '',
    youtube: 'https://drive.google.com/file/d/17sKpes78WoAsWUj6f8hjyPspKJi_RoCt/view?usp=sharing'
  },
  {
    num: '04',
    category:"ios developer",
    title:"AcrossMexico",
    description:"The application was developed using SpriteKit as the main foundation, focusing especially on scene generation for the game. This technology was employed to display information cards and allow the user to dismiss them. To manage transitions between scenes, UIKit was chosen, making it easy to switch between the game and the model designed using the MVVM (Model-View-ViewModel) design pattern to implement a quiz. This quiz was used to assess the knowledge acquired by the user during the game.",
    stack: [
      {name: 'SwiftUI'},
      {name: 'UIKit'},
      {name: 'MVVM'},
      {name: 'RealityKit'},
      {name: 'AVFoundation'},
      {name: 'SpriteKit'},
    ],
    image: '/assets/work/across.jpg',
    live: 'https://www.wwdcscholars.com/s/12441737-ECCF-4692-8BDA-83F0B9EBF97C/2024',
    github: 'https://github.com/Bdelas777/AcrossMexico',
    youtube: ''
  },
  {
    num: '05',
    category:"ios developer",
    title:"TECuido",
    description:"TECuido is your personal medical assistant that will provide support for any emergency situation, from injury detection to prescription tracking.",
    stack: [
      {name: 'SwiftUI'},
      {name: 'UIKit'},
      {name: 'MapKit'},
      {name: 'CoreML'},
      {name: 'Express'},
      {name: 'Node.js'},
      {name: 'Postman'},
      {name: 'Dotenv'},
    ],
    image: '/assets/work/TEcuido.jpg',
    live: 'https://apps.apple.com/mx/app/tecuido-by-dilo-en-se%C3%B1as/id6476895704',
    github: '',
    youtube: 'https://www.youtube.com/watch?v=V1En6iZ9CLc'
  },
  {
    num: '06',
    category:"full stack",
    title:"Depas",
    description:"This application facilitates the sale or rental of rooms, apartments, or houses. ",
    stack: [
      {name: 'Express'},
      {name: 'MongoDB'},
      {name: 'MapKit'},
      {name: 'React'},
      {name: 'MUI'},
      {name: 'MapBox'},
      {name: 'Google Cloud'},
      {name: 'Mongo Atlas'},
      {name: 'Javascript'},
      {name: 'Html 5'},
      {name: 'Css 3'},
    ],
    image: '/assets/work/depas.png',
    live: 'https://depas2.netlify.app/',
    github: 'https://github.com/Bdelas777/depas',
    youtube: ''
  },
  {
    num: '07',
    category:"full stack",
    title:"Test Hero",
    description:"This is an application that, through a web platform created in React, allows you to create exams that will be played by a video game created in Unity. It should be noted that the backend is made in C#",
    stack: [
      {name: 'C#'},
      {name: 'Unity'},
      {name: 'MySql'},
      {name: 'React'},
      {name: 'Victory'},
      {name: 'MUI'},
      {name: 'Google Cloud'},
      {name: 'Mongo Atlas'},
      {name: 'Javascript'},
      {name: 'Html 5'},
      {name: 'Css 3'},
      {name: 'Boostrap'},
    ],
    image: '/assets/work/test.png',
    live: '',
    github: 'https://github.com/Kingsman-Construccion-de-software',
    youtube: 'https://drive.google.com/drive/folders/1lLyFCotX8I4_4QblLuyB3n5E-WPkR-cJ?usp=sharing'
  },
  {
    num: '08',
    category:"full stack",
    title:"Sistema de inscripciones para Proyecto 99",
    description:"Led backend development for the implementation of a comprehensive system for class registrations.Oversaw CRUD operations and contributed to UI design ",
    stack: [
      {name: 'MongoDB'},
      {name: 'Express'},
      {name: 'Javascript'},
      {name: 'Firebase'},
      {name: 'Html 5'},
      {name: 'Css 3'},
      {name: 'Material UI'},
      {name: 'React'},
    ],
    image: '/assets/work/P99.png',
    live: 'https://p99test.fly.dev/',
    github: 'https://github.com/TeraBlitz/P99_ProyectoInvierno2022?tab=readme-ov-file',
    youtube: ''
  },
  {
    num: '09',
    category:"full stack",
    title:"Iulius",
    description:"Social Media.",
    stack: [
      {name: 'Mongoose'},
      {name: 'Express'},
      {name: 'Javascript'},
      {name: 'Morgan'},
      {name: 'Html 5'},
      {name: 'Css 3'},
      {name: 'React'},
      {name: 'Material UI'},
    ],
    image: '/assets/work/social.png',
    live: '',
    github: 'https://github.com/Bdelas777/Iulius',
    youtube: ''
  },
  {
    num: '10',
    category:"full stack",
    title:"Creator Notes",
    description:"Creating a Notes project involves developing an application that allows users to create, store, and manage their notes.",
    stack: [
      {name: 'MySQL'},
      {name: 'Express'},
      {name: 'Jasvacript'},
      {name: 'Boostrap'},
      {name: 'Html 5'},
      {name: 'Css 3'},
      {name: 'React'},
    ],
    image: '/assets/work/Notes.png',
    live: '',
    github: 'https://github.com/Bdelas777/Iulius',
    youtube: ''
  },
  {
    num: '11',
    category:"full stack",
    title:"Rick and Morty app",
    description:"This project is a notes web application that uses the Rick and Morty API to display information related to the characters from the series. The main objective of this project is to learn and practice development with Next.js, Husky, Prettier, and ESLint.",
    stack: [
      {name: 'Next'},
      {name: 'React'},
      {name: 'Typecript'},
      {name: 'Tailwind'},
      {name: 'Html 5'},
      {name: 'Drizzle'},
      {name: 'Vercel'},
      {name: 'Postgress'},
      {name: 'Husky'},
      {name: 'Prettier'},
      {name: 'ESLint'},
    ],
    image: '/assets/work/Rick.png',
    live: 'https://rick-morty-eight-teal.vercel.app/',
    github: 'https://github.com/Bdelas777/WizelineClass',
    youtube: ''
  },
  {
    num: '12',
    category:"videogame",
    title:"VideoGame Python",
    description:"At the start of the game, any key must be pressed to begin. The spaceship fires when the spacebar is pressed and moves left and right with the arrow keys. To win, you must avoid and eliminate enemy ships. After 60 seconds, you win the game, but it continues until the player loses.",
    stack: [
      {name: 'Python'},
      {name: 'Pygame'},
    ],
    image: '/assets/work/Back.png',
    live: '',
    github: 'https://github.com/Bdelas777/VideogamePython',
    youtube: ''
  },
  {
    num: '13',
    category:"frontend",
    title:"VideoGame Python",
    description:"Collaborated on the development of an AI-driven financial analysis project, focusing on the web .",
    stack: [
      {name: 'React'},
      {name: 'PostgreSQL'},
      {name: 'TensorFlow'},
      {name: 'Html 5'},
      {name: 'Css 3'},
    ],
    image: '/assets/work/Invest.png',
    live: '',
    github: 'https://github.com/Bdelas777/VideogamePython',
    youtube: 'https://www.youtube.com/watch?v=qawrHlVeF5U'
  },
  {
    num: '14',
    category:"frontend",
    title:"Tasks app",
    description:"A tasks app is a digital tool designed to help users organize, manage, and track their daily activities and responsibilities",
    stack: [
      {name: 'React'},
      {name: 'Html 5'},
      {name: 'Css 3'},
    ],
    image: '/assets/work/task.png',
    live: 'https://bdelas777.github.io/react-tasks-app/',
    github: 'https://github.com/Bdelas777/react-tasks-app',
    youtube: ''
  },
  {
    num: '15',
    category:"full stack",
    title:"Food4All",
    description:"A food expiry tracking app is designed to store and record data on food items that are approaching their expiration dates, helping to manage inventory and reduce waste.",
    stack: [
      {name: 'Django'},
      {name: 'Html 5'},
      {name: 'Css 3'},
      {name: 'SwiftUI'},
      {name: 'SQlite'},
    ],
    image: '/assets/work/Food.jpg',
    live: 'https://bdelas777.github.io/react-tasks-app/',
    github: 'https://github.com/Bdelas777/react-tasks-app',
    youtube: ''
  },
  {
    num: '16',
    category:"Console",
    title:"Dialogue Framework",
    description:"This application allows us to see the different types of messages that Java launches. For this, the awt and swing libraries are used.",
    stack: [
      {name: 'Java'},
      {name: 'Java.Awt'},
      {name: 'Java.swing'},
    ],
    image: '/assets/work/Dia.png',
    live: '',
    github: 'https://github.com/Bdelas777/MarcoDialogos?tab=readme-ov-file',
    youtube: ''
  },
  {
    num: '17',
    category:"Console",
    title:"Threads",
    description:"This practice is about thread has to 2 projects: A bank section and a ball simulation",
    stack: [
      {name: 'Java'},
      {name: 'Java.Util'},
      {name: 'Java.Awt'},
      {name: 'Java.swing'},
    ],
    image: '/assets/work/Ball.png',
    live: '',
    github: 'https://github.com/Bdelas777/ThreadsProjects/tree/main',
    youtube: ''
  },
  {
    num: '18',
    category:"Investigation",
    title:"Genoma",
    description:"The study of genomes using R involves leveraging statistical and computational tools to analyze large-scale genomic data. ",
    stack: [
      {name: 'R'},
    ],
    image: '/assets/work/Genoma.png',
    live: '',
    github: 'https://github.com/Bdelas777/Genomas/tree/main',
    youtube: ''
  },
  {
    num: '19',
    category:"Console",
    title:"Chat",
    description:"This practice is about thread has to 2 projects: A bank section and a ball simulation",
    stack: [
      {name: 'Java'},
      {name: 'Java.Util'},
      {name: 'Java.Net'},
      {name: 'Java.swing'},
      {name: 'Java.io'},
    ],
    image: '/assets/work/Chat.png',
    live: '',
    github: 'https://github.com/Bdelas777/ChatAplication?tab=readme-ov-file',
    youtube: ''
  },
  {
    num: '20',
    category:"Console",
    title:"Text editor",
    description:"Here are the different stages to make a word processor and it is being done with Java through Events.",
    stack: [
      {name: 'Java'},
      {name: 'Java.Awt'},
      {name: 'Java.swing'},
    ],
    image: '/assets/work/text.png',
    live: '',
    github: 'https://github.com/Bdelas777/Procesadordetexto?tab=readme-ov-file',
    youtube: ''
  },
  {
    num: '21',
    category:"Console",
    title:"AppCovid",
    description:"This is a console application to analyze COVID information in the year 2021, use the pil and matplot libraries",
    stack: [
      {name: 'Python'},
      {name: 'PIL'},
      {name: 'Matplotlib'},
    ],
    image: '/assets/work/covid.png',
    live: '',
    github: 'https://github.com/Bdelas777/AppCovid',
    youtube: ''
  },
  {
    num: '22',
    category:"Console",
    title:"Salary calculator",
    description:"This is a calculator of a worker's salary for the year 2020 and only works on console",
    stack: [
      {name: 'Python'},
      {name: 'PIL'},
      {name: 'Matplotlib'},
    ],
    image: '/assets/work/isr.png',
    live: '',
    github: 'https://github.com/Bdelas777/Salario2020/tree/main',
    youtube: ''
  },
  
]

const Work = () => {
  const [ project,SetProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    SetProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{opacity: 0 }} 
      animate={{opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} 
              </h2>
              <h3 className=" text-[28px] font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h3>
              <p className="text-white/60 text-justify">
                {project.description}
              </p>
              <ul className="flex gap-4  flex-wrap">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-lg text-accent">
                      {item.name}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} passHref>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} passHref>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                  </Link>
                )}
                {project.youtube && (
                  <Link href={project.youtube} passHref>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsYoutube className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Youtube project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                  </Link>
                )}
                </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slicesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=>{
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image} 
                          fill l
                          className="object-cover"
                          alt="Image project"
                        />
                      </div>
                    </div>
                  </SwiperSlide> 
                )
              })}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px]
              h-[44px] flex justify-center items-center transition-all "
              /> 
            </Swiper>
          </div> 
        </div>
      </div>
    </motion.section>
  )
}

export default Work