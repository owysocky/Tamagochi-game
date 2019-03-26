import $ from 'jquery';


export function time(tamagochi) {

  let myInterval = setInterval(() => {
    if(tamagochi.isDead() === true)
    {
      $('.isdead').text("Yor pet has cracked and no longer breathing");
      $("img").css("transform", "rotate(90deg)");
      clearInterval(myInterval);
      tamagochi.sleep = 0;
      tamagochi.fun = 0;
      tamagochi.hunger = 0;
    }
    $('.sleep').text(tamagochi.sleep);
    $('.fun').text(tamagochi.fun);
    $('.hunger').text(tamagochi.hunger);
  }, 100);
}

export function action(tamagochi){
  tamagochi.setHunger();
  tamagochi.setSleep();
  tamagochi.setFun();
}
