import { Link } from 'react-router-dom'

function OrderCard({ order }) {
  const amount = order.totalAmount
    ? `$${order.totalAmount.toFixed(2)}`
    : '—'

  return (
    <Link to={`/orders/${order.id}`} className="order-card">
      <header>
        <span className="order-card__number">{order.orderNumber}</span>
        <span className={`pill status-${order.status}`}>{order.status}</span>
      </header>

      <h2>{order.customerName}</h2>
      <p className="order-card__amount">{amount}</p>

      <footer>
        <span>View timeline</span>
        <span aria-hidden="true">→</span>
      </footer>
    </Link>
  )
}

export default OrderCard


