import React from 'react';
import { Contactos } from '../models/contacto.class';
import Interruptor from './pure/interruptor';
import { useState } from 'react';


const ContactosComponent = () => {

    const [estado, setestado] = useState(false);
    const Contacto1 = new Contactos( "Claret", "Devigne", "claretdevigne@gmail.com", estado )
    
    const conectar = () => {
        if ( estado === false) {
            setestado(true)
        } else {
            setestado(false)
        }
    }

    return (
        <div>
            <Interruptor contacto={ Contacto1 }></Interruptor>
            <br></br>
            <div>
                <button onClick={ conectar }>{estado ? "Desconectar" : "Conectar"}</button>
            </div>
        </div>
    );
};

export default ContactosComponent;
