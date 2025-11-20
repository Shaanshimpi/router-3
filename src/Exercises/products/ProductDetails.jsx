import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://codehub-api-collections.vercel.app/api/products'

function ProductDetails() {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    // TODO: read the id from useParams, fetch `${API_URL}/${id}`, and
    // call setProduct(data) so the detail card renders.
  }, [])

  return (
    <main className="collection-page product-details-page">
      <Link to="/products" className="back-link">
        ← Back to products
      </Link>

      {product ? (
        <article className="product-details-card">
          <header>
            <span className="eyebrow">{product.SKU}</span>
            <h1>{product.name}</h1>
            {product.featured && (
              <span className="product-card__badge">Featured product</span>
            )}
            <p className="product-details-card__price">${product.price}</p>
          </header>

          <section className="product-details-grid">
            <div>
              <p className="label">Inventory</p>
              <p className="value">{product.inventoryCount}</p>
            </div>
            <div>
              <p className="label">Created</p>
              <p className="value">{product.createdAt}</p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">{product.updatedAt}</p>
            </div>
          </section>
        </article>
      ) : (
        <p>TODO: load a product and show its snapshot.</p>
      )}
    </main>
  )
}

export default ProductDetails


