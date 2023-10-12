// https://www.tutorialspoint.com/typescript/index.htm

// ********************************** TYPES ***********************************

/* O null e undefined não podem ser usados para fazer referência ao tipo de
   dados de uma variável. Eles só podem ser atribuídos como valores a
   uma variável
*/
let value: null = null;
let valor: null = 0;
let value2: undefined = undefined;
let valor2: undefined = 0;

let value3: number = 0;
let value4: string = "";
let value5: boolean = true;
let value6: any = 0;
let value7: number[] = [1, 2, 3];
let value8: any[] = [1, "2", 3];
let value9: Array<number> = [1, 2, 3];
let value10: [number, string] = [1, "2"];
let value11: { [key: string]: number } = {};
let value12: { [key: number]: number } = {};
let value13: { [key: string]: string } = {};
let value14: { [key: number]: string } = {};
let value15: { [key: string]: any } = {};

/* Tipos de dados Built-in
    number
    string
    boolean
    any
    void
    null
    undefined
    never
*/

/* Tipos de dados Customizados pelo usuário
    Array
    Enum
    Interface
    Tuplas
    Matrizes
    Classe
    Função/Método
    Tipo
*/




// ******************************** VARIABLES *********************************

// var [identifier] : [type-annotation] = value;

var firstName: string = "John";  // Um valor do tipo string armazenado

var ageLife: number;  // Uma variável number comn valor undefined

var lastName = "Doe";  // Uma variável do tipo string definido pelo valor "Doe"

var birthYear;  // Uma variável do tipo any definido pelo valor undefined

var score1: number = 50;
var score2: number = 42.50;
var sum = score1 + score2;
console.log(sum);
console.log(typeof sum);
console.log("The sum of the scores is " + sum + ".");


var num: number = "5";
console.log(num);
console.log(typeof num);

// Assertion Types
var value1: string = "5";
var valueok: number = <number><any>value1; // Agora valueok é do tipo number
console.log(valueok);
console.log(typeof valueok);

// Inferred Typing
var number = 5;  // number é inferido pelo valor 5
console.log(number);
console.log(typeof number);

// Lançará um erro: error TS2011: Cannot convert 'string' to 'number'.
number = "5";  // number é inferido pelo valor "5"
console.log(number);
console.log(typeof number);

// Variable Scope

/* Escopo Global - As variáveis globais são declaradas fora das construções de
   programação. Essas variáveis podem ser acessadas de qualquer lugar dentro
   do seu código.

   Escopo de Classe - Essas variáveis também são chamadas de campos . Campos ou
   variáveis de classe são declarados dentro da classe, mas fora dos métodos.
   Essas variáveis podem ser acessadas usando o objeto da classe. Os campos
   também podem ser estáticos. Campos estáticos podem ser acessados usando o
   nome da classe.

   Escopo Local - Variáveis locais, como o nome sugere, são declaradas dentro
   das construções como métodos, loops, etc. As variáveis locais são acessíveis
   apenas dentro da construção onde são declaradas.
*/

var global_num = 12;  // variável global
class Numbers {
    num_val = 13;  // variável de classe
    static sval = 10;  // variável estática de classe

    storeNum(): void {
        var local_num = 14;  // variável local
    }
}

console.log("Global num: " + global_num);  // imprime 12
console.log(Numbers.sval);  // acesso a variável estática de classe

var obj = new Numbers();  // instanciação da classe
console.log("Global num: " + obj.num_val);  // acesso a variável de classe

/* Se você tentar acessar a variável local fora do método, isso resultará em um
   erro de compilação: error TS2095: Could not find symbol 'local_num'.
*/




// ******************************** OPERATORS *********************************

// Operadores Principais do Typescript

// Operadores Aritméticos
// + (Adição), - (Subtração), * (Multiplicação, / (Divisão), % (Módulo),
// ++ (Incremento), -- (Decremento)

var number1: number = 4;
var number2: number = 1;

var result1 = (number1 + number2);
console.log("+ (Adição) Operator = " + result1);

var number3: number = 4;
var number4: number = 1;

var result2 = (number3 - number4);
console.log("- (Subtração) Operator = " + result2);

var number5: number = 4;
var number6: number = 1;

var result3 = (number5 * number6);
console.log("* (Multiplicação) Operator = " + result3);

var number7: number = 4;
var number8: number = 1;

var result4 = (number7 / number8);
console.log("/ (Divisão) Operator = " + result4);

