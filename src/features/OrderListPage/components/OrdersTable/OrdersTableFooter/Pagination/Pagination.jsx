import styles from "./Pagination.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  Button,
  ButtonSize,
  ButtonStyle,
} from "../../../../../../shared/components";
import { setFilter, getPage } from "../../../../model/ordersFilter";
import { ChangePageDropdown } from "../../../Dropdowns/ChangePageDropdown/ChangePageDropdown";
import { usePagination } from "./usePagination";
import { useState } from "react";
import { PAGE_SIZE } from "../../../../OrderListPage.constants";
import { isNumber } from "../../../../../../shared/utils";

const DOTS = "...";
const SUFFIX = "#";

export const Pagination = ({ ordersCount, onClick }) => {
  const [isPageDropdownOpen, setPageDropdownOpen] = useState(false);
  const handlePageDropdownOpen = () => setPageDropdownOpen(!isPageDropdownOpen);
  const handleDebouncedInputPage = (value) => {
    setPage(value);
    onClick(value);
  };

  const dispatch = useDispatch();
  const activePage = useSelector(getPage) ?? 1;

  const setPage = (value) => {
    const page = isNumber(value) ? value : 1;
    dispatch(setFilter({ key: "page", value: parseInt(page) }));
  };

  const paginations = usePagination({
    currentPage: parseInt(activePage),
    totalCount: ordersCount,
    pageSize: PAGE_SIZE,
    dots: DOTS,
    suffix: SUFFIX,
  });

  useEffect(() => {
    setPage(paginations[0]);
  }, [ordersCount]);

  const handlePageClick = (value) => {
    if (value === DOTS) return;
    if (value === SUFFIX) {
      handlePageDropdownOpen();
      return;
    }
    setPage(value);
    onClick(value);
  };

  return (
    <div className={styles._}>
      {paginations.map((text, index) => (
        <div className={styles._} key={index}>
          {text === DOTS && <span className={styles.dots}>{text}</span>}
          {text !== DOTS && (
            <div className={styles.wrap}>
              <Button
                buttonStyle={buttonStyle(text, activePage, isPageDropdownOpen)}
                size={ButtonSize.small}
                onClick={() => handlePageClick(text)}
              >
                {text}
              </Button>
              {text === SUFFIX && (
                <ChangePageDropdown
                  maxPage={paginations[paginations.length - 2]}
                  isOpen={isPageDropdownOpen}
                  onDebouncedChange={handleDebouncedInputPage}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const buttonStyle = (text, activePage, isPageDropdownOpen) => {
  if (text === SUFFIX) {
    return isPageDropdownOpen ? ButtonStyle.primary : ButtonStyle.reverse;
  }
  return activePage == text ? ButtonStyle.primary : ButtonStyle.reverse;
};
