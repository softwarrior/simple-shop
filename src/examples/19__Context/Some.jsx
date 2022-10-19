import { useState, createContext, useContext } from "react";

const SomeContext = createContext();

const noop = () => {};

// pure component
const Some = ({
  name = "",
  surname = "",
  onNameChange = noop,
  onSurnameChange = noop,
}) => (
  <div>
    <h1>Введите данные</h1>
    <input onChange={onNameChange} value={name} />
    <input onChange={onSurnameChange} value={surname} />
    <footer>Спасибо!</footer>
  </div>
);

// smart component (container)
const SomeContainer = () => {
  const { name, surname, onNameChange, onSurnameChange } =
    useContext(SomeContext);

  return (
    <Some
      name={name}
      onNameChange={onNameChange}
      surname={surname}
      onSurnameChange={onSurnameChange}
    />
  );
};

// smart component (container)
const MainContainer = () => {
  // state
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  // handlers creator
  const createHandleChange =
    (setter) =>
    ({ target: { value } }) => {
      setter(value);
    };

  // handlers
  const handleNameChange = createHandleChange(setName);
  const handleSurnameChange = createHandleChange(setSurname);

  return (
    <SomeContext.Provider
      value={{
        name,
        onNameChange: handleNameChange,
        surname,
        onSurnameChange: handleSurnameChange,
      }}
    >
      <div>
        <div>Что-то</div>
        <div>Что-то</div>
        <div>
          {/* no props drilling  */}
          <SomeContainer />
        </div>
      </div>
    </SomeContext.Provider>
  );
};

// ----------------------------------------
// usage
export const App = () => {
  return (
    <div>
      <MainContainer />
    </div>
  );
};
