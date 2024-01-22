import { ProjectList } from "./ProjectList";
import { projects } from "../../data/projects";
import style from "./style.module.css";
export const ProjectSection = () => {
    return (
        <section id="projetos" className={style.projectSection} >
            <h2 className="title2">Projetos</h2>
            <ProjectList projects={projects} />
        </section>
    )
}