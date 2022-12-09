import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/Model/annonce.model';
import { Categorie } from 'src/app/Model/categorie.model';
import { Message } from 'src/app/Model/message.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { AnnonceService } from 'src/app/Service/annonce.service';
import { CategorieService } from 'src/app/Service/categorie.service';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.css']
})
export class PersoComponent implements OnInit{
  

  annonces!:Annonce[]
  annonce!:Annonce
  categories!:Categorie[]
  idcategorie!:number;
  photo!: File;
  titre!:string;
  description!:string;
  categorie!:Categorie
  user!:Utilisateur
  id!:number
  message!:Message


  constructor(private aservice: AnnonceService, private cservice: CategorieService, private route: Router, private mservice : MessageService){}



  ngOnInit(): void {
    
    this.annonce = new Annonce()
    this.afficherAll_categorie()
    this.titre ="test"
    this.description ="test"
    let chaine = sessionStorage.getItem('user') ?? "";
    this.user = JSON.parse(chaine);
    console.log(this.user)
    this.id = 0;
    this.message = new Message()
    this.afficherAll()
  }

  selectEvent(event: any): void {
    this.photo = event.target.files[0];
  }

  afficherAll_categorie(){
    this.cservice.getAll().subscribe(response => this.categories=response);
  }

  afficherAll(){
    this.aservice.getAll_utilisateur(this.user.id).subscribe(response => this.annonces=response);
  }

  supprimer(id:number){
    this.aservice.delete(id).subscribe(response => 
      {
        this.afficherAll();
      })
  }

 
  modifier(id:number){
    this.aservice.getbyId(id).subscribe(response => 
      {
        this.annonce=response;
        console.log(this.annonce);
        /*this.titre = this.annonce.titre
        this.description = this.annonce.description
        this.idcategorie = this.annonce.categorie.id*/
        this.id = this.annonce.id
        this.afficherAll();
        

      })
  }

  commentaire(id:number){
    this.route.navigateByUrl(`commentaire/${id}`)
  }

  messagerie(id:number){
    this.route.navigateByUrl(`message/${id}`)
  }

  ajout(): void{
    let formData = new FormData();
    formData.append("id", ""+this.id);
    formData.append("photo", this.photo);
    formData.append("titre", this.annonce.titre);
    formData.append("description", this.annonce.description)
    formData.append("categorie", ""+this.idcategorie)
    formData.append("utilisateur",""+this.user.id)
    
    let information = new FormData();
    information.append("email_e","antoine.vallee.test96@gmail.com")
    information.append("id_r",""+this.user.id)
    information.append("titre","attente de confirmation de l'annonce: " + this.annonce.titre)
    information.append("message","votre annonce est en attente de confirmation")
    this.mservice.Information(information).subscribe(response =>
      {
        console.log("ok pour les messages");
      })
    
    this.aservice.post(formData).subscribe(response => {
          this.afficherAll()
          this.annonce = new Annonce()
          this.afficherAll_categorie()
          this.idcategorie=0
          this.message = new Message()
    },
    
    err=>
    {
      console.log(err.message);
    })
  }

}
