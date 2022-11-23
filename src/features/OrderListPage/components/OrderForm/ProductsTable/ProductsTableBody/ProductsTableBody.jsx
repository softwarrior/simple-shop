import {
  TableRow,
  TableCell,
  TableBody,
} from "../../../../../../shared/components";
import { Sum } from "../../../OrdersTable/OrdersTableBody/Sum/Sum";
import commonStyles from "../ProductsTable.module.css";
import styles from "./ProductsTableBody.module.css";

export const ProductsTableBody = ({ products }) => {
  const rows = products.map(
    ({ id, article, product, cost, currency }, index) => {
      return (
        <TableRow
          key={id}
          className={index === products.length - 1 ? styles.lastRow : null}
        >
          <TableCell className={commonStyles.articleWrap}>
            <span className={styles.cellText}>{article}</span>
          </TableCell>
          <TableCell className={commonStyles.productWrap}>
            <span className={styles.cellText}>{product}</span>
          </TableCell>
          <TableCell className={commonStyles.costWrap}>
            <Sum currency={currency}>{cost}</Sum>
          </TableCell>
        </TableRow>
      );
    }
  );
  return <TableBody>{rows}</TableBody>;
};
