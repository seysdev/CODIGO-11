import { useParams } from 'react-router-dom';

function PageDetalleMascota() {
  let { idMascota } = useParams();
  
  return <div className="page-detalle-mascota"></div>;
}

export { PageDetalleMascota };
