import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://codehub-api-collections.vercel.app/api/products/${id}`,
        )
        if (!response.ok) {
          throw new Error('Unable to load product info')
        }
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  return (
    <main className="collection-page product-details-page">
      <Link to="/products" className="back-link">
        ← Back to products
      </Link>

      {isLoading && <p>Loading product...</p>}
      {error && <p className="error-text">{error}</p>}

      {product && (
        <article className="product-details-card">
          <header>
            <span className="eyebrow">{product.SKU}</span>
            <h1>{product.name}</h1>
            {product.featured && (
              <span className="product-card__badge">Featured product</span>
            )}
            <p className="product-details-card__price">
              ${product.price.toFixed(2)}
            </p>
          </header>

          <section className="product-details-grid">
            <div>
              <p className="label">Inventory</p>
              <p className="value">{product.inventoryCount}</p>
            </div>
            <div>
              <p className="label">Created</p>
              <p className="value">
                {new Date(product.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">
                {new Date(product.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </section>
        </article>
      )}
    </main>
  )
}

export default ProductDetails



