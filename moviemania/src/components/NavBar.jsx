import  { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function NavBar() {

  const { user, LogOut } = useContext(AuthContext);
  const {cartItems} = useCart();
  const cartItemCount = cartItems?cartItems.length:0;

  const handleLogoOut = () => {
    window.confirm("Are you sure you want to log out?") && LogOut();
  };

  return (
    <div className="flex fixed top-0 left-0 right-0 z-50 items-center justify-between p-4 bg-gray-600 ">
      <h2 className="text-white text-2xl font-bold">ShopCart</h2>
      <nav className="flex justify-between gap-10">
        <div className="flex gap-7 items-center pr-16 text-gray-100 ">
          <NavLink
            className={({ isActive }) =>
              ` hover:text-blue-400 hover:underline ${isActive && "border-b-amber-600 text-blue-400 underline"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` hover:text-blue-400 hover:underline ${isActive && "border-b-amber-600 text-blue-400 underline"}`
            }
            to="/cart"
          >
            Cart ({cartItemCount})
          </NavLink>
        </div>
        <div className="flex text-gray-100 gap-7 ">
          {user ? (
            <div className="flex gap-2 ">
                <h1 className="font-bold text-shadow-cyan-400">{user?.name}</h1>
                <button className="bg-red-400 text-white px-2 py-0.5 rounded-sm cursor-pointer" onClick={handleLogoOut}>Log out</button>
          </div>) : (
            <>
              {" "}
              <NavLink
                className={({ isActive }) =>
                  `px-4 py-1 hover:bg-blue-400 hover:text-gray-100 ${!isActive ? "bg-blue-100 text-blue-900" : "bg-blue-400 text-gray-100"}`
                }
                to="/register"
              >
                Register
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  ` hover:text-blue-400 hover:underline ${isActive && "border-b-amber-600 text-blue-400 underline"}`
                }
                to="/login"
              >
                Login
              </NavLink>{" "}
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
