import Homepage from "./pages/homepage/Homepage";
import "./pages/homepage/homepage.scss";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import SignInOutPage from "./pages/SignInOutPage/SignInOutPage";
import { useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/slices/userSlice";
import CheckOutPage from "./pages/checkout/CheckOutPage";
import NotFound from "./pages/notfound/NotFound";
import CollectionPageComp from "./pages/collectionPages/CollectionPageComp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser.currentUser);
  // useEffect(() => {
  //   var unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth); // to check if database has updated
  //       onSnapshot(userRef, (snapshot) => {
  //         //for redux
  //         dispatch(setCurrentUser({
  //           currentUser: {
  //             id: snapshot.id,
  //             ...snapshot.data(),
  //           },
  //         }));

  //       }); // snapshot basically listens to changes
  //     } else {
  //       // redux
  //       dispatch(setCurrentUser({
  //         currentUser: userAuth
  //       }));

  //     }
  //   });
  //   console.log("environment check::::::::",process.env.NODE_ENV);
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to={"/signIn"} replace />;
    } else {
      return children ? children : <Outlet />;
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="signIn" element={<SignInOutPage />} />

          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:name" element={<CollectionPageComp />} />

          <Route element={<ProtectedRoute user={user} />}>
            <Route path="checkout" element={<CheckOutPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
