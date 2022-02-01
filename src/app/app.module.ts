import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementadorComponent } from './02-integration/integration-testing/incrementador.component';
import { DoctorComponent } from './02-integration/config-integration-testing-docs/doctor/doctor.component';
import { HospitalComponent } from './02-integration/config-integration-testing-docs/hospital/hospital.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementadorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
