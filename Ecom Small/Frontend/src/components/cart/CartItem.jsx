// src/components/cart/CartItem.jsx
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

// लोकल इमेज हेल्पर (बैकएंड से आए नाम से लोड करो)
const getLocalImage = (filename) => {
  if (filename && filename.match(/^p\d+\.jpg$/)) {
    try {
      return new URL(`../../assets/images/${filename}`, import.meta.url).href;
    } catch (e) {
      console.warn('Image not found:', filename);
    }
  }
  // fallback सिर्फ असली इमेज नहीं मिली तो (डिफॉल्ट नहीं, खाली छोड़ सकते हो या प्लेसहोल्डर)
  return new URL('../../assets/images/p1.jpg', import.meta.url).href;
};

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  // अगर product null है तो कुछ नहीं दिखाओ (या पूरा आइटम स्किप)
  if (!item?.product) {
    return null; // ← यह लाइन सबसे जरूरी — null product वाले आइटम को छुपा देगा
  }

  const imageSrc = getLocalImage(item.product.image);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow">
      <Link to={`/product/${item.product._id}`}>
        <img
          src={imageSrc}
          alt={item.product.name}
          className="w-24 h-24 object-contain"
          onError={(e) => {
            e.target.src = new URL('../../assets/images/p1.jpg', import.meta.url).href;
            e.target.onerror = null;
          }}
        />
      </Link>

      <div className="flex-1">
        <Link
          to={`/product/${item.product._id}`}
          className="font-medium hover:text-blue-600 line-clamp-2"
        >
          {item.product.name}
        </Link>
        <p className="text-sm text-gray-600 mt-1">
          ₹{item.product.price.toLocaleString('en-IN')}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onUpdateQuantity(item.product._id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          <Minus size={18} />
        </button>
        <span className="w-10 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.product._id, item.quantity + 1)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Plus size={18} />
        </button>
      </div>

      <div className="text-right min-w-[100px]">
        <p className="font-bold">
          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
        </p>
      </div>

      <button
        onClick={() => onRemove(item.product._id)}
        className="text-red-600 hover:text-red-800 p-2"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
