import React, { useState } from 'react';
import Formulario from './formulario';
import '../styles/listaDeTareas.css';
import Tarea from './tarea';


function ToDoList() {

    //Arreglo de objetos cada objeto es una tarea
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const cambiarEstadoCompletada = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };

    return (
        <>  
            <Formulario onSubmit={agregarTarea} />
            <div className='lista-de-tareas-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key = {tarea.id}
                            id = {tarea.id}
                            texto = {tarea.texto}
                            completada = {tarea.completada}
                            completarTarea = {cambiarEstadoCompletada}
                            eliminarTarea = {eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ToDoList;