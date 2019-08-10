import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoinsComponent } from './list-coins.component';

describe('ListCoinsComponent', () => {
  let component: ListCoinsComponent;
  let fixture: ComponentFixture<ListCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
