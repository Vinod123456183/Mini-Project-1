// src/pages/OrderDetail.jsx - COMPLETE WITH CANCEL BUTTON
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Package, Clock, CheckCircle, Truck, XCircle } from 'lucide-react';

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getOrderImage = (imageFilename = null) => {
    if (imageFilename && typeof imageFilename === 'string') {
      return `/images/${imageFilename}`;
    }
    return '/images/p1.jpg';
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const fetchOrder = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await api.get(`/api/orders/${id}`);
        console.log('OrderDetail API Response:', res.data);
        setOrder(res.data.order || res.data);
      } catch (err) {
        console.error('Order fetch error:', err);
        setError('ऑर्डर डिटेल लोड करने में समस्या');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, isAuthenticated, navigate]);

  // ✅ CANCEL ORDER FUNCTION
  // const handleCancelOrder = async () => {
  //   if (!window.confirm('क्या आप वाकई इस ऑर्डर को कैंसल करना चाहते हैं?')) {
  //     return;
  //   }

      const handleCancelOrder = async () => {
    if (!window.confirm('Do you really want to cancel this order?')) {
      return;
    }

    try {
      await api.post(`/api/orders/${order._id}/cancel`);
      alert('Order has been successfully cancelled!');
      // alert('ऑर्डर सफलतापूर्वक कैंसल हो गया!');
      window.location.reload();
    } catch (err) {
      alert('❌ ' + (err.response?.data?.message || 'कैंसल करने में समस्या'));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">login Kre.</h2>
        <Link to="/login" className="text-blue-600 hover:underline">Login →</Link>
      </div>
    );
  }

  if (loading) return <LoadingSpinner className="min-h-[60vh]" />;

  if (error || !order) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        {error || 'Order nhi mila'}
        <Link to="/orders" className="block mt-4 text-blue-600 hover:underline">
          {/* वापस ऑर्डर्स पर जाएं */}return orders pr jaye..
        </Link>
      </div>
    );
  }

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
      processing: { color: 'bg-blue-100 text-blue-800', icon: Package },
      shipped: { color: 'bg-purple-100 text-purple-800', icon: Truck },
      delivered: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      cancelled: { color: 'bg-red-100 text-red-800', icon: XCircle }
    };
    const info = statusMap[status] || statusMap.pending;
    const Icon = info.icon;
    return (
      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${info.color}`}>
        <Icon size={16} />
        <span>{status.toUpperCase()}</span>
      </span>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Package size={32} className="text-blue-500" />
        <h1 className="text-3xl font-bold">Order Details</h1>
        <span className="bg-gray-100 text-xs px-3 py-1 rounded-full font-mono">#{order._id.slice(-8)}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Order Knowledge</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order Date..</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(order.createdAt).toLocaleString('hi-IN')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Present Stutas</p>
                  {getStatusBadge(order.status)}
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Mount..</p>
                  <p className="text-3xl font-bold text-green-600">
                    ₹{order.totalAmount?.toLocaleString('en-IN')}
                  </p>
                </div>
                {order.deliveryDate && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Expected Delivery</p>
                    <p className="font-semibold">
                      {new Date(order.deliveryDate).toLocaleDateString('hi-IN')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="mt-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                Order Items ({order.items.length})
              </h2>
              
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white transition-all">
                    <img
                      src={getOrderImage(item.product?.image)}
                      alt={item.product?.name || "Product"}
                      className="w-20 h-20 object-contain bg-white rounded-xl shadow-sm p-3 flex-shrink-0"
                      onError={(e) => {
                        console.warn('OrderDetail image failed:', item.product?.image);
                        e.target.src = '/images/p1.jpg';
                        e.target.onerror = null;
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                        {item.product?.name || 'Unknown Product'}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Quantity: {item.quantity} × ₹{item.price?.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="text-right font-bold text-xl text-gray-900 min-w-[120px]">
                      ₹{(item.quantity * (item.price || 0)).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - CANCEL BUTTON */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border">
            <h3 className="font-bold text-lg mb-4">आपके विकल्प</h3>
            <Link 
              to="/orders" 
              className="block w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-xl text-center hover:shadow-md transition-all mb-3"
            >
              All Orders Views
            </Link>
            
            {/* ✅ CANCEL BUTTON */}
            {order.status === 'pending' && (
              <button 
                onClick={handleCancelOrder}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                🚫 Order Cancel..
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


