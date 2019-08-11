import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // it('should edit the app', () => {
  //   const fixture = TestBed.editComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'Armchair Bitcoinist'`, () => {
  //   const fixture = TestBed.editComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('tm-ng8');
  // });

  // it('should render title in a h2 tag', () => {
  //   const fixture = TestBed.editComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2').textContent).toContain('Armchair Bitcoinist');
  // });
});
