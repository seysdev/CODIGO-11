// 1 - OBTENER VALOR DE ID DE URL
const urlSearchParams = new URLSearchParams(location.search);
console.log('urlSearchParams', urlSearchParams.entries());
const params = Object.fromEntries(urlSearchParams.entries());
console.log('params', params);

/*
 getAlumn
 Funcion que invoca endpoint alumnos con id de alumno
*/
function getAlumn(id) {
  fetch(`http://localhost:3000/alumnos/${id}`)
    .then((response) => response.json())
    .then((alumno) => {
      console.log('alumno', alumno);
      setForm(alumno);
    });
}

/*
 5 - updateAlumn
 Funcion que recibe id y datos a actualizar
*/
function updateAlumn(id, payload) {
  fetch(`http://localhost:3000/alumnos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    location.replace('/clase-19/listar.html');
  });
}

/*
 3 - setForm
 Funcion que setea valor de alumno en formulario y dispara evento
*/
function setForm(alumno) {
  const name = document.querySelector('.js_name');
  const lastname = document.querySelector('.js_lastname');
  const age = document.querySelector('.js_age');
  const form = document.querySelector('form');

  // seteo formulario
  name.value = alumno.name;
  lastname.value = alumno.lastname;
  age.value = alumno.age;

  //registra evento de formulario
  form.onsubmit = function (e) {
    e.preventDefault();

    // envio de datos al servicio
    updateAlumn(alumno.id, {
      name: name.value,
      lastname: lastname.value,
      age: age.value,
    });
  };
}

// 2 - INVOCO GET ALUMNS
getAlumn(params.id);
