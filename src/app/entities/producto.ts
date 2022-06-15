export class Producto {
    static PRECIO_BARATO=500;
    static PRECIO_CARO=750;
    nombre:string;
    precio:number;
    constructor(nombre:string, precio:number){
        this.nombre = nombre;
        this.precio = precio;
    }
    esBarato():boolean{
        return this.precio<Producto.PRECIO_BARATO;
    }
    esMedio():boolean{
        return this.precio>=Producto.PRECIO_BARATO && this.precio<Producto.PRECIO_CARO;
    }
    esCaro():boolean{
        return this.precio>=Producto.PRECIO_CARO;
    }
}
