import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/action";
import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.product);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      {loading === false ? (
        products.map((product) => {
          return <Product title={product.title} key={product.id} />;
        })
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default ProductList;
