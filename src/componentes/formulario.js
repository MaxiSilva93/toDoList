import React, { useState } from 'react';
import '../styles/formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario (props) {

    //Controlar lo que escribe el usuario en el input
    const [input, setInput] = useState(''); //crear el useState del input

    const manejarCambioInput = e => {   //Actualizando es estado del input por cada tecla y lo guarda en variable input
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault(); //previene cargar la aplicacion completa de nuevo

        const tareanueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        console.log(tareanueva);
        props.onSubmit(tareanueva);

    }

    return(
        <form 
            className='formulario'
            onSubmit={manejarEnvio}
        >
            <input 
                className = 'tarea-input'
                placeholder = 'Escribe una tarea'
                type = "text"
                name = "texto"
                onChange={manejarCambioInput}
            />
            <button className = 'tarea-boton' type='submit'>
                Agregar Tarea
            </button>
        </form>
    );

}


export default Formulario;