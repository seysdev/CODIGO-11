import { Nav } from '../Nav';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Todos los derechos reservados</p>
      <Nav
        links={[
          {
            text: 'Home Footer',
            href: '#',
          },
          {
            text: 'Nosotros Footer',
            href: '#',
          },
          {
            text: 'Servicios Footer',
            href: '#',
          },
          {
            text: 'Contacto Footer',
            href: '#',
          },
        ]}
      />
    </footer>
  );
}

export { Footer };
