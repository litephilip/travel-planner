import TripPlanner from './components/TripPlanner/TripPlanner';
import './App.css'

function App() {

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <h1>Min reseplanerare</h1>
        </div>
        <div className="trip-planner">
          <TripPlanner />
        </div>
      </div>
    </>
  )
}

export default App
