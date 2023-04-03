import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[ data-form]");

formulario.addEventListener("submit", (evento) => { // enviar dos parametros el primero es el tipo de evento en este caso "submit", segundo es la funcion que ejecuta cuando se escucha el "submit"
    evento.preventDefault();
    const imagenUrl = document.querySelector("[data-imagen]").value;
    const nombreProducto = document.querySelector("[data-nombre]").value; //.value para obtener solo el valor
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    clientServices.crearProducto(imagenUrl,nombreProducto,precio,descripcion)
    .then((respuesta) => {
        window.location.href = "/registro_completado.html";
    }). catch((err) => console.log(err));

});