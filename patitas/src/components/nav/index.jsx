import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <nav>
      <ul className="nav flex bg-secondary p-2 rounded-xl">
        <li className="mr-2">
          <NavLink
            to="/"
            exact
            className={(isActive) =>
              'text-xs' + (isActive ? ' bg-yellow-500' : '')
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mr-2">
          <NavLink
            to="/adopta"
            className={(isActive) =>
              'text-xs' + (isActive ? ' bg-yellow-500' : '')
            }
          >
            Adopta
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/agregar"
            className={(isActive) =>
              'text-xs' + (isActive ? ' bg-yellow-500' : '')
            }
          >
            Agregar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };
