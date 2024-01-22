import style from "./style.module.css";

export const TechCard = ({ technologie }) => {
    return (
        <li className={style.techCard} >
            <img src={technologie.img} alt={technologie.name} />
            <h3 className="title3">{technologie.name}</h3>
        </li>
    )
}
