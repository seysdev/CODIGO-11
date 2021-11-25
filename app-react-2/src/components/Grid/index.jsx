import './grid.css';

function Grid(props) {
  const { children } = props;

  return (
    <div
      className={`grid`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(320px, 1fr))`,
        gridGap: '20px',
      }}
    >
      {children}
    </div>
  );
}

export { Grid };
