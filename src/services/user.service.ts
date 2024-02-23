import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class Userservice extends BaseService<User>{
  override path:string="users"
  // constructor(private httpClient:HttpClient){}

  // getAll():Observable<ResponseType<User[]>>{
  //   return this.httpClient.get<ResponseType<User[]>>("https://dummyjson.com/users")
  // }
  // getById(id:number):Observable<User>{
  //   return this.httpClient.get<User>(`https://dummyjson.com/users/${id}`)
  // }
}