var number9: number = 4;
var number10: number = 1;

var result5 = (number9 % number10);
console.log("% (Módulo) Operator = " + result5);

var number11: number = 4;
var number12: number = 1;

var result6 = (number11++ number12);
console.log("++ (Incremento) Operator = " + result6);

var number13: number = 4;
var number14: number = 1;

var result7 = (number13-- number14);
console.log("-- (Decremento) Operator = " + result7);

// Operadores Lógicos
// && (E), || (OU), ! (NÃO)

var number1: number = 4;
var number2: number = 1;

var result1 = (number1 > 10 && number2 > 10);
console.log("&& (E) Operator = " + result1);

var number3: number = 4;
var number4: number = 1;

var result2 = (number3 > 3 || number4 > 3);
console.log("|| (OU) Operator = " + result2);

var number5: number = 4;
//var number6: number = 1;

var result3 = !(number5 > 10);
console.log("! (NÃO) Operator = " + result3);

// Operadores Relacionais
// == (Igualdade), != (Não Igual), > (Maior Que), < (Menor Que),
// >= (Maior Que ou Igual A), <= (Menor Que ou Igual A)

var number1: number = 4;
var number2: number = 1;

var result1 = (number1 > number2);
console.log("> (Maior que) Operator = " + result1);

var number3: number = 4;
var number4: number = 1;

var result2 = (number3 < number4);
console.log("< (Menor que) Operator = " + result2);

var number5: number = 4;
var number6: number = 1;

var result3 = (number5 >= number6);
console.log(">= (Maior que ou igual a) Operator = " + result3);

var number7: number = 4;
var number8: number = 1;

var result4 = (number7 <= number8);
console.log("<= (Menor que ou igual a) Operator = " + result4);

var number9: number = 4;
var number10: number = 1;

var result5 = (number9 == number10);
console.log("== (Igualdade) Operator = " + result5);

var number11: number = 4;
var number12: number = 1;

var result6 = (number11 != number12);
console.log("!= (Não igual) Operator = " + result6);

// Operadores bit a bit
// & (E bit a bit), | (BitWise OU), ^ (XOR bit a bit), ~ (não bit a bit),
// << (Deslocamento à esquerda), >> (Deslocamento à direita),
// >>> (Deslocamento à direita com Zero)

var number1: number = 4;
var number2: number = 1;

var result1 = (number1 & number2);
console.log("& (E) Operator = " + result1);

var number3: number = 4;
var number4: number = 1;

var result2 = (number3 | number4);
console.log("| (BitWise/OU) Operator = " + result2);

var number5: number = 4;
var number6: number = 1;

var result3 = (number5 ^ number6);
console.log("^ (XOR) Operator = " + result3);

var number7: number = 4;
//var number8: number = 1;

var result4 = (~number7);
console.log("~ (Not) Operator = " + result4);

var number9: number = 4;
//var number10: number = 1;

var result5 = (number9 << 1);
console.log("<< (Deslocamento à esquerda) Operator = " + result5);

var number11: number = 4;
// var number12: number = 1;

var result6 = (number11 >> 1);
console.log(">> (Deslocamento à direita) Operator = " + result6);

var number13: number = 4;
// var number14: number = 1;

var result7 = (number13 >>> 1);
console.log(">>> (Deslocamento à direita com Zero) Operator = " + result7);

// Operadores de Atribuição
// = (Atribuição Simples), += (Adicionar e Atribuir), -= (Subtrair e Cessão),
// *= (Multiplicar e Atribuir), /= (Divisão e Atribuição)

var number1: number = 4;
var number2: number = 1;

var result1 = number1 + number2;
console.log("= (Atribuição Simples) Operator = " + result1);

var number3: number = 4;
var number4: string = 'Hello';

var result2 = (number3 += number4);
console.log("+=  (Adicionar e Atribuir) Operator = " + result2);

var result3 = (number3 += 4);
console.log("+=  (Adicionar e Atribuir) Operator = " + result3);

var result4 = (number4 += 'World');
console.log("+=  (Adicionar e Atribuir) Operator = " + result4);

var number5: number = 4;
//var number6: number = 1;

var result5 = (number5 -= 3);
console.log("-= (Subtrair e Cessão) Operator = " + result5);

var result6 = (number5 -= 'Hello');
console.log("-= (Subtrair e Cessão) Operator = " + result6);

