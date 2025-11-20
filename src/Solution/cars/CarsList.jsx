import { useEffect, useState } from 'react'
import CarCard from './components/CarCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/cars'

function CarsList() {
  const [cars, setCars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Failed to load cars')
        }
        const data = await response.json()
        setCars(data.docs || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCars()
  }, [])

  return (
    <main className="cars-page">
      <h1>Cars Inventory</h1>
      <p className="page-tagline">
        Vehicle inventory with data from the CodeHub Cars API.
      </p>

      {isLoading && <p>Loading cars...</p>}
      {error && <p className="error-text">{error}</p>}

      <section className="cards-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </section>
    </main>
  )
}

export default CarsList

