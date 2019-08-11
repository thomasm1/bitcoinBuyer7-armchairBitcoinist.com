import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostComponent } from './add-post.component';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.editComponent(AddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit', () => {
    expect(component).toBeTruthy();
  });
});
