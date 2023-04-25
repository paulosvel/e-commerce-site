import { Box, Button } from "@mui/material";
import { items } from "./items";
import { Product } from "./Product";

const Shop = () => {
  return (
    <Box>
      {items.map((product) => (
        <Product data={product} />
      ))}
    </Box>
  );
};
export default Shop;
