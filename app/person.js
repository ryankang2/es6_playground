import $ from "jquery";

export class Person{
    constructor(name){
        this.name = name;
    }

    speak(text){
        return `${this.name} says: ${text}`
    }
}

export class SuperPerson extends Person{
    constructor(name, power){
        super(name);
        this.superpower = power;
    }
    
    speak(text){
        $("body").append(`<h1>${super.speak(text)}</h1>`);
    }

    saySuperPower(){
        this.speak(`My super power is ${this.superpower}`);
    }
}