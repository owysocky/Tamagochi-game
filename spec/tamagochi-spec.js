import {Tamagochi} from './../src/tamagochi';
import {Cat} from './../src/cat';
import {Chicka} from './../src/chicka';
import {DinoRex} from './../src/dinorex';
import {time} from './../src/time';
import {action} from './../src/time';

describe('Tamagochi', function() {
  it('should test weather Tamagochi name is correct', function(){
    let tamagochi = new Tamagochi("tamagochi");
    expect(tamagochi.name).toEqual("tamagochi");
  });

  it('should test weather it adds expected sleep amount', function(){
    let tamagochi = new Tamagochi("tamagochi");
    tamagochi.getSleep();
    expect(tamagochi.sleep).toEqual(10);
  });

  it('should test weather it adds expected fun amount', function(){
    let tamagochi = new Tamagochi("tamagochi");
    tamagochi.getFun();
    expect(tamagochi.fun).toEqual(15);
  });

  it('should test weather it adds expected hunger amount', function(){
    let tamagochi = new Tamagochi("tamagochi");
    tamagochi.getFood();
    expect(tamagochi.hunger).toEqual(15);
  });

  it('should test weather tamagochi is dead', function(){
    let tamagochi = new Tamagochi("tamagochi");
    expect(tamagochi.isDead()).toEqual(false);
  });
});

describe('Tamagochi', function() {
  let tamagochi = new Tamagochi("tamagochi");

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a food level of 9 after 5001 milliseconds', function() {
    tamagochi.setHunger();
    jasmine.clock().tick(5001);
    expect(tamagochi.hunger).toEqual(9);
  });

  it('should have a food level of 3 after 5001 milliseconds', function() {
    tamagochi.setSleep();
    jasmine.clock().tick(5001);
    expect(tamagochi.sleep).toEqual(3);
  });

  it('should have a fun level of 9 after 5001 milliseconds', function() {
    tamagochi.setFun();
    jasmine.clock().tick(10001);
    expect(tamagochi.fun).toEqual(8);
  });

  it('should test weather tamagochi is dead after 15 seconds', function(){
    tamagochi.setSleep();
    jasmine.clock().tick(15001);
    expect(tamagochi.isDead()).toEqual(true);
  });

});
