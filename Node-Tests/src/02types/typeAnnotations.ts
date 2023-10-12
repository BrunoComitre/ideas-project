// ******************************** Variables *********************************
// A forma mais simples de declarar uma variável á utilando let
let name: string = "John";
console.log(name);

// Um exemplo de typagem com erro, mostrando o que deve ser passado para a variável
let age: number = "30";
console.log(age);

let age2: number = 30;
console.log(age2);




// ********************************** Arrays **********************************
let animals: string[] = ["dog", "cat", "mouse"];
console.log(animals);

let animals2: Array<string> = ["dog", "cat", 10];
console.log(animals2);

let animals3: Array<string> = ["dog", "cat", "bird"];
console.log(animals3);

let animals4: number[] = [1, 2, 3];
console.log(animals4);

let animals5: number[] = [1, 2, "3"];
console.log(animals5);

let animals6: Array<any> = ["dog", { "one": 2 }, 3];
console.log(animals6);



// *********************************** Enums **********************************
enum Color { Red, Green, Blue };
let c: Color = Color.Green;
console.log(c);

enum CarType { Sedan, Coupe, Hatchback };
let corolla: CarType = CarType.Sedan;
console.log(corolla);




// ********************************** Tuples **********************************
let address: [string, number] = ["Main Street", 1234];
console.log(address);

let people: [string, any] = ["John", 30];
console.log(people);

let people2: [[string, string], [number]] = [["John", "Wick"], [30]];
console.log(people2);



// *********************************** Any ************************************
let anything: any = "dog";
console.log(anything);

anything = 25;
console.log(anything);

anything = true;
console.log(anything);



// ********************************** Objects *********************************

type Person3 = {
    name: string;
    age: number;
}

function greet(person3: Person3): string {
    person3 = { name: "John", age: 30 };

    return "Hello, " + person3.name;
}

type Person2 = {
    name: number;
    age: string;
}

function greet2(person2: Person2): string {
    person2 = { name: 30, age: "Brunce" };

    return "Hello, " + person2.name;
}



// ********************************* Functions ********************************
function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(add(2, 3));

function greeter(fn: (a: string) => void) {
    fn("Hello World!");
}

function printToConsole(arg: any) {
    console.log(arg);
}

greeter(printToConsole);


type HelloMessage = (name: string) => void;
function greeter2(fn: HelloMessage) {
    fn("Hello World!");
}

function printHello(arg: string) {
    console.log(arg);
}

greeter2(printHello);




// ********************************* Classes **********************************
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let p = new Person("John", 30);
console.log(p);



// ******************************** Interfaces ********************************
interface Person {
    name: string;
    age: number;
}
let p2: Person = {
    name: "John",
    age: 30
}
console.log(p2);

// Exemplo simples mas errado
interface Pet {
    name: string;
    age: number;
}

class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let pet: Pet = new Dog("Poodle", 2);
console.log(pet);

// Exemplo Correto

let pet2: Pet;

let dog2 = { name: "Lassie", gender: "male" };

pet2 = dog2;




// ********************************* Generics *********************************
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("dog"));
console.log(identity<number>(25));
console.log(identity<boolean>(true));




// ****************************** Type Assertions *****************************
let someValue: any = "this is a string";

console.log(typeof (someValue));

let strLength: number = (<string>someValue).length;
console.log(strLength);




// ****************************** Advanced Types ******************************
let val: any = "this is a string";

let strLength2: number = (val as string).length;
console.log(strLength2);




// ****************************** Type Inference ******************************
let val2 = "this is a string";

let strLength3 = val2.length;
console.log(strLength3);




// ******************************* Union Types ********************************
let val3: string | number = "this is a string";
val3 = 25;
console.log(val3);

let val7: boolean | number = true;
val7 = 25;
console.log(val7);




// **************************** Intersection Types ****************************
let val9: string & number = "this is a string";
val9 = 25;
console.log(val9);

let val8: boolean | number = true;
val8 = 25;
console.log(val8);




// ******************************** Type Alias ********************************
// https://pt.stackoverflow.com/questions/445137/quais-s%C3%A3o-diferen%C3%A7as-entre-um-alias-de-tipo-e-interface-no-typescript
type State = "ON" | "OFF";

type User = {
    name: string;
    age: number;
    state: State;
}

let user: User = { name: "John", age: 30, state: "ON" };
console.log(user);




// ******************************* Type Guards ********************************
// ******************************* Type Casting *******************************
// ******************************** Duck Typing *******************************
// ************************** Higher-Order Functions **************************
// ********************************* Callbacks ********************************
// ********************************* Promises *********************************
