import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function CarDetails() {
  const { id } = useParams()
  const [car, setCar] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await fetch(
          `https://codehub-api-collections.vercel.app/api/cars/${id}`,
        )
        if (!response.ok) {
          throw new Error('Unable to load car info')
        }
        const data = await response.json()
        setCar(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCar()
  }, [id])

  const formattedPrice =
    typeof car?.price === 'number' ? `$${car.price.toLocaleString()}` : 'N/A'

  return (
    <main className="car-details-page">
      <Link to="/cars" className="back-link">
        ← Back to cars
      </Link>

      {isLoading && <p>Loading car data...</p>}
      {error && <p className="error-text">{error}</p>}

      {car && (
        <article className="car-details-card">
          <header className="car-details-card__header">
            <span className="car-details-card__id">Inventory #{car.id}</span>
            <span className={`car-details-card__color color-${car.color}`}>
              {car.color}
            </span>
            <h1>
              {car.year} {car.make} {car.model}
            </h1>
            <p className="car-details-card__subtitle">
              Detailed specs pulled from the CodeHub Cars API.
            </p>
            <p className="car-details-card__price">{formattedPrice}</p>
          </header>

          <section className="car-specs-grid">
            <div>
              <p className="label">Make</p>
              <p className="value">{car.make}</p>
            </div>
            <div>
              <p className="label">Model</p>
              <p className="value">{car.model}</p>
            </div>
            <div>
              <p className="label">Year</p>
              <p className="value">{car.year}</p>
            </div>
            <div>
              <p className="label">Color</p>
              <p className="value text-capitalize">{car.color}</p>
            </div>
            <div>
              <p className="label">Price</p>
              <p className="value">{formattedPrice}</p>
            </div>
          </section>

          <p className="note">
            Data source:{' '}
            <a
              href="https://codehub-api-collections.vercel.app/docs/cars"
              target="_blank"
              rel="noreferrer"
            >
              CodeHub Cars Collection
            </a>
            .
          </p>
        </article>
      )}
    </main>
  )
}

export default CarDetails

