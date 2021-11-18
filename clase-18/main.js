// setTimeout(function() {
//   console.log('dentro 1')
// }, 0)
// console.log('1')
// console.log('2')
// console.log('3')
// setTimeout(function() {
//   console.log('dentro 2')
// }, 0)
// console.log('4')

function createPeople(people) {
  console.log('people', people);
  console.log('%O', JSON.parse(people).results);
  JSON.parse(people).results.map((person) => {
    const card = document.createElement('article');
    card.innerHTML = `
      <p>Nombre ${person.name}</p>
      <p>Altura ${person.height}</p>
      <button>Mostrar filmes</button>
    `;

    card.querySelector('button').onclick = function () {
      console.log('person', person);
      let xhrFil = new XMLHttpRequest();
      xhrFil.open('GET', person.films[0]);
      xhrFil.send(null);
      xhrFil.onload = () => {
        console.log(xhrFil.response);
      };
    };

    document.querySelector('#container').appendChild(card);
  });
}

function getResponse() {
  createPeople(xhr.response);
}

function getError() {
  alert('Intentelo mas tarde');
}

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://swapi.dev/api/people');
xhr.send(null);
xhr.onload = getResponse;
xhr.onerror = getError;

document.querySelector('button').onclick = function () {
  console.log('clic!!!');
};

console.log('mas codigo');
console.log('mas codigo 2');
