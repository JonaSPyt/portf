import Styles from "./main.module.css"
import Aside from "./aside/aside"
import About from "./contentMain/About"

function Main() {
    return (
        <div className={Styles.main} id="sobre" data-aos="fade-up">
            <About />
            <Aside />
        </div>
    )
}

export default Main