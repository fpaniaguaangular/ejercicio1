export interface Serie {
    titulo:string,
    sinopsis:string,
    numeroTemporadas:number,
    director:Director
}

export interface Director {
    nombre:string;
    nacionalidad:Nacionalidad
}

export enum Nacionalidad {
    Español,
    Americano,
    Francés
}
