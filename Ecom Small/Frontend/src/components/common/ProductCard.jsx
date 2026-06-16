// src/components/common/ProductCard.jsx
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';

export default function ProductCard({ product }) {
  const { isAuthenticated } = useAuth();

  // ✅ Public folder से images - बस filename चाहिए
  const getProductImage = (filename = 'p1.jpg') => {
    return `/images/${filename}`;
  };

  const imageSrc = getProductImage(product?.image);

  const handleAddToWishlist = async () => {
    if (!isAuthenticated) {
      alert('Please login first!');
      return;
    }
    try {
      await api.post(`/api/wishlist/${product._id || product.id}`);
      alert('Added to wishlist!');
    } catch (err) {
      alert('Already in wishlist or error occurred');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <Link to={`/product/${product._id || product.id}`} className="block">
        <div className="relative pt-[100%] bg-gray-50">
          <img
            src={imageSrc}
            alt={product.name || "Product Image"}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-transform group-hover:scale-105"
            onError={(e) => {
              // ✅ Fallback to default image in public/images/
              e.target.src = '/images/p1.jpg';
              e.target.onerror = null;
            }}
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 className="font-medium text-gray-900 line-clamp-2 h-12 mb-1">
          {product.name || "Product Name"}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-lg font-bold text-gray-900">
              ₹{(product.price || 999).toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-green-600 font-medium">
                {Math.round(((product.originalPrice - (product.price || 0)) / product.originalPrice) * 100)}% off
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleAddToWishlist}
            className="text-gray-400 hover:text-red-500 transition-colors p-1 -m-1 rounded-full hover:bg-red-50"
            title="Add to Wishlist"
          >
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
