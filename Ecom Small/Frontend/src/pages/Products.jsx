// src/pages/Products.jsx
import { useState, useEffect } from 'react';
import ProductCard from '../components/common/ProductCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Search } from 'lucide-react';
import api from '../services/api';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const itemsPerPage = 15;

  const fetchProducts = async () => {
    setLoading(true);
    setError('');

    try {
      const params = {
        page,
        limit: itemsPerPage,
        search: searchTerm.trim() || undefined,
        sort: sortOption === 'lowToHigh' ? 'price' : 
              sortOption === 'highToLow' ? '-price' : undefined
      };

      const res = await api.get('/api/products', { params });

      setProducts(res.data.products || []);
      setTotalProducts(res.data.total || 0);
    } catch (err) {
      console.error('Products fetch error:', err);
      // setError('प्रोडक्ट्स लोड करने में समस्या। सर्वर चेक करें।');
      setError('Problem in Product Load..Plz check the server..!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, searchTerm, sortOption]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  if (loading) return <LoadingSpinner className="min-h-[60vh]" />;

  if (error) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        {error}
        <button onClick={fetchProducts} className="ml-4 text-blue-600 hover:underline">
          दोबारा ट्राई करें
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Sort */}
          <div className="lg:w-64 lg:sticky lg:top-24 lg:self-start bg-white p-6 rounded-xl shadow h-fit">
            <h3 className="text-lg font-bold mb-4">Sort by Price</h3>
            <div className="space-y-3">
              <button onClick={() => { setSortOption('default'); setPage(1); }} className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${sortOption === 'default' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}>
                Default
              </button>
              <button onClick={() => { setSortOption('lowToHigh'); setPage(1); }} className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${sortOption === 'lowToHigh' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}>
                Price: Low to High
              </button>
              <button onClick={() => { setSortOption('highToLow'); setPage(1); }} className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${sortOption === 'highToLow' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}>
                Price: High to Low
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h1 className="text-3xl font-bold">
                All Products {totalProducts > 0 && `(${totalProducts} found)`}
              </h1>

              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-600 text-xl">
                No products found
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-6 mt-12">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1 || loading}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
                >
                  Previous
                </button>

                <span className="text-lg font-medium px-6 py-3 bg-gray-100 rounded-lg">
                  Page {page} of {totalPages}
                </span>

                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages || loading}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
