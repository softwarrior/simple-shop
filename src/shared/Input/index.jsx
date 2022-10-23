import { Icon } from "../Icon";
import "./index.css";

const Input = ({ icon }) => (
  <label className="input">
    <div className="input__field-name">Дата и время заказа</div>
    <div className="input__field input__field_empty">
      <input className="input__area" placeholder="Введите" />
      <button className="input__button">
        <div> {icon}</div>
      </button>
    </div>
  </label>
);

export const InputContainer = () => {
  return (
    <>
      <Input
        icon={
          <Icon
            className="input__button input__icon_incorrect"
            name="sun"
            width="2rem"
          />
        }
      ></Input>
    </>
  );
};
