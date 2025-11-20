import { Navigate, Route, Routes } from 'react-router-dom'
import StudentsExercise from './students/Main'
import CarsExercise from './cars/Main'
import BooksExercise from './books/Main'
import OrdersExercise from './orders/Main'
import TasksExercise from './tasks/Main'
import ProductsExercise from './products/Main'
import FeedbackExercise from './feedback/Main'
import BlogExercise from './blogPosts/Main'

function Exercises() {
  return <StudentsExercise />
}

export default Exercises


