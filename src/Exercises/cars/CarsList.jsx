import { useEffect, useState } from 'react'
import CarCard from './components/CarCard'

const API_URL = 'https://codehub-api-collections.vercel.app/api/cars'

function CarsList() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    // TODO: fetch car inventory from API_URL and call `setCars(data.docs || [])`.
    // Hint: wrap the fetch in an async function inside this effect, await
    // response.json(), then update state.
  }, [])

  return (
    <main className="cars-page">
      <h1>Cars Inventory (Exercise)</h1>
      <p className="page-tagline">
        Fill in the TODO above to load vehicles from the CodeHub API.
      </p>

      <section className="cards-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </section>
    </main>
  )
}

export default CarsList


