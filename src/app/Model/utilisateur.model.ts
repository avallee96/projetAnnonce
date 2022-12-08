import { Commentaire } from "./commentaire.model";
import { Message } from "./message.model";
import { Role } from "./role.model";

export class Utilisateur {
    id!:number;
    username!:string;
    password!:string;
    email!:string;
    valid!:boolean;
    role!:Role;
    //commentaires!:Commentaire[];
    //message!:Message[]
}
