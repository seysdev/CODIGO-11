const h1 = document.querySelector('h1');

console.log('h1 %O', h1);

h1.textContent = 'TEXTO MODIFICADO DESDE JS';
h1.style.color = 'red';
h1.style.fontSize = '50px';
h1.style.fontSize = '50px';
h1.style.background = 'orange';

h1.onclick = function () {
  this.style.fontSize = `${
    Number(this.style.fontSize.replace('px', '')) + 10
  }px`;
};

h1.onmouseenter = function () {
  console.log('entra');
  this.style.backgroundColor = 'pink';
};

h1.onmouseout = function () {
  console.log('sale');
  this.style.backgroundColor = 'orange';
};

h1.innerHTML = "<a href='https://google.com'>agregar html</a>";
h1.setAttribute('class', 'hola hola2');
h1.setAttribute('id', 'hola hola2');
h1.removeAttribute('id');
h1.removeAttribute('class');
console.log('h1 getAtributte', h1.getAttribute('style'));
console.log('h1 clientWidth', h1.clientWidth)
console.log('h1 clientHeight', h1.clientHeight)

function SubmitForm() {
  let form = document.querySelector('form');
  const inpName = document.querySelector('.js_name');
  const inpLastname = document.querySelector('.js_lastname');
  const inpPassword = document.querySelector('.js_password');

  form.onsubmit = function (event) {
    event.preventDefault();
    console.log('nombre', inpName.value);
    console.log('nombre', inpLastname.value);
    console.log('nombre', inpPassword.value);
  };
}

SubmitForm();
// getElementById - captura por id
const h2 = document.getElementById('h2');
console.log('h2', h2);

// getElementByTagName - captura por tag
const links = document.getElementsByTagName('a');
console.log('links', links);
for (let index = 0; index < links.length; index++) {
  links[index].style.color = 'white';
  links[index].style.display = 'block';
  links[index].style.padding = '20px';
}

// querySelector
const titulo = document.querySelector('h1');
console.log('titulo', titulo);

// querySelectorAll - me entrega una coleccion de items
const lists = document.querySelectorAll('li');
for (let index = 0; index < lists.length; index++) {
  lists[index].style.color = 'white';
  lists[index].style.backgroundColor = 'purple';
}

/*
SELECTORES RELATIVOS
*/
// CHILDNODES
const ul = document.querySelector('ul');
// CHILDNODES
console.log('CHILDNODES', ul.childNodes);
// Children
console.log('Children', ul.children);
// First Child
console.log('FirstChild', ul.firstChild);
// firstElementChild
console.log('firstElementChild', ul.firstElementChild);
// lastChild
console.log('lastChild', ul.lastChild);
// lastElementChild
console.log('lastElementChild', ul.lastElementChild);
// nextElementSibling
console.log(
  'nextElementSibling',
  ul.firstElementChild.nextElementSibling.nextElementSibling
);
// previousElementSibling
console.log(
  'previousElementSibling',
  ul.lastElementChild.previousElementSibling
);

// parent
console.log('parent', ul.parentElement);
console.log('parent', ul.firstElementChild.parentElement);

// closest
console.log('parent', document.querySelector('a').closest('body'));
console.log(
  'parent',
  document.querySelector('a').closest('body').querySelector('form')
);
