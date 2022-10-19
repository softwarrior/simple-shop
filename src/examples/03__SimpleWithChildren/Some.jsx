const Simple = () => <div>Мы будем изучать JavaScript</div>;

// children
export const Some = ({ children, title }) => (
  <div>
    <div>{title}</div>
    {/* https://ru.reactjs.org/docs/jsx-in-depth.html#children-in-jsx */}
    {children}
  </div>
);

// ----------------------------------------
// usage
export const App = () => {
  return (
    <Some title="Привет, ученики!">
      {/* Simple will be in children prop of Some */}
      <Simple />
    </Some>
  );
};
