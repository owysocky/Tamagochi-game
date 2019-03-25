export class Tamagochi{
  constructor(name){
    this.name = name;
    this.sleep = 5;
    this.fun = 10;
    this.hunger = 10;
  }

  getFood(){
    this.hunger += 5;
  }

  getSleep(){
    this.sleep += 5;
  }

  getFun(){
    this.fun += 5;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 5000);
  }

  setSleep() {
    setInterval(() => {
      this.sleep -= 2;
    }, 5000);
  }

  setFun() {
    setInterval(() => {
      this.fun--;
    }, 5000);
  }

  isDead() {
    if (this.food > 0|| this.sleep > 0) {
      return false;
    } else {
      return true;
    }
  }
}
