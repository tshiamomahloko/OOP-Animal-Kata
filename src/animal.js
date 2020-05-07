class Animal {
  setName(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + " eats");
  }
}
class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}
let dog = new Dog();
dog.setName("Rax");
dog.eat();
dog.sound();

class Cat extends Animal {
  sound() {
    console.log("Cat meow");
  }
}
let cat1 = new Cat();
cat1.setName("Stormy");
cat1.eat();
cat1.sound();

//IGNORE
console.log("");
console.log("*************************************");
console.log("");
//END_IGNORE

let homeAnimals = [];
class Home {
  adoptPet(animal) {
    homeAnimals.push(animal);
  }
  makeAllSounds() {
    for (var increment = 0; increment < homeAnimals.length; increment++) {
      homeAnimals[increment].sound();
    }
  }
}

let home = new Home();
let dog1 = new Dog();
let dog2 = new Dog();
let cat = new Cat();

home.adoptPet(dog1);
home.adoptPet(cat);
home.adoptPet(dog2);
home.makeAllSounds();