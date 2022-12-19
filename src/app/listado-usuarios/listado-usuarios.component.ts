import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  public Usuario:Usuario;
  public usuarios: Array<Usuario>;

  constructor() {

    this.usuarios = [
      new Usuario(0, "Claudio", "Moreno", "claumoremal@gmail.com", "Hola1234"),
      new Usuario(1, "pepe", "fuentes", "pepe@gmail.com", "Hola1234"),
    ]
  }
  ngOnInit() {
  }

}
