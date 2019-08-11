import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUserComponent } from './details-user.component';

describe('DetailsUserComponent', () => {
  let component: DetailsUserComponent;
  let fixture: ComponentFixture<DetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.editComponent(DetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit', () => {
    expect(component).toBeTruthy();
  });
});
