import Styles from "./About.module.css"
function About(){
    return (
        <div className={Styles.content_container}>
            <div className={Styles.content} >
                <h2 className={Styles.sub}>Introdução</h2>
                <h1 className={Styles.title}>
                    Olá, sou <span className={Styles.span}> Jonas</span>, Desenvolvedor Front End
                </h1>
                <p className={Styles.sobre}>Tenho 21 anos e sou Desenvolvedor Front-end. Atualmente sou freelancer, desenvolvo projetos, curso uma graduação em Engenhatia de Computação. Tenho conhecimento em HTML, CSS, JavaScript, utilizo Bootstrap e estou me aprofundando em ReactJS. Eu desenho e codifico coisas lindamente simples e adoro o que faço. Simples assim!</p>
            </div>
        </div>
    )
}

export default About