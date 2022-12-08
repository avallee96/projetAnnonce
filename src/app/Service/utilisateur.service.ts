import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../Model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    return this.http.post<any>('http://localhost:8015/loginUserJwt', {username,password});
  }

  loginUser(username:string){
    return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateur/username/${username}`);
  }

  getAll(){
    return this.http.get<Utilisateur[]>('http://localhost:8015/api/utilisateur');
  }

  postUser(user:Utilisateur){
    return this.http.post<Utilisateur>('http://localhost:8015/api/utilisateur',user);
  }

  UserbyId(id:number){
    return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateur/${id}`);
  }

  deleteUser(id:number){
    return this.http.delete<Utilisateur>(`http://localhost:8015/api/utilisateur/${id}`);
  }

}
