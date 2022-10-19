import { ReactComponent as StarIcon } from "../../app/logo.svg";

const Simple = () => <div>Простой компонент</div>;

const SomeFragment = () => {
  return (
    <>
      <Simple />
      <Simple />
      <Simple />
    </>
  );
};

const TwoChildren = ({ icon, children }) => (
  <div>
    <div>{icon}</div>
    <div>{children}</div>
  </div>
);

const InnerProps = ({ inputProps = {}, ...props }) => (
  <div {...props}>
    <input {...inputProps} />
  </div>
);

// ----------------------------------------
// usage
export const App = () => {
  {
    /* https://ru.reactjs.org/docs/fragments.html */
  }
  return (
    <>
      <SomeFragment />

      <TwoChildren icon={<StarIcon />}>
        <Simple />
      </TwoChildren>

      <InnerProps
        tabIndex={-1}
        inputProps={{
          disabled: false,
          value: "text",
        }}
      />
    </>
  );
};
