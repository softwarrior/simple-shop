import "./Some.css"; // css styles

// BEM:
//   block - some
//   block modifer - some_danger
//   element - some__title
const Some = ({ title }) => (
  <div className="some some_danger">
    {/* className attr in jsx ===  class attr in html */}
    <div className="some__title">{title}</div>
  </div>
);

// ----------------------------------------
// usage
export const App = () => {
  return <Some title="Привет, ученики!" />;
};
