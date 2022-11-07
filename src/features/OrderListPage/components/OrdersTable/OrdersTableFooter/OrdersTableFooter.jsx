import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
  TableFooter,
} from "../../../../../shared/components";

import { activatePage, getActivePage } from "../../../model/ordersFilter";

import { OrdersTableDeleteDropdown } from "../OrdersTableDeleteDropdown/OrdersTableDeleteDropdown";
import { OrderListPageContext } from "../../../OrderListPage";

import styles from "./OrdersTableFooter.module.css";

const pageSize = 30;

export const OrdersTableFooter = ({ ordersCount }) => {
  const { onDeleteDropdownOpen } = useContext(OrderListPageContext);
  const dispatch = useDispatch();

  const paginations = [];
  const paginationSize = Math.ceil(ordersCount / pageSize);
  if (paginationSize) {
    for (let i = 0; i < paginationSize - 1; i++) paginations.push(`${i + 1}`);
    if (paginations.length) paginations.push("...");
    paginations.push(paginationSize);
    paginations.push("#");
  }

  useEffect(() => {
    dispatch(activatePage(parseInt(paginations[0])));
  }, [ordersCount]);

  const activePage = useSelector(getActivePage);
  const handlePageClick = (text) => {
    if (text === "..." || text === "#") return;
    const page = parseInt(text);
    dispatch(activatePage(page));
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
          {paginations.map((text) => (
            <Button
              key={text}
              buttonStyle={
                activePage == text ? ButtonStyle.primary : ButtonStyle.reverse
              }
              size={ButtonSize.small}
              isAlign={true}
              onClick={() => {
                handlePageClick(text);
              }}
            >
              {text}
            </Button>
          ))}
        </div>
      </div>
    </TableFooter>
  );
};
