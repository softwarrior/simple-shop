//import styles from './index.module.css';

import { Icon } from "../shared/Icon";

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
      <TwoChildren icon={<Icon name="moon" width="2rem" />}>
        <Simple />
      </TwoChildren>
    </>
  );
};
