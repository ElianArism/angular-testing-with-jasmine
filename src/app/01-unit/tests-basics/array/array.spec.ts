import { getRobots } from './array';

describe('Testing of arrays', () => {
  it('It should return at least three robots', () => {
    const res = getRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });
  it('It should contain Megaman and Jarvis', () => {
    const res = getRobots();
    expect(res).toContain('Megaman');
    expect(res).toContain('Jarvis');
  });
});
