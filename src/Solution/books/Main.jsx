import { Route, Routes } from 'react-router-dom'
import BooksList from './BooksList'
import BookDetails from './BookDetails'

function Books() {
  return (
    <div className="app-shell">
      <Routes>
        <Route index element={<BooksList />} />
        <Route path=":id" element={<BookDetails />} />
        <Route path="*" element={<p>Book not found.</p>} />
      </Routes>
    </div>
  )
}

export default Books



