import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  usuario: Usuario;
  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder, private activedRoute:ActivatedRoute, private router:Router, private usuarioService:UsuarioService) {
    const id = this.activedRoute.snapshot.params.id;
    this.usuario = this.usuarioService.getUsuario(id);

    this.formulario = this.formBuilder.group({
      nombre: [this.usuario.nombre, [Validators.required, Validators.minLength(5)]],
      edad: [this.usuario.edad, [Validators.required, Validators.min(18), Validators.max(70)]],
      correo: [this.usuario.correo, [Validators.required, Validators.email, Validators.pattern]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const usuario = new Usuario();

    usuario.id = this.usuario.id;
    usuario.avatar = this.usuario.avatar;

    usuario.nombre = this.formulario.value.nombre;
    usuario.edad = this.formulario.value.edad;
    usuario.correo = this.formulario.value.correo;

    usuario.fecha_insert = this.usuario.fecha_insert;

    this.usuarioService.deleteUsuario(usuario.id);
    this.usuarioService.addUsuario(usuario);
    this.router.navigate(['/']);
  }
}
