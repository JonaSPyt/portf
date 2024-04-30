import { useState } from "react"
import Styles from "./contact.module.css"
import emailjs from "@emailjs/browser"
import { FaLinkedin} from "react-icons/fa6";

function Contact() {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[mens,setMens] = useState('')

    function submit(e){
        e.preventDefault();
        if(!name  || !email  || !mens )  {alert("Preencha os campos!"); return}

        const templateParams = {
            from_name: name,
            message: mens,
            email: email
        }
        emailjs.send("service_fwq5q98","template_59fdb85", templateParams,"gMRoiErXSPLHtZZAU")
        .then((response)=>{
            console.log("Certo", response.status,response.text)
            setEmail('')
            setMens('Obrigado!')
            setName('')
            
        }, (erro)=>{
            console.log("erro: ", erro)
        })
        
    }

    return (
        <div className={Styles.main_container} id="contato">
            <div className={Styles.main}>
                <div className={Styles.text}>
                    <h1 className={Styles.sub}>Contato</h1> 
                </div>
                

                <div className={Styles.email_container}>
                    <h2 className={Styles.trab}>Vamos trabalhar <span>juntos!</span></h2>
                    <h3 className={Styles.contatos}>jonasemanuel117@gmail.com <a className={Styles.linked} href="https://www.linkedin.com/in/jonas-emanuel-10b41b239/" target="_blank"><FaLinkedin/></a></h3>
                    <form className={Styles.form} onSubmit={submit}>
                        <input type="text" placeholder="Seu nome completo" value={name} className={Styles.nam} onChange={(e)=>(setName(e.target.value))}/>
                        <input type="email" placeholder="Digite seu endereço de email" className={Styles.em} value={email} onChange={(e)=>(setEmail(e.target.value))}/>
                        <input type="text" placeholder="Sua mensagem" value={mens}  className={Styles.mens} onChange={(e)=>(setMens(e.target.value))}/>
                        <input type="submit" value="Enviar!" className={Styles.button} />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact