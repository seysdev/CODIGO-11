import './card.css';

function Card(props) {
  const {
    photo = '',
    title = '',
    price = '',
    stock = '',
    className = '',
  } = props;

  return (
    <article className={`card ${className}`}>
      <figure className="card__figure">
        <img src={photo} alt={title} height="147" width="147" />
      </figure>
      <div className="card__detail">
        <h2>{title}</h2>
        <h3 className="card__type">Kilo {price}</h3>
        <h3 className="card__stock">Stock {stock}</h3>
      </div>
      <div className="card__counter">
        <button>-</button>
        <input type="text" />
        <button>+</button>
      </div>
    </article>
  );
}

export { Card };
