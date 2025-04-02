import { useState } from "react";
import { ShoppingCart, Menu } from "@mui/icons-material";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">ShopEasy</h1>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4">
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
        <a href="/profile">Profile</a>
      </div>

      {/* Mobile Menu */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu />
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center md:hidden">
          <a href="/" className="p-2">Home</a>
          <a href="/cart" className="p-2">Cart</a>
          <a href="/profile" className="p-2">Profile</a>
        </div>
      )}
      
      <ShoppingCart className="ml-4 cursor-pointer" />
    </nav>
  );
}

export default Navbar;
