import { useMemo, useState } from "react";


export default function Contacto() {

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        personas: "",
        hora: "",
        fecha: "",
        notas: "",
    });

    const telefonoWhats = "52XXXXXXXX"; // 52 + lada + número (sin +, sin espacios)

    const mensajeWhats = useMemo(() => {
        const lines = [
            "Hola , quiero reservar una mesa.",
            form.nombre ? `Nombre: ${form.nombre}` : null,
            form.email ? `Email: ${form.email}` : null,
            form.personas ? `Personas: ${form.personas}` : null,
            form.fecha ? `Fecha: ${form.fecha}` : null,
            form.hora ? `Hora: ${form.hora}` : null,
            form.notas ? `Notas: ${form.notas}` : null,
        ].filter(Boolean);

        return lines.join("\n");
    }, [form]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const abrirWhatsApp = () => {
        const url = `https://wa.me/${telefonoWhats}?text=${encodeURIComponent(mensajeWhats)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Si quieres que el submit también abra WhatsApp:
        abrirWhatsApp();
    };

    return (


        <section className="contacto">
            <div className="contacto__wrap">
                <header className="contacto__header">
                    <p className="contacto__kicker">Reservas</p>
                    <h2 className="contacto__title">
                        Reserva tu <span>mesa</span>
                    </h2>
                    <p className="contacto__subtitle">
                        Confirmación rápida por WhatsApp. Sin dramas, sin correos perdidos.
                    </p>
                </header>

                <div className="contacto__grid">
                    {/* Card Form */}
                    <div className="contacto__card">
                        <form className="contacto__form" onSubmit={onSubmit}>
                            <div className="field">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    placeholder="Tu nombre"
                                    value={form.nombre}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    value={form.email}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="fieldRow">
                                <div className="field">
                                    <label htmlFor="personas">Personas</label>
                                    <select
                                        id="personas"
                                        name="personas"
                                        value={form.personas}
                                        onChange={onChange}
                                        required
                                    >
                                        <option value="" disabled>
                                            Selecciona
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="+4">+4</option>
                                    </select>
                                </div>

                                <div className="field">
                                    <label htmlFor="hora">Hora</label>
                                    <input
                                        id="hora"
                                        name="hora"
                                        type="time"
                                        min="09:00"
                                        max="22:00"
                                        value={form.hora}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="fecha">Fecha</label>
                                <input
                                    id="fecha"
                                    name="fecha"
                                    type="date"
                                    value={form.fecha}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="notas">Notas (opcional)</label>
                                <textarea
                                    id="notas"
                                    name="notas"
                                    placeholder="Ej. mesa cerca de ventana, silla para bebé…"
                                    value={form.notas}
                                    onChange={onChange}
                                    rows={3}
                                />
                            </div>

                            <div className="contacto__actions">
                                <button
                                    type="button"
                                    className="btn btn--whats"
                                    onClick={abrirWhatsApp}
                                    aria-label="Reservar por WhatsApp"
                                >
                                    <span className="btn__icon" aria-hidden="true">✆</span>
                                    Reservar por WhatsApp
                                </button>

                                <button type="submit" className="btn btn--ghost">
                                    Enviar (abre WhatsApp)
                                </button>
                            </div>

                            <p className="contacto__hint">
                                Al continuar, se abrirá WhatsApp con tu mensaje listo para enviar.
                            </p>
                        </form>
                    </div>

                    {/* Visual */}
                    <aside className="contacto__visual" aria-hidden="true">
                        <div className="contacto__visualInner">
                            <p className="contacto__badge">Respuesta rápida</p>
                            <h3>Tu mesa, sin complicaciones</h3>
                            <p>
                                Reserva en menos de 1 minuto. Nosotros confirmamos por WhatsApp.
                            </p>

                            {/* Cambia esta imagen por la tuya */}
                            <div className="contacto__img" />
                        </div>
                    </aside>
                </div>
            </div>
        </section>

        //No borrar
        // <div>
        //     <main className="contenedor contenido-principal text-center ">

        //         <h2>reserva tu <span>mesa</span></h2>

        //         <div className="contenido-contacto">
        //             <form action="">
        //                 <div className="campo">
        //                     <label htmlFor="nombre">Nombre</label>
        //                     <input type="text" id="nombre" placeholder="Tu Nombre" />
        //                 </div>

        //                 <div className="campo">
        //                     <label htmlFor="email">Email</label>
        //                     <input type="text" id="email" placeholder="Tu Email" />
        //                 </div>

        //                 <div className="campo">
        //                     <label htmlFor="personas">Numero de Personas</label>
        //                     <select>
        //                         <option value="" disabled selected>--seleciones--</option>
        //                         <option value="1">1</option>
        //                         <option value="2">2</option>
        //                         <option value="3">3</option>
        //                         <option value="4">4</option>
        //                         <option value="mas">+4</option>

        //                     </select>
        //                 </div>

        //                 <div className="campo">
        //                     <label htmlFor="hora">Hora</label>
        //                     <input type="time" id="hora" min="9:00" max="18:00" />
        //                 </div>

        //                 <div className="campo">
        //                     <label htmlFor="fecha">Fecha</label>
        //                     <input type="date" id="fecha" />
        //                 </div>

        //                 <div className="campo">
        //                     <input type="submit" id="enviar" />
        //                 </div>

        //             </form>

        //         </div>


        //     </main>
        // </div>
    )
}
