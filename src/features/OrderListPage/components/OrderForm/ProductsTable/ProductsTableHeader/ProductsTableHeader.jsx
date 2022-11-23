import {
  TableHeader,
  TableHeaderCell,
} from "../../../../../../shared/components";
import commonStyles from "../ProductsTable.module.css";
import styles from "./ProductsTableHeader.module.css";

const HEADER_CELLS = {
  article: {
    className: commonStyles.articleWrap,
    text: "Артикул",
  },
  product: {
    className: commonStyles.productWrap,
    text: "Наименование",
  },
  cost: {
    className: commonStyles.costWrap,
    text: "Цена",
  },
};

export const ProductsTableHeader = () => {
  return (
    <div className={styles._}>
      <TableHeader>
        {Object.entries(HEADER_CELLS).map(([field, { className, text }]) => (
          <TableHeaderCell key={field} className={className}>
            <span className={styles.tableHeaderText}>{text}</span>
          </TableHeaderCell>
        ))}
      </TableHeader>
    </div>
  );
};
