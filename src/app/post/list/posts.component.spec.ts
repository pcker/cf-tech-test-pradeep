import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  //let service: PostService;
  //let spy: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
