import OrdersList from './OrdersList'

function OrdersExercise() {
  return (
    <div className="app-shell">
      <h1>Orders Collection Exercise</h1>
      <p className="page-tagline">
        Rebuild the fulfillment dashboard by wiring up the fetch calls.
      </p>

      {/* TODO: add react-router if you want to switch between list and detail views */}
      <OrdersList />
    </div>
  )
}

export default OrdersExercise


