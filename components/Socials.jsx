import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FacLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
    {
        icon: <RiInstagramFill />,
        path: "https://www.instagram.com/ziaur.rahman123/profilecard/?igsh=MTBicWJsOTMwdDA0NA=="
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/share/1DUgZfAdUF/"
    },
    {
        icon: <FaTwitter />,
        path: "https://twitter.com/?lang=en"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/ziaur-rahman-a44b3831a/"
    },
    
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link href={item.path} key={index} className={iconStyles}>{item.icon}<span></span></Link>
        })}
    </div>
  )
}

export default Socials;