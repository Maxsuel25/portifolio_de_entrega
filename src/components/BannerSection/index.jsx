import { username } from "../../data/user";
import banner from "../../assets/banner-img.png";
import style from "./style.module.css";
export const BannerSection = () => {
    return (
        <section className={style.container}>
            <div className={style.div1}>
                <h3 className="user">{username}</h3>
                <h1 className="title2" >Bem vindo ao meu portfólio</h1>
                <p className="paragraph">Uma frase interessante sobre mim</p>
                <div>
                    <a className="btn" href="#">Saiba Mais</a>
                </div>
            </div>
            <div className={style.div2}>
                <img src={banner} alt="Banner" />
            </div>
        </section>
    )
}