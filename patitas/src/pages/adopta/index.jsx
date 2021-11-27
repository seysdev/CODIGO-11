import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';

function PageAdopta() {
  const [perros, setPerros] = useState([]);
  let history = useHistory();

  function getPerros() {
    api
      .get('mascotas')
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
      <h1 className="border-b-2 border-red-600 mb-3 pb-1">PAGINA ADOPTA</h1>

      <ul className="grid grid-cols-3 gap-10">
        {perros.map((perro) => (
          <li
            className="cursor-pointer"
            key={perro.id}
            onClick={() => history.push(`/adopta/${perro.id}`)}
          >
            {perro.name}
            <img className="w-40" src={perro.photo} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { PageAdopta };
