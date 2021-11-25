import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import './cart.css';

function Cart(props) {
  const { className = '' } = props;

  return (
    <div className={`cart ${className}`}>
      <span className="cart__quantity">10</span>
      <CartIcon />
    </div>
  );
}

export { Cart };
