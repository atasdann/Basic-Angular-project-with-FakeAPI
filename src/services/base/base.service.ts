import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseType } from "../../models/types";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
  export abstract class BaseService<T>{

    path:string="";
    constructor(private httpClient:HttpClient){}

    getAll(): Observable<ResponseType<T[]>>{
      return this.httpClient.get<ResponseType<T[]>>( "https://dummyjson.com/"+this.path )
    }
    getById(id:number):Observable<T>{
      return this.httpClient.get<T>(`https://dummyjson.com/${this.path}/${id}`);
    }
    setPath(path:string){
      this.path=path;
    }
    getHttpClient():HttpClient{
      return this.httpClient;
    }
}
