import { useState } from "react";
import Styles from "./header.module.css"
import { FaBars,FaFolderClosed,FaHammer,FaEnvelope,FaDev} from "react-icons/fa6";
function Header(){
    const [open,setOpen] = useState(true)
    return(

            <nav className={Styles.header}>
                <div className={Styles.head}>
                    <div className={Styles.logo}>{"<JN/>"}</div>
                    <button className={Styles.bar} onClick={()=> (setOpen(!open),console.log(open))}><FaBars/></button>
                    <ul className={Styles.menu_container}>
                    <li className={Styles.menu}><a className={Styles.links} href="#sobre" ><FaBars />Sobre</a></li>
                    <li className={Styles.menu}><a className={Styles.links} href="#projetos" ><FaFolderClosed/>Projetos</a></li>
                    <li className={Styles.menu}><a className={Styles.links} href="#habilidade" ><FaHammer/>Habilidades</a></li>
                    <li className={Styles.menu}><a className={Styles.links} href="#contato" ><FaEnvelope/>Contato</a></li>
                </ul>
                </div>
                
                <div id={open ? Styles.open : ""} className={Styles.aside}>
                    <li className={Styles.menu}><a className={Styles.links} onClick={()=>(setOpen(true))} href="#sobre" ><FaBars />Sobre</a></li>
                    <li className={Styles.menu}><a className={Styles.links} onClick={()=>(setOpen(true))} href="#projetos" ><FaFolderClosed/>Projetos</a></li>
                    <li className={Styles.menu}><a className={Styles.links} onClick={()=>(setOpen(true))} href="#habilidade" ><FaHammer/>Habilidades</a></li>
                    <li className={Styles.menu}><a className={Styles.links} onClick={()=>(setOpen(true))} href="#contato" ><FaEnvelope/>Contato</a></li>
                </div>
            </nav>
        
    )
}

export default Header