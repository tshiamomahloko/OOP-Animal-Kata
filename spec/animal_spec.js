const {Cat} = require('../src/animal')
let cat = new Cat;
let catSound = "Meow"
cat.setSound(catSound)
cat.name = "Stormy"

describe('Display for Cat Implementation', function(){
    it('Should display name of the cat', function(){
        expect(cat.eat()).toBe("Stormy eats")
    })
    it('Should display the sound of the cat', function(){
        expect(cat.sound()).toBe("Cat Meow")
    })
})