var number7: number = 4;
// var number8: number = 1;

var result7 = (number7 *= 3);
console.log("*= (Multiplicar e Atribuir) Operator = " + result7);

var result8 = (number7 *= 'Hello');
console.log("*= (Multiplicar e Atribuir) Operator = " + result8);

var number9: number = 4;
// var number10: number = 1;

var result9 = (number9 /= 2);
console.log("/= (Divisão e Atribuição) Operator = " + result9);

var result10 = (number9 /= 0);
console.log("/= (Divisão e Atribuição) Operator = " + result10);

var result11 = (number9 /= 'Hello');
console.log("/= (Divisão e Atribuição) Operator = " + result11);

// Nota − A mesma lógica se aplica aos operadores Bitwise,
// então eles se tornarão <<=, >>=, >>=, &=, |= e ^=.

// Operadores Diversos
// Operador de Negação
var x: number = 4;
var y = -x;
printToConsole.log("Operador de Negação x = " + x);
console.log("Operador de Negação y = " + y);

// Operadores de String
// Operador de Concatenação
var message: string = "Hello" + "World";
console.log("Operador de Concatenação message = " + message);
// Não adiciona espaço entre as strings

// Operadores Ternários/Condicionais (?)
// Test ? expr1 : expr2
// Test = true ? "True" : "False";
// Test - refere-se à expressão condicional
// expr1 - valor retornado se a condição for verdadeira
// expr2 - valor retornado se a condição for falsa
var num: number = -4;
var result = (num > 0) ? "Positivo" : "Negativo";
console.log("Operador Condicional (?)/ Operador Ternário result = " + result);

var positive = 10 * 2;
var negative = 10 * -2;
var result = (positive > negative) ? "Positivo" : "Negativo";
console.log("Operador Condicional (?)/ Operador Ternário result = " + result);

var num1: number = -12;
var result12 = (num1 > 0) ? positive : negative;
console.log("Operador Condicional (?)/ Operador Ternário result12 = " + result12);

// Operadores de Tipo
var value_of_type: number = 10;
var result13 = (value_of_type instanceof Number);
console.log("Operador de Tipo result13 = " + typeof result13);
console.log(typeof value_of_type)

var value_of_type1: string = "Hello";
var result14 = (value_of_type1 instanceof String);
console.log("Operador de Tipo result14 = " + typeof result14);
console.log(typeof value_of_type1)




// ****************************** DECISION MAKING *****************************
/* if declaração
   Uma instrução 'if' consiste em uma expressão booleana seguida por
   uma ou mais instruções.
*/

var num2: number = 10;
if (num2 > 0) {
    console.log("Este é um número positivo");
}

/* if... else declaração
   Uma instrução 'if' pode ser seguida por uma instrução 'else' opcional, que é
   executada quando a expressão booleana é falsa.
*/

var num3: number = 20;
if (num3 % 2 == 0) {
    console.log("Este é um número par");
} else {
    console.log("Este é um número ímpar");
}

/* else…if e instruções if aninhadas
   Você pode usar uma instrução 'if' ou 'else if' dentro de outra instrução
   'if' ou 'else if'.
*/

var num4: number = 30;
if (num4 % 2 == 0) {
    console.log("Este é um número par");
} else if (num4 % 3 == 0) {
    console.log("Este é um número múltiplo de 3");
} else {
    console.log("Este é um número ímpar");
}

/* instrução switch
   Uma instrução 'switch' permite que uma variável seja testada em relação a
   uma lista de valores.
*/

var grade: string = "A";
switch (grade) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Bom");
        break;
    case "C":
        console.log("Regular");
        break;
    case "D":
        console.log("Ruim");
        break;
    case "E":
        console.log("Péssimo");
        break;
    default:
        console.log("Nota inválida");
}




// *********************************** LOOPS **********************************
// Loop Definido

// Loop: for
// O loop for é uma implementação de um loop definido.

var num: number = 5;
var i: number;
var factorial = 1;

for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial)

// Loop Indefinido

// Loop while
// O laço while executa as instruções toda vez que a condição especificada
// for avaliada como verdadeira.

var num: number = 5;
var factorial: number = 1;

while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("The factorial  is " + factorial);

//Loop do while
// O loop do…while é semelhante ao loop while, exceto que o loop do...while
// não avalia a condição na primeira vez que o loop é executado.

