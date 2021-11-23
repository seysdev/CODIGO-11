import './card.css';

function Card(props) {
  const { name, lastname, age, photo } = props;

  return (
    <article className="card">
      <h2>
        Nombre completo: {name} {lastname}
      </h2>
      <h2>Edad: {age}</h2>
      <img src={photo} alt={`${name}-${lastname}`} />
    </article>
  );
}

export { Card };
