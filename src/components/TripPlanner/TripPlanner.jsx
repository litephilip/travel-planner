import { useState } from "react";
import DestinationForm from "../DestinationForm/DestinationForm";
import Destination from "../Destination/Destination";


function TripPlanner() {
    const [destinations, setDestinations] = useState([]);

    const addDestination = (destination) => {
        setDestinations([...destinations, destination]);
    };
    
    return (
        <div>
            <h2>Resmål</h2>
            <DestinationForm onAddDestination={addDestination} />
            <ul>
                {destinations.map((destination, index) => (
                <Destination key={index} destination={destination} />
                ))}
            </ul>
        </div>
    );
}

export default TripPlanner;