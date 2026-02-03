import { imagenes } from "../assets/galeria"

// const {galeria_01} = imagenes;

export default function Galeria() {
    return (
        <>
            <section className="galeria" >
                {imagenes.map((imagen) => (
                    <div className="imagen">
                        <img src={imagen} alt="Imagen galeria" />
                    </div>
                ))}
                
            </section>
        </>
    )
}
