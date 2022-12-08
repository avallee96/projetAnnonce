import { Annonce } from "./annonce.model";
import { Utilisateur } from "./utilisateur.model";

export class Message {

    id!:number;
    message!:string;
    date_mes!:Date;
    utilisateur!:Utilisateur;
    annonce!:Annonce;
}
