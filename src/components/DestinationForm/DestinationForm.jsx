import { useState } from "react";
import PropTypes from 'prop-types';
import './DestinationForm.css';

function DestinationForm({ onAddDestination }) {
    const [name, setName] = useState('');
    const [activity, setActivity] = useState('');
    const [error, setError] = useState(false)
  
    const handleSubmit = (e) => {
    
      e.preventDefault();
      if (!name || !activity) {
        setError(true);
      } else {
        onAddDestination({ name, activity });
        setName('');
        setActivity('');
        setError(false);
      }
    };
  
  
  
  return (
    <form className="add-destination-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Välj önskat resmål"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Resmål"
          />
        <input
          type="text"
          placeholder="Vad vill du göra där?"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          aria-label="Aktivitet"
        />
      </div>
      {error && <span className="error-message">Oops, du glömde visst att fylla i fälten</span>}
      <button type="submit">Lägg till resmål</button>
    </form>
  );
}
DestinationForm.propTypes = {
  onAddDestination: PropTypes.func.isRequired,
};

export default DestinationForm;