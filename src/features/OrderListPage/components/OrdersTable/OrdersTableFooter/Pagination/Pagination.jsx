import styles from "./Pagination.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  Button,
  ButtonSize,
  ButtonStyle,
} from "../../../../../../shared/components";
import { activatePage, getActivePage } from "../../../../model/ordersFilter";
import { ChangePageDropdown } from "../../../Dropdowns/ChangePageDropdown/ChangePageDropdown";
import { useState } from "react";

const pageSize = 30;

export const Pagination = ({ ordersCount }) => {
  const [isPageDropdownOpen, setPageDropdownOpen] = useState(false);
  const handlePageDropdownOpen = () => setPageDropdownOpen(!isPageDropdownOpen);
  const dispatch = useDispatch();

  const paginations = [];
  const paginationSize = Math.ceil(ordersCount / pageSize);
  if (paginationSize) {
    for (let i = 0; i < paginationSize - 1; i++) paginations.push(`${i + 1}`);
    if (paginations.length) paginations.push("...");
    paginations.push(paginationSize);
    paginations.push("#");
  }

  useEffect(() => {
    dispatch(activatePage(parseInt(paginations[0])));
  }, [ordersCount]);

  const activePage = useSelector(getActivePage);

  const handlePageClick = (text) => {
    if (text === "...") return;
    if (text === "#") {
      handlePageDropdownOpen();
      return;
    }
    const page = parseInt(text);
    dispatch(activatePage(page));
  };

  return (
    <div className={styles._}>
      {paginations.map((text) => (
        <PaginationButton
          key={text}
          isPageDropdownOpen={isPageDropdownOpen}
          buttonStyle={buttonStyle(text, activePage, isPageDropdownOpen)}
          onClick={() => handlePageClick(text)}
        >
          {text}
        </PaginationButton>
      ))}
    </div>
  );
};

const PaginationButton = ({
  buttonStyle,
  onClick,
  children,
  isPageDropdownOpen,
}) => {
  return (
    <>
      <Button
        buttonStyle={buttonStyle}
        size={ButtonSize.small}
        isAlign={true}
        onClick={onClick}
      >
        {children}
      </Button>
      {children === "#" && <ChangePageDropdown isOpen={isPageDropdownOpen} />}
    </>
  );
};

const buttonStyle = (text, activePage, isPageDropdownOpen) => {
  if (text === "#") {
    return isPageDropdownOpen ? ButtonStyle.primary : ButtonStyle.reverse;
  }
  return activePage == text ? ButtonStyle.primary : ButtonStyle.reverse;
};
