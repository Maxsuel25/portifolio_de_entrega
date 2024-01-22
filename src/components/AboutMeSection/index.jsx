import style from "./style.module.css"

export const AboutMeSection = () => {
    return (
        <section className={style.container}>
            <div>
                <h2 id="sobre" className="title2">Sobre mim</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero. Cupiditate laudantium voluptate iure sequi nemo, aliquam odit ab placeat assumenda voluptas tempore corporis, repellendus perferendis dolorum fugit voluptates adipisci.</p>
            </div>
        </section>
    )
}