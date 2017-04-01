'use strict';

function Person() {
  var _this = this;

  this.name = 'yamada';
  this.age = 34;
  this.hello = function () {
    console.log('hello ' + _this.name);
  };
}

var person = new Person();
person.hello();