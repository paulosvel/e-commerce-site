import { Box, Button } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
const Header = () => {
    return (
<Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",padding:"10px", backgroundColor:"#2a2a72", color:"white" }}>
    <Box sx={{display:"flex", flexDirection:"row",marginLeft:"10px" }}>
    <CallIcon sx={{marginRight:"20px",}} />
  <span  style={{cursor:"pointer"}}>Products</span>  
  </Box>
    <Button>
        MyCart
    </Button>
    </Box>
    );
}
export default Header;