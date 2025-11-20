import { useEffect, useState } from 'react'
import OrderCard from './components/OrderCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/orders'

function OrdersList() {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Failed to load orders')
        }
        const data = await response.json()
        setOrders(data.docs || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrders()
  }, [])

  return (
    <main className="collection-page orders-page">
      <header className="collection-header">
        <p className="eyebrow">Operations · Fulfillment</p>
        <h1>Orders Collection</h1>
        <p className="page-tagline">
          Track order lifecycle states pulled straight from the CodeHub Orders
          API.
        </p>
      </header>

      {isLoading && <p>Loading orders...</p>}
      {error && <p className="error-text">{error}</p>}

      <section className="collection-grid orders-grid">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </section>
    </main>
  )
}

export default OrdersList



