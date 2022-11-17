import classnames from "classnames";
import { Input } from "../../../../../shared/components";
import styles from "./ChangePageDropdown.module.css";
import { useDebounce } from "../../../../../shared/components";
import { useEffect } from "react";
import { useState } from "react";
import { isNumber } from "../../../../../shared/utils";

const none = () => {};

export const ChangePageDropdown = ({
  maxPage,
  isOpen,
  onDebouncedChange = none,
  title = "Номер страницы",
  placeholder = "Введите номер",
}) => {
  const classNames = classnames(styles._, {
    [styles.disabled]: !isOpen,
  });
  const [inputPage, setInputPage] = useState("");
  const handleInputPage = ({ target: { value } }) => {
    setInputPage(value);
  };
  const handleInputReset = () => {
    setInputPage("");
  };
  const debouncedValue = useDebounce(inputPage, 300);
  useEffect(() => {
    if (!isNumber(debouncedValue)) return;
    if (parseInt(debouncedValue) > maxPage) return;
    onDebouncedChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className={classNames}>
      <span className={styles.title}>{title}</span>
      <Input
        className={styles.input}
        value={inputPage}
        onChange={handleInputPage}
        onReset={handleInputReset}
        placeholder={placeholder}
      />
    </div>
  );
};
