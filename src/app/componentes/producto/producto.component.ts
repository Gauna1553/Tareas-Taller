import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  personas = [{
    nombre: "Gabriel",
    apellido: "Gauna",
    edad: 17,
    apodo: "Gauna, Gabi, Negro"
  },
  {
    nombre: "Gabriel",
    apellido: "Gauna",
    edad: 17,
    apodo: "Gauna, Gabi, Negro"
  }
]

  constructor() {}

  ngOnInit(): void{

  }
}
