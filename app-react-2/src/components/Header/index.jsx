import { Button } from '../Button';
import { Cart } from '../Cart';

import './header.css';
function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        Shoping Car
      </a>
      <div className="header__right">
        <Button className="header__button" type="is-secondary">AGREGAR PRODUCTO</Button>
        <Cart className="header__cart" />
      </div>
    </header>
  );
}

export { Header };
