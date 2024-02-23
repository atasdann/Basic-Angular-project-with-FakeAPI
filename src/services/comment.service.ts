import { Comment } from './../models/comment';
import { Injectable } from "@angular/core";
import { BaseService } from "./base/base.service";
import { Observable } from "rxjs";
import { ResponseType } from '../models/types';

@Injectable({
    providedIn: "root"
})

export class CommentService extends BaseService<Comment>{
  override path:string= "comments";

  getAllByPostId(postId:number):Observable<ResponseType<Comment[]>>{
    return this.getHttpClient().get<ResponseType<Comment[]>>("https://dummyjson.com/comments/post/"+postId)
  }
}
