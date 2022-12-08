import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../Model/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  RolebyId(id:number){
    return this.http.get<Role>(`http://localhost:8015/api/role/${id}`);
  }
}
