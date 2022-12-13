export class Usuario {
    constructor(
        public nombre: string,
        public apellido: string,
        public email: string,
        public password: string
        ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;

    }

}
