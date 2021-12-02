import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { PageLogin } from './pages/login';
import { PageProducts } from './pages/products';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';
import './app.css';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Header />
          <Main>
            <Switch>
              <Route path="/login">
                <PageLogin />
              </Route>
              <Route path="/products">
                <PageProducts />
              </Route>
              <Redirect from="/" to="/products" />
            </Switch>
          </Main>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export { App };
