import React, { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProducts } from "../../store/products/productSlice";
import { AppDispatch, RootState } from "../../store/store";
import { Link } from "react-router-dom";
import ReusableCard from "../Reusable/ReusableCard";
const items = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];
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

  const addToCarts = (id: string, numberOfItems) => {
    console.log(id, numberOfItems);
    dispatch(addToCart(id));
  };

  return (
    <section id="products">
      {isLoading && (
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid key={item.id} xs={12} sm={6} md={4} lg={3} xl={3}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={210}
                height={118}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {products && (
        <Grid container spacing={2}>
          {products.map((product: any) => (
            <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
              <ReusableCard
                name={product.name}
                description={product.description}
                photo={product.photo}
                key={product.id}
                slug={product.slug}
                id={product.id}
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
