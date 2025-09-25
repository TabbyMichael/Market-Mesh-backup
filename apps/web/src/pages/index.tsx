import type { NextPage } from 'next'
import Head from 'next/head'
import { ProductCard } from '@marketmesh/ui'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>MarketMesh - Multi-seller Marketplace</title>
        <meta name="description" content="A modern multi-seller marketplace" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">MarketMesh</h1>
            <nav className="space-x-8">
              <a href="/products" className="text-gray-500 hover:text-gray-900">Products</a>
              <a href="/sellers" className="text-gray-500 hover:text-gray-900">Sellers</a>
              <a href="/cart" className="text-gray-500 hover:text-gray-900">Cart</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            id="1"
            title="Sample Product"
            price={2999}
            currency="USD"
            image="https://via.placeholder.com/300"
            seller="Sample Store"
            onAddToCart={() => console.log('Add to cart')}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
