import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { auth, db } from "./config/firebase.config";
import { UserContext } from "./contexts/user.context";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./pages/sign-up/sign-up.page";

function App() {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user;

    if (isSigningOut) return logoutUser();

    const isSigningIn = !isAuthenticated && user;

    if (isSigningIn) {
      const querySnapshot = await getDocs(
        query(collection(db, "users"), where("id", "==", user.uid)),
      );

      const userFromFirestore = querySnapshot.docs[0]?.data();

      return loginUser(userFromFirestore as any);
    }
  });

  console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
