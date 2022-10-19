// import styles from './index.module.css';

import { Icon } from "../shared/icon";

const Simple = () => <div>Простой компонент</div>;

const TwoChildren = ({ icon, children }) => (
  <div>
    <div>{icon}</div>
    <div>{children}</div>
  </div>
);

export const App = () => {
  return (
    <>
      <TwoChildren icon={<Icon name="sun" width="10rem" />}>
        <Simple />
      </TwoChildren>
    </>
  );
};
