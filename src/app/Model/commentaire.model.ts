import { Annonce } from "./annonce.model";
import { Utilisateur } from "./utilisateur.model";

export class Commentaire {

    id!:number;
    commentaire!:string;
    date_com!:Date;
    utilisateur!:Utilisateur;
    annonce!:Annonce;
}
