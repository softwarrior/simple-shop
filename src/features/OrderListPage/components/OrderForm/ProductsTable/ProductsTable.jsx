import { useSelector } from "react-redux";
import { Table } from "../../../../../shared/components";
import { getProducts } from "../../../model/ordersForm/selectors";
import { ProductsTableBody } from "./ProductsTableBody/ProductsTableBody";
import { ProductsTableFooter } from "./ProductsTableFooter/ProductsTableFooter";
import { ProductsTableHeader } from "./ProductsTableHeader/ProductsTableHeader";
import styles from "./ProductsTable.module.css";
import { useMemo } from "react";

export const ProductsTable = () => {
  const products = useSelector(getProducts);
  const totalCost = useMemo(() => {
    return products.reduce((a, b) => {
      return parseInt(a.cost) + parseInt(b.cost);
    });
  }, [products]);
  return (
    <Table className={styles._}>
      <ProductsTableHeader />
      <ProductsTableBody products={products} />
      <ProductsTableFooter totalCost={totalCost} />
    </Table>
  );
};
