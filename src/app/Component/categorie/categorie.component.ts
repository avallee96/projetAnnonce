import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/Model/categorie.model';
import { CategorieService } from 'src/app/Service/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{

  categories!:Categorie[];
  categorie!:Categorie;

  constructor(private cservice:CategorieService){}
  
  ngOnInit(): void {
    this.afficherAll();
    this.categorie = new Categorie()
  }

  afficherAll(){
    this.cservice.getAll().subscribe(response => this.categories=response);
  }

  supprimer(id:number){
    this.cservice.delete(id).subscribe(response =>
      {
        this.afficherAll();
      })
  }

  modifier(id:number){
    this.cservice.getbyId(id).subscribe(response => 
      {
        this.afficherAll();
        this.categorie=response;

      })
  }

  ajout(){
    this.cservice.postCategorie(this.categorie).subscribe(response =>
      {
        this.afficherAll();
        this.categorie = new Categorie();
      })
  }
}
