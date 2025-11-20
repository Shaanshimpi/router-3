import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/products'

function ProductsList() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Failed to load products')
        }
        const data = await response.json()
        setProducts(data.docs || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <main className="collection-page products-page">
      <header className="collection-header">
        <p className="eyebrow">Merch · Inventory</p>
        <h1>Products Collection</h1>
        <p className="page-tagline">
          Product catalog with validation patterns and numeric comparisons.
        </p>
      </header>

      {isLoading && <p>Loading products...</p>}
      {error && <p className="error-text">{error}</p>}

      <section className="collection-grid products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export default ProductsList



