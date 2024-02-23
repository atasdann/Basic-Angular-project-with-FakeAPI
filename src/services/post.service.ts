import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { BaseService } from './base/base.service';


@Injectable({
  providedIn: 'root'
})
  export class PostService extends BaseService<Post>{
    override path:string="posts"

  // constructor(private httpClient:HttpClient) { }

  // getAll(): Observable<ResponseType<Post[]>>{
  //   return this.httpClient.get<ResponseType<Post[]>>( "https://dummyjson.com/posts" )
  // }

  // getById(id:number):Observable<Post>{
  //   return this.httpClient.get<Post>(`https://dummyjson.com/posts/${id}`)
  // }
}
