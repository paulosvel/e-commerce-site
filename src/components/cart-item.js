import React, {useContext} from 'react'
import { Box, Button } from '@mui/material';
import { ShopContext } from '../context/shopcontext';
import "./cart.css";
export const CartItem = (props) => {
    const {id,name,price,img} = props.data;
    const {cartItems} = useContext(ShopContext);
  return (
      <>
      <Box className="cartItem">
      <img src={img}></img><Box>
          {name}
      </Box><p>{price}</p><Box>
              <Button>-</Button>
              <input value={cartItems[id]} />
              <Button >+</Button>
          </Box>
          </Box>
          </>
      
  );
};
