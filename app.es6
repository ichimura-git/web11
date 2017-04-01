function Person() {
  this.name = 'yamada';
  this.age = 34;
  this.hello = () => {
    console.log('hello ' + this.name);
  }
}

let person = new Person();
person.hello();