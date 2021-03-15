import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './post/create-post.component';
import { IndexComponent } from './post/index.component';
import { PostsComponent } from './post/list/posts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  //{ path: '404', component: NotFoundComponent}, 
  //{ path: '500', component: ServerErrorComponent },
  { path: 'create', component: CreatePostComponent },
  { path: 'posts', component: PostsComponent },
  // { path: 'post/:id', component: PostComponent },
  { path: 'post', component: PostComponent },
  //{ path: 'details/:id', component: EditUserComponent },
  //{ path: 'list', component: UsersListComponent }
  //{ path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
