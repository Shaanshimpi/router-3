import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const formattedPrice =
    typeof product.price === 'number'
      ? `$${product.price.toFixed(2)}`
      : 'N/A'

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      {product.featured && (
        <span className="product-card__badge">Featured</span>
      )}

      <h2>{product.name}</h2>
      <p className="product-card__sku">{product.SKU}</p>

      <div className="product-card__meta">
        <span className="product-card__price">{formattedPrice}</span>
        <span>{product.inventoryCount} in stock</span>
      </div>

      <p className="product-card__cta">Inspect product →</p>
    </Link>
  )
}

export default ProductCard


