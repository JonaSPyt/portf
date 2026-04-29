import Styles from "./section.module.css"
import Cards from "./cards/Cards"
import foto1 from "./assets/foto1.png"
import foto2 from "./assets/foto2.png"
import foto3 from "./assets/foto3.png"
import foto4 from "./assets/foto4.png"
import fotoChatbot from "./assets/chatbot.jpeg"
import fotoSesat from "./assets/SESAT.jpeg"
import fotoFilm from "./assets/FilmTRacker.jpeg"
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa6";
import { SiTypescript, SiVuedotjs, SiFastapi, SiSqlite } from "react-icons/si";

function Section() {
    return (
        <div className={Styles.main}>
            <div className={Styles.works}>
                <h1 id="projetos">Projetos</h1>
                <div className={Styles.card}>
                    <Cards time="900" link={"https://github.com/JonaSPyt/chatbot_front"} icon1={<SiVuedotjs />} icon2={<SiTypescript />} icon3={<SiFastapi />} exp="Chatbot com interface profissional em Vue 3 + TypeScript + Vite. Animações de digitação, sugestões de perguntas e integração com API Python (FastAPI)." title="Chatbot IA" img={fotoChatbot} />
                    <Cards time="800" link={"https://github.com/JonaSPyt/SESAT"} icon1={<FaPython />} icon2={<SiSqlite />} exp="Sistema desktop em Python/Tkinter para controle de entrada e saída de equipamentos de TI no TRE-CE. SQLite, importação/exportação de planilhas .xlsx e logs de auditoria." title="SESAT" img={fotoSesat} />
                    <Cards time="700" link={"https://github.com/JonaSPyt"} icon1={<FaReact />} icon2={<FaCss3Alt />} exp="Aplicativo de rastreamento de filmes e séries. Interface intuitiva para marcar títulos assistidos, favoritos e em andamento." title="Film Tracker" img={fotoFilm} />
                    <Cards time="600" link={"https://github.com/JonaSPyt/CEPSearch"} icon1={<FaReact />} icon2={<FaCss3Alt />} exp="Consulta de CEP com React e Axios: o endereço completo é exibido automaticamente ao informar o CEP, consumindo a API ViaCEP." title="CEP Search" img={foto4} />
                    <Cards time="500" link={"https://github.com/JonaSPyt/To-do-list--React"} icon1={<FaReact />} icon2={<FaCss3Alt />} exp="To-Do List com React: criação, remoção e alteração de status de tarefas, filtro por status, ordenação alfabética e pesquisa em tempo real." title="To Do List" img={foto3} />
                    <Cards time="400" link={"https://github.com/JonaSPyt/LandingPage-Bootstrap"} icon1={<FaCss3Alt />} icon2={<FaHtml5 />} exp="Landing Page desenvolvida para um cliente via plataforma de freelancers. Totalmente responsiva, construída com Bootstrap 5." title="Landing Page" img={foto2} />
                    <Cards time="300" link={"https://github.com/JonaSPyt/ballecoffe"} icon1={<FaCss3Alt />} icon2={<FaHtml5 />} exp="Landing Page do BalleCoffee, criada com base em design do Figma. Utiliza Flexbox, animações CSS e é 100% responsiva para múltiplos dispositivos." title="BalleCoffe" img={foto1} />
                </div>
            </div>
        </div>
    )
}

export default Section