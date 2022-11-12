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
import { isNumber } from "../../../../../../shared/utils";

const DOTS = "...";
const SUFFIX = "#";

export const Pagination = ({ ordersCount }) => {
  const [isPageDropdownOpen, setPageDropdownOpen] = useState(false);
  const handlePageDropdownOpen = () => setPageDropdownOpen(!isPageDropdownOpen);
  const dispatch = useDispatch();
  const activePage = useSelector(getActivePage);

  const handleDebouncedInputPage = (value) => {
    const page = isNumber(value) ? value : 1;
    dispatch(activatePage(parseInt(page)));
  };

  const paginations = usePagination({
    currentPage: parseInt(activePage),
    totalCount: ordersCount,
    pageSize: PAGE_SIZE,
    dots: DOTS,
    suffix: SUFFIX,
  });

  useEffect(() => {
    const page = isNumber(paginations[0]) ? paginations[0] : 1;
    dispatch(activatePage(parseInt(page)));
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
        <div key={index}>
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
