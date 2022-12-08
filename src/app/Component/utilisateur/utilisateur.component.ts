import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/Model/role.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { RoleService } from 'src/app/Service/role.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{
  
  utilisateurs!:Utilisateur[];
  utilisateur!:Utilisateur
  valid!:boolean
  idrole!:number
  role!: Role

  constructor(private uservice:UtilisateurService, private rservice:RoleService){}
  
  ngOnInit(): void {
    this.afficherAll();
    this.utilisateur = new Utilisateur()
    //this.valid = true
    this.role = new Role()
  }

  afficherAll(){
    this.uservice.getAll().subscribe(response => this.utilisateurs=response);
  }

  ajout(){
    this.rservice.RolebyId(this.idrole).subscribe(response => this.role=response)
    this.utilisateur.role = this.role;
    this.uservice.postUser(this.utilisateur).subscribe(response =>
      {
        this.afficherAll();
        console.log(this.valid);
        console.log(this.role)
        
        this.utilisateur = new Utilisateur();
      })
  }

  supprimer(id:number){
    this.uservice.deleteUser(id).subscribe(response =>
      {
        this.afficherAll();
      })
  }

  modifier(id:number){
    this.uservice.UserbyId(id).subscribe(response =>
      {
        this.afficherAll()
        this.utilisateur=response;
      })
  }

}
