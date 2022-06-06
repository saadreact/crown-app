import Homepage from "./pages/homepage/Homepage";
import "./pages/homepage/homepage.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import SignInOutPage from "./pages/SignInOutPage/SignInOutPage";
import { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";

function App() {
  const [user, setUser] = useState({ currentUser: null });

  useEffect(() => { 
    var unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // to check if database has updated
        onSnapshot(userRef, (snapshot) => {
          setUser(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            }
          );
        }); // snapshot basically listens to changes
      } else {
        setUser({currentUser:userAuth});
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);

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