var n: number = 5
while (n > 5) {
    console.log("Entered while")
}
do {
    console.log("Entered do…while")
}
while (n > 5)

var i: number = 1
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("The first multiple of 5  between 1 and 10 is : " + i)
        break     //exit the loop if the first multiple is found
    }
    i++
}

var num: number = 0
var count: number = 0;

for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue
    }
    count++
}
console.log(" The count of odd values between 0 and 20 is: " + count)

// Laço Infinito
for (; ;) {
    console.log("This is an endless loop")
}

while (true) {
    console.log("This is an endless loop")
}




// ******************************** FUNCTIONS *********************************
// Exemplo de uma função rest (...)
function addNumbers(message: string, ...nums: number[]): void {
    var i: any;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    console.log(message, sum)
}

addNumbers("Contagem 1", 1, 2, 3)

addNumbers("Contagem 2", 10, 10, 10, 10, 10)

// Exemplo de função com parâmetros default
function calculate_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}

calculate_discount(1000)
calculate_discount(1000, 0.30)

// Funções Anônimas
var anonymous_function = function (a: number, b: number) {
    return a + b;
}
console.log(anonymous_function(10, 20));

var anonymous_function = function (a: number, b: number) {
    return a + b;
}
console.log(anonymous_function(10, 20));

// Funções Recursivas
function factorial(num: number): number {
    if (num <= 0) {
        return 1;
    } else {
        var result;
        result = num * factorial(num - 1);
        console.log("num:" + num)
        console.log("fatorial:" + factorial(num - 1))
        console.log("result:" + result)
        return result
    }
};

console.log(factorial(3))

// Funções Lambda
var foo = (x: number) => 10 + x
console.log(foo(300))

// Variações de Funções
var func = (x) => {
    if (typeof x == "number") {
        console.log("is numeric:" + x)
    } else if (typeof x == "string") {
        console.log("is numeric:" + x)
    } else {
        console.log("esse func é um exemplo de variação sintática:" + x)
    }
}

func(12);
func("Text");
func(true);

var display = x => {
    console.log("Parênteses são opcionais para um único parâmetro")
}

display(3);

var disp = () => {
    console.log("Chaves são opcionais para uma única instrução, parênteses vazios para nenhum parâmetro")
}

disp();

// Sobrecarca de Função
function displ(s1: string): void;
function displ(n1: number, s1: string): void;

function displ(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}

displ("abc")
displ(1, "xyz")




// ********************************** NUMBERS *********************************
console.log("TypeScript Number Properties: ");
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE);
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);

console.log("Value of EPSILON:" + Number.EPSILON);
console.log("Value of MAX_SAFE_INTEGER:" + Number.MAX_SAFE_INTEGER);
console.log("Value of MIN_SAFE_INTEGER:" + Number.MIN_SAFE_INTEGER);
console.log("Value of NaN:" + Number.NaN);
console.log("Value of apply:" + Number.apply);
console.log("Value of isSafeInteger:" + Number.isSafeInteger);
console.log("Value of name:" + Number.name);
console.log("Value of prototype:" + Number.prototype);
console.log("Value of toString:" + Number.toString);

// Exemplo NaN
var month = 0
if (month <= 0 || month > 12) {
    month = Number.NaN
    console.log("Month is " + month)
} else {
    console.log("Value Accepted..")
}

// Exemplo protype
function employee(id: number, name: string) {
    this.id = id
    this.name = name
}

var emp = new employee(123, "Smith")
employee.prototype.email = "smith@abc.com"

console.log("Employee 's Id: " + emp.id)
console.log("Employee's name: " + emp.name)
console.log("Employee's Email ID: " + emp.email)

var valueNumber: number = 192364092;

console.log(valueNumber.toExponential());
console.log(valueNumber.toFixed());
console.log(valueNumber.toLocaleString());
console.log(valueNumber.toPrecision());
console.log(valueNumber.toString());
console.log(valueNumber.valueOf());




// ********************************** STRINGS *********************************
var valueString: string = "My Text is a Text";

console.log(valueString.charAt());
console.log(valueString.charCodeAt());
console.log(valueString.codePointAt());
console.log(valueString.concat());
console.log(valueString.indexOf());
console.log(valueString.lastIndexOf());
console.log(valueString.localeCompare());
console.log(valueString.match());
console.log(valueString.replace());
console.log(valueString.search());
console.log(valueString.slice());
console.log(valueString.split());
console.log(valueString.substr());
console.log(valueString.substring());
console.log(valueString.toLocaleLowerCase());
console.log(valueString.toLocaleUpperCase());
console.log(valueString.toLowerCase());
console.log(valueString.toString());
console.log(valueString.toUpperCase());
console.log(valueString.valueOf());




