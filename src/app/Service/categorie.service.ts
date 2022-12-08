import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../Model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Categorie[]>('http://localhost:8015/api/categorie')
  }

  postCategorie(categorie:Categorie){
    return this.http.post<Categorie>('http://localhost:8015/api/categorie',categorie)
  }

  getbyId(id:number){
    return this.http.get<Categorie>(`http://localhost:8015/api/categorie/${id}`)
  }

  delete(id:number){
    return this.http.delete<Categorie>(`http://localhost:8015/api/categorie/${id}`)
  }


}
