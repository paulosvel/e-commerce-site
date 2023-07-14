import { Box, Button } from "@mui/material";
import { items } from "./items";
import { Product } from "./Product";
import { ShopContext } from "../context/shopcontext";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <>
      <Box className="cart"  sx={{textAlign:"center",}}>Cart Items</Box>
      <Box className="cart">
        {items.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </Box>
      {totalAmount > 0 ?
      <Box>
        
        <p>Total: {totalAmount}€</p>
        <Button onClick={()=>navigate("/")}>Continue Shopping</Button>
      <Button>Checkout</Button>
      </Box>
      :<h1 style={{textAlign:"center", }}>Your Cart is Empty</h1>}
    </>
  );
};
export default Cart;
