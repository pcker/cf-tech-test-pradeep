import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import {  map } from 'rxjs/operators';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]> | any;
  constructor(private postService: PostService) { }
  
  ngOnInit(): void {
    const userId: number = environment.USER_ID;
    this.posts$ = this.getPosts(userId);
  }

  getPosts(userId: number) {
    return this.postService.getPostsByUser(userId);
  }

}
