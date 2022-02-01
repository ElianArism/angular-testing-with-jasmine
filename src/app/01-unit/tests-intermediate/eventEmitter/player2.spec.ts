import { Player2 } from './Player2';
describe('Event Emitter testing', () => {
  let player: Player2;

  beforeEach(() => (player = new Player2()));

  it('It should emit event when gets damage', () => {
    let newHp = 60;

    player.hpChanged.subscribe((hpValue) => {
      newHp = hpValue;
    });

    player.getDamage(1000);
    /**
     * The test waits for the value emitted by eventEmitter before checking if the test is correct
     */
    expect(newHp).toBe(0);
  });
});
