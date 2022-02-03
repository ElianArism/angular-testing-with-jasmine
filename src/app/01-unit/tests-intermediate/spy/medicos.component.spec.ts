import { DoctorsComponent } from './medicos.component';
import { DoctorsService } from './doctors.service';
import { from, of, throwError } from 'rxjs';

describe('Doctors Component', () => {
  let component: DoctorsComponent;
  const service = new DoctorsService(null);

  beforeEach(() => {
    component = new DoctorsComponent(service);
  });

  /**
   * The spies are useful to simulate a service/function with fake data.
   * When a service is spied to return fake data, it is called Mock
   */

  it('It should load doctors', () => {
    // spy to mock the service
    spyOn(service, 'getDoctors').and.callFake(() => {
      return from(['doctor1', 'doctor2', 'doctor3']);
    });
    // call component.ngOnInit manually
    component.ngOnInit();
    // case
    expect(component.doctors.length).toBeGreaterThan(0);
  });

  it('It should call service.addDoctor', () => {
    // spy to mock the service
    const spy = spyOn(service, 'addDoctor').and.callFake(() => {
      return of({});
    });
    // call component.addDoctor manually
    component.addDoctor();
    // case
    expect(spy).toHaveBeenCalled();
  });

  it('It should add a new doctor in the doctors array', () => {
    const newDoctor = { doctorId: 1, name: 'Sebastian' };
    spyOn(service, 'addDoctor').and.returnValue(of(newDoctor));
    component.addDoctor();
    expect(component.doctors.indexOf(newDoctor)).toBeGreaterThanOrEqual(0);
  });

  it('It should call service.addDoctor, fail, and save the error in component.msgError', () => {
    const err = 'add doctor fail!';
    // mock error
    spyOn(service, 'addDoctor').and.returnValue(throwError(() => err));
    // call method
    component.addDoctor();
    // case
    expect(component.msgError).toBe(err);
  });

  it('It should call service.removeDoctor to remove a doctor', () => {
    // spy window to  mock confirm click
    spyOn(window, 'confirm').and.returnValue(true);
    // mock
    const spy = spyOn(service, 'removeDoctor').and.returnValue(of({}));
    // call method
    component.removeDoctor('1');
    // case
    expect(spy).toHaveBeenCalled();
  });

  it('It should not call service.removeDoctor to remove a doctor', () => {
    // spy window to  mock confirm click
    spyOn(window, 'confirm').and.returnValue(false);
    // mock
    const spy = spyOn(service, 'removeDoctor').and.returnValue(of({}));
    // call method
    component.removeDoctor('1');
    // case
    expect(spy).not.toHaveBeenCalledWith('1');
  });
});
