import classnames from "classnames";
import { Input } from "../../../../../shared/components";
import styles from "./ChangePageDropdown.module.css";
import { useDebounce } from "../../../../../shared/components";
import { useEffect } from "react";
import { useState } from "react";

const none = () => {};

export const ChangePageDropdown = ({
  initialValue = 1,
  isOpen,
  onDebouncedChange = none,
  title = "Номер страницы",
  placeholder = "Введите номер",
}) => {
  const classNames = classnames(styles._, {
    [styles.disabled]: !isOpen,
  });
  const [inputPage, setInputPage] = useState(initialValue);
  const handleInputPage = ({ target: { value } }) => {
    setInputPage(value);
  };
  const handleInputReset = () => {
    setInputPage(initialValue);
  };

  const debouncedValue = useDebounce(inputPage, 500);
  useEffect(() => {
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
