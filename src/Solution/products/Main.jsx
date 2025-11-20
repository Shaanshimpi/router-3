import { Route, Routes } from 'react-router-dom'
import ProductsList from './ProductsList'
import ProductDetails from './ProductDetails'

function Products() {
  return (
    <div className="app-shell">
      <Routes>
        <Route index element={<ProductsList />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path="*" element={<p>Product not found.</p>} />
      </Routes>
    </div>
  )
}

export default Products



