import { Route, Routes } from 'react-router-dom'
import OrdersList from './OrdersList'
import OrderDetails from './OrderDetails'

function Orders() {
  return (
    <div className="app-shell">
      <Routes>
        <Route index element={<OrdersList />} />
        <Route path=":id" element={<OrderDetails />} />
        <Route path="*" element={<p>Order not found.</p>} />
      </Routes>
    </div>
  )
}

export default Orders



