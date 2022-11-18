import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../../../shared/components";
import { OrdersTableHeader } from "./OrdersTableHeader/OrdersTableHeader";
import { OrdersTableBody } from "./OrdersTableBody/OrdersTableBody";
import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";
import { changeOrder, deleteOrders, getOrders } from "../../model/orders";
import { useMemo, useReducer, useState } from "react";

const initialState = { checkedOrdersId: new Set() };
const init = () => {
  return initialState;
};
const reducer = (state, action) => {
  let set = state.checkedOrdersId;
  if (action.clean) {
    set = new Set();
  } else if (action.checked) {
    set.add(action.id);
  } else {
    set.delete(action.id);
  }
  return { checkedOrdersId: set };
};

export const OrdersTable = ({ orderChecked, onOrderClick, onOrderCheck }) => {
  const { orders, totalOrdersCount } = useSelector(getOrders);
  const [allChecked, setAllChecked] = useState(orderChecked);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const dispatcher = useDispatch();
  const handleAllChecked = ({ target: { checked } }) => {
    orders.forEach(({ id }) => {
      dispatch({ id, checked });
    });
    setAllChecked(checked);
    if (checked) onOrderCheck();
  };
  const handlePageClick = () => {
    dispatch({ clean: true });
    setAllChecked(false);
  };
  const handleOrderChecked = (id, checked) => {
    dispatch({ id, checked });
    if (checked) onOrderCheck();
  };

  const handleOrderDelete = () => {
    dispatcher(deleteOrders({ ids: [...state.checkedOrdersId] }));
    dispatch({ clean: true });
    setAllChecked(false);
  };

  const handleOrderChangeStatus = (status) => {
    state.checkedOrdersId.forEach((id) => {
      const pairs = [{ key: "status", value: status }];
      dispatcher(changeOrder({ id, pairs }));
    });
    dispatch({ clean: true });
    setAllChecked(false);
  };

  useMemo(() => {
    if (!orderChecked) {
      dispatch({ clean: true });
      setAllChecked(false);
    }
  }, [orderChecked]);

  return (
    <Table>
      <OrdersTableHeader checked={allChecked} onChecked={handleAllChecked} />
      <OrdersTableBody
        orders={orders}
        checkedOrdersId={state.checkedOrdersId}
        onOrderChecked={handleOrderChecked}
        onOrderClick={onOrderClick}
      />
      <OrdersTableFooter
        checkedOrdersId={state.checkedOrdersId}
        ordersCount={totalOrdersCount}
        onPageClick={handlePageClick}
        onOrderDelete={handleOrderDelete}
        onOrderChangeStatus={handleOrderChangeStatus}
      />
    </Table>
  );
};
