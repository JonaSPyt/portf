import { useState } from "react";
import Styles from "./header.module.css"
import { FaBars, FaFolderClosed, FaHammer, FaEnvelope, FaXmark } from "react-icons/fa6";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className={Styles.header}>
            <div className={Styles.head}>
                <div className={Styles.logo}>{"<JN/>"}</div>
                <ul className={Styles.menu_container}>
                    <li className={Styles.menu}><a className={Styles.links} href="#sobre"><FaHammer />Sobre</a></li>
                    <li className={Styles.menu}><a className={Styles.links} href="#projetos"><FaFolderClosed />Projetos</a></li>
                    <li className={Styles.menu}><a className={Styles.links} href="#habilidade"><FaHammer />Habilidades</a></li>
                    <li className={Styles.menu}><a className={Styles.links} href="#contato"><FaEnvelope />Contato</a></li>
                </ul>
                <button className={Styles.bar} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                    {menuOpen ? <FaXmark /> : <FaBars />}
                </button>
            </div>

            <ul className={`${Styles.aside} ${menuOpen ? Styles.aside_open : ""}`}>
                <li className={Styles.menu}><a className={Styles.links} onClick={closeMenu} href="#sobre"><FaHammer />Sobre</a></li>
                <li className={Styles.menu}><a className={Styles.links} onClick={closeMenu} href="#projetos"><FaFolderClosed />Projetos</a></li>
                <li className={Styles.menu}><a className={Styles.links} onClick={closeMenu} href="#habilidade"><FaHammer />Habilidades</a></li>
                <li className={Styles.menu}><a className={Styles.links} onClick={closeMenu} href="#contato"><FaEnvelope />Contato</a></li>
            </ul>
        </nav>
    )
}

export default Header