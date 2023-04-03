import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (imagenUrl, nombreProducto, precio, descripcion, id) => {
    const linea = document.createElement("ul");
    const contenido = `
        <li class="li__productos">
            <div class="div__imagen">
                <img src="${imagenUrl}" class="div__img">
                
                
            </div>
            <div class="div__descripcion">
                <h1 class="titulo__descripcion">${precio}</h1>
                <p>${descripcion}</p>
                <p>${nombreProducto}</p>
            </div>
            <div class="botones__productos">
                <button type="button" id="${id}"> Eliminar </button>
                
                <a href="editar.html?id=${id}"><button>Editar</button></a> 
            </div>
        </li>
    `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button")
    btn.addEventListener("click", () => {
        const id = btn.id;
        clientServices.eliminarProducto(id)
            .then((respuesta) => {
                console.log(respuesta);
            }).catch((err) => alert("ocurrio un error"));
    });

    return linea;
};

const ul = document.querySelector("[data-producto]");

console.log(ul)
clientServices
    .listaProductos()
    .then((informacion) => {
        console.log(informacion)
        informacion.forEach(({ imagenUrl, precio, nombreProducto, descripcion, id }) => { //ponemos los atributos entre {} para usarlos en crearNuevaLinea
            const nuevaLinea = crearNuevaLinea(imagenUrl, precio, nombreProducto, descripcion, id);
            ul.appendChild(nuevaLinea);

        });

    })

    const crearNuevaLineas = (imagenUrl, nombreProducto, precio, descripcion, id) => {
        const linea = document.createElement("ul");
        const contenido = `
            <li class="li__productos">
                <div class="div__imagen">
                    <img src="${imagenUrl}" class="div__img">
                    
                    
                </div>
                <div class="div__descripcion">
                    <h1 class="titulo__descripcion">${precio}</h1>
                    <p>${descripcion}</p>
                    <p>${nombreProducto}</p>
                </div>
                <div class="botones__productos">
                    <button>Bienvenidos</button>
                    
                    
                </div>
            </li>
        `;
        linea.innerHTML = contenido;
        const btn = linea.querySelector("button")
        btn.addEventListener("click", () => {
            const id = btn.id;
            clientServices.eliminarProducto(id)
                .then((respuesta) => {
                    console.log(respuesta);
                }).catch((err) => alert("ocurrio un error"));
        });
    
        return linea;
    };
    
    const uls = document.querySelector("[data-productos]");
    
    console.log(uls)
    clientServices
        .listaProductos()
        .then((informacion) => {
            console.log(informacion)
            informacion.forEach(({ imagenUrl, precio, nombreProducto, descripcion, id }) => { //ponemos los atributos entre {} para usarlos en crearNuevaLinea
                const nuevaLineas = crearNuevaLineas(imagenUrl, precio, nombreProducto, descripcion, id);
                uls.appendChild(nuevaLineas);
    
            });
    
        })
// const file = document.querySelector('#subir-img');
// file.addEventListener('change', mostrar);
// let archivo;

// function mostrar() {

//     const tamañoMaximo = 100000;

//     if (this.files.length <= 0) return;

//     archivo = this.files[0];

//     if (archivo.size < tamañoMaximo) {

//         var archivoImg = document.getElementById("subir-img").files[0];
//         var reader = new FileReader();
//         if (file) {
//             reader.readAsDataURL(archivoImg);
//             reader.onloadend = function () {
//                 document.getElementById("img").src = reader.result;
//             }
//         }
//         inputURLImagen.value = `./img/productos/${archivo.name}`;

//         return;
//     }
//     else {
//         const maximoMB = tamañoMaximo / 1000;
//         alert(`La imagen excede el tamaño permitido que es de ${maximoMB}Kbytes`);
//     }
//     return archivo;
// }


