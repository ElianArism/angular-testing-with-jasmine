import { IncrementDecrementComponent } from './increment-decrement.component';

/**
 * Unit Tests
 */
describe('Unit tests', () => {
  let component: IncrementDecrementComponent;

  beforeEach(() => {
    component = new IncrementDecrementComponent();
  });

  it('progress should be 100 when the passed value is greater than 100', () => {
    component.progress = 0;
    component.changeValue(150);
    expect(component.progress).toBe(150);
  });
});
