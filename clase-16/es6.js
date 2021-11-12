import { sumaModulo, restaModulo, divisionModulo } from './operations.js';

// arrow function
function fn(a, b) {
  return a + b;
}

const fnArrow = (a, b) => a + b;

console.log(fn(2, 3));

console.log(fnArrow(3, 4));

// parametros por defecto
function getData(name = 'sebastian', lastname = 'yabiku', age = 34) {
  return `${name} ${lastname} ${age}`;
}

// parametros rest
function suma(a, b, ...c) {
  let resultado = a + b;

  c.forEach((n) => {
    resultado = resultado + n;
  });

  return resultado;
}
console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// spread operator
const datos = ['hola', 'como', 'estas', 'jose'];

console.log(...datos);
console.log(datos[0], datos[1], datos[2], datos[3]);

function limpiarEspacios(...cadenas) {
  for (let i = 0; i < cadenas.length; i++) {
    cadenas[i] = cadenas[i].trim();
  }
  return cadenas;
}

const cadenasCol = ['hola    ', ' algo    ', ' más', 'dad ad ad  '];

let cadenasLimpias = limpiarEspacios(...cadenasCol);
console.log(cadenasLimpias);

const col = [0, 1, 2, 3, 4];
const col2 = [...col, 5, 6];

console.log('col', col);
console.log('col2', col2);

const obj = {
  name: 'sebas',
  lastname: 'yabiku',
};

const obj2 = {
  ...obj,
  age: 34,
};

console.log('obj', obj);
console.log('obj', obj2);

//OBJECTS
function UserObject(name = 'sebastian', lastname = 'yabiku', age = 34) {
  return {
    name,
    lastname,
    age,
  };
}

// const user = {
//   name: 'sebastian',
//   lastname: 'yabiku',
//   age: 34
// }
const user = UserObject('sebastian', 'yabiku', 34);
const user2 = UserObject('jose', 'yabiku', 34);

// METODOS CONCISOS
const obj3 = {
  fn: function () {
    console.log(this);
  },
};
obj3.fn();

const obj4 = {
  fn() {
    console.log(this);
  },
};
obj4.fn();

// COPIAR OBJETOS CON ERROR
let valorUno = 'sebastian';
let valorDos = valorUno;
valorUno = 'JOSE';

console.log('valorDos', valorDos); // sebastian
console.log('valorUno', valorUno); // JOSE

let objOriginal = {
  name: 'sebastian',
};

let objCopia = objOriginal;
objOriginal.name = 'JOSE';

console.log(objCopia.name); // sebastian
console.log(objOriginal.name); // JOSE

// COPIA OBJETOS DE MANERA CORRECTA
let objOriginal2 = {
  name: 'sebas',
};

// let objCopia2 = Object.assign({}, objOriginal2)
let objCopia2 = { ...objOriginal2 };
objOriginal2.name = 'JOSE';

console.log(objCopia2.name); // sebastian
console.log(objOriginal2.name); // JOSE

// destructuring objetos
const objDes = {
  name: 'sebas',
  lastname: 'yabiku',
  age: 18,
  data: {
    address: 'siempre viva',
    url: 'www.google.com',
  },
};

objDes.name; // sebas
objDes.lastname; // yabiku

let {
  name,
  lastname,
  age,
  data: { address, url: urlCambiado },
} = objDes;

console.log(name); // sebas
console.log(lastname); // yabiku
console.log(age); // 18
console.log('address', address); // siempre viva
console.log('url', urlCambiado); // www.google.com

// destructuring array
const arr = [0, 14, 3, 4, 5, 6];
const arr2 = [...arr];

console.log(arr2);
arr.push(5);
console.log('arr', arr);
console.log('arr2', arr2);

let [firtNumber, secondNumber, , , , six] = arr;

console.log(firtNumber);
console.log(secondNumber);
console.log(six);

// TEMPLATE STRING
console.log('hola ' + firtNumber + ' ' + secondNumber);
console.log(`hola ${firtNumber} ${secondNumber} ${2 + 2} asdsad ${fn(2, 3)}`);

console.log('sumaModulo', sumaModulo(2, 3))
console.log('restaModulo', restaModulo(5, 3))
console.log('divisionModulo', divisionModulo(9, 3))