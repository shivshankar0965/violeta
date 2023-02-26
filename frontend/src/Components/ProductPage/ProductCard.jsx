import React from "react";
import Prod_Car from "../ProductPage/ProductCard.module.css";
import LinesEllipsis from "react-lines-ellipsis";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { addToCart } from "../../redux/cart/cart.actions";
const ProductCard = ({ product }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast({
      title: "Product Added to cart.",
      description: "We've added your product ",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      <div id={Prod_Car.firstDiv}>
        <div id={Prod_Car.imageDiv}>
          <img src={product.images[0].url} alt="images" width="100%" />
        </div>
        <div id={Prod_Car.details}>
          <button id={Prod_Car.button}>{product.offer} offer</button>
          <h3 id={Prod_Car.description}>
            <LinesEllipsis
              text={product.description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </h3>
          <div id={Prod_Car.oneLineDiv}>
            <h2>₹{product.price}</h2>
            <p>
              <s>{product.strikedPrice}</s>
            </p>
            <p>{`${(
              ((product.strikedPrice - product.price) / product.strikedPrice) *
              100
            ).toFixed(0)}% off`}</p>
          </div>

          <div>
            <button
              onClick={() => handleAddToCart(product)}
              id={Prod_Car.cartButton}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
