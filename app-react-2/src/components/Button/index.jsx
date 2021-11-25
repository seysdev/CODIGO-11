import './button.css';

function Button(props) {
  const { children, type = 'is-primary', className = '' } = props;

  const types = new Map([
    ['is-primary', 'button--primary'],
    ['is-secondary', 'button--secondary'],
  ]);

  return (
    <button className={`button ${className} ${types.get(type)}`}>
      {children}
    </button>
  );
}

export { Button };
