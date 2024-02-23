import { Component } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  comments!:Comment[]
  constructor(private commentService:CommentService){}

  getList(){
    this.commentService.getAll().subscribe(result=>{
      this.comments=result["comments"];
    })
  }
}
