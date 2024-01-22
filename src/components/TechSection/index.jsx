import { TecList } from "./TechList";
import style from "./style.module.css";

export const TechSection = () => {
    return (
        <section id="stack" className={style.techSection}>
        <h2 className="title2" >Tecnologias</h2>
        <TecList />
    </section>
    )
}