// Normally using
const add = (num1: number, num2: number): number => num1 + num2;

// Properties can include `one`, or `theOther`. But it cannot include both:
// const properties = { one: "hi", theOther: "bye" }; // Invalid
// const properties = { one: "hi" }; // Valid
// const properties = { theOther: "bye" }; // Valid

// We use the `never` type to express that you may NEVER pass `theOther` if you have passed `one`.
interface OnlyOne {
    one: string;
    theOther?: never;
}

// Make an Ideal Scenario
// We use the `never` type to express that you may NEVER pass `one` if you have passed `theOther`.
interface OnlyTheOther {
    one?: never;
    theOther: string;
}

// You can only pass a parameter that meets the requirements of `OnlyOne`
// OR
// you can only pass a parameter that meets the requirements of `OnlyTheOther`
type OneOrTheOtherError = OnlyOne | OnlyTheOther;

const OneOrTheOtherError = ({ one, theOther }: OneOrTheOtherError) => {
    if (one) {
        return { one: one };
    } else if (theOther) {
        return { theOther: theOther };
    }
};

console.log(OneOrTheOtherError({ one: "hi", theOther: "bye" })); // This will return an Error
/*
Argument of type '{ one: string; theOther: string; }' is not assignable to parameter of type 'OneOrTheOther'.
  Type '{ one: string; theOther: string; }' is not assignable to type 'OnlyTheOther'.
    Types of property 'one' are incompatible.
      Type 'string' is not assignable to type 'undefined'.ts(2345)
*/
