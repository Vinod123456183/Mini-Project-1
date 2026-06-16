// src/pages/Admin/AdminDashboard.jsx
import AdminSidebar from '../../components/layout/AdminSidebar';

export default function AdminDashboard() {
  // In real project you would fetch stats from API
  const stats = [
    { title: "Total Orders", value: "1,245", change: "+12.5%" },
    { title: "Active Products", value: "3,870", change: "+4.2%" },
    { title: "New Customers", value: "284", change: "+18.7%" },
    { title: "Revenue Today", value: "₹4.82L", change: "+9.3%" },
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500 text-sm font-medium mb-2">{stat.title}</h3>
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-bold">{stat.value}</p>
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders - placeholder */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Recent Orders</h2>
          </div>
          <div className="p-6 text-gray-500 text-center py-12">
            Recent orders will appear here
          </div>
        </div>
      </div>
    </div>
  );
}