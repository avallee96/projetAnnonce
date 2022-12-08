import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/Model/annonce.model';
import { Commentaire } from 'src/app/Model/commentaire.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { AnnonceService } from 'src/app/Service/annonce.service';
import { CommentaireService } from 'src/app/Service/commentaire.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit{
  
  id!:number
  commentaires!:Commentaire[]
  commentaire!:Commentaire
  annonce!:Annonce
  user!:Utilisateur
  
  constructor(private route:ActivatedRoute, private cservice : CommentaireService , private aservice : AnnonceService, private uservice : UtilisateurService){}


  ngOnInit(): void {
     this.id =+ this.route.snapshot.params['id'];
     this.afficher_all()
     this.commentaire = new Commentaire()
     let chaine = sessionStorage.getItem('user') ?? "";
    this.user = JSON.parse(chaine);
    this.aservice.getbyId(this.id).subscribe(response => this.annonce =response)
  }


  afficher_all(){
    this.cservice.getAll(this.id).subscribe(response => this.commentaires = response)
  }

  ajout(){
    
    console.log(this.id)
    this.commentaire.annonce = this.annonce
    this.commentaire.utilisateur = this.user
    this.cservice.post(this.commentaire).subscribe(response =>
      {
        this.afficher_all();
      })
  }

  supprimer(id:number){
    this.cservice.delete(id).subscribe(response =>
      {
        this.afficher_all();
        this.commentaire = new Commentaire();
      })
  }

  modifier(id:number){
    this.cservice.getbyId(id).subscribe(response =>
      {
        this.afficher_all()
        this.commentaire = response
      })
  }
}
