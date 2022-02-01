import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  doctors = [];
  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {}

  sayHello() {
    return 'Hello';
  }

  getDoctors() {
    this.doctorService
      .getDoctors()
      .subscribe((doctors: any) => (this.doctors = doctors));
  }
}
