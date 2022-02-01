import { DoctorComponent } from './doctor.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DoctorService } from './doctor.service';
import { HttpClientModule } from '@angular/common/http';

describe('Doctor Component', () => {
  let component: DoctorComponent;

  /**
   * For manipulate component DOM
   */
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(() => {
    /**
     * Config to ompile with angular for can access to component.html and component.scss
     * TestBed is like any module but for testing
     */
    TestBed.configureTestingModule({
      declarations: [DoctorComponent],
      providers: [DoctorService],
      imports: [HttpClientModule],
    });
    /**
     * Init component for can access to component.html and component.scss
     */
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
  });

  it('The component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('component.sayHello should be return Hello', () => {
    expect(component.sayHello()).toBe('Hello');
  });
});
