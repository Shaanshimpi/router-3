import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/products'

function ProductsList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // TODO: fetch products from API_URL, parse JSON, and call setProducts(data.docs || []).
    // Try highlighting featured products once the basics work.
  }, [])

  return (
    <main className="collection-page products-page">
      <header className="collection-header">
        <p className="eyebrow">Merch · Inventory</p>
        <h1>Products Collection</h1>
        <p className="page-tagline">
          Connect the data layer so each card shows live pricing and stock.
        </p>
      </header>

      <section className="collection-grid products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export default ProductsList


