import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCoinComponent } from './details-coin.component';

describe('DetailsCoinComponent', () => {
  let component: DetailsCoinComponent;
  let fixture: ComponentFixture<DetailsCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.editComponent(DetailsCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit', () => {
    expect(component).toBeTruthy();
  });
});
