// src/pages/Checkout.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { CreditCard, Truck, CheckCircle, MapPin } from 'lucide-react';

export default function Checkout() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1); // 1: Address, 2: Payment, 3: Confirmation

  // Address Form State
  const [address, setAddress] = useState({
    fullName: user?.name || '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    type: 'home'
  });

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState('cod');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const fetchCart = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await api.get('/api/cart');
        setCart(res.data.cart || []);
      } catch (err) {
        console.error('Cart fetch failed:', err);
        setError('कार्ट लोड करने में समस्या। कृपया दोबारा ट्राई करें।');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [isAuthenticated, navigate]);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => {
      const price = item.product?.price || 0;
      const qty = item.quantity || 1;
      return sum + (price * qty);
    }, 0);
  };

  const validateAddress = () => {
    if (!address.fullName.trim()) return 'Full Name is required';
    if (!address.phone.trim() || !/^\d{10}$/.test(address.phone)) return 'Valid 10-digit phone number is required';
    if (!address.addressLine1.trim()) return 'Address Line 1 is required';
    if (!address.city.trim()) return 'City is required';
    if (!address.state.trim()) return 'State is required';
    if (!address.pincode.trim() || !/^\d{6}$/.test(address.pincode)) return 'Valid 6-digit pincode is required';

    return null;
  };

  const handlePlaceOrder = async () => {
    if (step === 1) {
      const validationError = validateAddress();
      if (validationError) {
        setError(validationError);
        return;
      }
      setError('');
      setStep(2);
      return;
    }

    if (step === 2) {
      setLoading(true);
      setError('');

      try {
        const orderData = {
          items: cart.map(item => ({
            product: item.product._id,
            quantity: item.quantity,
            price: item.product.price
          })),
          totalAmount: calculateTotal(),
          address: `${address.fullName}, ${address.phone}, ${address.addressLine1}, ${address.addressLine2 || ''}, ${address.city}, ${address.state} - ${address.pincode} (${address.type})`
        };

        const res = await api.post('/api/orders', orderData);

        alert(`Order placed successfully! Order ID: ${res.data.orderId}\nConfirmation email sent.`);
        navigate('/orders'); // ऑर्डर हिस्ट्री पेज
      } catch (err) {
        console.error('Order placement failed:', err);
        setError(err.response?.data?.message || 'ऑर्डर प्लेस करने में समस्या। कृपया दोबारा ट्राई करें।');
      } finally {
        setLoading(false);
      }
    }
  };

  const total = calculateTotal();

  if (loading) return <LoadingSpinner className="min-h-[70vh]" />;

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        {error}
        <button 
          onClick={() => window.location.reload()} 
          className="ml-4 text-blue-600 hover:underline"
        >
          Try Again.
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Cart is Empty</h2>
        <Button onClick={() => navigate('/products')}>Keep continue shopping</Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Step Indicator */}
          <div className="flex justify-between mb-8">
            <div className={`flex-1 text-center pb-4 border-b-4 ${step >= 1 ? 'border-blue-600 font-bold' : 'border-gray-300'}`}>
              1. Delivery Address
            </div>
            <div className={`flex-1 text-center pb-4 border-b-4 ${step >= 2 ? 'border-blue-600 font-bold' : 'border-gray-300'}`}>
              2. Payment
            </div>
            <div className={`flex-1 text-center pb-4 border-b-4 ${step >= 3 ? 'border-blue-600 font-bold' : 'border-gray-300'}`}>
              3. Confirmation
            </div>
          </div>

          {/* Step 1: Address */}
          {step === 1 && (
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin size={24} /> Delivery Address
              </h2>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {error}
                </div>
              )}

              <form className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={address.fullName}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={address.phone}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                    maxLength={10}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Flat/House Number, Building, Company *</label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={address.addressLine1}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Area,street, Sector, Village</label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={address.addressLine2}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">City/District *</label>
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">State *</label>
                  <select
                    name="state"
                    value={address.state}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Delhi">New Delhi</option>
                    <option value="Maharashtra">Mumbai</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Hydrabad">Hydrabad</option>
                    <option value="Godgaon">Godgaon</option>
                    {/* you can add other state */}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">PINCODE *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={address.pincode}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                    maxLength={6}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Address Type</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="type"
                        value="home"
                        checked={address.type === 'home'}
                        onChange={handleAddressChange}
                      />
                     Home
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="type"
                        value="work"
                        checked={address.type === 'work'}
                        onChange={handleAddressChange}
                      />
                      Office
                    </label>
                  </div>
                </div>
              </form>

              <div className="mt-8">
                <Button size="lg" onClick={handlePlaceOrder}>
                  Next Payment
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <div>
                    <div className="font-medium">COD</div>
                    <div className="text-sm text-gray-500">Pay on Delivery</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                  />
                  <div>
                    <div className="font-medium">UPI</div>
                    <div className="text-sm text-gray-500">Google Pay, PhonePe, Paytm etc.</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <div>
                    <div className="font-medium">Credit/Debit/ATM card</div>
                    <div className="text-sm text-gray-500">Visa, Mastercard, RuPay</div>
                  </div>
                </label>
              </div>

              <div className="mt-8 flex gap-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  onClick={() => setStep(1)}
                >
                 Return go to address
                </Button>
                <Button 
                  size="lg" 
                  onClick={handlePlaceOrder} 
                  loading={loading}
                  disabled={loading}
                >
                 Order Place.
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow sticky top-4">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.product?.name || 'Unknown'} × {item.quantity}</span>
                  <span>₹{(item.product?.price * item.quantity || 0).toLocaleString('en-IN')}</span>
                </div>
              ))}

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-sm text-green-600 mt-1">
                  (Include All Text)
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-500 space-y-2">
              <div className="flex items-start gap-2">
                <Truck size={16} className="mt-1" />
                <span>Free Delivery on this Order</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-1" />
                <span>7 दिन का रिप्लेसमेंट पॉलिसी</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// // src/pages/Checkout.jsx
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import api from '../services/api';
// import Button from '../components/common/Button';
// import LoadingSpinner from '../components/common/LoadingSpinner';
// import { CreditCard, Truck, CheckCircle, MapPin } from 'lucide-react';

