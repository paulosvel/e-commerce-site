import React from 'react'
import { Box } from '@mui/material';
export const CartItem = (props) => {
    const {id,name,price,img} = props.data;
  return (
      <><img src={img}></img>
      <Box>
          {name}
      </Box>
      <p>{price}</p>
      </>
  );
};
