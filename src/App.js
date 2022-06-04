import Homepage from "./pages/homepage/Homepage";
import "./pages/homepage/homepage.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import SignInOutPage from "./pages/SignInOutPage/SignInOutPage";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [user, setUser] = useState({ currentUser: null });

  useEffect(() => {
    var unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("user", user);
      setUser({ currentUser: user });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent currentUser={user.currentUser} />
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
