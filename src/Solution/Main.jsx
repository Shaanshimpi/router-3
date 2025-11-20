import { Navigate, Route, Routes } from 'react-router-dom'
import CollectionsHome from './collections/Home'
import Students from './students/Main'
import Cars from './cars/Main'
import Books from './books/Main'
import Orders from './orders/Main'
import Tasks from './tasks/Main'
import Products from './products/Main'
import Feedback from './feedback/Main'
import BlogPosts from './blogPosts/Main'

function Solutions() {
  return (
    <Routes>
      <Route path="/" element={<CollectionsHome />} />
      <Route path="/students/*" element={<Students />} />
      <Route path="/cars/*" element={<Cars />} />
      <Route path="/books/*" element={<Books />} />
      <Route path="/orders/*" element={<Orders />} />
      <Route path="/tasks/*" element={<Tasks />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/feedback/*" element={<Feedback />} />
      <Route path="/blog-posts/*" element={<BlogPosts />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Solutions

