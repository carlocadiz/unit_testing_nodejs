const chai = require('chai'); // 1
const assert = chai.assert;
const expect = chai.expect;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3


  it("should throw an error when there is no car", function() {

   // const shouldBuy = shouldBuyCar();
    //expect(shouldBuyCar.bind(shouldBuyCar)).to.throw('No Car!');
    expect(function(){ shouldBuyCar();
    }).to.throw('No Car!');
  });

  it("should return false if there is not details about the car", function() {
    const car = {};
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if it's a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true if colour is pink", function() {
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false if it's a hatchback and pink", function() {
    const car = {
      type: "hatchback",
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });


   it("should return true if fuel economy is 6 and price is under or equal to 5000", function() {
    const car = {
      litresPer100km: 6,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

   it("should return false if fuel economy is 6 and price is over 5000", function() {
    const car = {
      litresPer100km: 6,
      price: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

it("should return true if fuel economy is 11 and price is under or equal to 5000", function() {
    const car = {
      litresPer100km: 11,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

   it("should return false if fuel economy is 11 and price is over 5000", function() {
    const car = {
      litresPer100km: 11,
      price: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

   it("should return false if fuel economy is 5 and price is under or equal to 5000", function() {
    const car = {
      litresPer100km: 5,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

   it("should return false if fuel economy is 5 and price is over 5000", function() {
    const car = {
      litresPer100km: 5,
      price: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });






});