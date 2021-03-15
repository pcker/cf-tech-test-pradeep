import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CreatePostComponent } from './create-post.component';

describe('CreatePostComponent', () => {
 let component: CreatePostComponent;
 let fixture: ComponentFixture<CreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ CreatePostComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    
  });

  it('Should call create post service', () => {
   
    fixture.detectChanges();
    expect(createSpy.calls.any()).toBe(false, of({}));
  });
});
