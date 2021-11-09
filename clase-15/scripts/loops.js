// LOOPS
const users = [
  {
    name: 'sebastian',
    lastname: 'yabiku',
    age: 34,
  },
  {
    name: 'jose',
    lastname: 'yabiku',
    age: 24,
  },
  {
    name: 'cristina',
    lastname: 'yabiku',
    age: 35,
  },
  {
    name: 'melisa',
    lastname: 'yabiku',
    age: 20,
  },
  {
    name: 'melisa',
    lastname: 'yabiku',
    age: 20,
  },
  {
    name: 'melisa',
    lastname: 'yabiku',
    age: 20,
  },
  {
    name: 'melisa',
    lastname: 'yabiku',
    age: 20,
  },
  {
    name: 'melisa',
    lastname: 'yabiku',
    age: 20,
  },
];
function esMayor30(edad) {
  return edad > 30;
}
console.log('primer elemento', users[0].age, esMayor30(users[0].age));
console.log('primer elemento', users[1].age, esMayor30(users[1].age));
console.log('primer elemento', users[2].age, esMayor30(users[2].age));

// FOR
for (let index = 0; index < users.length; index++) {
  console.log(`index element ${index} ${esMayor30(users[index].age)}`);
}
const number = [
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4],
];

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
  for (let j = 0; j < number[i].length; j++) {
    console.log('array of array', number[i][j]);
  }
}

// WHILE
let n = 0;
while (n < 3) {
  n++;
  console.log('hasta que la condicio nse cumpla');
}

// DO WHILE
do {
  console.log('al menos una sola vez');
} while (false);

// BREAK
for (let index = 0; index < 10; index++) {
  console.log('index', index);

  if (index >= 4) break;
}

// CONTINUE
for (let index = 0; index < 10; index++) {
  if (index == 4 || index == 5 || index == 6) continue;
  console.log('continue', index);
}

// FOR IN
const perro = {
  raza: 'doberman',
  edad: 3,
  color: 'negro',
  altura: '80cm',
  pais: 'peru',
};

for (const key in perro) {
  console.log('key', key);
  console.log('value', perro[key]);
}
