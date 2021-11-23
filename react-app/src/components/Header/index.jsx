import { Nav } from '../Nav';
import './header.css';

function Header() {
  return (
    <header className="header">
      <a href="https://google.com" className="header__logo">
        LOGO
      </a>{' '}
      <Nav />
    </header>
  );
}

export { Header };
