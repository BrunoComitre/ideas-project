// ******************************** Variables *********************************
// A forma mais simples de declarar uma variável á utilando let
var name = "John";
console.log(name);
// Um exemplo de typagem com erro, mostrando o que deve ser passado para a variável
var age = "30";
console.log(age);
var age2 = 30;
console.log(age2);
// ********************************** Arrays **********************************
var animals = ["dog", "cat", "mouse"];
console.log(animals);
var animals2 = ["dog", "cat", 10];
console.log(animals2);
var animals3 = ["dog", "cat", "bird"];
console.log(animals3);
var animals4 = [1, 2, 3];
console.log(animals4);
var animals5 = [1, 2, "3"];
console.log(animals5);
var animals6 = ["dog", { "one": 2 }, 3];
console.log(animals6);
// *********************************** Enums **********************************
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var CarType;
(function (CarType) {
    CarType[CarType["Sedan"] = 0] = "Sedan";
    CarType[CarType["Coupe"] = 1] = "Coupe";
    CarType[CarType["Hatchback"] = 2] = "Hatchback";
})(CarType || (CarType = {}));
;
var corolla = CarType.Sedan;
console.log(corolla);
// ********************************** Tuples **********************************
var address = ["Main Street", 1234];
console.log(address);
var people = ["John", 30];
console.log(people);
var people2 = [["John", "Wick"], [30]];
console.log(people2);
// *********************************** Any ************************************
var anything = "dog";
console.log(anything);
anything = 25;
console.log(anything);
anything = true;
console.log(anything);
function greet(person3) {
    person3 = { name: "John", age: 30 };
    return "Hello, " + person3.name;
}
function greet2(person2) {
    person2 = { name: 30, age: "Brunce" };
    return "Hello, " + person2.name;
}
// ********************************* Functions ********************************
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
function greeter(fn) {
    fn("Hello World!");
}
function printToConsole(arg) {
    console.log(arg);
}
greeter(printToConsole);
function greeter2(fn) {
    fn("Hello World!");
}
function printHello(arg) {
    console.log(arg);
}
greeter2(printHello);
// ********************************* Classes **********************************
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var p = new Person("John", 30);
console.log(p);
var p2 = {
    name: "John",
    age: 30
};
console.log(p2);
var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    return Dog;
}());
var pet = new Dog("Poodle", 2);
console.log(pet);
// Exemplo Correto
var pet2;
var dog2 = { name: "Lassie", gender: "male" };
pet2 = dog2;
// ********************************* Generics *********************************
function identity(arg) {
    return arg;
}
console.log(identity("dog"));
console.log(identity(25));
console.log(identity(true));
// ****************************** Type Assertions *****************************
var someValue = "this is a string";
console.log(typeof (someValue));
var strLength = someValue.length;
console.log(strLength);
// ****************************** Advanced Types ******************************
var val = "this is a string";
var strLength2 = val.length;
console.log(strLength2);
// ****************************** Type Inference ******************************
var val2 = "this is a string";
var strLength3 = val2.length;
console.log(strLength3);
// ******************************* Union Types ********************************
var val3 = "this is a string";
val3 = 25;
console.log(val3);
var val7 = true;
val7 = 25;
console.log(val7);
// **************************** Intersection Types ****************************
var val9 = "this is a string";
val9 = 25;
console.log(val9);
var val8 = true;
val8 = 25;
console.log(val8);
var user = { name: "John", age: 30, state: "ON" };
console.log(user);
// ******************************* Type Guards ********************************
// ******************************* Type Casting *******************************
// ******************************** Duck Typing *******************************
// ************************** Higher-Order Functions **************************
// ********************************* Callbacks ********************************
// ********************************* Promises *********************************
//# sourceMappingURL=typeAnnotations.js.map