import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // For routes and router outlet
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      // To avoid problems of multiple component declarations in different modules
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('router-outlet should exists', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const routOutlet = fixture.debugElement.query(
      /**
       * To select directives
       */
      By.directive(RouterOutlet)
    );

    expect(routOutlet).not.toBeNull();
  });
});
