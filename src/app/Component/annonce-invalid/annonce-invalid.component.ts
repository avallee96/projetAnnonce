import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/Model/annonce.model';
import { AnnonceService } from 'src/app/Service/annonce.service';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-annonce-invalid',
  templateUrl: './annonce-invalid.component.html',
  styleUrls: ['./annonce-invalid.component.css']
})
export class AnnonceInvalidComponent implements OnInit{
  

  annonces!:Annonce[]
  annonce!:Annonce

  constructor(private aservice: AnnonceService, private mservice : MessageService){}
  
  ngOnInit(): void {
    this.afficherAll_invalid()
    this.annonce = new Annonce() 
  }

  afficherAll_invalid(){
    this.aservice.getAll_invalid().subscribe(response => this.annonces=response);
  }

  supprimer(id:number){
    this.aservice.delete(id).subscribe(response => 
      {
        this.afficherAll_invalid();
      })
  }

  valider(id:number){
    let formData = new FormData()
    formData.append("id",""+id);
    
    this.aservice.getbyId(id).subscribe(response =>
      {
        this.annonce = response
        let information = new FormData();
        information.append("email_e","antoine.vallee.test96@gmail.com")
        information.append("id_r",""+this.annonce.utilisateur.id)
        information.append("titre","validation de l'annonce: " + this.annonce.titre)
        information.append("message","félicitation, votre annonce a été valider \n \n cordialement \n l'équipe de l'application")
        this.mservice.Information(information).subscribe(response =>
          {
            console.log("ok pour les messages");
          })
      })

    
    this.aservice.postvalid(formData).subscribe(response =>
      {
          this.afficherAll_invalid()
      })
   
    
    /**/

  }

}
