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

export const OrdersTableFooter = ({ ordersCount }) => {
  const [isDeleteDropdownOpen, setDeleteDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const handleDeleteDropdownOpen = () => {
    setDeleteDropdownOpen(!isDeleteDropdownOpen);
  };
  const handleStatusDropdownOpen = () => {
    setStatusDropdownOpen(!isStatusDropdownOpen);
  };

  return (
    <TableFooter>
      <div className={styles.tableFooterButtonsStatus}>
        <div className={styles.tableFooterAction}>
          <span className={styles.tableFooterText}>{"Выбрано записей: 0"}</span>
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
          <ChangeStatusDropdown isOpen={isStatusDropdownOpen} />
          <Button
            buttonStyle={ButtonStyle.danger}
            size={ButtonSize.small}
            iconType={IconType.bin}
            isAlign={true}
            onClick={handleDeleteDropdownOpen}
          >
            Удалить
          </Button>
          <DeleteRowDropdown isOpen={isDeleteDropdownOpen} />
        </div>
      </div>
      <Pagination ordersCount={ordersCount} />
    </TableFooter>
  );
};
