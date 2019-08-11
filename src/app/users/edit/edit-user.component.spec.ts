import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edit-user.component';

describe('EditUsersComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.editComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit', () => {
    expect(component).toBeTruthy();
  });
});
