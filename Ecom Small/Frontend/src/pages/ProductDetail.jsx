// src/pages/ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingCart, Heart } from 'lucide-react';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';

// लोकल इमेज फॉल्बैक (p1.jpg से p85.jpg)
const getLocalImage = (index = 1) => {
  const safeIndex = Math.max(1, Math.min(85, index));
  return new URL(`../assets/images/p${safeIndex}.jpg`, import.meta.url).href;
};

export default function ProductDetail() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await api.get(`/api/products/${id}`);
        setProduct(res.data.product || res.data);
      } catch (err) {
        console.error('Product fetch error:', err);
        // setError('प्रोडक्ट नहीं मिला या सर्वर एरर');
         setError('Product nhi mile or server errors...');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Add to Cart
  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      // alert('कार्ट में ऐड करने के लिए लॉगिन करें');
         alert('Cart me add krne ke liye login kre..');
      navigate('/login');
      return;
    }

    try {
      await api.post('/api/cart', { productId: id, quantity });
      // alert('प्रोडक्ट कार्ट में ऐड हो गया!');
      alert('Product Add in Cart....Product cart me add hu gya.');
      navigate('/cart');
    } catch (err) {
      // alert('कार्ट में ऐड करने में समस्या');
      alert('Cart me add krne me problem..');
    }
  };

  // Add to Wishlist
  const handleAddToWishlist = async () => {
    if (!isAuthenticated) {
      // alert('विशलिस्ट में ऐड करने के लिए लॉगिन करें');
      alert('Wishlist me Add krne ke liye login kre...');
      navigate('/login');
      return;
    }

    try {
      await api.post(`/api/wishlist/${id}`);
      // alert('प्रोडक्ट विशलिस्ट में ऐड हो गया!');
      alert('Add in product the wishlist..');
      navigate('/wishlist');
    } catch (err) {
      // alert('विशलिस्ट में ऐड करने में समस्या');
      alert('Problems Product Add in Wishlist...');
    }
  };

  if (loading) return <LoadingSpinner size="lg" className="min-h-[70vh]" />;

  if (error) return <div className="text-center py-20 text-2xl text-red-600">{error}</div>;

  if (!product) return <div className="text-center py-20 text-2xl">प्रोडक्ट नहीं मिला</div>;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <img
            src={product.image 
              ? new URL(`../assets/images/${product.image}`, import.meta.url).href 
              : getLocalImage(Number(id))}
            alt={product.name}
            className="w-full max-h-[500px] object-contain mx-auto"
            onError={(e) => {
              e.target.src = getLocalImage(1);
              e.target.onerror = null;
            }}
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="text-gray-500 mt-2">{product.category}</p>
          </div>

          <div className="flex items-end gap-4">
            <div className="text-4xl md:text-5xl font-bold">
              ₹{product.price.toLocaleString('en-IN')}
            </div>
            {discount > 0 && (
              <>
                <div className="text-2xl text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </div>
                <div className="text-xl md:text-2xl text-green-600 font-semibold">
                  {discount}% OFF
                </div>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(product.ratings || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.ratings || 0})</span>
          </div>

          <div className="text-sm">
            {product.stock > 0 ? (
              <span className="text-green-600 font-medium">In Stock ({product.stock} available)</span>
            ) : (
              <span className="text-red-600 font-medium">Out of Stock</span>
            )}
          </div>

          <div className="flex items-center gap-6">
            <span className="font-medium text-lg">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-4 py-2 hover:bg-gray-100 text-lg"
                disabled={quantity <= 1 || product.stock === 0}
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center text-xl font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(q => Math.min(product.stock || 99, q + 1))}
                className="px-4 py-2 hover:bg-gray-100 text-lg"
                disabled={quantity >= (product.stock || 99) || product.stock === 0}
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex-1 flex items-center justify-center gap-2"
              disabled={product.stock === 0}
              onClick={handleAddToCart}
            >
              <ShoppingCart size={20} />
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="flex-1 flex items-center justify-center gap-2"
              onClick={handleAddToWishlist}
            >
              <Heart size={20} />
              Add to Wishlist
            </Button>
          </div>

          <div className="pt-6 border-t">
            <h3 className="font-semibold text-xl mb-3">Product Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description || 'No description available for this product.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
