import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterDoctorComponent } from './router-doctor.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, Subject, from } from 'rxjs';

class FakeRouter {
  navigate(...args: any[]) {
    console.log(args);
    return args;
  }
}

class FakeActivatedRoute {
  params: Observable<any> = from([{ id: '123' }]);

  private subject = new Subject();

  push(value: any) {
    this.subject.next(value);
  }
}

describe('RouterDoctorComponent', () => {
  let component: RouterDoctorComponent;
  let fixture: ComponentFixture<RouterDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterDoctorComponent],
      // easy way for import router and activated route
      // imports: [RouterTestingModule],
      // import router and activated route only with mock classes
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to a new medic when save', () => {
    // get instance of router (but it's false because the implementation in ConfigureTestModule)
    const router = TestBed.inject(Router);
    // spy
    const spy = spyOn(router, 'navigate');

    component.saveDoctor();

    expect(spy).toHaveBeenCalledWith(['doctor', 'abc234r1341324']);
  });

  it('should change id value to [123] ', () => {
    // get instance of ActivatedRoute (but it's false because the implementation in ConfigureTestModule)
    TestBed.inject(ActivatedRoute);
    expect(component.id).toBe('123');
  });
});
