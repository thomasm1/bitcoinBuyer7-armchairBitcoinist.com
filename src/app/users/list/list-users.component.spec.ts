import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.editComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit', () => {
    expect(component).toBeTruthy();
  });
});
