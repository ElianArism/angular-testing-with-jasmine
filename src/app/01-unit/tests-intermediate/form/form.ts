import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class RegisterForm {
  form!: FormGroup;

  constructor() {
    this.form = new FormBuilder().group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
