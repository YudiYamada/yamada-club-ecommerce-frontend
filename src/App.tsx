import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
