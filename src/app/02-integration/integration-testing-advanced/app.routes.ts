import { Routes } from '@angular/router';
import { HospitalComponent } from '../config-integration-testing-docs/hospital/hospital.component';
import { DoctorComponent } from '../config-integration-testing-docs/doctor/doctor.component';

export const routes: Routes = [
  {
    path: 'hospital',
    component: HospitalComponent,
  },
  {
    path: 'doctor/:id',
    component: DoctorComponent,
  },
];
