import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router, private usuarioService:UsuarioService) { 

    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(70)]],
      correo: ['', [Validators.required, Validators.email, Validators.pattern]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const usuario = new Usuario();

    usuario.nombre = this.formulario.value.nombre;
    usuario.edad = this.formulario.value.edad;
    usuario.correo = this.formulario.value.correo;

    this.usuarioService.addUsuario(usuario);
    this.router.navigate(['/']);
  }
}
