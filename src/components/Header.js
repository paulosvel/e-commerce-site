import { Box, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#2a2a72",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
        <CallIcon sx={{ marginRight: "20px" }} />
        
          <Link to={"/"} >
          <Box sx={{color: "white" }}>
            Products
            </Box>
          </Link>{" "}
       
      </Box>
      <Link to="/cart">
        <ShoppingCartIcon sx={{ color: "white" }} />
      </Link>
    </Box>
  );
};
export default Header;
