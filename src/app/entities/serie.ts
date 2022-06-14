export interface Serie {
    titulo:string,
    sinopsis:string,
    numeroTemporadas:number,
    plataforma:string,
    director:string,
    enEmision:boolean,
    genero:string,
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
