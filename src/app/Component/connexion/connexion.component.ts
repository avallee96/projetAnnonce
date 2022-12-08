import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{
 

  username!:string
  password!:string
  user!:Utilisateur;
  router!:Router;
  message!:string;

  constructor(private userService:UtilisateurService){}
  
  ngOnInit(): void {
    this.username = ""
    this.password = ""
    this.user = new Utilisateur()

  }

  


  login() {  
  this.userService.login(this.username,this.password).subscribe(response =>
    {
      //this.auth=response;
      sessionStorage.setItem("token", "Bearer "+ response.jwt)
      console.log(sessionStorage.getItem("token"))
      this.userService.loginUser(this.username).subscribe(response2 =>
        {
          console.log(response2.username)
          this.user=response2;
          console.log("user ok")  
          sessionStorage.setItem('user', JSON.stringify(this.user));
        console.log(sessionStorage.getItem('user'));
         /*var header:HeaderComponent = new HeaderComponent(this.router);
          //this.router.navigateByUrl("/afficherCitoyen");
          header.reload();*/
          this.message = "connexion réussit, vérifie dans la page utilisateur"
             

        } )
      
    },
    err=> 
    {
      console.log(err.message)
      this.message = "erreur de connexion"
    });
  
  }  
}
