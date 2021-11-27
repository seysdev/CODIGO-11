import { useEffect, useState } from 'react';
import axios from 'axios';

function PageHome() {
  const [perros, setPerros] = useState([]);

  function getPerros() {
    axios
      .get('http://localhost:4000/mascotas')
      .then((response) => {
        setPerros(response.data);
      })
      .catch((e) => {});
  }

  useEffect(() => {
    getPerros();
  }, []);

  return (
    <div className="page-home">
      <h1 className="border-b-2 border-red-600 mb-3 pb-1">PAGINA HOME</h1>

      <ul className="grid grid-cols-3 gap-10">
        {perros.map((perro) => (
          <li key={perro.id}>
            {perro.name}
            <img className="w-40" src={perro.photo} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { PageHome };
