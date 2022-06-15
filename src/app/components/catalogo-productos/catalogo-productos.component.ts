import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entities/producto';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  public producto:Producto = new Producto("",0);
  public productos: Producto[] = [];
  public estilos = ['numerico'];
  public nombreCatalogo=null;
  public getEscalaColor(precio:number){
    let rojo = (precio*200/1000) + 55;
    return (
    {
      backgroundColor:`rgb(${rojo},0,0)`,
      color:'white'
    }
    )
  }
  constructor() {
    for (let i=0;i<10;i++){
      this.productos.push(new Producto("Producto" + i, Math.random()*1000))  
    }
  }
  public getEstilos(producto: Producto) {
    return this.estilos;
  }
  public getEstiloPrecio(producto: Producto) {
    if (producto.esCaro()) return 'caro'
    else if (producto.esMedio()) return 'medio'
    else return 'barato';
  }
  public agregarProducto():void {
    console.log("Agregando producto...");
    let nuevoProducto = new Producto (this.producto.nombre, this.producto.precio);
    this.productos.push(nuevoProducto);
  }

  ngOnInit(): void {
  }
}