// ********************************** ARRAYS **********************************
// Um array é uma coleção homogênea de valores. Simplificando, uma matriz é uma
// coleção de valores do mesmo tipo de dados. É um tipo definido pelo usuário

// Formas de criar um array
var numlist: number[] = [2, 4, 6, 8]
var numlist: Array<number> = [2, 4, 6, 8]

// Array Simples
var alphas: string[];
alphas = ["1", "2", "3", "4"]
console.log(alphas[0]);
console.log(alphas[1]);

// Exemplo de decaração e inicialização de instrução única
var nums: number[] = [1, 2, 3, 3]
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);

// Declarando um Array como Objeto
var arr_names: number[] = new Array(4)

for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
}

// Exemplo de Array Constructor aceita valores separados por vírgula
var names: string[] = new Array("Mary", "Tom", "Jack", "Jill")

for (var i = 0; i < names.length; i++) {
    console.log(names[i])
}

// Métodos de Array
var arrlist: Array<any> = [2, "Text", true]

var arrlist2: Array<any> = [2, "Text", true]

function isBigEnough(element, index, array) {
    return (element >= 10);
}

console.log(arrlist.concat(arrlist2));
console.log(arrlist.every(isBigEnough));
console.log(arrlist.filter(isBigEnough));
arrlist.forEach(function (value) { console.log(value); });
console.log(arrlist.indexOf(2));
console.log(arrlist.join(", "));
console.log(arrlist.lastIndexOf("Text"));
console.log(arrlist.map(Math.sqrt));
console.log(arrlist.pop());
console.log(arrlist.push());
console.log(arrlist.reduce(function (a, b) { return a + b; }));
console.log(arrlist.reduceRight(function (a, b) { return a + b; }));
console.log(arrlist.reverse());
console.log(arrlist.shift());
console.log(arrlist.slice());
console.log(arrlist.some(isBigEnough));
console.log(arrlist.sort());
console.log(arrlist.splice());
console.log(arrlist.toString());
console.log(arrlist.unshift());

// Desestruturação de Matriz
var arr: number[] = [12, 13]
var [x, y] = arr
console.log(x)
console.log(y)

// Array Traversal usando for…in loop
var j: any;
var nums: number[] = [1001, 1002, 1003, 1004]

for (j in nums) {
    console.log(nums[j])
}

// Array Multidimensional
var multi: number[][] = [[1, 2, 3], [23, 24, 25]]
console.log(multi[0][0])
console.log(multi[0][1])
console.log(multi[0][2])
console.log(multi[1][0])
console.log(multi[1][1])
console.log(multi[1][2])

// Passando Arrays para Funções
var names: string[] = new Array("Mary", "Tom", "Jack", "Jill")

function disp(arr_names: string[]) {
    for (var i = 0; i < arr_names.length; i++) {
        console.log(names[i])
    }
}
disp(names)

// Função que retorna um Array
function disp(): string[] {
    return new Array("Mary", "Tom", "Jack", "Jill")
}

var nums: string[] = disp()
for (var i in nums) {
    console.log(nums[i])
}




// ********************************** TUPLES **********************************
var mytuple = [10, "Hello"];

// Você também pode declarar uma tupla vazia no Typescript e optar por
// inicializá-la posteriormente
var mytuple2 = [];
mytuple[0] = 120
mytuple[1] = 234

// Os valores de tupla são chamados individualmente de itens
var mytuple3 = [10, "Hello"];
console.log(mytuple[0])
console.log(mytuple[1])

// Exemplo de Tupla Vazia
var tup = []
tup[0] = 12
tup[1] = 23

console.log(tup[0])
console.log(tup[1])

// Operações de Tupla
// As tuplas no TypeScript suportam várias operações, como enviar um novo
// item, ou remover um item da tupla, entre outros
var mytuple4 = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple4.length)

mytuple.push(12)
console.log("Items after push " + mytuple4.length)
console.log("Items before pop " + mytuple4.length)
console.log(mytuple4.pop() + " popped from the tuple")

console.log("Items after pop " + mytuple4.length)


