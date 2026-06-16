// src/pages/Orders.jsx - COMPLETE WITH CANCEL BUTTON (OrderDetail.jsx के अनुसार)
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Button from '../components/common/Button';
import { Package, Clock, CheckCircle, Truck, XCircle, ArrowRight } from 'lucide-react';

export default function Orders() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const fetchOrders = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await api.get('/api/orders/myorders');
        console.log('Orders API Response:', res.data.orders);
        setOrders(res.data.orders || []);
      } catch (err) {
        console.error('Failed to load orders:', err);
        setError('Orders load krne me problems..Plz try again');
        // setError('ऑर्डर लोड करने में समस्या। कृपया दोबारा ट्राई करें।');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [isAuthenticated, navigate]);

  const getOrderImage = (imageFilename = null) => {
    if (imageFilename && typeof imageFilename === 'string') {
      return `/images/${imageFilename}`;
    }
    return '/images/p1.jpg';
  };

  // ✅ CANCEL ORDER FUNCTION (OrderDetail style)
  const handleCancelOrder = async (orderId) => {
    if (!window.confirm('Do you really want to cancel this order?')) {
      return;
    }

    try {
      await api.post(`/api/orders/${orderId}/cancel`);
      // alert('✅ ऑर्डर सफलतापूर्वक कैंसल हो गया!');
      alert('Order has been successfully cancelled!');
      
      // Refresh orders list (same as before)
      const res = await api.get('/api/orders/myorders');
      setOrders(res.data.orders || []);
    } catch (err) {
      alert('❌ ' + (err.response?.data?.message || 'कैंसल करने में समस्या'));
    }
  };

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
        <span>{info.text || status.toUpperCase()}</span>
      </span>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">लॉगिन करें</h2>
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
          onClick={() => window.location.reload()}
          className="ml-4 text-blue-600 hover:underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">aapke koi order nhi hai..</h2>
        <p className="text-gray-600 mb-8">jld hi aapk order dikhayi denge..</p>
        <Link to="/products">
          <Button>Satrt Shopping..</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header - OrderDetail style */}
      <div className="flex items-center gap-3 mb-8">
        <Package size={32} className="text-blue-500" />
        <h1 className="text-3xl font-bold">My Orders ({orders.length})</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {orders.map(order => (
          <div key={order._id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Order Header */}
            <div className="p-6 border-b bg-gradient-to-r from-gray-50 to-white">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    Order ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs">#{order._id.slice(-8)}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Order Date: {new Date(order.createdAt).toLocaleDateString('hi-IN')}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(order.status)}
                  {order.status === 'pending' && (
                    <button 
                      onClick={() => handleCancelOrder(order._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-xl transition-all"
                    >
                      🚫 cancel
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4">Order Items ({order.items.length})</h3>
              <div className="space-y-4 mb-6">
                {order.items.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-white transition-all">
                    <img
                      src={getOrderImage(item.product?.image)}
                      alt={item.product?.name || 'Product'}
                      className="w-16 h-16 object-contain bg-white rounded-lg shadow-sm p-2 flex-shrink-0"
                      onError={(e) => {
                        console.warn('Order image failed:', item.product?.image);
                        e.target.src = '/images/p1.jpg';
                        e.target.onerror = null;
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 line-clamp-1 mb-1">
                        {item.product?.name || 'Product Name'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity} × ₹{item.price?.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="text-right font-bold text-lg text-gray-900 min-w-[80px]">
                      ₹{(item.quantity * (item.price || 0)).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
                {order.items.length > 2 && (
                  <div className="text-center py-4 bg-white rounded-xl border-dashed border-2 border-gray-200">
                    <Link 
                      to={`/orderdetail/${order._id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-center gap-2"
                    >
                      +{order.items.length - 2} aur item dekhe <ArrowRight size={18} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Total & Actions */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total Amount</span>
                      <span className="text-2xl text-green-600">
                        ₹{order.totalAmount?.toLocaleString('en-IN')}
                      </span>
                    </div>
                    {order.deliveryDate && (
                      <p className="text-sm text-gray-600">
                        📦 Expected Delivery: {new Date(order.deliveryDate).toLocaleDateString('hi-IN')}
                      </p>
                    )}
                  </div>
                  <Link
                    to={`/orderdetail/${order._id}`}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Detailed Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// // src/pages/Orders.jsx
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext'; // ✅ यह import missing था!
// import api from '../services/api';
// import LoadingSpinner from '../components/common/LoadingSpinner';
// import Button from '../components/common/Button';
// import { Package, Clock, CheckCircle, Truck, XCircle } from 'lucide-react';

// export default function Orders() {
//   const { isAuthenticated } = useAuth(); // ✅ अब काम करेगा
//   const navigate = useNavigate();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//       return;
//     }

//     const fetchOrders = async () => {
//       setLoading(true);
//       setError('');

//       try {
//         const res = await api.get('/api/orders/myorders');
//         console.log('Orders API Response:', res.data.orders);
//         setOrders(res.data.orders || []);
//       } catch (err) {
//         console.error('Failed to load orders:', err);
//         setError('ऑर्डर लोड करने में समस्या। कृपया दोबारा ट्राई करें।');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [isAuthenticated, navigate]);

//   // ✅ Image path helper - Public folder के लिए
//   const getOrderImage = (imageFilename = null) => {
//     if (imageFilename && typeof imageFilename === 'string') {
//       return `/images/${imageFilename}`;
//     }
//     return '/images/p1.jpg';
//   };

//   const getStatusBadge = (status) => {
//     const statusMap = {
//       pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock, text: 'Pending' },
//       processing: { color: 'bg-blue-100 text-blue-800', icon: Package, text: 'Processing' },
//       shipped: { color: 'bg-purple-100 text-purple-800', icon: Truck, text: 'Shipped' },
//       delivered: { color: 'bg-green-100 text-green-800', icon: CheckCircle, text: 'Delivered' },
//       cancelled: { color: 'bg-red-100 text-red-800', icon: XCircle, text: 'Cancelled' }
//     };

//     const info = statusMap[status] || { color: 'bg-gray-100 text-gray-800', icon: Clock, text: status };
//     const Icon = info.icon;

//     return (
//       <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${info.color}`}>
//         <Icon size={16} />
//         {info.text}
//       </span>
//     );
//   };

//   // Authentication check
//   if (!isAuthenticated) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold mb-4">ऑर्डर देखने के लिए लॉगिन करें</h2>
//         <Link to="/login" className="text-blue-600 hover:underline">
//           लॉगिन करें →
//         </Link>
//       </div>
//     );
//   }

//   if (loading) return <LoadingSpinner className="min-h-[60vh]" />;

//   if (error) {
//     return (
//       <div className="text-center py-20 text-red-600 text-xl">
//         {error}
//         <button
//           onClick={() => window.location.reload()}
//           className="ml-4 text-blue-600 hover:underline"
//         >
//           दोबारा ट्राई करें
//         </button>
//       </div>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold mb-4">आपके कोई ऑर्डर नहीं हैं</h2>
//         <p className="text-gray-600 mb-8">जल्द ही यहाँ आपके ऑर्डर दिखाई देंगे</p>
//         <Link to="/products">
//           <Button>शॉपिंग शुरू करें</Button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-6xl">
//       <h1 className="text-3xl font-bold mb-8">मेरे ऑर्डर्स ({orders.length})</h1>

//       <div className="space-y-6">
//         {orders.map(order => (
//           <div key={order._id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
//             {/* Order Header */}
//             <div className="p-6 border-b bg-gradient-to-r from-gray-50 to-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//               <div>
//                 <p className="text-sm text-gray-600">
//                   ऑर्डर ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs">{order._id}</span>
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">
//                   ऑर्डर डेट: {new Date(order.createdAt).toLocaleDateString('hi-IN')}
//                 </p>
//               </div>
//               <div>{getStatusBadge(order.status)}</div>
//             </div>

//             {/* Order Items */}
//             <div className="p-6">
//               <h3 className="font-semibold text-lg mb-4">ऑर्डर में शामिल प्रोडक्ट्स</h3>
//               <div className="space-y-4">
//                 {order.items.map((item, index) => (
//                   <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
//                     {/* ✅ Fixed Image */}
//                     <img
//                       src={getOrderImage(item.product?.image)}
//                       alt={item.product?.name || 'Product'}
//                       className="w-20 h-20 object-contain bg-white rounded-lg shadow-sm p-2 flex-shrink-0"
//                       onError={(e) => {
//                         console.warn('Order image failed:', item.product?.image);
//                         e.target.src = '/images/p1.jpg';
//                         e.target.onerror = null;
//                       }}
//                     />

//                     <div className="flex-1 min-w-0">
//                       <h4 className="font-medium text-gray-900 line-clamp-1 mb-1">
//                         {item.product?.name || 'Product Name'}
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         मात्रा: {item.quantity} × ₹{item.price?.toLocaleString('en-IN')}
//                       </p>
//                     </div>

//                     <div className="text-right font-bold text-lg text-gray-900 min-w-[100px]">
//                       ₹{(item.quantity * (item.price || 0)).toLocaleString('en-IN')}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Total & Delivery */}
//               <div className="mt-8 pt-6 border-t bg-white rounded-lg p-4">
//                 <div className="flex justify-between items-center text-xl font-bold">
//                   <span>कुल राशि</span>
//                   <span className="text-2xl text-green-600">
//                     ₹{order.totalAmount?.toLocaleString('en-IN')}
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-600 mt-2">
//                   📦 अपेक्षित डिलीवरी: {new Date(order.deliveryDate || order.createdAt).toLocaleDateString('hi-IN')}
//                 </p>
//               </div>
//             </div>

//             {/* Footer */}
//             {/* <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-t flex justify-between items-center">
//               <Link 
//                 to={`/order/${order._id}`} 
//                 className="text-blue-600 hover:text-blue-800 font-semibold"
//               >
//                 ऑर्डर डिटेल देखें →
//               </Link>
//               {order.status === 'pending' && (
//                 <button className="text-red-600 hover:text-red-800 hover:underline">
//                   कैंसल ऑर्डर
//                 </button>
//               )}
//             </div> */}
//             {/* Footer */}
//             <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-t flex justify-between items-center">
//               <Link
//                 to={`/order/${order._id}`}
//                 className="text-blue-600 hover:text-blue-800 font-semibold"
//               >
//                 ऑर्डर डिटेल देखें →
//               </Link>

//               {order.status === 'pending' && (
//                 <button
//                   onClick={async () => {
//                     if (!window.confirm('क्या आप इस ऑर्डर को कैंसल करना चाहते हैं? यह एक्शन वापस नहीं लिया जा सकता।')) {
//                       return;
//                     }

//                     try {
//                       await api.put(`/api/orders/${order._id}/cancel`);
//                       alert('ऑर्डर सफलतापूर्वक कैंसल हो गया!');

//                       // UI रिफ्रेश: ऑर्डर लिस्ट अपडेट करो
//                       const res = await api.get('/api/orders/myorders');
//                       setOrders(res.data.orders || []);
//                     } catch (err) {
//                       alert(err.response?.data?.message || 'ऑर्डर कैंसल करने में समस्या');
//                     }
//                   }}
//                   className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
//                 >
//                   कैंसल ऑर्डर
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// // src/pages/Orders.jsx
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../services/api';
// import LoadingSpinner from '../components/common/LoadingSpinner';
// import { useAuth } from '../contexts/AuthContext';
// import { Package, Clock, CheckCircle, Truck, XCircle } from 'lucide-react';

// export default function Orders() {
//   const { isAuthenticated } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//       return;
//     }

//     const fetchOrders = async () => {
//       setLoading(true);
//       setError('');

//       try {
//         const res = await api.get('/api/orders/myorders');
//         setOrders(res.data.orders || []);
//       } catch (err) {
//         console.error('Failed to load orders:', err);
//         setError('ऑर्डर लोड करने में समस्या। कृपया दोबारा ट्राई करें।');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [isAuthenticated]);

//   const getStatusBadge = (status) => {
//     const statusMap = {
//       pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock, text: 'Pending' },
//       processing: { color: 'bg-blue-100 text-blue-800', icon: Package, text: 'Processing' },
//       shipped: { color: 'bg-purple-100 text-purple-800', icon: Truck, text: 'Shipped' },
//       delivered: { color: 'bg-green-100 text-green-800', icon: CheckCircle, text: 'Delivered' },
//       cancelled: { color: 'bg-red-100 text-red-800', icon: XCircle, text: 'Cancelled' }
//     };

//     const info = statusMap[status] || { color: 'bg-gray-100 text-gray-800', icon: Clock, text: status };
//     const Icon = info.icon;

//     return (
//       <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${info.color}`}>
//         <Icon size={16} />
//         {info.text}
//       </span>
//     );
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold mb-4">ऑर्डर देखने के लिए लॉगिन करें</h2>
//         <Link to="/login" className="text-blue-600 hover:underline">
//           लॉगिन करें →
//         </Link>
//       </div>
//     );
//   }

//   if (loading) return <LoadingSpinner className="min-h-[60vh]" />;

//   if (error) {
//     return (
//       <div className="text-center py-20 text-red-600 text-xl">
//         {error}
//         <button
//           onClick={() => window.location.reload()}
//           className="ml-4 text-blue-600 hover:underline"
//         >
//           दोबारा ट्राई करें
//         </button>
//       </div>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold mb-4">आपके कोई ऑर्डर नहीं हैं</h2>
//         <p className="text-gray-600 mb-8">जल्द ही यहाँ आपके ऑर्डर दिखाई देंगे</p>
//         <Link to="/products">
//           <Button>शॉपिंग शुरू करें</Button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">मेरे ऑर्डर्स ({orders.length})</h1>

//       <div className="space-y-6">
//         {orders.map(order => (
//           <div
//             key={order._id}
//             className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
//           >
//             {/* Order Header */}
//             <div className="p-6 border-b bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//               <div>
//                 <p className="text-sm text-gray-600">
//                   ऑर्डर ID: <span className="font-medium">{order._id}</span>
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">
//                   ऑर्डर डेट: {new Date(order.createdAt).toLocaleDateString('en-IN')}
//                 </p>
//               </div>

//               <div>
//                 {getStatusBadge(order.status)}
//               </div>
//             </div>

//             {/* Order Items */}
//             <div className="p-6">
//               <div className="space-y-4">
//                 {order.items.map((item, index) => (
//                   <div key={index} className="flex items-center gap-4 border-b pb-4 last:border-b-0">
//                     <img
//                       src={item.product?.image || '/placeholder.jpg'}
//                       alt={item.product?.name}
//                       className="w-16 h-16 object-contain bg-gray-50 rounded"
//                     />
//                     <div className="flex-1">
//                       <h4 className="font-medium">{item.product?.name || 'Unknown Product'}</h4>
//                       <p className="text-sm text-gray-600">
//                         Qty: {item.quantity} × ₹{item.price.toLocaleString('en-IN')}
//                       </p>
//                     </div>
//                     <div className="text-right font-medium">
//                       ₹{(item.quantity * item.price).toLocaleString('en-IN')}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Total & Delivery */}
//               <div className="mt-6 pt-6 border-t">
//                 <div className="flex justify-between text-lg font-bold">
//                   <span>कुल अमाउंट</span>
//                   <span>₹{order.totalAmount.toLocaleString('en-IN')}</span>
//                 </div>
//                 <p className="text-sm text-gray-600 mt-2">
//                   एक्सपेक्टेड डिलीवरी: {new Date(order.deliveryDate).toLocaleDateString('en-IN')}
//                 </p>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="p-6 bg-gray-50 border-t flex justify-between items-center">
//               <Link
//                 to={`/order/${order._id}`}
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 ऑर्डर डिटेल देखें
//               </Link>
//               {order.status === 'pending' && (
//                 <button className="text-red-600 hover:underline text-sm">
//                   कैंसल ऑर्डर
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }