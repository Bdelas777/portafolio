"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaVuejs, FaAngular, FaNodeJs, FaDocker, FaPython, FaJava, FaSwift, FaAws,  } from 'react-icons/fa';
import { SiCsharp, SiTypescript, SiTailwindcss, SiNextdotjs, SiDjango, SiCplusplus, SiSpring, SiExpress, SiFlask, SiCypress, SiVitest, SiFirebase, SiMongodb, SiSass, SiPostman, SiFlutter, SiMysql, SiPostgresql, SiJira, SiAzure, SiSqlite } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger} from "../../components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider,  TooltipTrigger } from "../../components/ui/tooltip";
import { ScrollArea } from "../../components/ui/scroll-area";
import {  motion } from "framer-motion"

const about = {
    title: 'About me ',
    description: 'I am Bernardo de la Sierra Rábago, a Computer Science student at Tecnológico de Monterrey, graduating in June 2025. I specialize in web and mobile development with expertise in HTML, CSS, JavaScript, TypeScript, SwiftUI, MongoDB, React, Vue.js, Node.js, Docker, Firebase, and more. I have experience leading projects and teams, developing AI-driven applications, and creating user-centric solutions. Passionate about technology and problem-solving, I am committed to leveraging my skills to make a positive impact.',
    info: [
        {
          fieldname: "Name",
          fieldValue: "Bernardo de la Sierra"
        },
        {
          fieldname: "Phone",
          fieldValue: "3+ Years"
        },
        {
          fieldname: "Instagram",
          fieldValue: "bdelas767"
        },
        {
          fieldname: "Nationality",
          fieldValue: "Mexican"
        },
        {
          fieldname: "Email",
          fieldValue: "bdelasierrar@gmail.com"
        },
        {
          fieldname: "Languages",
          fieldValue: "English, Spanish"
        },
        
    ]
  }

const experience = {
  icon: "/assets/resume/badge.svg",
  title: 'My experience',
  description: 'I am Bernardo de la Sierra Rábago, pursuing a B.S. in Computer Science at Tecnológico de Monterrey, graduating in June 2025. My skills include several technologies such as JavaScript, SwiftUI, and Docker. I have worked on projects like the TECuido medical assistant app and led backend development for Proyecto 99. As Vice President of SwiftTec, I promoted Swift and taught CoreML. Volunteering for the MAE Web Platform, I helped 3,500 monthly users. Fluent in English (B2 level), I excel in teamwork, leadership, and problem-solving.',
  items: [
    { 
      company: 'MAES',
      position: 'Full Stack Developer',
      duration:'Aug 2023 - present'
    },
    { 
      company: 'Proyecto 99',
      position: 'Full Stack Developer',
      duration:'Dec 2022 - Feb 2023'
    }
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: 'My education',
  description: 'I am a Computer Systems Engineering student specializing in high school accounting. My interests focus on web and iOS development, driven by a curiosity for new technologies. I thrive in collaborative settings, whether leading teams or working as part of one, and I prioritize empathy to foster positive professional relationships.',
  items: [
    { 
      institution: 'Tecnológico de Monterrey',
      degree: 'Bachelor in Computer Science',
      duration:'August 2021 - present'
    },
    { 
      institution: 'University of Michigan',
      degree: ' Database Architecture, Scale, and NoSQL with  Elasticsearch',
      duration:'May 2024'
    },
    { 
      institution: 'International Lean Six Sigma',
      degree: 'International Lean Six Sigma',
      duration:'April 2024'
    },
    { 
      institution: 'Udemy',
      degree: 'Microservices with angular and spring',
      duration:'December 2023'
    },
    { 
      institution: 'Udemy',
      degree: 'Vue.js',
      duration:'November 2023'
    },
    { 
      institution: 'Udemy',
      degree: 'Angular,Docker,SASS and Gitflow',
      duration:'July 2023'
    },
    { 
      institution: 'Udemy',
      degree: 'Angular and Ionic',
      duration:'April 2023'
    },
    { 
      institution: 'Udemy',
      degree: 'Java',
      duration:'January 2023'
    },
    { 
      institution: 'Udemy',
      degree: 'R',
      duration:'January 2023'
    },
    { 
      institution: 'Udemy',
      degree: 'MongoDB',
      duration:'December 2022'
    },
    { 
      institution: 'Udemy',
      degree: 'Python',
      duration:'July 2022'
    },
    { 
      institution: 'Carlos Slim foundation',
      degree: 'Diploma in website and mobile application development',
      duration:'December 2020'
    },
    { 
      institution: 'Carlos Slim foundation',
      degree: 'Technical diploma in cloud computing',
      duration:'December 2020'
    },
    { 
      institution: 'Cisco',
      degree: 'Introduction to IoT',
      duration:'June 2020'
    },
    { 
      institution: 'Cisco',
      degree: 'Introduction to cyber security',
      duration:'June 2020'
    },
   
  ]
}

const skills = {
  title: 'My skills',
  description: 'I possess a diverse set of skills in web and iOS development, including proficiency in programming languages such as Swift, JavaScript, and Python. I am experienced in using frameworks and tools like SwiftUI, Vue.js, React, and Unity for developing innovative applications. Additionally, I have strong project management abilities, a solid understanding of AI and AR technologies, and a commitment to continuous learning and adapting to new challenges.',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML 5' },
    { icon: <FaCss3 />, name: 'CSS 3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaSwift />, name: 'Swift' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiCsharp />, name: 'C#' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <FaVuejs />, name: 'Vue' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaAngular />, name: 'Angular' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <SiSpring />, name: 'Spring' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <SiCypress />, name: 'Cypress' },
    { icon: <SiVitest />, name: 'Vitest' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiSass />, name: 'SASS' },
    { icon: <SiPostman />, name: 'Postman' },
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiJira />, name: 'Jira' },
    { icon: <SiAzure />, name: 'Azure' },
    { icon: <SiSqlite />, name: 'SQLite' },
    { icon: <FaNodeJs />, name: 'Node.js' },
  ]
};


const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0 }} 
      animate={{opacity: 1, transition: 
        {delay: 2.4, duration: 0.4, ease: 'easeIn'}
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto ">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about">
              About me
            </TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent  value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[720px] text-white/60 mx-auto xl:mx-0 text-justify'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index)=>{
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'>
                            </span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
             {/* education */}
            <TabsContent  value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[720px] text-white/60 mx-auto xl:mx-0 text-justify'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index)=>{
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'>
                            </span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent  value="skills" className="w-full">
              skills 
            </TabsContent>
            {/* about */}
            <TabsContent  value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume