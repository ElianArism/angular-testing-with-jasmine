import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Navbar Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarComponent],
    });
  });

  it('routerLink="/doctors" should exist', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const [doctorsRoutLink] = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    console.log(doctorsRoutLink);
    expect(doctorsRoutLink.attributes['routerLink']).toBe('/doctors');
  });
});
