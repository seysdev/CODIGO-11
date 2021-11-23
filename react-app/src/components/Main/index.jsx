import './main.css';

function Main(props) {
  const { children } = props;

  return <main className="main">{children}</main>;
}

export { Main };
