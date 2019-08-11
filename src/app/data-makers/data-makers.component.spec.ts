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
    fixture = TestBed.editComponent(DataMakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should edit', () => {
    expect(component).toBeTruthy();
  });
});
