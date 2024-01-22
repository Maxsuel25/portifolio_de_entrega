import { technologies } from "../../../data/technologies";
import { TechCard } from "./TechCard/";
import style from "./style.module.css";


export const TecList = () => {
    return (
        <ul className={style.TecList} >
            {technologies.map(technologie => (
                <TechCard key={technologie.name} technologie={technologie} />
            ))}
        </ul>
    )
}