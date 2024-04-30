import Styles from "./section.module.css"
import Cards from "./cards/Cards"
import foto1 from "./assets/foto1.png"
import foto2 from "./assets/foto2.png"
import foto3 from "./assets/foto3.png"
import foto4 from "./assets/foto4.png"
import { FaHtml5,FaCss3Alt,FaSquareJs,FaReact,FaGithub,FaLinkedin } from "react-icons/fa6";

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function Section(){
    useEffect(()=>{
        AOS.init();
       },[])

    return(
        <div className={Styles.main} >
            <div className={Styles.works} >
                <h1>Projetos</h1>
                <div className={Styles.card} id="projetos">
                    <Cards time="900" link={"https://github.com/JonaSPyt/ballecoffe"} icon1={<FaCss3Alt/>} icon2={<FaHtml5/>} exp="Landing Page do BalleCoffee, utilizando o Figma como referencia, utilizei Flexbox e varias outras ferramentas para chegar ao melhor resultado. Com un design moderno e responsivo para multiplo dispositivos." title="BalleCoffe" img={foto1}/>
                    <Cards time="800" link={"https://github.com/JonaSPyt/LandingPage-Bootstrap"}icon1={<FaCss3Alt/>} icon2={<FaHtml5/>} exp="Uma Landing Page feita para uma requisição de um cliente em um site de FreeLancers, totalmente responsivo e utilizando Bootstrap." title="Landing page" img={foto2}/>
                    <Cards time="600" link={"https://github.com/JonaSPyt/To-do-list--React"}  icon1={<FaCss3Alt/>} icon2={<FaHtml5/>} icon3={<FaReact/>}exp="Apresentando diversas funcionalidades úteis, como a criação de tarefas, remoção de tarefas, alteração de status da tarefa (completa ou incompleta), filtro por status e ordenação alfabética, além da pesquisa de tarefas!" title="To Do List" img={foto3}/>
                    <Cards time="400" link={"https://github.com/JonaSPyt/CEPSearch"}icon1={<FaCss3Alt/>} icon2={<FaHtml5/>} icon3={<FaReact/>} exp="Utilizando o React JS em conjunto com a biblioteca Axios, é possível criar um projeto que automaticamente encontra o endereço correspondente a um CEP informado." title="Cep Seach" img={foto4}/>

                </div>
            </div>
        </div>
    )
}

export default Section