import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceInvalidComponent } from './Component/annonce-invalid/annonce-invalid.component';
import { AnnonceComponent } from './Component/annonce/annonce.component';
import { CategorieComponent } from './Component/categorie/categorie.component';
import { CommentaireComponent } from './Component/commentaire/commentaire.component';
import { ConnexionComponent } from './Component/connexion/connexion.component';
import { InscriptionComponent } from './Component/inscription/inscription.component';
import { MessageComponent } from './Component/message/message.component';
import { PersoComponent } from './Component/perso/perso.component';
import { UtilisateurComponent } from './Component/utilisateur/utilisateur.component';
import { GuardGuard } from './Guard/guard.guard';

const routes: Routes = [
  {path:'annonce', component:AnnonceComponent},
  {path:'categorie', component:CategorieComponent, canActivate : [GuardGuard]},
  {path:'commentaire/:id', component:CommentaireComponent},
  {path:'message/:id', component:MessageComponent, canActivate : [GuardGuard]},
  {path:'utilisateur', component:UtilisateurComponent, canActivate : [GuardGuard]},
  {path:'', redirectTo:'connexion',pathMatch:'full'},
  {path:'connexion', component:ConnexionComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'perso', component:PersoComponent, canActivate : [GuardGuard]},
  {path:'annonce_invalid',component:AnnonceInvalidComponent, canActivate : [GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
