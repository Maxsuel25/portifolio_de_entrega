import Icon1 from "../../assets/whatsapp-icon.png";
import Icon2 from "../../assets/linkedin-icon.png";
import Icon3 from "../../assets/github-icon.png";
import { user } from "../../data/user";
import style from "./style.module.css";
export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>
                <h2 className="title2">Contato</h2>
                <div >
                    <img src={Icon1} alt="Icon" />
                    <img className={style.select} src={Icon2} alt="Icon" />
                    <img src={Icon3} alt="Icon" />
                </div>
            </div>
            <p className="paragraph" >Todos os direitos reservados - {user}</p>
        </footer>
    )
}