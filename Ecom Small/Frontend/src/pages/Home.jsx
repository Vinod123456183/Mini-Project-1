// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProductCard from '../components/common/ProductCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Button from '../components/common/Button';
import api from '../services/api';

// Banner images (banner1.jpg से banner10.jpg तक)
const getBannerImage = (index) => {
  return new URL(`../assets/images/banner${index}.jpg`, import.meta.url).href;
};

export default function Home() {
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await api.get('/api/products', {
          params: { limit: 10, sort: '-createdAt' } // लेटेस्ट 8 प्रोडक्ट्स
        });

        setFeaturedProducts(res.data.products || []);
      } catch (err) {
        console.error('Featured fetch error:', err);
        setError('फीचर्ड प्रोडक्ट्स लोड नहीं हो सके');
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div className="space-y-12 pb-12">
      {/* Banner Swiper */}
      <div className="w-full relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <SwiperSlide key={num} className="relative">
              <img
                src={getBannerImage(num)}
                alt={`Banner ${num}`}
                className="w-full h-full object-cover"
                onError={(e) => e.target.src = getBannerImage(1)}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="text-center px-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                    Discover Amazing Deals
                  </h2>
                  <Button size="lg" onClick={() => navigate('/products')}>
                    Shop Now →
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Featured Products
        </h2>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center py-10 text-red-600">{error}</div>
        ) : featuredProducts.length === 0 ? (
          <div className="text-center py-10 text-gray-600">Feature Prodect Not Get</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

// // src/pages/Home.jsx
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import ProductCard from '../components/common/ProductCard';
// import LoadingSpinner from '../components/common/LoadingSpinner';
// import Button from '../components/common/Button';
// import api from '../services/api';

// // Banner images (banner1.jpg से banner10.jpg)
// const getBannerImage = (index) => {
//   return new URL(`../assets/images/banner${index}.jpg`, import.meta.url).href;
// };

// export default function Home() {
//   const navigate = useNavigate();
//   const [featuredProducts, setFeaturedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchFeatured = async () => {
//       try {
//         const res = await api.get('/api/products', {
//           params: { limit: 8, sort: '-createdAt' } // लेटेस्ट 8 प्रोडक्ट्स
//         });

//         // अगर image खाली है तो डिफॉल्ट लोकल इमेज यूज करो
//         const productsWithImage = res.data.products.map((p, idx) => ({
//           ...p,
//           image: p.image || `p${(idx % 85) + 1}.jpg` // p1.jpg से p85.jpg तक
//         }));

//         setFeaturedProducts(productsWithImage);
//       } catch (err) {
//         console.error('Featured fetch error:', err);
//         setError('फीचर्ड प्रोडक्ट्स लोड नहीं हो सके');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFeatured();
//   }, []);

//   return (
//     <div className="space-y-12 pb-12">
//       {/* Banner Swiper */}
//       <div className="w-full relative">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop={true}
//           className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
//         >
//           {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
//             <SwiperSlide key={num} className="relative">
//               <img
//                 src={getBannerImage(num)}
//                 alt={`Banner ${num}`}
//                 className="w-full h-full object-cover"
//                 onError={(e) => e.target.src = getBannerImage(1)}
//               />
//               <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//                 <div className="text-center px-4">
//                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
//                     Discover Amazing Deals
//                   </h2>
//                   <Button size="lg" onClick={() => navigate('/products')}>
//                     Shop Now →
//                   </Button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Featured Products */}
//       <section className="container mx-auto px-4">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
//           Featured Products
//         </h2>

//         {loading ? (
//           <LoadingSpinner />
//         ) : error ? (
//           <div className="text-center py-10 text-red-600">{error}</div>
//         ) : featuredProducts.length === 0 ? (
//           <div className="text-center py-10 text-gray-600">कोई फीचर्ड प्रोडक्ट नहीं मिला</div>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
//             {featuredProducts.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }
