import './header.css';
import { Nav } from '../nav';
function Header() {
  return (
    <header className="header flex justify-between">
      header <Nav />
    </header>
  );
}

export { Header };
