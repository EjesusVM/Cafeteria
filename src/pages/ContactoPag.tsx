
export default function Contacto() {
    return (
        <div>
            <main className="contenedor contenido-principal text-center ">

                <h2>reserva tu <span>mesa</span></h2>

                <div className="contenido-contacto">
                    <form action="">
                        <div className="campo">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Tu Nombre" />
                        </div>

                        <div className="campo">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder="Tu Email" />
                        </div>

                        <div className="campo">
                            <label htmlFor="personas">Numero de Personas</label>
                            <select>
                                <option value="" disabled selected>--seleciones--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="mas">+4</option>

                            </select>
                        </div>

                        <div className="campo">
                            <label htmlFor="hora">Hora</label>
                            <input type="time" id="hora" min="9:00" max="18:00" />
                        </div>

                        <div className="campo">
                            <label htmlFor="fecha">Fecha</label>
                            <input type="date" id="fecha" />
                        </div>

                        <div className="campo">
                            <input type="submit" id="enviar" />
                        </div>

                    </form>

                </div>


            </main>
        </div>
    )
}
