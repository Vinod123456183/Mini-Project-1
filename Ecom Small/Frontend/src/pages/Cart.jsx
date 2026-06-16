// src/pages/Cart.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ← useNavigate जोड़ा
import api from '../services/api';
import CartItem from '../components/cart/CartItem';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // ← रीडायरेक्ट के लिए

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await api.get('/api/cart');
        setCart(res.data.cart || []);
      } catch (err) {
        console.error('Cart fetch error:', err);
        setError('Problem in Card load. plz try again');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const updateQuantity = async (id, newQty) => {
    if (newQty < 1) return;

    try {
      await api.put(`/api/cart/${id}`, { quantity: newQty });
      const res = await api.get('/api/cart');
      setCart(res.data.cart || []);
    } catch (err) {
      alert('Quantity update failed');
    }
  };

  const removeItem = async (id) => {
    try {
      await api.delete(`/api/cart/${id}`);
      const res = await api.get('/api/cart');
      setCart(res.data.cart || []);
    } catch (err) {
      alert('Item remove failed');
    }
  };

  const total = cart.reduce((sum, item) => {
    const price = item?.product?.price || 0;
    return sum + (price * item.quantity);
  }, 0);

  // Checkout पर रीडायरेक्ट
  const handleCheckout = () => {
    navigate('/checkout'); // ← Proceed to Checkout बटन पर /checkout पेज पर ले जाएगा
  };

  if (loading) return <LoadingSpinner className="min-h-[60vh]" />;

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        {error}
        <button onClick={() => window.location.reload()} className="ml-4 text-blue-600 hover:underline">
          Try Again...
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/products" className="text-blue-600 hover:underline">
          Start Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-4">
        {cart.map(item => (
          <CartItem 
            key={item._id}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
          />
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow h-fit">
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span>Subtotal ({cart.length} items)</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Delivery Charges</span>
            <span>FREE</span>
          </div>
          <div className="border-t pt-3 font-bold text-lg flex justify-between">
            <span>Total</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Proceed to Checkout बटन - अब /checkout पर ले जाएगा */}
        <Button 
          size="lg" 
          className="w-full"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
