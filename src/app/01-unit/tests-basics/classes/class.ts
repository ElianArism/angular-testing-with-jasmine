export class Player {
  hp!: number;

  constructor() {
    this.hp = 100;
  }

  getDamage(dmg: number) {
    if (dmg >= this.hp) this.hp = 0;
    else this.hp -= dmg;
    return this.hp;
  }
}
