import { useState, useEffect } from "react";

// smart component (container)
const SomeContainer = () => {
  // state
  const [name, setName] = useState("");

  // handlers
  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  // effects
  // https://reactjs.org/docs/hooks-effect.html#gatsby-focus-wrapper
  // name changed ---> callback func called
  useEffect(() => {
    console.log("Имя изменилось:");
  }, [name]);

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
