import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gauna Gabriel';


  personas = [
    {
    nombre: "Gabriel",
    apellido: "Gauna",
    alias: "Gauna, Negro, Gabi",
    edad: "17",
  }
]
}
