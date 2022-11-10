import { useContext } from "react";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
  TableFooter,
} from "../../../../../shared/components";

import { OrdersTableDeleteDropdown } from "../OrdersTableDeleteDropdown/OrdersTableDeleteDropdown";
import { OrderListPageContext } from "../../../OrderListPage";

import styles from "./OrdersTableFooter.module.css";

export const OrdersTableFooter = () => {
  const { onDeleteDropdownOpen } = useContext(OrderListPageContext);

  return (
    <TableFooter>
      <div className={styles.tableFooterButtonsStatus}>
        <div className={styles.tableFooterAction}>
          <span className={styles.tableFooterText}>{"Выбрано записей: 5"}</span>
          <Button
            className={styles.tableFooterButton}
            buttonStyle={ButtonStyle.primary}
            size={ButtonSize.small}
            iconType={IconType.pencil}
            isAlign={true}
            onClick={() => {}}
          >
            Изменить статус
          </Button>
          <Button
            buttonStyle={ButtonStyle.danger}
            size={ButtonSize.small}
            iconType={IconType.bin}
            isAlign={true}
            onClick={onDeleteDropdownOpen}
          >
            Удалить
          </Button>
          <OrdersTableDeleteDropdown />
        </div>
      </div>
      <div className={styles.tableFooterPagination}>
        <div className={styles.tableFooterPaginationForm}>
          {["1", "2", "3", "4", "5", "...", "100", "#"].map((text) => (
            <Button
              key={text}
              buttonStyle={
                text === "1" ? ButtonStyle.primary : ButtonStyle.reverse
              }
              size={ButtonSize.small}
              isAlign={true}
              onClick={() => {}}
            >
              {text}
            </Button>
          ))}
        </div>
      </div>
    </TableFooter>
  );
};
