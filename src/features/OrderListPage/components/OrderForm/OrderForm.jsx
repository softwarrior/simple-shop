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
import { useState } from "react";
import { ProductsTable } from "./ProductsTable/ProductsTable";
import { ChangeStatusDropdown } from "../Dropdowns/ChangeStatusDropdown/ChangeStatusDropdown";
import { STATUS_NAME } from "../../OrderListPage.constants";
import { CloseFormDropdown } from "../Dropdowns/CloseFormDropdown/CloseFormDropdown";

export const OrderForm = ({ isOpen, onClose, orderId }) => {
  const order = useSelector(getOrderById(orderId));

  const [name, setName] = useState(order.customer);
  const handleNameChange = ({ target: { value } }) => setName(value);
  const handleNameReset = () => setName("");

  const [status, setStatus] = useState({ name: order.status, isOpen: false });
  const handleStatusDropdownOpen = () => {
    setStatus({ name: status.name, isOpen: !status.isOpen });
  };
  const handleOrderChangeStatus = (status) => {
    setStatus({ name: status, isOpen: false });
  };

  const [code, setCode] = useState("");
  const handleCodeChange = ({ target: { value } }) => setCode(value);
  const handleCodeReset = () => setCode("");

  const dispatch = useDispatch();
  const handleSaveClick = () => {
    if (isCorrectCode && isCorrectName) {
      const pairs = [
        { key: "customer", value: name },
        { key: "status", value: status.name },
      ];
      dispatch(changeOrder({ id: orderId, pairs }));
      onClose();
    }
  };

  const [isCloseDropdownOpen, setCloseDropdownOpen] = useState(false);
  const handleCloseDropdownOpen = () => {
    if (isChanged) {
      setCloseDropdownOpen(true);
    } else {
      onClose();
    }
  };
  const handleClose = () => {
    setCloseDropdownOpen(false);
    onClose();
  };
  const handleLeave = () => {
    setCloseDropdownOpen(false);
  };

  const date = Date.parse(order.date);
  const formatter = new Intl.DateTimeFormat("ru");

  const classNames = classnames(styles._, {
    [styles.hidden]: !isOpen,
  });

  const isCorrectName = name.length > 0;
  const isCorrectCode = code === "123";
  const isEmptyCode = code === "";
  const isChanged = order.customer !== name || order.status !== status.name;

  let errorText = "";
  if (!isCorrectName && !isCorrectCode && !isEmptyCode) {
    errorText = "Неправильное имя и код";
  } else if (!isCorrectName) {
    errorText = "Неправильное имя";
  } else if (!isCorrectCode && !isEmptyCode) {
    errorText = "Неправильный код";
  }

  return (
    <div className={classNames}>
      <div className={styles.window}>
        <div className={styles.header}>
          <span className={styles.title}>{`Заявка #${order.orderNumber}`}</span>
          <div className={styles.close}>
            <Button
              buttonStyle={ButtonStyle.primary}
              size={ButtonSize.medium}
              iconType={IconType.x_large}
              onClick={handleCloseDropdownOpen}
            ></Button>
            <CloseFormDropdown
              className={styles.closeDropdown}
              isOpen={isCloseDropdownOpen}
              onClose={handleClose}
              onLeave={handleLeave}
            />
          </div>
        </div>
        <Input
          className={styles.date}
          title={"Дата и время заказа"}
          value={formatter.format(date)}
          disabled={true}
        />
        <Input
          title={"ФИО покупателя"}
          value={name}
          corrected={isCorrectName}
          onChange={handleNameChange}
          onReset={handleNameReset}
        />
        <ProductsTable />
        <Input title={"Уровень лояльности"} value={"Новичек"} disabled={true} />
        <div className={styles.status}>
          <Input
            title={"Статус заказа"}
            value={STATUS_NAME[status.name]}
            onClick={handleStatusDropdownOpen}
            onReset={handleStatusDropdownOpen}
            iconType={IconType.v_arrow}
            readOnly={true}
          />
          <ChangeStatusDropdown
            className={styles.statusDropdown}
            isOpen={status.isOpen}
            onChange={handleOrderChangeStatus}
          />
        </div>
        <Input
          title={"Код подтверждения"}
          value={code}
          corrected={isCorrectCode || isEmptyCode}
          onChange={handleCodeChange}
          onReset={handleCodeReset}
        />
        <div className={styles.footer}>
          <span className={styles.error}>{errorText}</span>
          <Button
            buttonStyle={ButtonStyle.primary}
            disabled={!isCorrectName || !isCorrectCode || !isChanged}
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
