import Styles from "./habilites.module.css"
import "./habilites.module.css"
import { FaHtml5, FaCss3Alt, FaSquareJs, FaReact, FaGithub, FaLinkedin, FaBootstrap } from "react-icons/fa6";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
function Habilites() {
    useEffect(()=>{
        AOS.init();
       },[])

    return (
        <div className={Styles.main_container} id="habilidade">
            <div className={Styles.main}>
                <h1 className={Styles.sub}>Habilidades</h1>
                <div className={Styles.react} data-aos="fade" data-aos-duration="1000">
                    <div className={Styles.session1}>
                        <div className={Styles.session_container}>
                            <h2 className={Styles.logo}><FaHtml5 /><FaCss3Alt /></h2>
                            <h3 className={Styles.name}>HTML/CSS</h3>
                        </div>

                        <p className={Styles.text}>Tenho experiência sólida em HTML e CSS, as linguagens fundamentais para o desenvolvimento web. Utilizo HTML para estruturar o conteúdo das páginas da web de forma semântica e acessível, enquanto o CSS é empregado para estilizar e tornar essas páginas visualmente atraentes e responsivas. Minha proficiência em HTML e CSS me permite criar interfaces de usuário intuitivas e esteticamente agradáveis.</p>
                    </div>
                </div>
                <div className={Styles.html} data-aos="fade" data-aos-duration="1000">
                    <div className={Styles.session2}>
                        <div className={Styles.session_container1}>
                            <h3 className={Styles.name1}>JavaScript</h3>
                            <h2 className={Styles.logo1}><FaSquareJs /></h2>
                        </div>
                        <p className={Styles.text1}>Tenho um forte domínio em JavaScript, uma linguagem de programação essencial para o desenvolvimento web. Utilizo JavaScript para criar interatividade dinâmica em páginas da web, manipulando o conteúdo, respondendo a eventos do usuário e conectando a interface do usuário com a lógica de negócios dos aplicativos. Minha experiência em JavaScript me permite desenvolver aplicativos web robustos e eficientes, oferecendo uma experiência de usuário fluida e envolvente.</p>
                    </div>
                </div>
                <div className={Styles.react} data-aos="fade" data-aos-duration="1000">
                    <div className={Styles.session1}>
                        <div className={Styles.session_container}>
                            <h2 className={Styles.logo}><FaReact /></h2>
                            <h3 className={Styles.name}>React</h3>
                        </div>

                        <p className={Styles.text}>Possuo experiência em React.js, uma biblioteca JavaScript amplamente utilizada para criar interfaces de usuário interativas e responsivas para aplicativos da web. Com o React, desenvolvo componentes reutilizáveis que ajudam a construir aplicativos complexos de forma eficiente e escalável.</p>
                    </div>
                </div>
                <div className={Styles.html} data-aos="fade" data-aos-duration="1000">
                    <div className={Styles.session2}>
                        <div className={Styles.session_container1}>
                            <h3 className={Styles.name1}>BootsTrap</h3>
                            <h2 className={Styles.logo1}> <FaBootstrap /></h2>
                        </div>
                        <p className={Styles.text1}>Estou atualmente desenvolvendo minhas habilidades em Bootstrap, um popular framework front-end que simplifica o processo de criação de interfaces de usuário responsivas e visualmente atraentes. Com o Bootstrap, posso rapidamente prototipar e desenvolver layouts flexíveis e consistentes, economizando tempo e garantindo uma experiência do usuário coesa em diferentes dispositivos e tamanhos de tela.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Habilites