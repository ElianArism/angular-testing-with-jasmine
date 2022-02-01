import { userLogged } from './boolean';
describe('Testing of Booleans', () => {
  it('It should return true', () => {
    const res = userLogged();
    expect(res).toBeTruthy();
  });
});
