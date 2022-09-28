import React from 'react';
import PropTypes from 'prop-types';
import { Contactos } from '../../models/contacto.class';


const Interruptor = ( { contacto } ) => {

    return (
        <div>
            <table>
                <tr>
                    <td>Nombre: { contacto.nombre }</td>
                </tr>
                <tr>
                    <td>Apellido: { contacto.apellido }</td>
                </tr>
                <tr>
                    <td>Email: { contacto.email }</td>
                </tr>
                <tr>
                    <td>{ contacto.estado ? "EN LINEA" : "NO DISPONIBLE" }</td>
                </tr>
            </table>
        </div>
    );
};


Interruptor.propTypes = {
    contacto: PropTypes.instanceOf(Contactos)
};


export default Interruptor;
