import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceComponent } from './Component/annonce/annonce.component';
import { CategorieComponent } from './Component/categorie/categorie.component';
import { CommentaireComponent } from './Component/commentaire/commentaire.component';
import { MessageComponent } from './Component/message/message.component';
import { UtilisateurComponent } from './Component/utilisateur/utilisateur.component';
import { ConnexionComponent } from './Component/connexion/connexion.component';
import { InscriptionComponent } from './Component/inscription/inscription.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InterceptorInterceptor } from './Interceptor/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    CategorieComponent,
    CommentaireComponent,
    MessageComponent,
    UtilisateurComponent,
    ConnexionComponent,
    InscriptionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
