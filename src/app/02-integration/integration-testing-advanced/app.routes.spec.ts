import { DoctorComponent } from '../config-integration-testing-docs/doctor/doctor.component';
import { routes } from './app.routes';

describe('Main routes', () => {
  // Check if route exists
  it('Should exists route /doctor/:id', () => {
    expect(routes).toContain({
      path: 'doctor/:id',
      component: DoctorComponent,
    });
  });

  //
});
