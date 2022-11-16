import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { changeOrder, getOrderById } from "../../model/orders";
import styles from "./OrderForm.module.css";
import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
  Input,
} from "../../../../shared/components";
import { useMemo, useState } from "react";
import { ProductsTable } from "./ProductsTable/ProductsTable";
import { ChangeStatusDropdown } from "../Dropdowns/ChangeStatusDropdown/ChangeStatusDropdown";
import { STATUS_NAME } from "../../OrderListPage.constants";

export const OrderForm = ({ isOpen, onClose, orderId }) => {
  const order = useSelector(getOrderById(orderId));
  const [name, setName] = useState(order.customer);
  const handleNameChange = ({ target: { value } }) => setName(value);
  const handleNameReset = () => setName("");
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [status, setStatus] = useState(order.status);
  const handleStatusDropdownOpen = () =>
    setStatusDropdownOpen(!isStatusDropdownOpen);
  const handleOrderChangeStatus = (status) => setStatus(status);
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const handleCodeChange = ({ target: { value } }) => setCode(value);
  const handleCodeReset = () => setCode("");
  const handleSaveClick = () => {
    if (isCorrectCode && isCorrectName) {
      dispatch(changeOrder({ id: orderId, key: "customer", value: name }));
      dispatch(changeOrder({ id: orderId, key: "status", value: status }));
      onClose();
    }
  };

  const date = Date.parse(order.date);
  const formatter = new Intl.DateTimeFormat("ru");

  const classNames = classnames(styles._, {
    [styles.hidden]: !isOpen,
  });

  const isCorrectName = useMemo(() => {
    return name.length > 0;
  }, [name]);

  const isCorrectCode = useMemo(() => {
    return code === "123";
  }, [code]);

  return (
    <div className={classNames}>
      <div className={styles.window}>
        <div className={styles.header}>
          <span className={styles.title}>{`Заявка #${order.orderNumber}`}</span>
          <Button
            buttonStyle={ButtonStyle.primary}
            size={ButtonSize.medium}
            iconType={IconType.x_large}
            onClick={onClose}
          ></Button>
        </div>
        <Input
          className={styles.date}
          title={"Дата и время заказа"}
          value={formatter.format(date)}
          disabled={true}
        ></Input>
        <Input
          title={"ФИО покупателя"}
          value={name}
          corrected={isCorrectName}
          onChange={handleNameChange}
          onReset={handleNameReset}
        ></Input>
        <ProductsTable />
        <Input
          title={"Уровень лояльности"}
          value={"Новичек"}
          disabled={true}
        ></Input>
        <div className={styles.status}>
          <Input
            title={"Статус заказа"}
            value={STATUS_NAME[status]}
            onClick={handleStatusDropdownOpen}
            onReset={handleStatusDropdownOpen}
            iconType={IconType.v_arrow}
            readOnly={true}
          />
          <ChangeStatusDropdown
            className={styles.dropdown}
            isOpen={isStatusDropdownOpen}
            onChange={handleOrderChangeStatus}
          />
        </div>
        <Input
          title={"Код подтверждения"}
          value={code}
          corrected={isCorrectCode}
          onChange={handleCodeChange}
          onReset={handleCodeReset}
        ></Input>
        <div className={styles.footer}>
          <span className={styles.error}>
            {errorChecker(isCorrectName, isCorrectCode).errorText}
          </span>
          <Button
            buttonStyle={
              errorChecker(isCorrectName, isCorrectCode).saveButtonStyle
            }
            size={ButtonSize.medium}
            iconType={IconType.checkmark}
            onClick={handleSaveClick}
          >
            {"Сохранить"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const errorChecker = (isCorrectName, isCorrectCode) => {
  let errorText = "";
  if (!isCorrectName && !isCorrectCode) errorText = "Заполните данные";
  else if (!isCorrectName) errorText = "Неправильное имя";
  else if (!isCorrectCode) errorText = "Неправильный код";
  const saveButtonStyle =
    isCorrectName && isCorrectCode ? ButtonStyle.primary : ButtonStyle.inactive;
  return { errorText, saveButtonStyle };
};
