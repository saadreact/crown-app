import Homepage from "./pages/homepage/Homepage";
import "./pages/homepage/homepage.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import SignInOutPage from "./pages/SignInOutPage/SignInOutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInOutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
