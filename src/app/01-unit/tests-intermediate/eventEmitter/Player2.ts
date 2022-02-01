import { EventEmitter } from '@angular/core';

export class Player2 {
  hp!: number;
  hpChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  getDamage(dmg: number) {
    if (dmg >= this.hp) this.hp = 0;
    else this.hp -= dmg;

    this.hpChanged.emit(this.hp);
    return this.hp;
  }
}
