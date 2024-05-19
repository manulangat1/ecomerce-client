import { RootState } from "@reduxjs/toolkit/query";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getAllOrders } from "../../store/order/order";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { addToCart, removeFromCart } from "../../store/products/productSlice";
import SkeletonHolder from "../Reusable/SkeletonHolder";

function Order() {
  const { orders, isLoading } = useSelector((state: RootState) => state.orders);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const addToCarts = (id: string) => {
    dispatch(addToCart(id));
    window.location.reload();
  };
  const removeFromCarts = (id: string) => {
    dispatch(removeFromCart(id));
    window.location.reload();
  };
  return (
    <section className="orders">
      {isLoading && <SkeletonHolder />}
      {orders.map((order) => (
        <div>
          <h1>{order.total_price}</h1>
          <div className="orders-grid">
            {order?.order_items?.map((orderItem, index) => (
              <Card key={index}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {orderItem.item.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <button
                    onClick={() => addToCarts(orderItem.item.id)}
                    className="primary-btn"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={() => removeFromCarts(orderItem.item.id)}
                    className="primary-btn"
                  >
                    Remove from cart
                  </button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Order;
