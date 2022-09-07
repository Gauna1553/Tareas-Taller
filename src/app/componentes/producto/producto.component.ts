import { Component, OnInit } from '@angular/core';
import { IProducto } from 'interface/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

productos: IProducto [] = [
  {
    nombre: "botines",
    marca: "Adidas",
    categoria: "calzado",
    precio: 15500
  }
]

  constructor() {}

  ngOnInit(): void{

  }
}
