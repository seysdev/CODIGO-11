import { useState } from 'react';
import axios from 'axios';

function PageAgregarMascota() {
  const [form, setForm] = useState({
    name: '',
    photo: '',
  });

  function saveMascota(mascota) {
    axios
      .post('http://localhost:4000/mascotas', mascota)
      .then((response) => {
        alert('la mascota se guardo correctamente');
      })
      .catch(() => {
        alert('Por favor intentalo nuevamente');
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveMascota(form);
  }

  return (
    <div className="page-agregar-mascota">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa el nombre de la mascota"
          className="border border-gray-400 p-3  w-full mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          value={form.name}
          onChange={(e) =>
            setForm((state) => ({ ...state, name: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Ingresa la url de la foto"
          className="border border-gray-400 w-full p-3  mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          value={form.photo}
          onChange={(e) =>
            setForm((state) => ({ ...state, photo: e.target.value }))
          }
        />
        <div className="text-center">
          <button className="btn bg-secondary p-2 text-white w-40 mx-auto rounded-lg">
            AGREGAR
          </button>
        </div>
      </form>
    </div>
  );
}

export { PageAgregarMascota };
