import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input()
  showDetails:boolean | any;
  @Input() 
  showBody: boolean | any;

  @Input()
  post:Post |any;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToPost(){
    this.route.navigate(['/post', JSON.stringify({data:this.post})]);
  }
}
