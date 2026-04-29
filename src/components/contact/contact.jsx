import { useState } from "react"
import Styles from "./contact.module.css"
import emailjs from "@emailjs/browser"
import { FaLinkedin, FaGithub } from "react-icons/fa6";

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mens, setMens] = useState('')
    const [sending, setSending] = useState(false)

    function submit(e) {
        e.preventDefault();
        if (!name || !email || !mens) { alert("Preencha todos os campos!"); return }

        setSending(true)
        const templateParams = {
            from_name: name,
            message: mens,
            email: email
        }
        emailjs.send("service_fwq5q98", "template_59fdb85", templateParams, "gMRoiErXSPLHtZZAU")
            .then(() => {
                setEmail('')
                setMens('')
                setName('')
                alert("Mensagem enviada com sucesso!")
            }, () => {
                alert("Erro ao enviar. Tente novamente.")
            })
            .finally(() => setSending(false))
    }

    return (
        <div className={Styles.main_container} id="contato">
            <div className={Styles.main}>
                <div className={Styles.text}>
                    <h1 className={Styles.sub}>Contato</h1>
                </div>

                <div className={Styles.email_container}>
                    <h2 className={Styles.trab}>Vamos trabalhar <span>juntos!</span></h2>
                    <h3 className={Styles.contatos}>
                        jonasemanuel117@gmail.com
                        <a className={Styles.linked} href="https://www.linkedin.com/in/jonas-emanuel/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
                        <a className={Styles.linked} href="https://github.com/JonaSPyt" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                    </h3>
                    <form className={Styles.form} onSubmit={submit}>
                        <input
                            type="text"
                            placeholder="Seu nome completo"
                            value={name}
                            className={Styles.nam}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Seu endereço de e-mail"
                            className={Styles.em}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            placeholder="Sua mensagem"
                            value={mens}
                            className={Styles.mens}
                            rows={6}
                            onChange={(e) => setMens(e.target.value)}
                        />
                        <button type="submit" className={Styles.button} disabled={sending}>
                            {sending ? "Enviando..." : "Enviar mensagem"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact