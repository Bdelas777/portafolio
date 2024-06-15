import Link from "next/link"
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/Bdelas777'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/bernardo-de-la-sierra/'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/bdelas767/'},
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) =>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ); 
        })}
    </div>
  )
}

export default Socials