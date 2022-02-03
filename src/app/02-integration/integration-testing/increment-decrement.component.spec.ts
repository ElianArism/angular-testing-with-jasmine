import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IncrementDecrementComponent } from './increment-decrement.component';

describe('Incremendator Component', () => {
  let component: IncrementDecrementComponent;
  let fixture: ComponentFixture<IncrementDecrementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementDecrementComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementDecrementComponent);
    component = fixture.componentInstance;
  });

  it('It should show the title in the html', () => {
    // set title
    component.title = 'Progress';
    // detect changes in html
    fixture.detectChanges(); // important
    // get elemn from html
    const elem: HTMLElement = fixture.debugElement.query(
      /**
       * To find selectors
       */
      By.css('h3')
    ).nativeElement;
    // case
    expect(elem.innerHTML).toContain('Progress');
  });

  it('It should display the input progress value', () => {
    component.changeValue(5);
    // to detect changes
    fixture.detectChanges();
    // wait for the app to render
    fixture.whenStable().then(() => {
      // get input
      const input = fixture.debugElement.query(By.css('input'));
      const element: HTMLInputElement = input.nativeElement;
      // case
      expect(element.value).toBe('55');
    });
  });

  it('It should decrement/increment 5 when the user clicks the button', () => {
    const [decrement, increment] = fixture.debugElement.queryAll(
      By.css('.btn-primary')
    );
    // trigger click
    decrement.triggerEventHandler('click', null);
    expect(component.progress).toBe(45);
    // trigger click
    increment.triggerEventHandler('click', null);
    expect(component.progress).toBe(50);
  });

  it('It should decrement 5 when the user clicks the button and show it in the html', () => {
    const [decrement, increment] = fixture.debugElement.queryAll(
      By.css('.btn-primary')
    );
    // trigger click
    decrement.triggerEventHandler('click', null);
    expect(component.progress).toBe(45);
    // get html
    const h3: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    fixture.detectChanges();

    expect(h3.innerHTML).toContain('45');
  });
});