// export default function Checkout() {
//   const { user, isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [step, setStep] = useState(1); // 1: Address, 2: Payment, 3: Confirmation

//   // Address Form State
//   const [address, setAddress] = useState({
//     fullName: user?.name || '',
//     phone: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     pincode: '',
//     type: 'home' // home / work
//   });

//   // Payment Method
//   const [paymentMethod, setPaymentMethod] = useState('cod'); // cod, upi, card

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//       return;
//     }

//     const fetchCart = async () => {
//       try {
//         // वास्तविक प्रोजेक्ट में बैकएंड से कार्ट लाओ
//         // यहाँ डमी डेटा इस्तेमाल किया है
//         const dummyCart = [
//           { product: { _id: '1', name: 'Smartphone XYZ', price: 24999, image: '' }, quantity: 1 },
//           { product: { _id: '2', name: 'Wireless Earbuds', price: 3499, image: '' }, quantity: 2 }
//         ];
//         setCart(dummyCart);
//       } catch (err) {
//         console.error('Cart fetch failed');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCart();
//   }, [isAuthenticated, navigate]);

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setAddress(prev => ({ ...prev, [name]: value }));
//   };

//   const calculateTotal = () => {
//     return cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
//   };

//   const handlePlaceOrder = async () => {
//     if (step === 1) {
//       // Address validation
//       if (!address.fullName || !address.phone || !address.pincode) {
//         alert('Please fill all required fields');
//         return;
//       }
//       setStep(2);
//       return;
//     }

//     if (step === 2) {
//       setLoading(true);
//       try {
//         // बैकएंड को ऑर्डर भेजें
//         const orderData = {
//           items: cart,
//           address,
//           paymentMethod,
//           total: calculateTotal()
//         };

//         // const response = await api.post('/api/orders', orderData);
//         // alert('Order placed successfully! Order ID: ' + response.data.orderId);

//         alert('Order placed successfully! (Demo mode)');
//         navigate('/orders'); // ऑर्डर हिस्ट्री पेज
//       } catch (err) {
//         alert('Failed to place order. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const total = calculateTotal();

//   if (loading) return <LoadingSpinner className="min-h-[70vh]" />;

//   if (cart.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
//         <Button onClick={() => navigate('/products')}>Continue Shopping</Button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>

//       <div className="grid md:grid-cols-3 gap-8">
//         {/* Main Content - Left Side */}
//         <div className="md:col-span-2 space-y-8">
//           {/* Step Indicator */}
//           <div className="flex justify-between mb-8">
//             <div className={`flex-1 text-center pb-4 border-b-4 ${step >= 1 ? 'border-blue-600 font-bold' : 'border-gray-300'}`}>
//               1. Delivery Address
//             </div>
//             <div className={`flex-1 text-center pb-4 border-b-4 ${step >= 2 ? 'border-blue-600 font-bold' : 'border-gray-300'}`}>
//               2. Payment
//             </div>
//             <div className={`flex-1 text-center pb-4 border-b-4 ${step >= 3 ? 'border-blue-600 font-bold' : 'border-gray-300'}`}>
//               3. Confirmation
//             </div>
//           </div>

//           {/* Step 1: Address */}
//           {step === 1 && (
//             <div className="bg-white p-6 rounded-xl shadow">
//               <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                 <MapPin size={24} /> Delivery Address
//               </h2>

