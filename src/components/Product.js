import { Box, Button } from "@mui/material";
import { items } from "./items";
import { ShopContext } from "../context/shopcontext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";

export const Product = (props) => {
  const { id, name, img, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <>
      <Box
        sx={{
          margin: "15px",
          border: "1px solid black",
          borderRadius: "4px",
        }}
      >
        <img width="180px" src={img} />
        <Box>{name}</Box>
        <Box>{price}€</Box>
        <Box sx={{display:"flex",justifyContent:"right"}}>
        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => addToCart(id)}>
        <Box sx={{fontSize:"12px"}}>  {cartItemAmount > 0 && <> ({cartItemAmount})</>}</Box>
          <AddShoppingCartIcon />
        </IconButton>
        </Box>
      </Box>
    </>
  );
};
