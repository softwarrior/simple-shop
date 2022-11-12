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
import { usePagination } from "./usePagination";
import { useState } from "react";
import { PAGE_SIZE } from "../../../../OrderListPage.constants";

const DOTS = "...";
const SUFFIX = "#";

export const Pagination = ({ ordersCount }) => {
  const [isPageDropdownOpen, setPageDropdownOpen] = useState(false);
  const handlePageDropdownOpen = () => setPageDropdownOpen(!isPageDropdownOpen);
  const dispatch = useDispatch();
  const activePage = useSelector(getActivePage);
  const paginations = usePagination({
    currentPage: activePage,
    totalCount: ordersCount,
    pageSize: PAGE_SIZE,
    dots: DOTS,
    suffix: SUFFIX,
  });

  useEffect(() => {
    dispatch(activatePage(parseInt(paginations[0])));
  }, [ordersCount]);

  const handlePageClick = (text) => {
    if (text === DOTS) return;
    if (text === SUFFIX) {
      handlePageDropdownOpen();
      return;
    }
    const page = parseInt(text);
    dispatch(activatePage(page));
  };

  return (
    <div className={styles._}>
      {paginations.map((text, index) => (
        <PaginationElement
          key={index}
          isPageDropdownOpen={isPageDropdownOpen}
          buttonStyle={buttonStyle(text, activePage, isPageDropdownOpen)}
          onClick={() => handlePageClick(text)}
        >
          {text}
        </PaginationElement>
      ))}
    </div>
  );
};

const PaginationElement = ({
  buttonStyle,
  onClick,
  children,
  isPageDropdownOpen,
}) => {
  return (
    <>
      {children === DOTS && <span className={styles.dots}>{children}</span>}
      {children !== DOTS && (
        <div className={styles.wrap}>
          <Button
            buttonStyle={buttonStyle}
            size={ButtonSize.small}
            isAlign={true}
            onClick={onClick}
          >
            {children}
          </Button>
          {children === SUFFIX && (
            <ChangePageDropdown isOpen={isPageDropdownOpen} />
          )}
        </div>
      )}
    </>
  );
};

const buttonStyle = (text, activePage, isPageDropdownOpen) => {
  if (text === SUFFIX) {
    return isPageDropdownOpen ? ButtonStyle.primary : ButtonStyle.reverse;
  }
  return activePage == text ? ButtonStyle.primary : ButtonStyle.reverse;
};
