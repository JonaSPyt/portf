import Styles from './aside.module.css'

import logo from "./perfil.png"
import { FaHtml5,FaCss3Alt,FaSquareJs,FaReact,FaGithub,FaLinkedin,FaBootstrap} from "react-icons/fa6";
function Aside(){
    return(
        <div className={Styles.aside}>
            <div className={Styles.card}>
                <header className={Styles.header}>
                    <div className='flex-column pl-5 align-items-center'>
                        <h1>Jonas</h1>
                        <p>Desenvolvedor Frontend</p>
                    </div>
                    <div className={Styles.span}><FaHtml5 className={Styles.icon}/> <FaCss3Alt className={Styles.icon} id={Styles.icon1}/> <FaSquareJs className={Styles.icon}/> <FaReact className={Styles.icon}/> <FaBootstrap className={Styles.icon}/></div>
                </header>
                <main className={Styles.main}>
                    <img className={Styles.img} src={logo}>
                        
                    </img>
                    <div className='mt-5'>
                        <a href="https://github.com/JonaSPyt" target='_blank' className={Styles.cont}><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/jonas-emanuel-10b41b239/" target='_blank' className={Styles.cont}><FaLinkedin /></a>
                    </div>
                    <a href='#contato' className={Styles.button}>Contrate-me</a>
                </main>
            </div>
        </div>
    )
}

export default Aside