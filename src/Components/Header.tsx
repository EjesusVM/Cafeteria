// import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

type HeaderProp = {
    logo: string
}

export default function Header({ logo }: HeaderProp) {

    

    return (
        <div>
            <header className="header header-inicio">
                <div className="contenedor contenido-header">
                    <div className="barra">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>

                        <nav className="navegacion">
                            {/* LinkclassName="activo"  to ="index.html">Inicio</a> */}
                            <NavLink className={({isActive}) => isActive ?"activo" : ""} to = "/">Inicio</NavLink>
                            <NavLink className={({isActive}) => isActive ?"activo" : ""}  to = "/nosotros">Nosotros</NavLink >
                            <NavLink className={({isActive}) => isActive ?"activo" : ""}   to = "/proceso">Proceso</NavLink >
                            <NavLink className={({isActive}) => isActive ?"activo" : ""}   to = "/menu">Menú</NavLink >
                            <NavLink className={({isActive}) => isActive ?"activo" : ""}   to = "/galeria">Galeria</NavLink >
                            <NavLink className={({isActive}) => isActive ?"activo" : ""}   to = "/contacto">Contacto</NavLink>

                        </nav>
                    </div>

                    <h1 className="">Disfruta una deliciosa taza de cafe</h1>
                </div>
            </header>
        </div>
    )
}
