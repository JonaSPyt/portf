import Styles from "./cards.module.css"
import { FaGithub } from "react-icons/fa6";

function Cards({ img, title, exp, icon1, icon2, icon3, link, time }) {
    return (
        <div className={Styles.main} data-aos="fade-up" data-aos-duration={time}>
            <img className={Styles.photos} src={img} alt={title} />
            <h2 className={Styles.names}>
                {title}
                <div className={Styles.github}>
                    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`GitHub: ${title}`}>
                        <FaGithub />
                    </a>
                </div>
            </h2>
            <p className={Styles.exp}>{exp}</p>
            <div className={Styles.icones}>
                {icon1 && <span>{icon1}</span>}
                {icon2 && <span>{icon2}</span>}
                {icon3 && <span>{icon3}</span>}
            </div>
        </div>
    )
}

export default Cards