import LoginForm from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import RegisterForm from "./pages/RegisterPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import AuthProvider from "./context/AuthContext";
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./context/CartContext";


function App() {
  return (
    <>
    <AuthProvider>
      <CartProvider>
      <NavBar />
      <div className="pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CheckOut />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/products/:id" element={<ProductDetails/>}/>
        </Routes>
      </div>
      </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
