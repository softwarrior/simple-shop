import { TableHeader } from "../Table/TableHeader/TableHeader";
import { TableBody } from "../Table/TableBody/TableBody";
import { TableFooter } from "../Table/TableFooter/TableFooter";

import styles from "./Table.module.css";

export const Table = ({ children }) => (
  <div className={styles._}>
    <TableHeader />
    <TableBody />
    <TableFooter />
    {children}
  </div>
);
