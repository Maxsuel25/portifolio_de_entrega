import icom from "../../../../assets/git-icon.png";
import style from "./style.module.css";

export const ProjectCard = ({ project }) => {
    return (
        <li  className={style.ProjectCard}>
            <div>
                <h3 className="title3" >{project.name}</h3>
                <p className="paragraph">{project.description}</p>
                <a className="link" href="#">Saiba mais</a>
            </div>
            <div>
                <img src={icom} alt="Icon" />
            </div>
        </li>
    )
}