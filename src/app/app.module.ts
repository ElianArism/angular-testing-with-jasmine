import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './02-integration/config-integration-testing-docs/doctor/doctor.component';
import { HospitalComponent } from './02-integration/config-integration-testing-docs/hospital/hospital.component';
import { FormsModule } from '@angular/forms';
import { IncrementDecrementComponent } from './02-integration/integration-testing/increment-decrement.component';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { RouterDoctorComponent } from './advanced/router-doctor/router-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementDecrementComponent,
    NavbarComponent,
    RouterDoctorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
