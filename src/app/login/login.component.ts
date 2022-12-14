import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:Usuario;

  constructor() { }

  ngOnInit() {
    this.usuario = new Usuario("Claudio","Moreno","claumoremal@gmail.com","Hola1234");
  }

}
