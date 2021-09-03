import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[];

  constructor() {
    this.usuarios = [
      {
        id: 'qwertyuiop',
        avatar: 'https://imagenes.cl/alesan.jpg',
        nombre: 'Alejandro Sánchez',
        edad: 34,
        correo: 'alejandro@hotmail.com',
        fecha_insert: new Date('2020-07-06'),
        fecha_update: new Date('2021-05-31')
      },
      {
        id: 'poiuytrewq',
        avatar: 'https://fotos.com/ale.png',
        nombre: 'Alberto Iturriaga',
        edad: 26,
        correo: 'alejandro@gmail.com',
        fecha_insert: new Date('2012-03-01'),
        fecha_update: new Date('2020-01-21')
      }
    ];
  }

  //FUNCIÓN PARA OBTENER TODOS LOS USUARIOS.
  getUsuarios() {
    return this.usuarios;
  }

  //FUNCIÓN PARA OBTENER UN USUARIO.
  getUsuario(id:String) {
    return this.usuarios.filter(u => u.id == id)[0];
  }

  //FUNCIÓN PARA AGREGAR UN NUEVO USUARIO.
  addUsuario(usuario: Usuario) {
    this.usuarios.unshift(usuario);
  }

  //FUNCIÓN PARA ELIMINAR UN USUARIO, Y OBTENER EL ARREGLO DE USUARIOS ACTUALIZADOS.
  deleteUsuario(id:String) {
    this.usuarios = this.usuarios.filter(u => u.id != id);
    return this.usuarios;
  }
}

