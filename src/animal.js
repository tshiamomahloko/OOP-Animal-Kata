class Animal{
    constructor(name){
        this.name = name
    }

    eat(){
        console.log( this.name + " eats" )
    }
}

class Cat extends Animal {
    setSound(catSound){
        this.catSound = catSound
    }

    sound(){
        console.log("Cat " + this.catSound)
    }
}

let cat = new Cat();
let catSound = "Meow"
cat.setSound(catSound)
cat.name = "Stormy"

cat.eat()
cat.sound()

module.exports = {Cat}