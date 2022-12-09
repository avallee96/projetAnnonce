import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/Model/annonce.model';
import { AnnonceService } from 'src/app/Service/annonce.service';

@Component({
  selector: 'app-annonce-invalid',
  templateUrl: './annonce-invalid.component.html',
  styleUrls: ['./annonce-invalid.component.css']
})
export class AnnonceInvalidComponent implements OnInit{
  

  annonces!:Annonce[]
  annonce!:Annonce

  constructor(private aservice: AnnonceService){}
  
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
    this.aservice.postvalid(formData).subscribe(response =>
      {
          this.afficherAll_invalid()
      })
   
    
    /**/

  }

}
