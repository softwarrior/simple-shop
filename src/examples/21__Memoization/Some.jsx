import { useState, useCallback } from "react";

// smart component (container)
const SomeContainer = ({ surname }) => {
  // state
  const [name, setName] = useState("");

  // memoization
  // https://reactjs.org/docs/hooks-reference.html#usememo
  // https://reactjs.org/docs/hooks-reference.html#usecallback
  // https://reactjs.org/docs/react-api.html#reactmemo
  const handleChange = useCallback(
    ({ target: { value } }) => {
      setName(`${surname}: ${value}`);
    },
    [surname]
  );

  return <input value={name} onChange={handleChange} />;
};

// ----------------------------------------
// usage
export const App = () => {
  return (
    <div>
      <SomeContainer />
    </div>
  );
};
