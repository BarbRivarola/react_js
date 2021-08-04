//puedo hacer mis estilos en css e importar el archivo con import "./direccion"
import "./navbar.css";
function NavBar () {
    return (
        <nav className="navbar">
            <span>San Francisco</span>
            <ul className="menuNavbar">
                <li>
                    Home
                </li>
                <li>
                    Productos
                </li>
                <li>
                    Preguntas frecuentes
                </li>
                <li>
                    Contacto
                </li>
            </ul>
        </nav>

    ) 
        
}

export default NavBar;