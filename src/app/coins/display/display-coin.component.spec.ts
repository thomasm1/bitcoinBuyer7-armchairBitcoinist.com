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
    fixture = TestBed.editComponent(DisplayCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit', () => {
    expect(component).toBeTruthy();
  });
});
