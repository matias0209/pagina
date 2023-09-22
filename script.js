
//funcion para agregar tarea

function agregarTarea(){
    const nuevaTareaInput=document.getElementById("nuevaTarea");
    const listaTareas=document.getElementById("listaTareas");
    const nuevaTareaTexto=nuevaTareaInput.value.trim();   
}

if(nuevaTareaTexto!==""){
    const nuevaTarea=document.createElement("li");
    nuevaTarea.textContent=nuevaTareaTexto;

    const BotonEliminar=document.createElement("button");
    botonEliminar.textContent="ELiminar";
    botonEliminar.className="delete";
    botonEliminar.onClick=function(){
        listaTareas.removeChild(nuevaTarea);
    }
}

nuevaTarea.appendChild(botonEliminar);
listaTareas.appendChild(nuevaTarea);
nuevaTareaInput.value="";

//Funcion para marcar una tarea como completada

function marcarCompletada(tarea){
    tarea.classList.toggle("completed");
}

//Agregar evento de fclick a las tareas para marcarlas como completeadas

document.getElementById("listaTareas").addEventListener("click",
function(event){
    if(event.target.tagName==="LI"){
        marcarCompletada(event.target);
    }


});

// Agregar evento de clic al botón "Agregar"
document.getElementById("agregar").addEventListener("click",
agregarTarea);
