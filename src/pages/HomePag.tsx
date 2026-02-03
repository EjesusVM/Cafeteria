import { Menu, Galeria} from "../Components"
// import {icono_cafe}  from "../../public/img/icono_cafe.svg"

export default function Home() {
    return (
        <div>
            <main className="contenedor contenido-principal text-center">

                <section>

                    <h2 className="titulo-principal"><span>Conoce mas </span> sobre nosotros</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur quam velit fugiat, nam non
                        omnis ad, recusandae aperiam provident distinctio? Cum quia quibusdam dignissimos eos illum, vel quidem.
                        Enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nisi sed ratione autem officiis
                        ullam, doloremque nobis magni, accusantium fuga hic dolorum culpa consequatur quisquam atque? Cum quae
                        nulla quas.</p>
                </section>

                <section className="iconos">
                    <ul className="listado-iconos">
                        <li>
                            {/* <img src="/public/img/icono_cafe.svg" alt="icono cafe" /> */}
                            <img src="/img/icono_cafe.svg" alt="icono cafe" />
                            <p>Cafe</p>
                        </li>

                        <li>
                            <img src="/img/icono_postre.svg" alt="icono postre" />
                            <p>Postre</p>
                        </li>

                        <li>
                            <img src="/img/icono_te.svg" alt="icono Te" />
                            <p>Te</p>
                        </li>
                    </ul>
                </section>

                <Galeria />


            </main >

            <Menu />

            <section >
                <div className="contenedor testimoniales-contenedor">
                    <h2><span>Lo que dicen nuestros </span>clientes</h2>

                    <div className="testimonio">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo dolorum tempora iste sed
                            rem dignissimos porro pariatur eligendi molestiae, beatae autem vel enim possimus obcaecati,
                            nemo, architecto nulla cupiditate.</p>

                        <p className="nombre">-Jesus Vargas Mtz</p>
                    </div>

                </div>

            </section>
        </div>
    )
}
