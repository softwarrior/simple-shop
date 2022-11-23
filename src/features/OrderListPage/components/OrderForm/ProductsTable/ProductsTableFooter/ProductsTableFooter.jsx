import { TableFooter } from "../../../../../../shared/components";
import { Sum } from "../../../OrdersTable/OrdersTableBody/Sum/Sum";
import styles from "./ProductsTableFooter.module.css";

export const ProductsTableFooter = ({ totalCost, currency = "RUB" }) => {
  return (
    <TableFooter className={styles._}>
      <span className={styles.text}>{"Итоговая сумма: "}</span>
      <Sum currency={currency}>{totalCost}</Sum>
    </TableFooter>
  );
};
