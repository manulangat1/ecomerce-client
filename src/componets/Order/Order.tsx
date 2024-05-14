import { RootState } from "@reduxjs/toolkit/query";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getAllOrders } from "../../store/order/order";
import { List, ListItem } from "@mui/material";

function Order() {
  const orders = useSelector((state: RootState) => state.orders.orders);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <section>
      {/* <List> */}
      {orders.map((order) => (
        <div>
          {/* <ListItem> */}
          <h1>{order.total_price}</h1>
          {/* </ListItem> */}
          {/* <ListItem> */}
          {order?.order_items?.map((orderItem) => (
            <h6>{orderItem.item.name}</h6>
          ))}
          {/* </ListItem> */}
        </div>
      ))}
      {/* </List> */}
    </section>
  );
}

export default Order;
