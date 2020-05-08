class Animal {
  constructor(name) {
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

class Cat extends Animal {
  sound() {
    console.log("Cat meow");
  }
}

class Home {
  constructor(){
    this.animalArray = [];
  }

  adoptPet(animal) {
    this.animalArray.push(animal);
  }

  makeAllSounds() {
    for (var i = 0; i < this.animalArray.length; i++) {
      this.animalArray[i].sound();
    }
  }
}