// const _ = require('lodash');

/*
_.chain(): permite o encadeamento de várias funções;
_.filter(): filtra os objetos de acordo com a chave fornecida;
_.sortBy(): ordena os elementos de acordo com o critério estabelecido;
_.map(): cria uma matriz para guardar os valores após iterar sobre um array;
_.join(): converte os elementos de um array em string e faz a separação dos valores dado um separador.
*/

// const regexp = new RegExp('=', 'g');

// const array = [
//   new RegExp('\\+', 'g'), '\\+',
//   new RegExp('\\=', 'g'), '\\=',
//   new RegExp('\\-', 'g'), '\\-',
//   new RegExp('\\_', 'g'), '\\_',
//   new RegExp('\\[', 'g'), '\\[',
//   new RegExp('\\]', 'g'), '\\]',
//   new RegExp('\\<', 'g'), '\\<',
//   new RegExp('\\>', 'g'), '\\>',
// ]

// const listaDeArray = [
//   {
//  rgx: new RegExp('\\+', 'g'), adj: '\\+',
// },
//   {
//  rgx: new RegExp('\\=', 'g'), adj: '\\+',
// },
//   {
//  rgx: new RegExp('\\-', 'g'), adj: '\\-',
// },
//   {
//  rgx: new RegExp('\\_', 'g'), adj: '\\_',
// },
//   {
//  rgx: new RegExp('\\[', 'g'), adj: '\\[',
// },
//   {
//  rgx: new RegExp('\\]', 'g'), adj: '\\]',
// },
//   {
//  rgx: new RegExp('\\<', 'g'), adj: '\\<',
// },
//   {
//  rgx: new RegExp('\\>', 'g'), adj: '\\>',
// },
//   ];

// const listaOrdenada = _.chain(listaDeArray)
//   .filter({ adj: '\\+' })
//   // .sortBy('idade')
//   .map('rgx')
//   .join(', ')
//   .value();
//   console.log(listaOrdenada);

function ConvertStringToHex(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
                       arr[i] = (`00${str.charCodeAt(i).toString(16)}`).slice(-4);
                }
  return `\\u${arr.join('\\u')}`;
         }

console.log(ConvertStringToHex('Bruno'));

// \u0042\u0072\u0075\u006e\u006f

// adb shell

// am broadcast -a ADB_INPUT_CHARS --eia chars \u0042
