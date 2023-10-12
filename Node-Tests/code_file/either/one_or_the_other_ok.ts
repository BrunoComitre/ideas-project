// Normally using
const add = (num1: number, num2: number): number => num1 + num2;

// Properties can include `one`, or `theOther`. But it cannot include both:
// const properties = { one: "hi", theOther: "bye" }; // Invalid
// const properties = { one: "hi" }; // Valid
// const properties = { theOther: "bye" }; // Valid

// Make an Ideal Scenario
interface OneOrTheOtherOk {
    one?: string;
    theOther?: string;
}

const oneOrTheOther = (properties: OneOrTheOtherOk): OneOrTheOtherOk => {
    if (properties.one) {
        return { one: properties.one };
    } else if (properties.theOther) {
        return { theOther: properties.theOther };
    }
};

console.log(oneOrTheOther({ one: "hi", theOther: "bye" }));
