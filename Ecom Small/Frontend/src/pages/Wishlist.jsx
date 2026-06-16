// src/pages/Wishlist.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingCart, Heart } from 'lucide-react';
import api from '../services/api';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useAuth } from '../contexts/AuthContext';

export default function Wishlist() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ✅ Image path helper function (Public folder के लिए)
  const getWishlistImage = (imageFilename = null) => {
    if (imageFilename && typeof imageFilename === 'string') {
      return `/images/${imageFilename}`;
    }
    return '/images/p1.jpg'; // Default fallback
  };

  // विशलिस्ट लोड करने का फंक्शन
  const fetchWishlist = async () => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await api.get('/api/wishlist');
      console.log('Wishlist API Response:', res.data.wishlist); // Debug
      setWishlist(res.data.wishlist || []);
    } catch (err) {
      console.error('Failed to load wishlist:', err);
      setError('विशलिस्ट लोड करने में समस्या। कृपया दोबारा ट्राई करें।');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [isAuthenticated]);

  // विशलिस्ट से आइटम हटाने का फंक्शन
  const removeFromWishlist = async (productId) => {
    try {
      await api.delete(`/api/wishlist/${productId}`);
      setWishlist(prev => prev.filter(item => item._id !== productId));
      alert('आइटम विशलिस्ट से हटा दिया गया');
    } catch (err) {
      alert(err.response?.data?.message || 'आइटम हटाने में समस्या');
    }
  };

  // विशलिस्ट से कार्ट में मूव करने का फंक्शन
  const moveToCart = async (productId) => {
    try {
      await api.post('/api/cart', { productId, quantity: 1 });
      await removeFromWishlist(productId);
      alert('आइटम कार्ट में सफलतापूर्वक मूव हो गया!');
    } catch (err) {
      alert(err.response?.data?.message || 'कार्ट में मूव करने में समस्या');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Login For View Wishlist</h2>
        <Link to="/login" className="text-blue-600 hover:underline">
          Login →
        </Link>
      </div>
    );
  }

  if (loading) return <LoadingSpinner className="min-h-[60vh]" />;

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        {error}
        <button 
          onClick={fetchWishlist} 
          className="ml-4 text-blue-600 hover:underline"
        >
         Try Again..
        </button>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-gray-100 rounded-2xl p-6 mx-auto mb-6 flex items-center justify-center">
          <Heart size={48} className="text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Empty wishlist</h2>
        <p className="text-gray-600 mb-8">आपने अभी तक कोई आइटम सेव नहीं किया</p>
        <Link to="/products">
          <Button>Continue Shopping.</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center gap-3 mb-8">
        <Heart size={32} className="text-pink-500" />
        <h1 className="text-3xl font-bold">
         My Wishlist ({wishlist.length} Items)
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map(product => (
          <div 
            key={product._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Image Section */}
            <Link to={`/product/${product._id}`} className="block">
              <div className="relative pt-[130%] bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50">
                <img
                  src={getWishlistImage(product.image)}  // ✅ Fixed path!
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-4 transition-transform group-hover:scale-105"
                  onError={(e) => {
                    console.warn('Wishlist image failed:', product.image);
                    e.target.src = '/images/p1.jpg';
                    e.target.onerror = null;
                  }}
                />
              </div>
            </Link>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold text-gray-900 line-clamp-2 mb-3 min-h-[2.5rem]">
                {product.name}
              </h3>
              
              <div className="text-2xl font-bold text-gray-900 mb-4">
                ₹{product.price?.toLocaleString('en-IN') || '0'}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  className="w-full flex items-center justify-center gap-2 text-sm py-3"
                  onClick={(e) => {
                    e.preventDefault();
                    moveToCart(product._id);
                  }}
                >
                  <ShoppingCart size={18} />
                  {/* कार्ट में डालें */}Push in cart
                </Button>
                
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromWishlist(product._id);
                  }}
                  className="w-full p-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl font-medium transition-all hover:shadow-md flex items-center justify-center gap-2"
                  title="Remove From Wishlist.."
                >
                  <Trash2 size={18} />
                  {/* हटाएं */}Remove..
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

