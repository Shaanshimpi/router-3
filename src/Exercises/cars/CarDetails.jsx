import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://codehub-api-collections.vercel.app/api/cars'

function CarDetails() {
  const [car, setCar] = useState(null)

  useEffect(() => {
    // TODO: use `const { id } = useParams()` and fetch `${API_URL}/${id}`.
    // After parsing JSON, call setCar(data) so the layout renders real values.
  }, [])

  return (
    <main className="car-details-page">
      <Link to="/cars" className="back-link">
        ← Back to cars
      </Link>

      {car ? (
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
            <p className="car-details-card__price">${car.price}</p>
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
              <p className="value">${car.price}</p>
            </div>
          </section>

          <p className="note">This info comes from the CodeHub Cars API.</p>
        </article>
      ) : (
        <p>TODO: load a car by id and show its data here.</p>
      )}
    </main>
  )
}

export default CarDetails


