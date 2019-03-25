import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';

import {Tamagochi} from './../src/tamagochi';
import {Cat} from './../src/cat';
import {Chicka} from './../src/chicka';
import {DinoRex} from './../src/dinorex';
import {time} from './../src/time';
import {action} from './../src/time';

$(document).ready(function() {

// =================DINO======================
  $('#dino-form').submit(function(event) {
    event.preventDefault();
    let inputName = $("#dinoname").val();
    $('.dinoname').text(inputName);
    $("#firstpage").hide();
    $("#secondpage").show();


    $("#getsleep").click(function() {
      tamagochi.getSleep();
    });

    $("#getfood").click(function() {
      tamagochi.getFood();
    });

    $("#getfun").click(function() {
      tamagochi.getFun();
    });

    let tamagochi = new DinoRex(inputName);

    action(tamagochi);

    time(tamagochi);
  });

// =================CAT======================

  $('#cat-form').submit(function(event) {
    event.preventDefault();
    let inputName = $("#catname").val();
    $('.catname').text(inputName);

    $("#firstpage").hide();
    $("#thirdpage").show();


    $("#catsleep").click(function() {
      tamagochi.getSleep();
    });
    $("#catfood").click(function() {
      tamagochi.getFood();
    });
    $("#catfun").click(function() {
      tamagochi.getFun();
    });

    let tamagochi = new Cat(inputName);

    action(tamagochi);
    time(tamagochi);
  });

// =================CHICKA======================

  $('#chicka-form').submit(function(event) {
    event.preventDefault();
    let inputName = $("#chickaname").val();
    $('.chickaname').text(inputName);

    $("#firstpage").hide();
    $("#forthpage").show();


    $("#chickasleep").click(function() {
      tamagochi.getSleep();
    });
    $("#chickafood").click(function() {
      tamagochi.getFood();
    });
    $("#chickafun").click(function() {
      tamagochi.getFun();
    });

    let tamagochi = new Chicka(inputName);

    action(tamagochi);
    time(tamagochi);
  });
});
