import { Routes } from '@angular/router';
import { PostComponent } from '../components/post/post.component';
import { CommentComponent } from '../components/post/comment/comment.component';
import { NotFoundComponent } from '../components/error_pages/not-found/not-found.component';
import { HomeComponent } from '../components/home/home.component';
import { PostDetailComponent } from '../components/post/post-detail/post-detail.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'posts',children:[ //posts is not alone component by itself
    {path:'view', component:PostComponent},
    {path:'detail/:id', component:PostDetailComponent},
    {path:'comments/:id',component:CommentComponent}
  ]},
  {path:"**",component:NotFoundComponent} // **:path ne olursa olsun anlamında
];
