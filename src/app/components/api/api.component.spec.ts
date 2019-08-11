import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: ApiComponent;
  let fixture: ComponentFixture<ApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.editComponent(ApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit', () => {
    expect(component).toBeTruthy();
  });
});
