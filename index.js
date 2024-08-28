//ES5
var pet = {
    name: 'toninho',
    specie: 'hamster' ,
    age: 1.6
};

var age = pet.age;

//Destructing
var { age2 } = pet;

console.log(age2);
