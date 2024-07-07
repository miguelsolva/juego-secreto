let numeroSecreto;
let intentos = 0;
let listaNumeroSecreto = [];
let numeroMaximo = 30


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);

    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento ('p' , `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {

            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento ('p','El número secreto es menor');
            } else {
                asignarTextoElemento ('p','El número secreto es mayor');
            }
            intentos++;
            limpiarCaja();
            console.log(intentos);
        }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
if (listaNumeroSecreto.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    
}
else {
    if(listaNumeroSecreto.includes(numeroGenerado)){
       return generarNumeroSecreto(); 
    }else{
        listaNumeroSecreto.push(numeroGenerado);    
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego(){
//Limpiar caja
limpiarCaja();
//Indicar intervalo de numeros
condicionesIniciales();
//Indicar intervalo de numeros
//Generar numero aleatorio
//deshabilitar boton juego nuevo
document.getElementById('reiniciar').setAttribute('disabled','true');
//reinicar conteo de intentos



}

condicionesIniciales();