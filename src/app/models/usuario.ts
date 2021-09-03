export class Usuario {
    id: string = generarID();
    avatar: string = 'https://avatar.cl/default.jpg';
    nombre: string = '';
    edad: number = 18;
    correo: string = '';
    fecha_insert: Date = new Date();
    fecha_update: Date = new Date();
}


function generarID() {
    var codigo = '';
    const caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

    for (var i=0; i < 10; i++) {
        const random = Math.floor(Math.random() * (caracteres.length-1));
        codigo += caracteres[random];
    }

    return codigo;
}
