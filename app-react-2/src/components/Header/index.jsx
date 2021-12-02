import { useSelector } from 'react-redux';
import { Button } from '../Button';
import { Cart } from '../Cart';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './header.css';
function Header() {
  const isLogin = useSelector((state) => {
    return state.auth.isLogin;
  });

  const dataUser = useSelector((state) => {
    return state.auth.userData;
  });

  const dispatch = useDispatch();

  return (
    <header className="header">
      <Link className="header__logo" to="/">
        Shoping Car
      </Link>

      <div className="header__right">
        <div className="flex mr-20">
          <Button className="header__button" type="is-secondary">
            AGREGAR PRODUCTO
          </Button>
          <Cart className="header__cart" />
        </div>
        {!isLogin ? (
          <ul className="flex">
            <li>
              <Link to="/login" className="text-underline">
                Login
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <h2 className="mr-4">
              Bienvenido {dataUser.name} {dataUser.lastname}
            </h2>
            <button
              onClick={() => {
                dispatch({
                  type: 'RESET_USER',
                });
              }}
              className="bg-red-400 p-4 rounded-xl"
            >
              LOGOUT
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export { Header };
