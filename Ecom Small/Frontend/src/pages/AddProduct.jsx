// src/pages/AddProduct.jsx (एडमिन के लिए)
import { useState } from 'react';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';

export default function AddProduct() {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <div className="text-center py-20 text-2xl text-red-600">Access Denied! Admin Only</div>;
  }

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
    stock: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/products', formData);
      alert('Product added successfully!');
    } catch (err) {
      alert('Failed to add product');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-8">Add New Product (Admin)</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Product Name" onChange={handleChange} className="w-full p-3 border" required />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} className="w-full p-3 border" required />
        <input name="category" placeholder="Category" onChange={handleChange} className="w-full p-3 border" required />
        {/* बाकी फील्ड्स */}
        <Button type="submit">Add Product</Button>
      </form>
    </div>
  );
}