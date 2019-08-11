import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMakersComponent } from './data-makers.component';

describe('DataMakersComponent', () => {
  let component: DataMakersComponent;
  let fixture: ComponentFixture<DataMakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
