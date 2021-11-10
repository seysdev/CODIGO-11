const button = document.querySelector('button');
const dropdown = document.querySelector('.js_dropdown');
const a = document.querySelector('a');
a.onclick = function (evt) {
  evt.preventDefault();
  console.log('olaaa');
};

button.onclick = function (event) {
  if (dropdown.style.display === 'block') {
    this.textContent = 'ABRIR DROPDOWN';
    dropdown.style.display = 'none';
  } else {
    this.textContent = 'CERRAR DROPDOWN';
    dropdown.style.display = 'block';
  }
};

const input = document.querySelector('input[type="text"]');
console.log('input', input);
input.onkeyup = function (evt) {
  console.log('acaaa', this.value);
  console.log('event input', evt.target.value);
};

const inputCheck = document.querySelector('input[type="checkbox"]');
console.log('input', input);
inputCheck.onchange = function () {
  console.log('acaaa', this.checked);
};

window.onresize = function () {
  console.log('resize!!!', window.innerWidth, window.innerHeight);
};

const form = document.querySelector('form');

form.onsubmit = function (evt) {
  evt.preventDefault();
  console.log('nombre', this.querySelector('input[placeholder="Nombre"').value);
  console.log(
    'apellido',
    this.querySelector('input[placeholder="Apellido"').value
  );
};

// button.onclick = function () {
//   console.log('onclick a sido sobre escrito !!!!');
// };

function fnOne() {
  console.log('fnOne!!!!');
}

function fnTwo() {
  console.log('fnTwo!!!!');
}

function fnThree() {
  console.log('fnThree!!!!');
}

button.addEventListener('click', fnOne);
button.addEventListener('click', fnTwo);
button.addEventListener('click', fnThree); // rgistrando evento

const btnQuit = document.querySelector('.js_quit');
btnQuit.addEventListener('click', function () {
  console.log('quitando el registro!!');
  button.removeEventListener('click', fnThree); // quitando el evento
});

document.querySelector('body').addEventListener('mousemove', function (event) {
  console.log(event.clientX);
  console.log(event.clientY);

  this.style.backgroundColor = `rgba(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    1
  )`;
});
