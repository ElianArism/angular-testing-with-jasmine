import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class DoctorsService {
  constructor(public http: HttpClient | null) {}
  getDoctors() {
    return (this.http as HttpClient)
      .get('...')
      .pipe(map((resp: any) => resp['doctors']));
  }

  addDoctor(doctor: any) {
    return (this.http as HttpClient)
      .post('...', doctor)
      .pipe(map((resp: any) => resp['doctors']));
  }

  removeDoctor(id: string) {
    return (this.http as HttpClient)
      .delete('...')
      .pipe(map((resp: any) => resp['doctors']));
  }
}