// As tuplas são mutáveis, o que significa que você pode atualizar ou alterar
// os valores dos elementos da tupla

var mytuple5 = [10, "Hello", "World", "typeScript"];
console.log("Tuple value at index 0 " + mytuple5[0])

// Atualizando um elemento existentes na tupla
mytuple5[0] = 121
console.log("Tuple value at index 0 changed to   " + mytuple5[0])

//Desestruturando uma Tupla
var atuple = [10, "hello"]
var [btuple, ctuple] = atuple
console.log(btuple);
console.log(ctuple);




// *********************************** UNION **********************************
var valueUnion: string | number
valueUnion = 12
console.log("numeric value of val " + valueUnion)
valueUnion = "This is a string"
console.log("string value of val " + valueUnion)

// União e Matrizes
var arrayUnionMatriz: number[] | string[];
var i: number;
arrayUnionMatriz = [1, 2, 4]
console.log("**numeric array**")

for (i = 0; i < arrayUnionMatriz.length; i++) {
    console.log(arrayUnionMatriz[i])
}

arrayUnionMatriz = ["Mumbai", "Pune", "Delhi"]
console.log("**string array**")

for (i = 0; i < arrayUnionMatriz.length; i++) {
    console.log(arrayUnionMatriz[i])
}




// ******************************** INTERFACES ********************************
// Interfaces definem propriedades, métodos e eventos, que são os membros
// da interface

// As interfaces contêm apenas a declaração dos membros

interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee2: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  Object ")
console.log(employee2.firstName);
console.log(employee2.lastName);

// Interfaces e Matrizes
// A interface pode definir tanto o tipo de chave que um array usa quanto o
// tipo de entrada que ele contém

// O índice pode ser do tipo string ou do tipo number

interface namelist {
    [index: number]: string
}

var list2: namelist = ["John", 1, "Bran"];
interface ages {
    [index: string]: number
}

var agelist: ages;
agelist["John"] = 15;
agelist[2] = "nine;

// Interfaces e Herança
interface Person {
    age: number
}

interface Musician extends Person {
    instrument: string
}

var drummer = <Musician>{};
drummer.age = 27
drummer.instrument = "Drums"
console.log("Age:  " + drummer.age)
console.log("Instrument:  " + drummer.instrument)

// Herança de Múltiplas interfaces
interface IParent1 {
    v1: number
}

interface IParent2 {
    v2: number
}

interface Child extends IParent1, IParent2 { }
var Iobj: Child = { v1: 12, v2: 23 }
console.log("value 1: " + this.v1 + " value 2: " + this.v2)




// ********************************** CLASSES *********************************
// Declarando uma Classe
class Car {
    //field
    engine: string;

    //constructor
    constructor(engine: string) {
        this.engine = engine
    }

    //function
    disp(): void {
        console.log("Engine is  :   " + this.engine)
    }
}

// Instanciando uma Classe
var objCar = new Car("Engine 1");
console.log("Engine is  :   " + objCar.engine);

// Acessando o atributo da Classe
objCar.engine

// Acessando o Método/Função da Classe
objCar.disp()

// Herança de Classes
// Uma classe herda de outra classe usando a palavra-chave 'extends'
// As classes filhas herdam todas as propriedades e métodos, exceto membros
// privados e construtores da classe pai
class Shape {
    Area: number

    constructor(a: number) {
        this.Area = a
    }
}

class Circle extends Shape {
    disp(): void {
        console.log("Area of the circle:  " + this.Area)
    }
}

var objMath = new Circle(223);
objMath.disp()

// Herança Multinível
class Root {
    str_value: string;
}

class Child extends Root { }

// indirectly inherits from Root by virtue of inheritance
class Leaf extends Child { }

var objMulti = new Leaf();
objMulti.str_value = "hello"
console.log(objMulti.str_value)

// Herança de classe e substituição de método
// A substituição de método é um mecanismo pelo qual a classe filha redefine o
// método da superclasse
class PrinterClass {
    doPrint(): void {
        console.log("doPrint() from Parent called…")
    }
}

class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint()
        console.log("doPrint() is printing a string…")
    }
}

var objRedefine = new StringPrinter()
objRedefine.doPrint()

// O operador instanceof retornará true se o objeto pertencer ao
// tipo especificado
class PersonInstance { }
var objPerson = new PersonInstance()
var isPerson = objPerson instanceof PersonInstance;
console.log(" obj is an instance of Person " + isPerson);

