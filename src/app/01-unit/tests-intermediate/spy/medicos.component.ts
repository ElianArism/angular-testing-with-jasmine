import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';

@Component({
  selector: 'app-doctors',
  template: ` <p>doctors works!</p> `,
  styles: [],
})
export class DoctorsComponent implements OnInit {
  public doctors: any[] = [];
  public msgError!: string;

  constructor(public _doctorService: DoctorsService) {}

  ngOnInit() {
    this._doctorService
      .getDoctors()
      .subscribe((doctors) => (this.doctors = doctors));
  }

  addDoctor() {
    const doctor = { name: 'Juan Carlos' };
    this._doctorService.addDoctor(doctor).subscribe({
      next: (doctorDB) => this.doctors.push(doctorDB),
      error: (err) => (this.msgError = err),
    });
  }

  removeDoctor(id: string) {
    const confirmOpt = confirm('Estas seguro que desea borrar este médico');
    if (confirmOpt) {
      this._doctorService.removeDoctor(id);
    }
  }
}
