import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('It should show the title in the html', () => {
    // set title
    component.title = 'Progress';
    fixture.detectChanges(); // important
    // get elemn from html
    const elem: HTMLElement = fixture.debugElement.query(
      /**
       * To find selectors
       */
      By.css('h3')
    ).nativeElement;
    console.log(elem.textContent);
    // case
    expect(elem.innerHTML).toContain('Progress');
  });
});
