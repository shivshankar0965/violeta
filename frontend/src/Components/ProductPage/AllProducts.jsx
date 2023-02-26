import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import STYLE from "../ProductPage/AllProducts.module.css";
import { Link } from "react-router-dom";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
// import  {useDispatch, useSelector} from 'react-redux'
// import { getProducts } from '../../redux/admin/admin.actions'

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  // const newData = useSelector((store) => store.adminReducer.data);
  const getData = () => {
    setLoading(true);
    axios
      .get(`https://calm-underwear-lamb.cyclic.app/api/v1/products`)
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    getData();
    // dispatch(getProducts());
  }, []);

  if (loading) {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    );
  }

  if (error) {
    return <h1 style={{ fontSize: "40px", color: "red" }}>error....</h1>;
  }

  const handleStorage = (el) => {
    localStorage.setItem("product", JSON.stringify(el));
    dispatch(addToCart(el));
  };

  return (
    <>
      <div className={STYLE.ProductsDiv}>
        {data?.map((el) => {
          return (
            <Link onClick={() => handleStorage(el)} to={`/singlepage`}>
              <ProductCard key={el.id} product={el} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AllProducts;
