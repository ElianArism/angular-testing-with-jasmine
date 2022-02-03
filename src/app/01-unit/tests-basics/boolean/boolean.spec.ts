import { userLogged } from './boolean';
describe('Boolean', () => {
  it('It should return true', () => {
    const res = userLogged();
    expect(res).toBeTruthy();
  });
});
