import { useEffect, useState } from 'react'
import OrderCard from './components/OrderCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/orders'

function OrdersList() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    // TODO: fetch orders from API_URL, parse JSON, and call setOrders(data.docs || []).
    // Try adding simple loading/error messaging once the basics work.
  }, [])

  return (
    <main className="collection-page orders-page">
      <header className="collection-header">
        <p className="eyebrow">Operations · Fulfillment</p>
        <h1>Orders Collection</h1>
        <p className="page-tagline">
          When you finish the TODO, each card will show live order data.
        </p>
      </header>

      <section className="collection-grid orders-grid">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </section>
    </main>
  )
}

export default OrdersList


