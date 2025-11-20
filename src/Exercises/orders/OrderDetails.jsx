import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://codehub-api-collections.vercel.app/api/orders'

function OrderDetails() {
  const [order, setOrder] = useState(null)

  useEffect(() => {
    // TODO: use useParams to grab the id, fetch `${API_URL}/${id}`,
    // and set the result so the timeline below has data.
  }, [])

  return (
    <main className="collection-page order-details-page">
      <Link to="/orders" className="back-link">
        ← Back to orders
      </Link>

      {order ? (
        <article className="order-details-card">
          <header>
            <p className="eyebrow">{order.orderNumber}</p>
            <h1>{order.customerName}</h1>
            <p className="order-details-card__status">{order.status}</p>
            <span className={`pill status-${order.status}`}>{order.status}</span>
          </header>

          <section className="order-details-grid">
            <div>
              <p className="label">Total</p>
              <p className="value">${order.totalAmount}</p>
            </div>
            <div>
              <p className="label">Created</p>
              <p className="value">{order.createdAt}</p>
            </div>
            <div>
              <p className="label">Updated</p>
              <p className="value">{order.updatedAt}</p>
            </div>
          </section>
        </article>
      ) : (
        <p>TODO: load an order and show it here.</p>
      )}
    </main>
  )
}

export default OrderDetails


