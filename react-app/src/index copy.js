import React from 'react'; // importado libreria react
import ReactDOM from 'react-dom'; // importador funcionalidad para renderizar elementos en el virtual dom
import './index.css'; // importando css en js

function Header() {
  return <header>HEADER</header>;
}

function Main(props) {
  console.log(props);
  const { children } = props;

  return <main>{children}</main>;
}

function Footer() {
  return <footer>FOOTER</footer>;
}

function Card() {
  return <article>CARD</article>;
}

function App() {
  return (
    <div className="app">
      {/* {Header()} */}
      <Header />
      {/* {Main()} */}
      <Main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {new Date().toLocaleTimeString()}
      </Main>
      {/* {Footer()} */}
      <Footer />
    </div>
  );
}

function Appjs() {
  const header = document.createElement('header');
  header.innerHTML = 'HEADER';

  const main = document.createElement('main');
  main.innerHTML = `
  MAIN
      ${new Date().toLocaleTimeString()}
   `;

  const footer = document.createElement('footer');
  footer.innerHTML = 'FOOTER';

  const ren = document.createElement('div');
  ren.innerHTML = `
    ${header.outerHTML}
    ${footer.outerHTML}
  `;
  // ren.appendChild(header);
  ren.appendChild(main);
  // ren.appendChild(footer);

  document.querySelector('#root').innerHTML = '';
  document.querySelector('#root').appendChild(ren);
}

// setInterval(Appjs, 1000);

ReactDOM.render(<App />, document.getElementById('root'));
