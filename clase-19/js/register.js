function registerAlumn() {
  const name = document.querySelector('.js_name');
  const lastname = document.querySelector('.js_lastname');
  const age = document.querySelector('.js_age');
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const body = {
      name: name.value,
      lastname: lastname.value,
      age: age.value,
    };

    fetch('http://localhost:3000/alumnos', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        location.replace('/clase-19/listar.html');
        console.log('response');
      })
      .catch(() => {
        alert('Error en guardar dato');
      });
  });
}

registerAlumn();
