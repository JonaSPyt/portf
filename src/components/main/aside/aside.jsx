import Styles from './aside.module.css'
import logo from "./perfil.png"
import { FaHtml5, FaCss3Alt, FaSquareJs, FaReact, FaGithub, FaLinkedin, FaNodeJs, FaPython } from "react-icons/fa6";
import { SiTypescript, SiVuedotjs } from "react-icons/si";

function Aside() {
    return (
        <div className={Styles.aside}>
            <div className={Styles.card}>
                <header className={Styles.header}>
                    <div className={Styles.name_block}>
                        <h1>Jonas Emanuel</h1>
                        <p>Desenvolvedor Full-Stack</p>
                    </div>
                    <div className={Styles.span}>
                        <FaHtml5 className={Styles.icon} title="HTML5" />
                        <FaCss3Alt className={Styles.icon} id={Styles.icon1} title="CSS3" />
                        <FaSquareJs className={Styles.icon} title="JavaScript" />
                        <FaReact className={Styles.icon} title="React" />
                        <SiVuedotjs className={Styles.icon} title="Vue.js" />
                        <SiTypescript className={Styles.icon} title="TypeScript" />
                        <FaPython className={Styles.icon} title="Python" />
                        <FaNodeJs className={Styles.icon} title="Node.js" />
                    </div>
                </header>
                <main className={Styles.main}>
                    <img className={Styles.img} src={logo} alt="Foto de Jonas Emanuel" />
                    <div className={Styles.social}>
                        <a href="https://github.com/JonaSPyt" target='_blank' rel="noopener noreferrer" className={Styles.cont} title="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/jonas-emanuel/" target='_blank' rel="noopener noreferrer" className={Styles.cont} title="LinkedIn"><FaLinkedin /></a>
                    </div>
                    <a href='#contato' className={Styles.button}>Contrate-me</a>
                </main>
            </div>
        </div>
    )
}

export default Aside