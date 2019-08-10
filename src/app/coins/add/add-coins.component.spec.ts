import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoinsComponent } from './add-coins.component';

describe('AddCoinsComponent', () => {
  let component: AddCoinsComponent;
  let fixture: ComponentFixture<AddCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
