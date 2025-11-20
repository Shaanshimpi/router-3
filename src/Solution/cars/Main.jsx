import { Route, Routes } from 'react-router-dom'
import CarsList from './CarsList'
import CarDetails from './CarDetails'

function Cars() {
  return (
    <div className="app-shell">
      <Routes>
        <Route index element={<CarsList />} />
        <Route path=":id" element={<CarDetails />} />
        <Route path="*" element={<p>Page not found.</p>} />
      </Routes>
    </div>
  )
}

export default Cars

