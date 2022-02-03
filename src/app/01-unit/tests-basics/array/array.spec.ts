import { getRobots } from './array';
/**
 * Describe: groups tests
 */
describe('Arrays', () => {
  /**
   * it: Define tests
   */
  it('It should return at least three robots', () => {
    const res = getRobots();
    /**
     * Expect: This is the case or condition to be evaluated
     */
    expect(res.length).toBeGreaterThanOrEqual(3);
  });
  it('It should contain Megaman and Jarvis', () => {
    const res = getRobots();
    expect(res).toContain('Megaman');
    expect(res).toContain('Jarvis');
  });
});
