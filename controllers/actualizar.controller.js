import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    if(id == null) {
        window.location.href = "/error.html";
    }
    const imagenUrl = document.querySelector("[data-imagen]")
    const nombreProducto = document.querySelector("[data-nombre]")//.value para obtener solo el valor
    const precio = document.querySelector("[data-precio]")
    const descripcion = document.querySelector("[data-descripcion]")
    
    
    clientServices.editarProducto(id).then((perfil) => {
        imagenUrl.value = perfil.imagenUrl;
        nombreProducto.value = perfil.nombreProducto;
        precio.value = perfil.precio;
        descripcion.value = perfil.descripcion;
    });
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagenUrl = document.querySelector("[data-imagen]").value
    const nombreProducto = document.querySelector("[data-nombre]").value//.value para obtener solo el valor
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    clientServices.actualizarProducto(imagenUrl, nombreProducto, precio, descripcion, id)
    .then(() => {
        window.location.href = "productos.html";
    });
});