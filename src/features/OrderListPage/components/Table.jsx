import { TableHeader } from "../../../components/Table/TableHeader/TableHeader";
import { TableBody } from "../../../components/Table/TableBody/TableBody";
import { TableFooter } from "../../../components/Table/TableFooter/TableFooter";

import styles from "./Table.module.css";

export const Table = ({ children }) => (
  <div className={styles._}>
    <TableHeader />
    <TableBody />
    <TableFooter />
    {children}
  </div>
);
