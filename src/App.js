import Homepage from "./pages/homepage/Homepage";
import "./pages/homepage/homepage.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import SignInOutPage from "./pages/SignInOutPage/SignInOutPage";
import { useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/slices/userSlice";
import CheckOutPage from "./pages/checkout/CheckOutPage";
import CollectionPage from "./pages/collectionPage/CollectionPage";
import NotFound from "./pages/notfound/NotFound";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser.currentUser);

  useEffect(() => {
    var unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // to check if database has updated
        onSnapshot(userRef, (snapshot) => {
          //for redux 
          dispatch(setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          }));


        }); // snapshot basically listens to changes
      } else {
        // redux
        dispatch(setCurrentUser({
          currentUser: userAuth
        }));

      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:name" element={<CollectionPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/signin" element={!user ? <SignInOutPage /> : <Navigate to={'/'} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


