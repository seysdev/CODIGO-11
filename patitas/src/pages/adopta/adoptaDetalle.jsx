import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

function PageAdoptaDetalle() {
  const [dog, setDog] = useState({});

  let { idMascota } = useParams();

  function getMascota(id) {
    api.get(`mascotas/${id}`).then((response) => setDog(response.data));
  }

  useEffect(() => {
    getMascota(idMascota);
  }, []);

  return (
    <div className="page-adopta-detalle">
      adopta-detalle {idMascota}
      <article>
        {dog.name}
        <img src={dog.photo} alt="" />
      </article>
    </div>
  );
}

export { PageAdoptaDetalle };
