import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const STATUS_COPY = {
  pending: 'Awaiting fulfillment',
  shipped: 'On the road',
  delivered: 'Package delivered',
}

function OrderDetails() {
  const { id } = useParams()
  const [order, setOrder] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await fetch(
          `https://codehub-api-collections.vercel.app/api/orders/${id}`,
        )
        if (!response.ok) {
          throw new Error('Unable to load order info')
        }
        const data = await response.json()
        setOrder(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrder()
  }, [id])

  return (
    <main className="collection-page order-details-page">
      <Link to="/orders" className="back-link">
        ← Back to orders
      </Link>

      {isLoading && <p>Loading order...</p>}
      {error && <p className="error-text">{error}</p>}

      {order && (
        <article className="order-details-card">
          <header>
            <p className="eyebrow">{order.orderNumber}</p>
            <h1>{order.customerName}</h1>
            <p className="order-details-card__status">
              {STATUS_COPY[order.status] || order.status}
            </p>
            <span className={`pill status-${order.status}`}>
              {order.status}
            </span>
          </header>

          <section className="order-details-grid">
            <div>
              <p className="label">Total</p>
              <p className="value">${order.totalAmount.toFixed(2)}</p>
            </div>
            <div>
              <p className="label">Created</p>
              <p className="value">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">
                {new Date(order.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </section>
        </article>
      )}
    </main>
  )
}

export default OrderDetails



