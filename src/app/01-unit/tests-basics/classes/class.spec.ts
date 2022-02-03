import { Player } from './class';
describe('Class', () => {
  /**
   * Testing lifecycle
      beforeAll()   => before all tests
      beforeEach()  => before each test
      afterAll()    => after all tests
      afterEach()   => after each test
   */

  let player: Player;

  beforeEach(() => {
    player = new Player();
  });

  it('It must return 80hp if gets 20 of dmg', () => {
    const res = player.getDamage(20);
    expect(res).toBe(80);
  });

  it('It must return 50hp if gets 50 of dmg', () => {
    const res = player.getDamage(50);
    expect(res).toBe(50);
  });
  it('It must return 0hp if gets more than 100 of dmg', () => {
    const res = player.getDamage(100);
    expect(res).toBe(0);
  });
});
