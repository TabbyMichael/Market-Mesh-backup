import type { NextPage } from 'next'
import Head from 'next/head'

const AdminDashboard: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>MarketMesh Admin - Dashboard</title>
        <meta name="description" content="Admin dashboard for MarketMesh" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <nav className="space-x-8">
              <a href="/admin/users" className="text-gray-500 hover:text-gray-900">Users</a>
              <a href="/admin/orders" className="text-gray-500 hover:text-gray-900">Orders</a>
              <a href="/admin/products" className="text-gray-500 hover:text-gray-900">Products</a>
              <a href="/admin/analytics" className="text-gray-500 hover:text-gray-900">Analytics</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Total Orders</h3>
            <p className="text-3xl font-bold text-green-600">567</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Total Products</h3>
            <p className="text-3xl font-bold text-purple-600">89</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
            <p className="text-3xl font-bold text-yellow-600">$12,345</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
