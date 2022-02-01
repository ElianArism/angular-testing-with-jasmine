import { RegisterForm } from './form';

describe('Forms', () => {
  let component: RegisterForm;

  beforeEach(() => (component = new RegisterForm()));

  it('It should has the next fields: email, password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('Email must be required', () => {
    const control = component.form.controls['email'];
    control.setValue(''); // this is invalid
    expect(control.valid).toBeFalsy(); // Because the control value is invalid
    control.setValue('elian@'); // this is invalid
    expect(control.valid).toBeFalsy(); // Because the control value is invalid
    control.setValue('elian.arismendi@interatica.com'); // this is valid
    expect(control.valid).toBeTruthy(); // Because the control value is valid
  });
});
