import Styles from "./cards.module.css"
import { FaHtml5,FaCss3Alt,FaSquareJs,FaReact,FaGithub,FaLinkedin } from "react-icons/fa6";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
function Cards({img,title,exp,icon1,icon2,icon3,link,time}){
    useEffect(()=>{
        AOS.init();
       },[])
    return(
        <div className={Styles.main} data-aos="zoom-in" data-aos-duration={time}>
            
            <img className={Styles.photos} src={img}>
            </img>
            <h2 className={Styles.names}>{title} <div className={Styles.github}>
                <a href={link} target="_blank"><FaGithub/></a>
            </div></h2>
            <p className={Styles.exp}>{exp}</p>
            <div className={Styles.icones}>
                <a>{icon1}</a>
                <a>{icon2}</a>
                <a>{icon3}</a>
            </div>
        
        </div>
    )
}

export default Cards