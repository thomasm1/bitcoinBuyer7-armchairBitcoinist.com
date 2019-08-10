import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCoinComponent } from './display-coin.component';

describe('DisplayCoinComponent', () => {
  let component: DisplayCoinComponent;
  let fixture: ComponentFixture<DisplayCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
