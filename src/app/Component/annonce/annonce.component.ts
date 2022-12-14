import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Annonce } from 'src/app/Model/annonce.model';
import { Categorie } from 'src/app/Model/categorie.model';
import { Message } from 'src/app/Model/message.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { AnnonceService } from 'src/app/Service/annonce.service';
import { CategorieService } from 'src/app/Service/categorie.service';
import { MessageService } from 'src/app/Service/message.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit{
  

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
  utilisateur!:string
  Uti!:Utilisateur
  erreur!:string
  


  constructor(private aservice: AnnonceService, private cservice: CategorieService, private uservice : UtilisateurService, private route: Router, private mservice : MessageService){}



  ngOnInit(): void {
    this.afficherAll()
    this.annonce = new Annonce()
    this.afficherAll_categorie()
    this.titre ="test"
    this.description ="test"
    if(sessionStorage.getItem('user')){
      let chaine = sessionStorage.getItem('user') ?? "";
      this.user = JSON.parse(chaine);
    }
    console.log(this.user.id)
    this.id = 0;
    this.message = new Message()
    this.utilisateur = ""
    this.Uti = new Utilisateur()
    this.erreur = ""
  }

  selectEvent(event: any): void {
    this.photo = event.target.files[0];
  }

  afficherAll_categorie(){
    this.cservice.getAll().subscribe(response => this.categories=response);
  }

  afficherAll(){
    this.aservice.getAll().subscribe(response => this.annonces=response);
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

  cat(): void{
      if(this.idcategorie == 0){
        this.afficherAll()
      } else {
        this.aservice.getAll_categorie(this.idcategorie).subscribe(response => this.annonces = response)
      }
      
  }

  us(): void{
    this.uservice.loginUser(this.utilisateur).subscribe(response =>
      {
      this.Uti = response
      if(this.Uti != null){
        this.aservice.getAll_utilisateur(this.Uti.id).subscribe(response => 
          {
            this.annonces = response
          })
      } else {
        this.erreur = "utilisateur non trouv?? veuillez mettre le nom compl??te ou v??rifier l'orthographe"
      }
    });
  }

}
