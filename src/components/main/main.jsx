import Styles from "./main.module.css"
import Aside from "./aside/aside"
import About from "./contentMain/About"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
function Main(){
        
       useEffect(()=>{
        AOS.init();
       },[])


    return(
            <div className={Styles.main} id="sobre" data-aos="fade-up" data-aos-duration="1000">
                    <About/>
                    <Aside/>
            </div>
        
    )
}

export default Main