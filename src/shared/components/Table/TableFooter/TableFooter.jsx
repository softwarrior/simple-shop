import styles from "./TableFooter.module.css";

export const TableFooter = ({
  text,
  firstButton,
  firstButtonDropdown = null,
  secondButton,
  secondButtonDropdown = null,
  paginationButtons,
}) => {
  return (
    <div className={styles._}>
      <div className={styles.tableFooterButtonsStatus}>
        <div className={styles.tableFooterAction}>
          <span className={styles.tableFooterText}>{text}</span>
          {firstButton}
          {!!firstButtonDropdown && firstButtonDropdown}
          {secondButton}
          {!!secondButtonDropdown && secondButtonDropdown}
        </div>
      </div>
      <div className={styles.tableFooterPagination}>
        <div className={styles.tableFooterPaginationForm}>
          {paginationButtons}
        </div>
      </div>
    </div>
  );
};
