let variableUno = 10;
let variableDos = 20;
let variableTres = 30;
let variableCuatro = 40;

console.log(variableUno);
console.log(variableDos);
console.log('age3', age3);
age3 = '20 jose';
console.log('age3', age3);

let nameOneGlobal = 'FN GLOBAL';

function fnOne() {
  let nameOne = 'FNONE';
  let nameTwo = 30;

  console.log('nameOne', nameOne);
  console.log('nameOneGlobal en fnOne', nameOneGlobal);
}

function fnTwo() {
  let nameOne = 'FNTWO';
  let nameTwo = 30;

  console.log('nameOne', nameOne);
  console.log('nameOneGlobal en fnTwo', nameOneGlobal);
}

fnOne();
fnTwo();
console.log('nameOneGlobal', nameOneGlobal);


