import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { useSelector } from 'react-redux';
import './cart.css';

function Cart(props) {
  const { className = '' } = props;
  const productsToBuy = useSelector((state) => state.products.productsToBuy);

  return (
    <div className={`cart cursor-pointer ${className}`}>
      <span className="cart__quantity">
        {productsToBuy.reduce((acc, product) => {
          return acc + product.quantity;
        }, 0)}
      </span>
      <CartIcon />
    </div>
  );
}

export { Cart };
