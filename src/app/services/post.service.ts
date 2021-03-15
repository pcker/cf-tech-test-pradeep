import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts$:Observable<Post[]> | any;
  private dataSource = new BehaviorSubject<Post[]>([]);
  public  userPosts = this.dataSource.asObservable();
  constructor( private apiService:ApiService) { }

  createPost = (postModel:any) => {
      return this.apiService.post<Post>(`${environment.MOCK_API_ENDPOINT}posts`, postModel)
      .pipe(
        shareReplay()
    );
  }

  getPostsByUser = (userId:number) => {
    this.posts$ = this.apiService.get<Post[]>(`${environment.MOCK_API_ENDPOINT}posts?userId=${userId}`);
    this.dataSource.next(this.posts$.subscribe((p:any) => p)) ;
    return this.posts$;
  }

  getPosts(id:string){
    return this.apiService.get<Post[]>(`${environment.MOCK_API_ENDPOINT}posts/${id}`);
  }
}
