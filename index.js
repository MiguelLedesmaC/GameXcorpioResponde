//Referencias
const icono = document.getElementById('icono');
const tooltip = document.getElementById('tooltip');
const fraseElement = document.getElementById('frase');
const respuestaElement = document.getElementById('respuesta');
const preguntaElement = document.getElementById('pregunta');


const preguntarBoton = document.querySelector("#preguntar");
const reiniciarBoton = document.querySelector("#reiniciar");


// Variables
let fraseSecreta = "Xcorpio, por favor me podrias contestar";
let respuestaSecreta = "";
let estadoTruco = false;

// Tooltip
icono.addEventListener('mouseenter', () => {
    tooltip.classList.toggle('escondido',false);
});

icono.addEventListener('mouseleave', () => {
    tooltip.classList.toggle('escondido',true);
});

fraseElement.addEventListener('input', (e) => {
    if(e.data === "-"){
        estadoTruco = !estadoTruco;
        escribirLetraCorrecta();
    }
    if(estadoTruco){
        respuestaSecreta += e.data;
        escribirLetraCorrecta();
        console.log(respuestaSecreta);
    }
    fraseElement.classList.toggle('correcta', fraseElement.value === fraseSecreta)
});

preguntarBoton.addEventListener('click', () => {
    if(fraseElement.value === ""){
       return respuestaElement.innerText = "No puedo responder a una respuesta vacia";
    
    }else if(fraseElement.value === fraseSecreta
         && respuestaSecreta != "" 
         && preguntaElement.value.length > 5){
        respuestaElement.innerText = respuestaSecreta;
    }else {
        respuestaElement.innerText = respuestaSecreta;
        respuestaElement.innerText = "Algo no ha ido bien, por favor vuelve a formular la pregunta"
    }
});

// Funciones
function escribirLetraCorrecta() {
    const letraAgregar = fraseSecreta[fraseElement.value.length -1];
    if(letraAgregar == undefined) return estadoTruco = false;
    fraseElement.value = fraseElement.value.substring(0, fraseElement.value.length -1) + letraAgregar;
}
reiniciarBoton.addEventListener('click' ,()=> {
    fraseElement.value = "";
    preguntaElement.value = "";
    respuestaSecreta= "";
    estadoTruco= false;
    respuestaElement.innerText = "Hazme la pregunta"
})
preguntaElement.focus();