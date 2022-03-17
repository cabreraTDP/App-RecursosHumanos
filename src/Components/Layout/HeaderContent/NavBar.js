import '../../../CSS/NavBar.css'
import heb from './/heb.png'
const NavBar = () => {
    return (
        <div className="inline" style={{}}>
            <div >
            </div>
            <div id='opcion-select'>
                CANDIDATOS EN PROCESO
            </div>
            <div id='opcion'>
                CANDIDATOS CONTRATADOS
            </div>
            <div id='opcion' style={{ lineHeight: '70px' }}>
                VACANTES
            </div>
        </div>
    );
}

export default NavBar;

//This means the pagenavigation (Canidatos en Proceso / contratados / Vacantes)