import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo(evento){

    evento.preventDefault();
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideo(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");

    //Recorremos la lista, y cada vez que encuentre un elemento lo remueve 
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)));

    if(busqueda.length == 0){
        lista.innerHTML = `<h2 class="mensaje__titulo">No fueron encotrado elementos para ${datosDeBusqueda} </h2>`;
    }
    console.log(busqueda);
}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click", evento => filtrarVideo(evento));

//Funcion para buscar por el elemento enter ademas del click
const inputEle = document.getElementById('buscar');
inputEle.addEventListener('keyup', function(e){
  if (e.code === 'Enter') {
    filtrarVideo(e)
  }
});
