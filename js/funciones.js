//Variables globales
let imgN1 = [
    {nombre:"superman", url:"imagenes/superman.jpeg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitan america", url:"imagenes/capitan america.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"hombre araña", url:"imagenes/hombre araña.jpg"},
    {nombre:"superman", url:"imagenes/superman.jpeg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitan america", url:"imagenes/capitan america.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"hombre araña", url:"imagenes/hombre araña.jpg"}
];
let imgN2 = [
    {nombre:"superman", url:"imagenes/superman.jpeg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitan america", url:"imagenes/capitan america.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"hombre araña", url:"imagenes/hombre araña.jpg"},
    {nombre:"flash",url:"imagenes/flah.jpg"},
    {nombre:"deadpool",url:"imagenes/deadpool.jpg"},
    {nombre:"superman", url:"imagenes/superman.jpeg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitan america", url:"imagenes/capitan america.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"hombre araña", url:"imagenes/hombre araña.jpg"},
    {nombre:"flash",url:"imagenes/flah.jpg"},
    {nombre:"deadpool",url:"imagenes/deadpool.jpg"}
];
let imgN3 = [
    {nombre:"superman", url:"imagenes/superman.jpeg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitan america", url:"imagenes/capitan america.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"hombre araña", url:"imagenes/hombre araña.jpg"},
    {nombre:"flash",url:"imagenes/flah.jpg"},
    {nombre:"deadpool",url:"imagenes/deadpool.jpg"},
    {nombre:"iroman",url:"imagenes/iroman.jpg"},
    {nombre:"mujer maravilla",url:"imagenes/mujer-maravilla.jpg"},
    {nombre:"superman", url:"imagenes/superman.jpeg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitan america", url:"imagenes/capitan america.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"hombre araña", url:"imagenes/hombre araña.jpg"},
    {nombre:"flash",url:"imagenes/flah.jpg"},
    {nombre:"deadpool",url:"imagenes/deadpool.jpg"},
    {nombre:"iroman",url:"imagenes/iroman.jpg"},
    {nombre:"mujer maravilla",url:"imagenes/mujer-maravilla.jpg"}
];
let imgN4 = [
    {nombre:"superman", url:"imagenes/superman.jpeg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitan america", url:"imagenes/capitan america.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"hombre araña", url:"imagenes/hombre araña.jpg"},
    {nombre:"flash",url:"imagenes/flah.jpg"},
    {nombre:"deadpool",url:"imagenes/deadpool.jpg"},
    {nombre:"iroman",url:"imagenes/iroman.jpg"},
    {nombre:"mujer maravilla",url:"imagenes/mujer-maravilla.jpg"},
    {nombre:"xmen", url:"imagenes/xmen.jpg"},
    {nombre:"doctor strange", url:"imagenes/doctor-strange.jpg"},
    {nombre:"superman", url:"imagenes/superman.jpeg"},
    {nombre:"batman", url:"imagenes/batman.jpg"},
    {nombre:"capitan america", url:"imagenes/capitan america.jpg"},
    {nombre:"hulk", url:"imagenes/hulk.jpg"},
    {nombre:"thor", url:"imagenes/thor.jpg"},
    {nombre:"hombre araña", url:"imagenes/hombre araña.jpg"},
    {nombre:"flash",url:"imagenes/flah.jpg"},
    {nombre:"deadpool",url:"imagenes/deadpool.jpg"},
    {nombre:"iroman",url:"imagenes/iroman.jpg"},
    {nombre:"mujer maravilla",url:"imagenes/mujer-maravilla.jpg"},
    {nombre:"xmen", url:"imagenes/xmen.jpg"},
    {nombre:"doctor strange", url:"imagenes/doctor-strange.jpg"}
];
let tablero = document.querySelector(".tablero");
let imagenNombre =[];  //guardar nombre de imagenes
let imagenID = [];  //Guardar posiciones de imagen
let aciertos = 0;
let totalIntentos = 0;
let totalTiempo = 0;
let tiempoRestante= 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = document.querySelector(".nivel")
let mostrarIntentos = document.querySelector(".intentos");
let mostrarAciertos = document.querySelector(".aciertos");
let mostrarTiempo = document.querySelector(".tiempo");
let tiempoTranscurrido;
let btn_iniciar = document.querySelector(".btn-iniciar");
let imagenNivel;
let estoyJugando = false; 
let sonidoSeleccionar = new Audio("./sonidos/seleccion.wav");
let sonidoAdivinar = new Audio("./sonidos/good.wav");
let sonidoFallar = new Audio("./sonidos/fail.wav");
let sonidoPerdio = new Audio("./sonidos/gameover.wav");
let sonidoGano = new Audio("./sonidos/finish.wav");
let mostrarJugador = document.querySelector(".jugador");
let tabla = document.querySelector(".records tbody");
let fondoBody = document.querySelector("body");

//Funciones de tiempo
//setTimeout()//Ejecuta una vez determinado el tiempo
//setInterval(); //Se ejecuta en determinado tiempo infinitamente
document.addEventListener("DOMContentLoaded", ()=>{
    fondoBody.classList.add("fondo");
    mostrarDatos();

});

//Agregar evento al botón para iniciar el juego
btn_iniciar.addEventListener("click", function () {
    //alert("Juego iniciado");

    //Comprobar que el jeugo este activo
    if (estoyJugando == false && nivel == 1) {
        ventanaModal();
       
    }else if (estoyJugando == false && nivel == 2) {
        estoyJugando = true;
        nivel2();
    }else if (estoyJugando == false && nivel == 3) {
        estoyJugando = true;
        nivel3();
    }else if (estoyJugando == false && nivel == 4) {
        estoyJugando = true;
        nivel4();
    }
});




//Función para agregar las imágenes al tablero
function agregarImagenes() {
    //Agregar imagenes dependiendo el nivel
    if (nivel == 1) {
        imagenNivel = imgN1;
        
    }else if (nivel ==2) {
        imagenNivel = imgN2;
    }else if (nivel ==3) {
        imagenNivel = imgN3;
    }else if (nivel ==4) {
        imagenNivel = imgN4;
    }
    
    //Imagenes aleatorias
    imagenNivel.sort(()=>Math.random()-0.5);

    imagenNivel.forEach((img, i)=>{
        let div = document.createElement("div");
        div.className = "col-3 my-2";
        let imagen = document.createElement("img");
        imagen.src = "imagenes/ocultar2.jpg";
        imagen.className = "img-fluid altura";
        imagen.id = i;
        imagen.addEventListener("click", mostrarImagenes)
        div.appendChild(imagen);
        tablero.appendChild(div);
    })
}
//Función para mostrar las imágenes
function mostrarImagenes() {
    sonidoSeleccionar.play();
    let imgID = this.getAttribute("id");
    //alert("imagen #"+imgID)
    this.src = imagenNivel[imgID].url
    imagenNombre.push( imagenNivel [imgID].nombre);  //Guardar nombres de la imagen
    imagenID.push(imgID);  //Guardar la posicion de la imagen

    if (imagenNombre.length ==2) {
        setTimeout( compararImagenes, 200 ) //Duración de salida del mensaje
     
    }
}
//agregarImagenes()
//Función para comparar imágenes
function compararImagenes() {
    let imagenesTablero = document.querySelectorAll(".tablero div img")
    if (imagenNombre[0]== imagenNombre[1]){
        if (imagenID[0] !=imagenID[1]){
            //alert("Felicitaciones, adivinaste una imagen");
            sonidoAdivinar.play();
            imagenesTablero[imagenID[0]].src = "imagenes/ok.jpg"; //mostrar ok cuando la persona gana
            imagenesTablero[imagenID[1]].src = "imagenes/ok.jpg";
            imagenesTablero[imagenID[0]].removeEventListener("click", mostrarImagenes);
            imagenesTablero[imagenID[1]].removeEventListener("click", mostrarImagenes);
            aciertos++; //Contar aciertos
            mostrarAciertos.textContent = aciertos;
        }else{
            alert("Debes de elegir otra imagen");
           
            imagenesTablero[imagenID[0]].src = "imagenes/ocultar2.jpg";
            intentos++
            mostrarIntentos.textContent = intentos;                               
        }
    }else{
       // alert("Fallaste, las imágenes son diferentes");
        sonidoFallar.play();
        imagenesTablero[imagenID[0]].src = "imagenes/ocultar2.jpg";  //ocultar de nuevo cuando la persona falla
        imagenesTablero[imagenID[1]].src = "imagenes/ocultar2.jpg";
        intentos++
        mostrarIntentos.textContent = intentos;
    }

    imagenNombre = [];
    imagenID = [];

    if (nivel ==1 && aciertos == 6){
        alert("🎉🥳¡¡GANASTE!!🥳🎉");
        fondoBody.classList.replace("fondo","fondo2");
        //Recargar la página
        //location.reload();
        totalIntentos += intentos;
        totalTiempo += tiempo;
        tiempoRestante += (60 - tiempo);
        obtenerDatos();
        sonidoGano.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg();

    }else if (nivel ==2 && aciertos == 8) {
        alert("🎉🥳¡¡GANASTE!!🥳🎉");
        fondoBody.classList.replace("fondo2","fondo3");
        sonidoGano.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 45;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg();

    }else if (nivel ==3 && aciertos ==10) {
        alert("🎉🥳¡¡GANASTE!!🥳🎉");
        fondoBody.classList.replace("fondo3","fondo4");
        sonidoGano.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 45;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg();
        
    }else if (nivel ==4 && aciertos ==12) {
        sonidoGano.play();
        alert("🎉🥳¡¡GANASTE!!🥳🎉");
        location.reload();
}
}
function nivel1() {
     //Agregar las imágenes al tablero
     agregarImagenes();
     mostrarNivel.textContent = nivel;
     TiempoDeJuego();
}
function nivel2() {
    //Agregar las imágenes al tablero
    agregarImagenes();
    TiempoDeJuego();
}
function nivel3() {
    //Agregar las imágenes al tablero
    agregarImagenes();
    TiempoDeJuego();
}
function nivel4() {
    //Agregar las imágenes al tablero
    agregarImagenes();
    TiempoDeJuego();
}

function TiempoDeJuego() {
     //Controlar el tiempo del juego
     tiempoTranscurrido = setInterval( ()=>{
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 10) {
            alert("Se te agota el tiempo😧😧")
            mostrarTiempo.classList.add("tiempo-agotado");
        
            }else if (tiempo==0) {
                alert("El tiempo se terminó, perdiste");
                sonidoPerdio.play();
                clearInterval(tiempoTranscurrido); //Se encarga de parar el tiempo
                setTimeout(() => {
                    location.reload();
                }, 3000);
                
            }
        },1000 ) //Tiempo en segundos
}
function quitarImg() {
    let imagenQuitar = document.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img)=>{
        img.remove();
    })
}

//Mostrar ventana modal
function ventanaModal() {
    let mostrarModal = document.querySelector("#exampleModal");
    let cerrarModal = document.querySelectorAll(".cerrar");
    let inputJugador = document.querySelector(".nombre-jugador");
    let btnJugador = document.querySelector(".registrar-jugador");
    //Botones para cerrar ventana modal
    cerrarModal.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            mostrarModal.classList.remove("show");
            mostrarModal.style.display ="none";
        });
    });
    //Mostrar la ventana del modal
    mostrarModal.classList.add("show");
    mostrarModal.style.display = "block";
    //Evento click al botón azúl del modal
    btnJugador.addEventListener("click",()=>{
        //Mostrar el nombre en el tablero
        mostrarJugador.textContent = inputJugador.value;
        //Cerrar modal
        mostrarModal.classList.remove("show");
        mostrarModal.style.display ="none";
        //Iniciar nivel  1
        estoyJugando = true;
        nivel1();
    });
}
