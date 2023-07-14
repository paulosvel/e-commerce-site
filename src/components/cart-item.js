import React, {useContext} from 'react'
import { Box, Button } from '@mui/material';
import { ShopContext } from '../context/shopcontext';
import "./cart.css";
export const CartItem = (props) => {
    const {id,name,price,img} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
      <>
      <Box className="cartItem">
      <img src={img}></img><Box>
          {name}
      </Box><p>{price}</p><Box>
              <Button onClick={()=> removeFromCart(id)}>-</Button>
              <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)} />
              <Button onClick={()=> addToCart(id)} >+</Button>
          </Box>
          </Box>
          </>
      
  );
};
