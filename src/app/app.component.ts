import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = "";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas: object[];

  constructor() {
    this.entradas = [
      {titulo:"Python cada dia más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez másm funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Donde quedó pascal?"},
    ]
  }

  registrarUsuario(){
    this.mensaje = "Usuario registrado correctamente"
    this.registrado=true
  }
}
