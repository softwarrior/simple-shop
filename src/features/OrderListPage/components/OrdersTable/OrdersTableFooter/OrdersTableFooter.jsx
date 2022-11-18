import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
  TableFooter,
} from "../../../../../shared/components";
import { DeleteRowDropdown } from "../../Dropdowns/DeleteRowDropdown/DeleteRowDropdown";
import { ChangeStatusDropdown } from "../../Dropdowns/ChangeStatusDropdown/ChangeStatusDropdown";
import { Pagination } from "./Pagination/Pagination";
import styles from "./OrdersTableFooter.module.css";
import { useState } from "react";
import classnames from "classnames";
import { useEffect } from "react";

export const OrdersTableFooter = ({
  ordersCount,
  checkedOrdersId,
  onPageClick,
  onOrderDelete,
  onOrderChangeStatus,
}) => {
  const [isDeleteDropdownOpen, setDeleteDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const handleDeleteDropdownOpen = () =>
    setDeleteDropdownOpen(!isDeleteDropdownOpen);
  const handleStatusDropdownOpen = () =>
    setStatusDropdownOpen(!isStatusDropdownOpen);
  const handleOrderDeleteCancel = () => setDeleteDropdownOpen(false);
  const handleOrderDeleteApprove = () => {
    onOrderDelete();
    setDeleteDropdownOpen(false);
  };

  const handleOrderChangeStatus = (status) => {
    onOrderChangeStatus(status);
    setStatusDropdownOpen(false);
  };

  useEffect(() => {
    if (checkedOrdersId.size === 0) {
      setStatusDropdownOpen(false);
      setDeleteDropdownOpen(false);
    }
  }, [checkedOrdersId.size]);

  const actionClassNames = classnames(styles.tableFooterAction, {
    [styles.hidden]: checkedOrdersId.size === 0,
  });

  return (
    <TableFooter>
      <div className={styles.tableFooterButtonsStatus}>
        <div className={actionClassNames}>
          <span
            className={styles.tableFooterText}
          >{`Выбрано записей: ${checkedOrdersId.size}`}</span>
          <Button
            className={styles.tableFooterButton}
            buttonStyle={ButtonStyle.primary}
            size={ButtonSize.small}
            iconType={IconType.pencil}
            isAlign={true}
            onClick={handleStatusDropdownOpen}
          >
            Изменить статус
          </Button>
          <ChangeStatusDropdown
            className={styles.dropdown}
            isOpen={isStatusDropdownOpen}
            onChange={handleOrderChangeStatus}
          />
          <Button
            buttonStyle={ButtonStyle.danger}
            size={ButtonSize.small}
            iconType={IconType.bin}
            isAlign={true}
            onClick={handleDeleteDropdownOpen}
          >
            Удалить
          </Button>
          <DeleteRowDropdown
            rowCount={checkedOrdersId.size}
            isOpen={isDeleteDropdownOpen}
            onCancel={handleOrderDeleteCancel}
            onDelete={handleOrderDeleteApprove}
          />
        </div>
      </div>
      <Pagination ordersCount={ordersCount} onClick={onPageClick} />
    </TableFooter>
  );
};