//               <form className="grid md:grid-cols-2 gap-6">
//                 <div className="md:col-span-2">
//                   <label className="block text-gray-700 mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={address.fullName}
//                     onChange={handleAddressChange}
//                     className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-gray-700 mb-2">Phone Number *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={address.phone}
//                     onChange={handleAddressChange}
//                     className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-gray-700 mb-2">Flat, House No., Building, Company, Apartment *</label>
//                   <input
//                     type="text"
//                     name="addressLine1"
//                     value={address.addressLine1}
//                     onChange={handleAddressChange}
//                     className="w-full px-4 py-3 border rounded-lg"
//                     required
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-gray-700 mb-2">Area, Street, Sector, Village</label>
//                   <input
//                     type="text"
//                     name="addressLine2"
//                     value={address.addressLine2}
//                     onChange={handleAddressChange}
//                     className="w-full px-4 py-3 border rounded-lg"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">City/District *</label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={address.city}
//                     onChange={handleAddressChange}
//                     className="w-full px-4 py-3 border rounded-lg"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">State *</label>
//                   <select
//                     name="state"
//                     value={address.state}
//                     onChange={handleAddressChange}
//                     className="w-full px-4 py-3 border rounded-lg"
//                     required
//                   >
//                     <option value="">Select State</option>
//                     <option value="Uttar Pradesh">Uttar Pradesh</option>
//                     <option value="Delhi">Delhi</option>
//                     <option value="Maharashtra">Maharashtra</option>
//                     {/* बाकी राज्य जोड़ सकते हैं */}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">Pincode *</label>
//                   <input
//                     type="text"
//                     name="pincode"
//                     value={address.pincode}
//                     onChange={handleAddressChange}
//                     className="w-full px-4 py-3 border rounded-lg"
//                     required
//                     maxLength={6}
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-gray-700 mb-2">Address Type</label>
//                   <div className="flex gap-6">
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="radio"
//                         name="type"
//                         value="home"
//                         checked={address.type === 'home'}
//                         onChange={handleAddressChange}
//                       />
//                       Home
//                     </label>
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="radio"
//                         name="type"
//                         value="work"
//                         checked={address.type === 'work'}
//                         onChange={handleAddressChange}
//                       />
//                       Work
//                     </label>
//                   </div>
//                 </div>
//               </form>

//               <div className="mt-8">
//                 <Button size="lg" onClick={handlePlaceOrder}>
//                   Continue to Payment
//                 </Button>
//               </div>
//             </div>
//           )}

//           {/* Step 2: Payment */}
//           {step === 2 && (
//             <div className="bg-white p-6 rounded-xl shadow">
//               <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>

//               <div className="space-y-4">
//                 <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="cod"
//                     checked={paymentMethod === 'cod'}
//                     onChange={() => setPaymentMethod('cod')}
//                   />
//                   <div>
//                     <div className="font-medium">Cash on Delivery</div>
//                     <div className="text-sm text-gray-500">Pay when you receive the item</div>
//                   </div>
//                 </label>

//                 <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="upi"
//                     checked={paymentMethod === 'upi'}
//                     onChange={() => setPaymentMethod('upi')}
//                   />
//                   <div>
//                     <div className="font-medium">UPI</div>
//                     <div className="text-sm text-gray-500">Google Pay, PhonePe, Paytm & more</div>
//                   </div>
//                 </label>

//                 <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="card"
//                     checked={paymentMethod === 'card'}
//                     onChange={() => setPaymentMethod('card')}
//                   />
//                   <div>
//                     <div className="font-medium">Credit / Debit / ATM Card</div>
//                     <div className="text-sm text-gray-500">Visa, Mastercard, RuPay</div>
//                   </div>
//                 </label>
//               </div>

//               <div className="mt-8 flex gap-4">
//                 <Button 
//                   variant="secondary" 
//                   size="lg" 
//                   onClick={() => setStep(1)}
//                 >
//                   Back to Address
//                 </Button>
//                 <Button size="lg" onClick={handlePlaceOrder} loading={loading}>
//                   Place Order
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Order Summary - Right Side */}
//         <div className="md:col-span-1">
//           <div className="bg-white p-6 rounded-xl shadow sticky top-4">
//             <h2 className="text-xl font-bold mb-6">Order Summary</h2>

//             <div className="space-y-4 mb-6">
//               {cart.map((item, index) => (
//                 <div key={index} className="flex justify-between text-sm">
//                   <span>{item.product.name} × {item.quantity}</span>
//                   <span>₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
//                 </div>
//               ))}

//               <div className="border-t pt-4 mt-4">
//                 <div className="flex justify-between font-medium">
//                   <span>Total Amount</span>
//                   <span className="text-xl">₹{total.toLocaleString('en-IN')}</span>
//                 </div>
//                 <div className="text-sm text-green-600 mt-1">
//                   (Inclusive of all taxes)
//                 </div>
//               </div>
//             </div>

//             <div className="text-sm text-gray-500 space-y-2">
//               <div className="flex items-start gap-2">
//                 <Truck size={16} className="mt-1" />
//                 <span>Free Delivery for this order</span>
//               </div>
//               <div className="flex items-start gap-2">
//                 <CheckCircle size={16} className="mt-1" />
//                 <span>7 Days Replacement Policy</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }