import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';

import { PageHome } from './pages/home';
import { PageAdopta } from './pages/adopta';
import { PageAdoptaDetalle } from './pages/adopta/adoptaDetalle';
import { PageAgregarMascota } from './pages/gestion/mascotas/agregar';
import { PageLogin } from './pages/login';

// import { LayoutPublic } from './layouts/layout-public';
// import { LayoutPrivate } from './layouts/layout-private';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';

import './App.css';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/">
              <PageHome />
            </Route>

            <Route path="/login">
              <PageLogin />
            </Route>
            <Route exact path="/adopta">
              <PageAdopta />
            </Route>
            <Route path="/adopta/:idMascota">
              <PageAdoptaDetalle />
            </Route>
            <Route path="/agregar">
              <PageAgregarMascota />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
