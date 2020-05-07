class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + " eats");
  }
}
class Dog extends Animal {
  setSound(dogSound) {
    this.dogSound = dogSound;
  }
  sound() {
    console.log("Dog " + this.dogSound);
  }
}
let dog = new Dog();
let dogSound = "Barks";
dog.setSound(dogSound);
dog.name = "Rax";
dog.eat();
dog.sound();

class Cat extends Animal {
  setSound(catSound) {
    this.catSound = catSound;
  }
  sound() {
    console.log("Cat " + this.catSound);
  }
}
let cat = new Cat();
let catSound = "Meow";
cat.setSound(catSound);
cat.name = "Stormy";
cat.eat();
cat.sound();

//module.exports = {Cat}
