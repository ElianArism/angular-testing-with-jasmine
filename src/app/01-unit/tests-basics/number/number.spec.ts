import { increment } from './number';
describe('Numbers', () => {
  it('It should return 100, if the ingresed number is greather than 100', () => {
    const number = increment(300);
    expect(number).toBe(100);
  });

  it('It should return number + 1, if the ingresed number is lower than 100', () => {
    const number = increment(50);
    expect(number).toBe(51);
  });
});
