import { useEffect, useState } from "react";
import DestinationForm from "../DestinationForm/DestinationForm";
import Destination from "../Destination/Destination";
import './TripPlanner.css';


function TripPlanner() {
    const [destinations, setDestinations] = useState(() => {
        const savedDestinations = localStorage.getItem('destinations');
        if (savedDestinations) {
            return JSON.parse(savedDestinations);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('destinations', JSON.stringify(destinations));
    }, [destinations]);
    

    const addDestination = (destination) => {
        setDestinations([...destinations, destination]);
    };
    
    const removeDestination = (index) => {        
        setDestinations(destinations.filter((destination, i ) => i !== index));
    };

    
    return (
        <div className="trip-planner">
            <h2 className="trip-planner-title">Börja planera dina aktiviter här!</h2>
            <DestinationForm onAddDestination={addDestination} />
            <ul className="destinations-list">
                {destinations.map((destination, index) => (
                <Destination 
                    key={index}
                    destination={destination}
                    remove={() => removeDestination(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TripPlanner;