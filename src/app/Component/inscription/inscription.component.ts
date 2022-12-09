import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/Model/role.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { RoleService } from 'src/app/Service/role.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  

  utilisateur!:Utilisateur
  valid!:boolean
  idrole!:number
  role!: Role

  constructor(private uservice:UtilisateurService, private rservice:RoleService){}
  
  ngOnInit(): void {
    this.utilisateur = new Utilisateur()
    this.utilisateur.valid = false
    this.role = new Role()
  }

  ajout(){
    console.log(this.utilisateur.valid);
    console.log(this.idrole)
    this.rservice.RolebyId(2).subscribe(response => 
      {
      this.role=response
      this.utilisateur.role = this.role;
      this.uservice.postUser(this.utilisateur).subscribe(response =>
      {
        
        this.utilisateur = new Utilisateur();
      })
      })
    
  }


}
