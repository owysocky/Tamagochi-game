import Astro from './../src/astro';

describe('Mercury', function() {
  it('should test weather Mercury age is correct', function(){
    let user = new Astro(1, 1);
    expect(user.mercury()).toEqual(0.24);
  });

  it('should test weather expected Mercury age is correct', function(){
    let user = new Astro(1, 1);
    expect(user.lifeExpectancyMercury()).toEqual(23.76);
  });

  it('should test weather weight on Mercury is correct', function(){
    let user = new Astro(1, 1);
    expect(user.mercuryGravity()).toEqual(0.26);
  });
});

describe('Venus', function() {
  it('should test weather Venus age is correct', function(){
    let user = new Astro(1, 1);
    expect(user.venus()).toEqual(0.62);
  });

  it('should test weather expected Venus age is correct', function(){
    let user = new Astro(1, 1);
    expect(user.lifeExpectancyVenus()).toEqual(61.38);
  });

  it('should test weather weight on Venus is correct', function(){
    let user = new Astro(1, 1);
    expect(user.venusGravity()).toEqual(0.9);
  });
});

describe('Mars', function() {
  it('should test weather Mars age is correct', function(){
    let user = new Astro(1, 1);
    expect(user.mars()).toEqual(1.88);
  });

  it('should test weather expected Mars age is correct', function(){
    let user = new Astro(1, 1);
    expect(user.lifeExpectancyMars()).toEqual(186.12);
  });

  it('should test weather weight on Mars is correct', function(){
    let user = new Astro(1, 1);
    expect(user.marsGravity()).toEqual(0.37);
  });
});

describe('Jupiter', function() {
  it('should test weather Jupiter age is correct', function(){
    let user = new Astro(1, 1);
    expect(user.jupiter()).toEqual(11.86);
  });

  it('should test weather expected Jupiter age is correct', function(){
    let user = new Astro(1, 1);
    expect(user.lifeExpectancyJupiter()).toEqual(1174.14);
  });

  it('should test weather weight on Jupiter is correct', function(){
    let user = new Astro(1, 1);
    expect(user.jupiterGravity()).toEqual(2.64);
  });
});
