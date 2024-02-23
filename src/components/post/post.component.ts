import { CommonModule } from '@angular/common';
import { Post } from '../../models/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  posts:Post[]=[];

  limit:number=0;
  total:number=0;
  skip:number=0;
  constructor(private postService:PostService){}

  ngOnInit(): void {
    this.getList(); //Sayfa yüklendiği zaman this.getList() fonksiyonu çalışsın.
    }

  getList(){
    this.postService.getAll().subscribe(result=>{
      this.limit=result.limit;
      this.total=result.total;
      this.skip=result.skip;
      this.posts=result["posts"] //geriye dönen değer post array
  })
}
}
