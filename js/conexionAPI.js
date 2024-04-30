const urlBase = "http://localhost:3001/videos";
async function listarVideos(){
    const conexion = await fetch(urlBase);
    const conexionConvertida =  conexion.json();
    //console.log(conexionConvertida)
    return conexionConvertida;
}

async function enviarVideo(titulo,descripcion,url,imagen){
    const conexion = await fetch(urlBase,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url:url,
            imagen:imagen
        })
    })
    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;
}

async function buscarVideo(palabraClave){
    const conexion = await fetch(`${urlBase}?q=${palabraClave}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {
    listarVideos,enviarVideo,buscarVideo
}

