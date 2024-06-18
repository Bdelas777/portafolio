import Photo from "../components/Photo";
import Socials from "../components/Socials";
import Stats from "../components/Stats";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Software Developer
            </span>
            <h1 className="h1 mb-6">
              Hello I am <br />
              <span className="text-accent"> Bernardo de la Sierra</span>
            </h1>
            <p className="max-w-[650px] mb-9 text-white/88 text-justify">
            I am a computer systems engineering student with a specialization in high school accounting. I have a keen
            interest in web and iOS development and a passion for exploring new technologies. Additionally, I
            thoroughly enjoy working collaboratively, both as a team member and leader, extracting the best from
            each individual. I excel in adapting to various situations when needed and prioritize empathy towards
            others in a professional setting
            </p>
            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/mycv.pdf" download="CV_Bernardo_de_la_Sierra.pdf">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="uppercase flex items-center gap-2 transition-transform transform hover:scale-105 duration-300"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full justify-center items-center 
                  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all 
                  duration-500 flex"
                />
              </div>
            </div>
          </div>
          {/* Foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 " >
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
