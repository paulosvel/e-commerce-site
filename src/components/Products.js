import { Box } from "@mui/material";
import img1 from "../imgs/product-1.png";
import img2 from "../imgs/product-2.png";
import img3 from "../imgs/product-3.png";
import img4 from "../imgs/product-4.png";
import img5 from "../imgs/product-5.png";
import img6 from "../imgs/product-6.png";
import img7 from "../imgs/product-7.png";
import img8 from "../imgs/product-8.png";
import { useEffect, useState } from "react";

const Products = () => {
  const phones = [
    {
      name: "Google Pixel - Black",
      img: img1,
    },
    {
      name: "Samsung S7",
      img: img2,
    },
    {
      name: "HTC 10 - Black",
      img: img3,
    },
    {
      name: "HTC 10 - White",
      img: img4,
    },
    {
      name: "HTC Desire 626s",
      img: img5,
    },
    {
      name: "Vintage Iphone",
      img: img6,
    },
    {
      name: "Iphone 7",
      img: img7,
    },
    {
      name: "Smashed Iphone",
      img: img8,
    },
  ];
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "row",
            width: "50%",
            paddingTop: "10px",
            textAlign: "center",
          }}
        >
          {phones.map((item, index) => (
            <Box key={index} sx={{ margin: "15px", border: "1px solid black" }}>
              <img width="180px" src={item.img} />
              <Box>{item.name}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default Products;
