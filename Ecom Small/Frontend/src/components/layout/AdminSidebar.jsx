import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Package, ShoppingBag, Users, Settings } from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Package, label: 'Products', path: '/admin/products' },
  { icon: ShoppingBag, label: 'Orders', path: '/admin/orders' },
  { icon: Users, label: 'Customers', path: '/admin/customers' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
]

export default function AdminSidebar() {
  const location = useLocation()

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 pt-20 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-8 text-blue-400">Admin Panel</h2>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}