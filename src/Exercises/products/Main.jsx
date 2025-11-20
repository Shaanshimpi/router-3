import ProductsList from './ProductsList'

function ProductsExercise() {
  return (
    <div className="app-shell">
      <h1>Products Collection Exercise</h1>
      <p className="page-tagline">
        Wire up the API calls so this merch catalog shows real data.
      </p>

      {/* TODO: add routing if you want to show product details separately */}
      <ProductsList />
    </div>
  )
}

export default ProductsExercise


