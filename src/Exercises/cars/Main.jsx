import CarsList from './CarsList'

function CarsExercise() {
  return (
    <div className="app-shell">
      <h1>Cars Collection Exercise</h1>
      <p className="page-tagline">
        Recreate the vehicle inventory screens by filling in the TODOs below.
      </p>

      {/* TODO: Use react-router to show CarsList at /cars and CarDetails at /cars/:id */}
      <CarsList />
    </div>
  )
}

export default CarsExercise


