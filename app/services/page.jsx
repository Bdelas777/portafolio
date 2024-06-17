"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Experienced Full Stack Developer proficient in front-end technologies including Next.js, Vue.js, Angular, and React, as well as back-end frameworks like C#, Flask, Django, and Express. Adept at building robust, scalable web applications with a focus on seamless user experiences and efficient server-side performance.",
    href: ""
  },
  {
    num: "02",
    title: "Mobile developer: IOS",
    description: "Skilled iOS Developer proficient in SwiftUI, MapKit, UIKit, VisionOS, RealityKit, AVFoundation, and SpriteKit. Experienced in using the MVVM (Model-View-ViewModel) architecture to build robust and innovative mobile applications.",
    href: ""
  },
  {
    num: "03",
    title: "Product Manager",
    description: "Experienced Product Manager adept in Agile(Scrum and Kanban) and Waterfall methodologies, utilizing tools like Jira, Notion, Azure, and Trello. Skilled in leading cross-functional teams, managing project timelines, and delivering high-quality products efficientl",
    href: ""
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col juestify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent 
                  group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                    transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl " />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                  transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p>
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full">
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
