import { Utilisateur } from "./utilisateur.model";

export class Role {

    id!:number;
    nom!:string;
    utilisateurs!:Utilisateur[];
}
