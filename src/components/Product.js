import { Box,Button } from "@mui/material";
import { items } from "./items";

export const Product = (props) => {
  const { id, name, img, price } = props.data;
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
            <Button>Add To Cart</Button>
          </Box>
    </>
  );
};
