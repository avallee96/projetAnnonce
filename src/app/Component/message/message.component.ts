import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/Model/annonce.model';
import { Message } from 'src/app/Model/message.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { AnnonceService } from 'src/app/Service/annonce.service';
import { MessageService } from 'src/app/Service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  
  id!:number
  message!:Message
  annonce!:Annonce
  user!:Utilisateur
  titre!:string

  constructor(private route:ActivatedRoute, private mservice:MessageService, private aservice:AnnonceService){}
  
  ngOnInit(): void {
    this.id =+ this.route.snapshot.params['id'];
    this.message = new Message()
    let chaine = sessionStorage.getItem('user') ?? "";
    this.user = JSON.parse(chaine);
    this.aservice.getbyId(this.id).subscribe(response => this.annonce = response)
    this.titre =""
  }

  ajout(){
    let formData = new FormData();
    formData.append("titre", this.titre);
    formData.append("message", this.message.message);
    formData.append("id_e", ""+this.user.id);
    formData.append("id_r", ""+this.annonce.utilisateur.id)
    this.mservice.post(formData).subscribe(response => 
      {
        this.message = new Message()
        this.titre =""
      })
  }


}
