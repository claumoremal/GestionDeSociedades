import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  public usuario: Usuario;
  public arrayUsuarios:Array<Usuario>;
  
  constructor() {
    this.usuario = new Usuario("","","","");
    this.arrayUsuarios = [
      new Usuario("","","",""),
    ]
  }

  submitUsuario(){
    this.arrayUsuarios.push(this.usuario);
    console.log(this.arrayUsuarios);
  }

  ngOnInit() {
  }

}
