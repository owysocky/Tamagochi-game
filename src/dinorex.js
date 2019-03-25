import { Tamagochi } from './../src/tamagochi';

export class DinoRex extends Tamagochi{
  constructor(name){
    super(name);
  }

  feed(){
    this.hunger += 10;
  }

  sleep(){
    this.sleep += 10;
  }

  fun(){
    this.fun += 5;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 3000);
  }

  setSleep() {
    setInterval(() => {
      this.sleep -= 2;
    }, 3000);
  }

  setFun() {
    setInterval(() => {
      this.fun--;
    }, 3000);
  }
}
