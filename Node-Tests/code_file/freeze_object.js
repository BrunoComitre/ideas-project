// https://blog.logrocket.com/javascript-object-immutability-object-freeze-vs-object-seal/

const students = {
    "001" : "Kylie Yaeger",
    "002": "Ifeoma Kurosaki"
};
  
// seal object
Object.seal(students);

// test
Object.isSealed(students);

// cannot add or delete properties
students["003"] = "Amara King";
delete students["001"];

// *************** //

var someCar = new Object();
someCar.make = "Ford";
someCar.model = "Mustang";
someCar.year = 1969;

console.log(someCar);
console.log(someCar.make);
console.log(someCar.model);
console.log(someCar.year);
console.log();

someCar["make"] = "Toyota";
someCar["model"] = "Corolla";
someCar["year"] = 2005;

console.log(someCar);
console.log(someCar.make);
console.log(someCar.model);
console.log(someCar.year);
console.log();

// *************** //

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const myCar = new Car("Volkswagen", "Golf", "2018");

console.log(myCar);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
console.log();

const myOtherCar = new Car("Eagle", "Talon TSi", "1993");
console.log(myOtherCar);
console.log();

var carA = new Car("Nissan", "350Z", 1992);
console.log(carA);
console.log();

let carB = new Car("Mazda", "Miata", 1990);
console.log(carB);
console.log();

// *************** //

// Encapsulamento das propriedades e métodos de Animal
var Animal = {
    tipo: "Invertebrados", // Propriedades de valores padrão
    qualTipo : function() {  // Método que ira mostrar o tipo de Animal
      console.log(this.tipo);
    }
  }
  
// Cria um novo tipo de animal chamado animal1
var animal1 = Object.create(Animal);
animal1.qualTipo(); // Saída:Invertebrados
console.log();

// Cria um novo tipo de animal chamado Peixes
var peixe = Object.create(Animal);
peixe.tipo = "Peixes";
peixe.qualTipo(); // Saída: Peixes
console.log();
