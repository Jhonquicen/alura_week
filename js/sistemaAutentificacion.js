export class sistemaAutentificacion {
    static login(administrador, clave) {
        if ('"autenticable" in administrador && administrador.autenticable instanceof function')
            return administrador.autenticable(clave);
        else
            // return false;
        return administrador.clave == clave;
    }
}