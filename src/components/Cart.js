import { Box, Button } from "@mui/material";
import { items } from "./items";
import { Product } from "./Product";
import { ShopContext } from "../context/shopcontext";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import "./cart.css";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <>
      <Box>Cart Items</Box>
      <Box className="cartItem">
        {items.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </Box>
    </>
  );
};
export default Cart;
