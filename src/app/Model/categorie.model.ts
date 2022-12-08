import { Annonce } from "./annonce.model";

export class Categorie {

    id!:number;
    nom!:string;
    annonces!:Annonce[];
}
