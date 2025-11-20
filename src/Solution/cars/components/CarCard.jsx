import { Link } from 'react-router-dom'

function CarCard({ car }) {
  const formattedPrice =
    typeof car.price === 'number' ? `$${car.price.toLocaleString()}` : 'N/A'
  const carId = car?.id
  const carIdSuffix =
    typeof carId === 'string' || typeof carId === 'number'
      ? carId.toString().slice(-4).padStart(4, '0')
      : '----'

  return (
    <Link to={`/cars/${carId}`} className="car-card">
      <div className="car-card__top">
        <span className="car-card__badge">
          #{carIdSuffix}
        </span>
        <span className="car-card__price">{formattedPrice}</span>
      </div>

      <h2 className="car-card__title">
        {car.year} {car.make} {car.model}
      </h2>

      <p className="car-card__subtitle">Inventory from CodeHub Cars API</p>

      <dl className="car-card__meta">
        <div>
          <dt>Make</dt>
          <dd>{car.make}</dd>
        </div>
        <div>
          <dt>Model</dt>
          <dd>{car.model}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{car.year}</dd>
        </div>
      </dl>

      <footer className="car-card__footer">
        <span className={`car-card__color color-${car.color}`}>
          {car.color}
        </span>
        <span className="car-card__cta">View details →</span>
      </footer>
    </Link>
  )
}

export default CarCard

