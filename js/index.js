import { Admi } from './admi.js';
import { sistemaAutentificacion } from './sistemaAutentificacion.js';



const ingresar = document.querySelector("[ data-ingreso]");
ingresar.addEventListener("submit", (evento) => { // enviar dos parametros el primero es el tipo de evento en este caso "submit", segundo es la funcion que ejecuta cuando se escucha el "submit"
    evento.preventDefault();
    const administrador = new Admi('ferney', 'admi12');
    console.log(administrador)
administrador.asignarClave('admi12') 
console.log(sistemaAutentificacion.login(administrador, 'admi12'))


})


