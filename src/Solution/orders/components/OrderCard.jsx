import { Link } from 'react-router-dom'

const STATUS_LABELS = {
  pending: 'Pending',
  shipped: 'Shipped',
  delivered: 'Delivered',
}

function OrderCard({ order }) {
  const amount = `$${order.totalAmount.toFixed(2)}`

  return (
    <Link to={`/orders/${order.id}`} className="order-card">
      <header>
        <span className="order-card__number">{order.orderNumber}</span>
        <span className={`pill status-${order.status}`}>
          {STATUS_LABELS[order.status] || order.status}
        </span>
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



