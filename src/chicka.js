import {Tamagochi} from './../src/tamagochi';

export class Chicka extends Tamagochi{
  constructor(name){
    super(name);
  }

  feed(){
    this.hunger += 3;
  }

  fun(){
    this.fun += 7;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 6000);
  }
  setFun() {
    setInterval(() => {
      this.fun--;
    }, 2000);
  }

}
