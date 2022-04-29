"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Human2 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
;
const nill = new Human2("Nill", 25, "male");
const person = {
    name: "Nill",
    age: 22,
    gender: "male"
};
const sayHi = (person) => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};
const sayHi2 = (name, age, gender) => {
    if (gender == undefined) {
        gender = "undefined gender person";
    }
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi2("Nill", 18);
sayHi(person);
//# sourceMappingURL=index.js.map