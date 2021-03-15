import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router,Route } from '@angular/router';
import { Location } from '@angular/common';
import { map , filter} from 'rxjs/operators';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  id: string = '';
  @Input()
  post:Post| any;
  public user: {id: string, role: string} | any;
  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private location:Location) { 
   
    }

  ngOnInit(): void {
    //get post id from router
    //this.id = this.route.snapshot.paramMap.get('id')|| '';
    //get posts

   this.post =this.location.getState();


  }

  ngOnDestroy() {
    
  }
  back(){
    this.location.back();
  }
}