// Ocultação de dados/Encapuslamento de dados
// Uma classe pode controlar a visibilidade de seus membros de dados para
// membros de outras classes. Esse recurso é denominado como ocultação de dados
// ou encapsulamento
class Encapsulate {
    strValue: string = "hello"
    private str2: string = "world"
}

var objEncapsulado = new Encapsulate()
console.log(objEncapsulado.strValue)
console.log(objEncapsulado.str2)

// As Classes podem implementar interfaces
interface ILoan {
    interest: number
}

class AgriLoan implements ILoan {
    interest: number
    rebate: number

    constructor(interest: number, rebate: number) {
        this.interest = interest
        this.rebate = rebate
    }
}

var obj2 = new AgriLoan(10, 1)
console.log("Interest is : " + obj2.interest + " Rebate is : " + obj2.rebate)




// ********************************** OBJECTS *********************************
var person = {
    firstname: "Tom",
    lastname: "Hanks"
};

console.log(person.firstname)
console.log(person.lastname)

// Type template
var person2 = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { }
}
person2.sayHello = function () {
    console.log("hello " + person2.firstName)
}

person2.sayHello()

// Objeto Literal
var person3 = {
    firstname: "Tom",
    lastname: "Hanks"
};

var invokeperson = function (obj6: { firstname: string, lastname: string }) {
    console.log("first name :" + obj6.firstname)
    console.log("last name :" + obj6.lastname)
}

invokeperson(person3)

// Objeto Literal com métodos
var person4 = {
    firstname: "Tom",
    lastname: "Hanks",
    sayHello: function () {
        console.log("hello " + person4.firstname)
    }
}

person4.sayHello()

// Objeto Anônimo
// O objeto anônimo é um objeto que não possui um nome
var invokeperson = function (obj: { firstname: string, lastname: string }) {
    console.log("first name :" + obj.firstname)
    console.log("last name :" + obj.lastname)
}

invokeperson({ firstname: "Sachin", lastname: "Tendulkar" });

// Feito por Bruno
interface INames {
    firstname: string;
    lastname: string;
}

const namesArray: INames[] = [
    { firstname: "Tom", lastname: "Hanks" },
    { firstname: "Bruce", lastname: "Wayne" },
    { firstname: "Tony", lastname: "Stark" },
    { firstname: "Clark", lastname: "Kent" },
    { firstname: "Billy", lastname: "Mandy" },
    { firstname: "Foo", lastname: "Bar" },
]



function printNames(names: Array<string>): void {
    var i: any;

    var invokeperson = function (names: { firstname: string, lastname: string }) {
        console.log("FRIST NAME : " + names.firstname)
        console.log("LAST NAME : " + names.lastname)
        console.log()
    }

    for (i = 0; i <= names.length; i++) {
        invokeperson({ firstname: names[i].firstname, lastname: names[i].lastname })
    }
}

printNames(namesArray)

// Duck Typing
interface IPoint {
    x: number
    y: number
}
function addPoints(p1: IPoint, p2: IPoint): IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return { x: x, y: y }
}

//Valid
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 })
console.log(newPoint)

//Error
var newPoint2 = addPoints({ x: 1 }, { x: 4, y: 3 })
console.log(newPoint2)




// ******************************** NAMESPACES ********************************
// Aprender em arquivos separados




// ********************************** MODULES *********************************
// Módulos Internos
// Uso Não Recomendado

// Módulos Externos
// Existem dois cenários para carregar arquivos js dependentes de um único
// arquivo JavaScript principal
// Lado do cliente - RequireJs
// Lado do servidor - NodeJs

// Exemplo de módulo externo
// IShape.ts
export interface IShape {
    draw();
}

// Circle.ts
import shape = require("./IShape");
export class Circle implements shape.IShape {
    public draw() {
        console.log("Cirlce is drawn (external module)");
    }
}

// Triangle.ts
import shape = require("./IShape");
export class Triangle implements shape.IShape {
    public draw() {
        console.log("Triangle is drawn (external module)");
    }
}

// TestShape.ts
import shape = require("./IShape");
import circle = require("./Circle");
import triangle = require("./Triangle");

function drawAllShapes(shapeToDraw: shape.IShape) {
    shapeToDraw.draw();
}

drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());




// ********************************* AMBIENTS *********************************
// Descrição no site de tipagtem para arquivos de pacotes de terceiros



