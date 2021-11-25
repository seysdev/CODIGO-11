import { useState, useEffect } from 'react';
import './card.css';

function Card(props) {
  const {
    id,
    photo = '',
    title = '',
    price = '',
    stock = '',
    className = '',
    quantity = 0,
    onQuantity = () => {},
  } = props;

  const [quantityState, setQuantityState] = useState(quantity);

  function handleClickDecrement() {
    console.log('decrementar!!!');
    setQuantityState((state) => {
      return state - 1;
    });
    onQuantity(id, quantity);
    // onQuantity(quantity);
  }

  function handleClickIncrement() {
    setQuantityState((state) => {
      return state + 1;
    });

    onQuantity(id, quantity);
    // onQuantity(quantity);
  }

  function handleChangeValueQuantity(e) {
    console.log('e', e.target.value);
  }

  // useEffect(() => {
  //   // console.log('quantity', quantity);

  // }, [quantity]);

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
        <button onClick={handleClickDecrement}>-</button>
        <input
          value={quantityState}
          type="number"
          max={stock}
          onChange={handleChangeValueQuantity}
          readOnly
        />
        <button onClick={handleClickIncrement}>+</button>
      </div>
    </article>
  );
}

export { Card };
