import { Menu, Galeria } from "../Components"
// import {icono_cafe}  from "../../public/img/icono_cafe.svg"

export default function Home() {
    return (
        <div >
            <main className="contenedor contenido-principal text-center">

                <section>

                    <h2 className="titulo-principal"><span>Conoce mas </span> sobre nosotros</h2>

                    <p>En nuestra cafetería creemos que el café es más que una bebida: es una experiencia. Por eso seleccionamos granos de calidad y los preparamos con cuidado, para que cada taza tenga el aroma y el sabor que mereces.

                        Aquí puedes venir a empezar el día con energía, tomarte un descanso por la tarde o simplemente disfrutar una charla tranquila con un buen café en la mano. Nuestro espacio está pensado para que te sientas cómodo, ya sea que vengas solo, en pareja o con amigos.

                    </p>
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

            <div className="margenTop">

                <Menu />
            </div>

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
