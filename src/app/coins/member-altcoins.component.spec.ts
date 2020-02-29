import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAltcoinsComponent } from './member-altcoins.component';

describe('MemberAltcoinsComponent', () => {
  let component: MemberAltcoinsComponent;
  let fixture: ComponentFixture<MemberAltcoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAltcoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAltcoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
