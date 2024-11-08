import { useState } from "react";
import PropTypes from 'prop-types';

function DestinationForm({ onAddDestination }) {
    const [name, setName] = useState('');
    const [activity, setActivity] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddDestination({ name, activity });
      setName('');
      setActivity('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Resmål"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Aktivitet"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
        />
        <button type="submit">Lägg till resmål</button>
      </form>
    );
}
DestinationForm.propTypes = {
  onAddDestination: PropTypes.func.isRequired,
};

export default DestinationForm;