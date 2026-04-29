import Styles from "./habilites.module.css"
import { FaHtml5, FaCss3Alt, FaSquareJs, FaReact, FaPython, FaNodeJs } from "react-icons/fa6";
import { SiTypescript, SiVuedotjs, SiFastapi } from "react-icons/si";

function Habilites() {
    return (
        <div className={Styles.main_container} id="habilidade">
            <div className={Styles.main}>
                <h1 className={Styles.sub}>Habilidades</h1>

                <div className={Styles.react} data-aos="fade" data-aos-duration="1000">
                    <div className={Styles.session1}>
                        <div className={Styles.session_container}>
                            <h2 className={Styles.logo}><FaHtml5 /><FaCss3Alt /></h2>
                            <h3 className={Styles.name}>HTML / CSS</h3>
                        </div>
                        <p className={Styles.text}>Sólida experiência em HTML semântico e CSS moderno. Crio interfaces visualmente atraentes, responsivas e acessíveis, utilizando Flexbox, Grid, animações e custom properties para resultados profissionais em qualquer tela.</p>
                    </div>
                </div>

                <div className={Styles.html} data-aos="fade" data-aos-duration="1000">
                    <div className={Styles.session2}>
                        <div className={Styles.session_container1}>
                            <h3 className={Styles.name1}>JavaScript / TypeScript</h3>
                            <h2 className={Styles.logo1}><FaSquareJs /><SiTypescript /></h2>
                        </div>
                        <p className={Styles.text1}>Forte domínio em JavaScript e TypeScript. Desenvolvo lógicas dinâmicas, consumo APIs, manipulo o DOM e aplico tipagem estática para garantir código mais seguro, legível e escalável.</p>
                    </div>
                </div>

                <div className={Styles.react} data-aos="fade" data-aos-duration="1000">
                    <div className={Styles.session1}>
                        <div className={Styles.session_container}>
                            <h2 className={Styles.logo}><FaReact /><SiVuedotjs /></h2>
                            <h3 className={Styles.name}>React / Vue</h3>
                        </div>
                        <p className={Styles.text}>Experiência em React (hooks, context, SPA) e Vue 3 (Composition API, script setup). Crio componentes reutilizáveis e interfaces reativas para aplicações web modernas e escaláveis.</p>
                    </div>
                </div>

                <div className={Styles.html} data-aos="fade" data-aos-duration="1000">
                    <div className={Styles.session2}>
                        <div className={Styles.session_container1}>
                            <h3 className={Styles.name1}>Python / FastAPI</h3>
                            <h2 className={Styles.logo1}><FaPython /><SiFastapi /></h2>
                        </div>
                        <p className={Styles.text1}>Desenvolvo aplicações desktop com Python/Tkinter e APIs REST modernas com FastAPI. Integro bancos de dados SQLite, faço web scraping e construo back-ends performáticos e bem documentados.</p>
                    </div>
                </div>

                <div className={Styles.react} data-aos="fade" data-aos-duration="1000">
                    <div className={Styles.session1}>
                        <div className={Styles.session_container}>
                            <h2 className={Styles.logo}><FaNodeJs /></h2>
                            <h3 className={Styles.name}>Node.js</h3>
                        </div>
                        <p className={Styles.text}>Conhecimento em Node.js para criação de servidores, APIs e automações. Utilizo npm/pnpm para gerenciar projetos e construo back-ends JavaScript full-stack integrados ao front-end.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Habilites