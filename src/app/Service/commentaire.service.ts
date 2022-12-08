import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from '../Model/commentaire.model';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http:HttpClient) { }

  getAll(id:number){
    return this.http.get<Commentaire[]>(`http://localhost:8015/api/commentaire/annonce/${id}`);
  }

  delete(id:number){
    return this.http.delete<Commentaire>(`http://localhost:8015/api/commentaire/${id}`)
  }

  getbyId(id:number){
    return this.http.get<Commentaire>(`http://localhost:8015/api/commentaire/${id}`)
  }

  post(commentaire:Commentaire){
    return this.http.post<Commentaire>('http://localhost:8015/api/commentaire',commentaire)
  }


}
