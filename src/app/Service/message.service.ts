import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../Model/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  post(data : FormData){
    return this.http.post<Message>('http://localhost:8015/api/message', data);
  }
}
