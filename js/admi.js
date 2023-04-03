export class Admi{
    nombreAdmi;
    #clave;
    

    constructor (nombreAdmi, clave) {
        this.nombreAdmi = nombreAdmi;
        this.#clave = '';
    }
    
    asignarClave(clave) {
        this.#clave = clave;
    }

    autenticable(clave) {
        return clave == this.#clave;
    }
}