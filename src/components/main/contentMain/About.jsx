import Styles from "./About.module.css"
function About() {
    return (
        <div className={Styles.content_container}>
            <div className={Styles.content}>
                <h2 className={Styles.sub}>Introdução</h2>
                <h1 className={Styles.title}>
                    Olá, sou <span className={Styles.span}>Jonas</span>, Desenvolvedor Full&#8209;Stack
                </h1>
                <p className={Styles.sobre}>
                    Tenho 23 anos e sou estudante de Engenharia da Computação no IFCE.
                    Atuo como desenvolvedor Full-Stack, criando interfaces modernas com React e Vue,
                    e APIs robustas com FastAPI e Node.js. Tenho domínio sólido em HTML, CSS,
                    JavaScript e TypeScript, sempre buscando boas práticas, design responsivo e
                    uma ótima experiência ao usuário.
                </p>
            </div>
        </div>
    )
}

export default About