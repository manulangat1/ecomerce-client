import React, { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProducts } from "../../store/products/productSlice";
import { AppDispatch, RootState } from "../../store/store";
import { Link } from "react-router-dom";
import ReusableCard from "../Reusable/ReusableCard";
import SkeletonHolder from "../Reusable/SkeletonHolder";

const Products = () => {
  useEffect(() => {
    console.log("here here now now");
    // add set timeout to simulate the waiting time

    dispatch(getProducts());
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  const addToCarts = async (id: string, numberOfItems: number) => {
    console.log(id, numberOfItems);
    await dispatch(addToCart(id));
    window.location.reload();
  };

  return (
    <section id="products">
      {isLoading && <SkeletonHolder />}

      {products && (
        <Grid container spacing={2}>
          {products.map((product: any) => (
            <Grid key={product.id} xs={12} sm={6} md={4} lg={3} xl={3}>
              <ReusableCard
                name={product.name}
                description={product.description}
                photo={product.photo}
                slug={product.slug}
                id={product.id}
                quantity={product.quantity}
                onClick="h"
                addToCart={addToCarts}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </section>
  );
};

export default Products;
