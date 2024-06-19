"use client"
import { useSwiper} from "swiper/react"
import { PiCaretRightBold, PiCaretLeftBold} from "react-icons/pi"

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
        <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
            <PiCaretLeftBold className={iconsStyles} />
        </button>
        <button className={btnStyles}>
            <PiCaretRightBold className={iconsStyles} onClick={()=> swiper.slideNext()}/>
        </button>
    </div>
  )
}

export default WorkSliderBtns