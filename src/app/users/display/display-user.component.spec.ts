import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserComponent } from './display-user.component';

describe('DisplayUserComponent', () => {
  let component: DisplayUserComponent;
  let fixture: ComponentFixture<DisplayUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.editComponent(DisplayUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit', () => {
    expect(component).toBeTruthy();
  });
});
