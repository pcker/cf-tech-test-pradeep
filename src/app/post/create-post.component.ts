import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public post$ = new Observable<Post>();
  message: string = '';
  post: Post | undefined;
  createForm = this.fb.group({
    title: [null, [Validators.minLength(3), Validators.maxLength(10)]],
    body: [null, [Validators.minLength(6), Validators.maxLength(40)]],
  })
  
  constructor(private fb: FormBuilder,
    private postService: PostService) {
  }

  ngOnInit(): void {

  }

  public catchError = (controlName: string, errorName: string) => {
    return this.createForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.createForm.reset();
  }

  onCreatePost(): Observable<Post> {
    const postModel = this.getFormData();
    this.post$ = this.postService.createPost(postModel);
    this.createForm.reset();
    this.message = 'Post created';
    // todo err handling
    return this.post$;
  }

  getFormData() {
    return JSON.stringify({
      id: 1,
      title: this.createForm.get('title')?.value,
      body: this.createForm.get('body')?.value,
      userId: 1,
    });
  }

}
