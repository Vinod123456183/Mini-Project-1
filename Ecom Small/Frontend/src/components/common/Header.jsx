// src/components/common/Header.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // path अपनी स्ट्रक्चर के हिसाब से चेक कर लें
import {
  ShoppingCart,
  Heart,
  User,
  LogOut,
  Search,
  Home as HomeIcon,
  ShoppingBag,
  CreditCard
} from 'lucide-react';

export default function Header() {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight flex-shrink-0">
            Grok<span className="text-yellow-300">Mart</span>
          </Link>

          {/* Search - अब काफी छोटा (मोबाइल + डेस्कटॉप दोनों पर अच्छा दिखेगा) */}
          <div className="flex-1 max-w-xs mx-4 md:max-w-md lg:max-w-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-3 md:px-4 pr-10 rounded-lg text-black text-sm focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black">
                <Search size={18} /> {/* छोटा सर्च आइकन */}
              </button>
            </div>
          </div>

          {/* Quick Links + Auth */}
          <nav className="flex items-center gap-3 md:gap-6">
            {/* Quick Navigation Icons - छोटे और क्लिक करने योग्य */}
            <Link
              to="/"
              className="flex flex-col items-center text-xs hover:text-yellow-300 transition-colors"
              title="Home"
            >
              <HomeIcon size={20} />
              <span className="hidden md:block mt-1">Home</span>
            </Link>

            <Link
              to="/products"
              className="flex flex-col items-center text-xs hover:text-yellow-300 transition-colors"
              title="Shop"
            >
              <ShoppingBag size={20} />
              <span className="hidden md:block mt-1">Shop</span>
            </Link>

            <Link
              to="/cart"
              className="flex flex-col items-center text-xs hover:text-yellow-300 transition-colors relative"
              title="Cart"
            >
              <ShoppingCart size={20} />
              <span className="hidden md:block mt-1">Cart</span>
            </Link>

            <Link
              to="/wishlist"
              className="flex flex-col items-center text-xs hover:text-yellow-300 transition-colors"
              title="Wishlist"
            >
              <Heart size={20} />
              <span className="hidden md:block mt-1">Wishlist</span>
            </Link>

            <Link
              to="/checkout"
              className="flex flex-col items-center text-xs hover:text-yellow-300 transition-colors"
              title="Checkout"
            >
              <CreditCard size={20} />
              <span className="hidden md:block mt-1">Checkout</span>
            </Link>

            {/* Auth Section */}
            {user ? (
              <div className="flex items-center gap-4 md:gap-6">
                {isAdmin && (
                  <Link to="/admin" className="hover:text-yellow-300 font-medium">
                    Admin
                  </Link>
                )}
                

                <div className="flex items-center gap-2">
                  <User size={20} />
                  <span className="hidden md:inline">{user.name?.split(' ')[0] || 'User'}</span>
                </div>

                <button
                  onClick={() => {
                    logout();
                    navigate('/login');
                  }}
                  className="flex items-center gap-1 hover:text-yellow-300"
                >
                  <LogOut size={20} />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="hover:text-yellow-300 font-medium">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-yellow-400 text-black px-3 py-1.5 rounded hover:bg-yellow-500 text-sm font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>
        </div>

        {/* Mobile-only Search (नीचे अलग से) */}
        <div className="md:hidden py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-3 rounded text-black text-sm focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
