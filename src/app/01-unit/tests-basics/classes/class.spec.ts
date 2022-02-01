import { Player } from './class';
describe('Testing of Classes', () => {
  /**
   * Testing lifecycle
      beforeAll()
      beforeEach()
      afterAll()
      afterEach()
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

/**
 * Para ejecutar metricas de que tan cubierto se encuentra el codigo por pruebas
 * se corre: ng test --code-coverage
 */
