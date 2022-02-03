import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  /**
   * Init without webpack
      beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [HospitalComponent],
        });
      .compileComponents(); to use without webpack
      });
   */

  /**
   * Init
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalComponent],
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
