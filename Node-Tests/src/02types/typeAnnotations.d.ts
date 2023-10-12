declare let name: string;
declare let age: number;
declare let age2: number;
declare let animals: string[];
declare let animals2: Array<string>;
declare let animals3: Array<string>;
declare let animals4: number[];
declare let animals5: number[];
declare let animals6: Array<any>;
declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
}
declare let c: Color;
declare enum CarType {
    Sedan = 0,
    Coupe = 1,
    Hatchback = 2
}
declare let corolla: CarType;
declare let address: [string, number];
declare let people: [string, any];
declare let people2: [[string, string], [number]];
declare let anything: any;
declare type Person3 = {
    name: string;
    age: number;
};
declare function greet(person3: Person3): string;
declare type Person2 = {
    name: number;
    age: string;
};
declare function greet2(person2: Person2): string;
declare function add(num1: number, num2: number): number;
declare function greeter(fn: (a: string) => void): void;
declare function printToConsole(arg: any): void;
declare type HelloMessage = (name: string) => void;
declare function greeter2(fn: HelloMessage): void;
declare function printHello(arg: string): void;
declare class Person {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
declare let p: Person;
interface Person {
    name: string;
    age: number;
}
declare let p2: Person;
interface Pet {
    name: string;
    age: number;
}
declare class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
declare let pet: Pet;
declare let pet2: Pet;
declare let dog2: {
    name: string;
    gender: string;
};
declare function identity<T>(arg: T): T;
declare let someValue: any;
declare let strLength: number;
declare let val: any;
declare let strLength2: number;
declare let val2: string;
declare let strLength3: number;
declare let val3: string | number;
declare let val7: boolean | number;
declare let val9: string & number;
declare let val8: boolean | number;
declare type State = "ON" | "OFF";
declare type User = {
    name: string;
    age: number;
    state: State;
};
declare let user: User;
