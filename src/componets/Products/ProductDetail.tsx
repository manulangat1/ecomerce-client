import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../store/products/productSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  console.log(id);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, []);

  return <div>ProductDetail</div>;
}

export default ProductDetail;
