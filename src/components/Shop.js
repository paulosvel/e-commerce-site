import { Box, Button } from "@mui/material";
import { items } from "./items";
import { Product } from "./Product";

const Shop = () => {
  return (
    <Box
    sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width:"49%",
        flexDirection: "row",
        paddingTop: "10px",
        textAlign: "center",
      }}
    >
      {items.map((product) => (
        <Box>
        <Product data={product} />
        </Box>
      ))}
    </Box>
  </Box>
  );
};
export default Shop;
