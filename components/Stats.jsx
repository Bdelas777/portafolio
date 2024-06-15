"use client";
import CountUp  from "react-countup"

const stats = [
  {
    num:2,
    text:"Years of Experience"
  },
  {
    num:25,
    text:"Projects completed"
  },
  {
    num:32,
    text:"Technologies mastered"
  },
  {
    num:2013,
    text:"Code commits"
  }, 
]
const Stats = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">
        {stats.map((item,index)=>{
            return(
              <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start"> 
                <CountUp 
                  end={item.num} 
                  duration={5} 
                  delay={2} 
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                  leading-snug text-white/80`}>
                  {item.text}
                </p>
              </div>
        )})}
      </div>
    </div>
  )
}

export default Stats