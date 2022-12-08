import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../Model/annonce.model';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }


  getAll(){
    return this.http.get<Annonce[]>('http://localhost:8015/api/annonce')
  }

  getbyId(id:number){
    return this.http.get<Annonce>(`http://localhost:8015/api/annonce/${id}`)
  }

  getAll_invalid(){
    return this.http.get<Annonce[]>('http://localhost:8015/api/annonce/non_valid')
  }

  getAll_categorie(id:number){
    return this.http.get<Annonce[]>(`http://localhost:8015/api/annonce/categorie/${id}`)
  }

  getAll_utilisateur(id:number){
    return this.http.get<Annonce[]>(`http://localhost:8015/api/annonce/utilisateur/${id}`)
  }

  post(data : FormData){
    return this.http.put<Annonce>('http://localhost:8015/api/annonce',data)
  }

  delete(id:number){
    return this.http.delete<Annonce>(`http://localhost:8015/api/annonce/${id}`)
  }
}
