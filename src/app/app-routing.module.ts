import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './Component/annonce/annonce.component';
import { CategorieComponent } from './Component/categorie/categorie.component';
import { CommentaireComponent } from './Component/commentaire/commentaire.component';
import { ConnexionComponent } from './Component/connexion/connexion.component';
import { InscriptionComponent } from './Component/inscription/inscription.component';
import { MessageComponent } from './Component/message/message.component';
import { UtilisateurComponent } from './Component/utilisateur/utilisateur.component';

const routes: Routes = [
  {path:'login', component:ConnexionComponent},
  {path:'register', component:InscriptionComponent},
  {path:'annonce', component:AnnonceComponent},
  {path:'categorie', component:CategorieComponent},
  {path:'commentaire/:id', component:CommentaireComponent},
  {path:'message/:id', component:MessageComponent},
  {path:'utilisateur', component:UtilisateurComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'inscription', component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
