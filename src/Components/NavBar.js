import { Fragment } from 'react';
import '../style/NavBar.css'
const NavBar = () => {
    return (
        <Fragment >
            <div id='opcion-select'>
                CANDIDATOS EN PROCESO
            </div>
            <div id='opcion'>
                CANDIDATOS CONTRATADOS
            </div>
            <div id='opcion' style={{ lineHeight: '50px' }}>
                VACANTES
            </div>
        </Fragment>
    );
}

export default NavBar;

//This means the pagenavigation (Canidatos en Proceso / contratados / Vacantes)