import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../Model/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  post(id_e:number,id_r:number,titre:string){
    return this.http.get<Message>(`http://localhost:8015/api/utilisateur/username/${id_e}/${id_r}/${titre}`);
  }
}
