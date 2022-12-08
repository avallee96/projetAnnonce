import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Annonce } from 'src/app/Model/annonce.model';
import { Categorie } from 'src/app/Model/categorie.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { AnnonceService } from 'src/app/Service/annonce.service';
import { CategorieService } from 'src/app/Service/categorie.service';

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


  constructor(private aservice: AnnonceService, private cservice: CategorieService, private route: Router){}



  ngOnInit(): void {
    this.afficherAll()
    this.annonce = new Annonce()
    this.afficherAll_categorie()
    this.titre ="test"
    this.description ="test"
    let chaine = sessionStorage.getItem('user') ?? "";
    this.user = JSON.parse(chaine);
    this.id = 0;
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

  message(id:number){
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
    this.aservice.post(formData).subscribe(response => {
      console.log("ok");
      this.afficherAll()
      this.annonce = new Annonce()
      this.afficherAll_categorie()
      this.idcategorie=0

    },
    
    err=>
    {
      console.log(err.message);
    })
  }

}
