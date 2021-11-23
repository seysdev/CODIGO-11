function Grid(props) {
  const { children, columns } = props;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns},1fr)`,
        gridGap: '20px',
      }}
    >
      {children}
    </div>
  );
}

export {
  Grid
}