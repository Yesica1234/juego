//Variables globales
let nombreJugador = document.querySelector(".jugador");
let listaJugadores = "jugadores";
//Función para obtener los datos
function obtenerDatos() {
    //Crear objetos para los datos del jugador
let datosJugador = {
    "nombre" : nombreJugador.textContent,
    "intentos" : totalIntentos,
    "tiempoTotal" : totalTiempo,
    "tiempoRestante" : tiempoRestante
    }
    //Mostrar los datos en consola
    console.log(datosJugador);
    //Pasar los datos del jugador
    guardarDatos(datosJugador);
    

}

//Función para guardar los datos en localStorage
function guardarDatos(datos) {
    //Array para guaradar los datos antiguos y nuevos
    let jugadores = [];
    //Tomar los datos en localStorage previamente guardados
    let datosPrevios = JSON.parse (localStorage.getItem (listaJugadores));
    if (datosPrevios != null ) {
        jugadores = datosPrevios;

    }
    jugadores.push(datos);
    //Guardar en localStorage
    localStorage.setItem(listaJugadores, JSON.stringify(jugadores));
}
function mostrarDatos() {
     //Array para guaradar los datos antiguos y nuevos
     let jugadores = [];
     //Tomar los datos en localStorage previamente guardados
     let datosPrevios = JSON.parse (localStorage.getItem (listaJugadores));
     if (datosPrevios != null ) {
         jugadores = datosPrevios;
     }
     //Organizar los jugadores
     jugadores.sort((a,b)=>{
        if ( a.tiempoTotal < b.tiempoTotal ) {
            return -1;
        }
        if(a.intentos < b.intentos){
            return 1;
        }
     });


     //Mostrar los datos en la tabla
     jugadores.forEach((jugador, i)=>{
        //Crear dila
        let fila = document.createElement("tr");
        fila.innerHTML =`
            <td> ${i+1} </td>
            <td> ${jugador.nombre} </td>
            <td> ${jugador.tiempoTotal} </td>
            <td> ${jugador.intentos} </td>
            <td> ${jugador.tiempoRestante} </td>
            `;
            tabla.appendChild(fila);
     });


}