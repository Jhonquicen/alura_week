//abrir http (metodo,url)

//CRUD - Metodos HTTP
//Create - post
//Read - GET
//DELETE - delete

const listaProductos = () =>
    fetch("http://localhost:3000/perfil")
        .then((respuesta) => respuesta.json());


const crearProducto = (imagenUrl ,nombreProducto, precio, descripcion) => {
        return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({imagenUrl, nombreProducto, precio, descripcion, id: uuid.v4() }),
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    });
};

const editarProducto = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => 
    respuesta.json()
    );
};

const actualizarProducto = (imagenUrl,nombreProducto,precio,descripcion,id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({imagenUrl, nombreProducto, precio, descripcion, id: uuid.v4() }),
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    editarProducto,
    actualizarProducto,
};




