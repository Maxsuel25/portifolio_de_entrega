import image from "../../assets/portfolio.png";
import style from "./style.module.css";


export const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <img className={style.img} src={image} alt="portifolio" />
                <nav>
                    <ul>
                        <li><a className="nav" href="#sobre">Sobre</a></li>
                        <li><a className="nav" href="#stack">Stack</a></li>
                        <li><a className="nav" href="#projetos">Projetos</a></li>
                    </ul>
                </nav>
                    <button className="btn">Contato</button>
            </div>
        </header>
    )
}