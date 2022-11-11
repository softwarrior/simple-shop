import { useContext } from "react";
import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
  TableFooter,
} from "../../../../../shared/components";
import { DeleteRowDropdown } from "../../Dropdowns/DeleteRowDropdown/DeleteRowDropdown";
import { ChangeStatusDropdown } from "../../Dropdowns/ChangeStatusDropdown/ChangeStatusDropdown";
import { OrderListPageContext } from "../../../OrderListPage";
import { Pagination } from "./Pagination/Pagination";
import styles from "./OrdersTableFooter.module.css";

export const OrdersTableFooter = ({ ordersCount }) => {
  const { onDeleteDropdownOpen, onStatusDropdownOpen } =
    useContext(OrderListPageContext);

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
            onClick={onStatusDropdownOpen}
          >
            Изменить статус
          </Button>
          <ChangeStatusDropdown />
          <Button
            buttonStyle={ButtonStyle.danger}
            size={ButtonSize.small}
            iconType={IconType.bin}
            isAlign={true}
            onClick={onDeleteDropdownOpen}
          >
            Удалить
          </Button>
          <DeleteRowDropdown />
        </div>
      </div>
      <Pagination ordersCount={ordersCount} />
    </TableFooter>
  );
};
