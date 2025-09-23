function addition(a: number, b: number) {
  return a + b;
}

let additionResult = addition(5, 10);
console.log("Addition Result:", additionResult);


// Literal Values

let color : "blue" | "Red" | "Yellow"; // string literal
color = "Red"; // valid
// color = "Green"; // Error: Type '"Green"' is not assignable to type '"blue" | "Red" | "Yellow"'. 
console.log("Selected Color:", color);

// Tuples
let myTuple: [number, string, boolean] = [10, "Hello", true]; // valid
// myTuple = [10, 20, "Hello"]; // Error: Type 'number' is not assignable to type 'string'.
// myTuple = [10, "Hello"]; // Error: Source has 2 element(s) but target requires 3.
myTuple = [25, "Hello", true]; // valid
console.log("Tuple Values:", myTuple);


// Enums

enum WeatherCondition {
  Sunny = "Sunny",
  Rainy = "Rainy",
  Cloudy = "Cloudy",
  Windy = "Windy",
  Snowy = "Snowy"
}

console.log("Weather Condition:", WeatherCondition.Sunny); // Output: Sunny


// Classes and Access Modifiers

class Person {
  private name: string; // private property
  protected age: number; // protected property
  public city: string; // public property
  readonly country: string; // readonly property

  constructor(name: string, age: number, city: string, country: string) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
  }
  public getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Country: ${this.country}`;
  }
}

let person = new Person("Alice", 30, "New York", "USA");
console.log(person.getDetails());


// Interfaces

interface Animal {
  name: string;
  age: number;
  makeSound(): string;
}

class Dog implements Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  makeSound(): string {
    return "Woof!";
  }
}

let myDog = new Dog("Buddy", 3);
console.log(`${myDog.name} with age ${myDog.age} says ${myDog.makeSound()}`);


interface Vehicle {
  start: () => void;
  stop: () => void;
}

class Car implements Vehicle {
  start() {
    console.log("Car started");
  }
  stop() {
    console.log("Car stopped");
  }
}