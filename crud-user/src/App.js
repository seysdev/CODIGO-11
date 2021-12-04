import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './app.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/agregar-producto">Agregar producto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Main(props) {
  const { children } = props;

  return <main>{children}</main>;
}

function Footer() {
  return <footer>Footer</footer>;
}

function PageProducts() {
  return <div>Page PageProducts</div>;
}

function PageAdProduct() {
  return <div>Page PageAdProduct</div>;
}

function PageListProducts() {
  return <div>Page PageListProducts</div>;
}

function PageThanks() {
  return <div>Page PageThanks</div>;
}

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route path="/productos">
            <PageProducts />
          </Route>
          <Route path="/agregar-producto">
            <PageAdProduct />
          </Route>
          <Route path="/productos-agregados">
            <PageListProducts />
          </Route>
          <Route path="/gracias">
            <PageThanks />
          </Route>
          <Route path="/">
            <Redirect to="/productos" />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

export { App };
