import { CommentService } from './../../../services/comment.service';
import { User } from './../../../models/user';
import { PostService } from './../../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Userservice } from '../../../services/user.service';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit{
  post!:Post;
  user!:User;
  comments:Comment[]=[];
  constructor(
    private userService:Userservice,
    private postService:PostService,
    private commentService:CommentService,
    private router:ActivatedRoute){}

  ngOnInit(): void {
    this.router.params.subscribe(param=>{
      this.getDetail(param["id"]);
      this.getCommentByPostId(param["id"]);
    })
  }

  getDetail(id:number){
    this.postService.getById(id).subscribe(result=>{
      this.post=result;
      this.getUserDetail(result.userId);
    })
  }

  getUserDetail(userId:number){
    this.userService.getById(userId).subscribe(result=>{
      this.user=result;
  })
  }
  getCommentByPostId(id:number){
    this.commentService.getAllByPostId(id).subscribe(result=>{
      this.comments=result["comments"];
    })
  }
}
