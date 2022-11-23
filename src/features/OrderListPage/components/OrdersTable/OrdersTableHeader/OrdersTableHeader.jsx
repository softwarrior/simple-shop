import { TableHeader, Checkbox } from "../../../../../shared/components";
import { HeaderCell } from "./HeaderCell/HeaderCell";
import styles from "./OrdersTableHeader.module.css";
import commonStyles from "../OrdersTable.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getDirection,
  getSortField,
  setFilter,
} from "../../../model/ordersFilter";

const HEADER_CELLS = {
  orderNumber: {
    className: commonStyles.orderNumberWrap,
    text: "#",
  },
  date: {
    className: commonStyles.dateWrap,
    text: "Дата",
    isIcon: true,
  },
  status: {
    className: commonStyles.statusWrap,
    text: "Статус",
    isIcon: true,
  },
  amount: {
    className: commonStyles.amountWrap,
    text: "Позиций",
    isIcon: true,
  },
  sum: {
    className: commonStyles.sumWrap,
    text: "Сумма",
    isIcon: true,
  },
  customer: {
    className: commonStyles.customerWrap,
    text: "ФИО покупателя",
  },
};

export const OrdersTableHeader = ({ checked, onChecked }) => {
  const sortField = useSelector(getSortField);
  const direction = useSelector(getDirection);
  const dispatch = useDispatch();
  const handleSortField = (field) => {
    if (sortField === field)
      dispatch(setFilter({ key: "direction", value: -direction }));
    else dispatch(setFilter({ key: "direction", value: 1 }));
    dispatch(setFilter({ key: "sortField", value: field }));
  };
  return (
    <div className={styles._}>
      <TableHeader>
        <Checkbox
          checked={checked}
          className={commonStyles.checkboxWrap}
          onChange={onChecked}
        />
        {Object.entries(HEADER_CELLS).map(
          ([field, { className, text, isIcon }]) => (
            <HeaderCell
              key={field}
              id={field}
              className={className}
              text={text}
              isIcon={isIcon}
              isActive={sortField === field}
              direction={direction}
              onClick={isIcon ? () => handleSortField(field) : null}
            />
          )
        )}
      </TableHeader>
    </div>
  );
};
