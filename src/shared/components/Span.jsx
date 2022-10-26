import styles from "./Span.module.css";

export const SpanType = {
  headerButton: {
    className: styles.headerButtonText,
  },
  headerTitle: {
    className: styles.headerTitle,
  },
  filterRowText: {
    className: styles.filterRowTextButton,
  },
  filterRowLoader: {
    className: styles.filterRowTextLoader,
  },
  filterRowFromToText: {
    className: styles.filterRowFromToText,
  },
  dropdownsItem: {
    className: styles.dropdownsItemText,
  },
  filterRowButtonReset: {
    className: styles.filterRowButtonReset,
  },
  filterRowTextAccept: {
    className: styles.filterRowTextAccept,
  },
  checkboxTitle: {
    className: styles.checkboxTitle,
  },
  dropdownTitle: {
    className: styles.dropdownTitle,
  },
};

export const Span = ({ className, type, children }) => (
  <span className={className ? className : type.className}>{children}</span>
);
