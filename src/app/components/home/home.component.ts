import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios: Usuario[];
  cantidad: number;

  constructor(private router:Router, private usuarioService:UsuarioService) { 
    this.usuarios = this.usuarioService.getUsuarios();
    this.cantidad = this.usuarios.length;
  }

  ngOnInit(): void {
  }

  onShow(usuario: Usuario) {
    this.router.navigate(['/edit', usuario.id]);
  }

  onDelete(usuario: Usuario) {
    this.usuarios = this.usuarioService.deleteUsuario(usuario.id);
    this.cantidad = this.usuarios.length;
  }
}

