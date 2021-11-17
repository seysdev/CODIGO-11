// STRING
const cadena = '       sebastian                           yaya       ';

console.log('longitud', cadena.length);
console.log('concat', cadena.concat(' yabiku'));
console.log('includes', cadena.includes('sebastian'));
console.log('endsWith', cadena.endsWith('ian'));
console.log('startsWith', cadena.startsWith('se'));
console.log('indexOf', cadena.indexOf('a'));
console.log('lastIndexOf', cadena.lastIndexOf('n'));
console.log('replace', cadena.replace('sebastian', 'jose'));
console.log('slice', cadena.slice(2, 4));
console.log('split', cadena.split('b'));
console.log('toLowerCase', cadena.toLowerCase());
console.log('toUpperCase', cadena.toUpperCase());
console.log('trim', cadena.trim());

// ARRAY
console.log('--------------------------');
console.log('ARRAY!!!!!!!!!!');
console.log('--------------------------');
const num = [0, 1, 2, 10, 4, 5, 6];
const num2 = [7, 8, 9];

console.log('length', num.length);
console.log('isArray', Array.isArray(num));
console.log('Array.of', Array.of('sebastian'));
console.log('concat', num.concat(num2));
console.log('includes', num.includes(0));
console.log('indexOf', num.indexOf(1));
console.log('join', num.join('/'));
console.log('keys', num.keys().next());
console.log('lastIndexOf()', num.lastIndexOf(10));
console.log('reverse()', num.reverse());
console.log('shift()', num.shift());
console.log('slice()', [0, 1, 2, 3, 4].slice(1, 3));
const spliceVar = [0, 1, 2, 3, 4];
console.log('splice()', spliceVar.splice(1, 1));
console.log('spliceVar()', spliceVar);
console.log('unshift()', num.unshift());
console.log('push()', num.push(2));
console.log('push()', num.pop(2));

// ARRAY METODOS
const alumnos = [
  {
    name: 'sebastian',
    age: 34,
    sex: 'm',
  },
  {
    name: 'jose',
    age: 32,
    sex: 'm',
  },
  {
    name: 'melisa',
    age: 31,
    sex: 'f',
  },
  {
    name: 'cristina',
    age: 32,
    sex: 'f',
  },
];

const alumnosFullData = alumnos.map((alumno) => {
  return {
    ...alumno,
    grade: '5',
    school: 'miguel de cervantes',
  };
});

console.log('alumnos', alumnos);
console.log('alumnosFullData', alumnosFullData);

// filter
const alumnosMayores30 = alumnos.filter((alumno) => alumno.name > 30);
console.log('alumnosMayores30', alumnosMayores30);
console.log('alumnos', alumnos);

// find
const alumnoSebastian = alumnos.find((alumno) => alumno.name === 'sebastian');
console.log('alumnoSebastian', alumnoSebastian);

// findIndex
const alumnoSebastianPos = alumnos.findIndex(
  (alumno) => alumno.name === 'sebastian'
);
console.log('alumnoSebastian posicion', alumnoSebastianPos);

// some
const existMayor30 = alumnos.some((alumno) => alumno.age > 30);
console.log('existMayor30', existMayor30);

// every
const todosMayores30 = alumnos.every((alumno) => alumno.age > 30);
console.log('todosMayores30', todosMayores30);

// reduce
const numeros = [0, 1, 2, 3, 4, 5, 6];
const resultado = numeros.reduce((acumulado, valorActual) => {
  console.log('acumulado', acumulado);
  console.log('valorActual', valorActual);
  return acumulado + valorActual;
}, 0);

console.log('resultado', resultado);

// OBJECT
const objeto = {
  name: 'sebastian',
  lastname: 'yabiku',
};

const objeto2 = {
  age: 3,
  country: 'peru',
};

const objeto3 = {
  age: 44,
  country: 'australia',
};

// Object.assign = crea copias de objectos
const copia = Object.assign({}, objeto, objeto2, objeto3);
console.log('copia', copia);
// Object.entries = entrega coleccion de clave , valor
console.log('Object.entries', Object.entries(copia));
// Object.keys = Entrega coleccion con las llaves del objeto
console.log('Object.keys', Object.keys(copia));
// Object.values = Entrega coleccion con valores del objeto
console.log('Object.values', Object.values(copia));
// Object.hasOwnProperty = Entrega valor booleano si la propiedad existe en el objeto
console.log('Object.hasOwnProperty', copia.hasOwnProperty('age'));

// NUMBER
// parseInt
console.log(Number.parseInt('3.000'));
// parseFloat
console.log(Number.parseFloat('3.14'));
// toFixed
console.log(Number.parseFloat('3.14').toFixed(5));

// MATH
// pow
console.log(Math.pow(9, 2));
// round
console.log(Math.round(5.5));

// DATE
console.log('getDate', new Date().getDate());
console.log('getMonth', new Date().getMonth());
console.log('getDay', new Date().getDay());
console.log('getHours', new Date().getHours());
console.log('getMinutes', new Date().getMinutes());
console.log('getSeconds', new Date().getSeconds());


// WINDOW
