import { Box } from "@mui/material";
import Header from "./components/Header";
import "./App.css";
import Shop from "./components/Shop";
import { ShopContextProvider } from "./context/shopcontext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      
    </ShopContextProvider>
  );
}

export default App;
