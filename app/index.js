import {Person, SuperPerson} from "./person";

const bob = new Person("Bob");
console.log(bob.speak("My name is Bob!"));

const ryan = new SuperPerson("Ryan", "tip toe real quiet");
ryan.speak("My name is Ryan");

ryan.saySuperPower();