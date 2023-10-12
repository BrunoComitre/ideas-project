/*
Either são:
agrupar os tipos que sao falhos do tipo que sao sucessos
*/

// https://medium.com/@gcanti/functional-typescript-either-vs-validation-66c52f28ce1f
// https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/
// https://khalilstemmler.com/articles/enterprise-typescript-nodejs/handling-errors-result-class/
// https://maecapozzi.com/either-or-types/
// https://en.wikipedia.org/wiki/Category_theory
// https://paulgray.net/the-state-monad/


import { chain, Either, left, right } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { getSemigroup } from 'fp-ts/NonEmptyArray'
import { getValidation } from 'fp-ts/Either'
import { NonEmptyArray } from 'fp-ts/NonEmptyArray'
import { mapLeft } from 'fp-ts/Either'


const minLength = (s: string): Either<string, string> =>
    s.length >= 6 ? right(s) : left("The string is too short");

const oneCapitals = (s: string): Either<string, string> =>
    s.match(/[A-Z]/) ? right(s) : left("The string must contain at least one capital letter");

const oneNumber = (s: string): Either<string, string> =>
    s.match(/\d/) ? right(s) : left("The string must contain at least one number");

const oneSpecialChar = (s: string): Either<string, string> =>
    s.match(/[^a-zA-Z0-9]/) ? right(s) : left("The string must contain at least one special character");

const validatePassword = (s: string): Either<string, string> =>
    pipe(
        minLength(s),
        chain(oneCapitals),
        chain(oneNumber),
        chain(oneSpecialChar)
    )

console.log(validatePassword('ab'))

console.log(validatePassword('abcdef'))

console.log(validatePassword('Abcdef'))

console.log(validatePassword('Abcd21ef'))

console.log(validatePassword('A#cd21ef'))


const applicativeValidation = getValidation(getSemigroup<string>())
