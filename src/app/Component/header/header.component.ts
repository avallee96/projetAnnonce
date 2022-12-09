import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { AnnonceService } from 'src/app/Service/annonce.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user!:Utilisateur

  constructor(private route:Router, private aservice:AnnonceService){}
  
  ngOnInit(): void {
    if(sessionStorage.getItem('user')){
      let chaine = sessionStorage.getItem('user') ?? "";
      this.user = JSON.parse(chaine);
      //this.route.navigate(['/afficherCitoyen'])
    }
  }

  reload(): void
  {
    window.location.replace('/connexion');
  }


  logout(){
    console.log('logout');  
    sessionStorage.clear();
    sessionStorage.removeItem('user');
    //this.route.navigate(['/connexion']); 
    this.reload(); 
  }

  exportAnnonce(){
    this.aservice.export().subscribe(response => {})
  }
}
