import { Categorie } from "./categorie.model";
import { Commentaire } from "./commentaire.model";
import { Message } from "./message.model";
import { Utilisateur } from "./utilisateur.model";

export class Annonce {

    id!:number;
    titre!:string;
    description!:string;
    valid!:boolean;
    date_pub!:Date;
    date_exp!:Date;
    photo!:string;
    categorie!:Categorie;
    utilisateur!:Utilisateur;
    commentaires!:Commentaire[];
    messages!:Message[];
}
