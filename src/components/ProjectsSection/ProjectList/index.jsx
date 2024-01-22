import style from "./style.module.css";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = ({ projects }) => {
    return (
        <ul className={style.projectList}>
            {projects.map(project => (<ProjectCard key={project.id} project={project} />))}
        </ul>
    )
}