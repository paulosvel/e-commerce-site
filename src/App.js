import { Box } from "@mui/material";
import Header from "./components/Header";
import "./App.css";
import Shop from "./components/Shop";
import { ShopContextProvider } from "./context/shopcontext";

function App() {
  return (
    <ShopContextProvider>
      <>
        <Header />

        <h1 style={{ textAlign: "center" }}>Our Products</h1>
        <Shop />
      </>
    </ShopContextProvider>
  );
}

export default App;
