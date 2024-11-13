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
        const newDestination = { ...destination, isCompleted: false };
        setDestinations([...destinations, newDestination]);
    };

    const toggleComplete = (index) => {
        const updatedDestinations = destinations.map((destination, i) =>
          i === index ? { ...destination, isCompleted: !destination.isCompleted } : destination
        );
        setDestinations(updatedDestinations);
    };
    

    const removeDestination = (index) => {            
        setDestinations(destinations.filter((_, i ) => i !== index));
    };

    
    return (
        <div className="trip-planner">
            <h2 className="trip-planner-title">Börja planera dina aktiviter här!</h2>
            <p className="trip-planner-paragraph">Gör din egen checklista av saker att göra när du besöker ditt drömresemål och bocka av dem när du är färdig!</p>
            <DestinationForm onAddDestination={addDestination} />
            <ul className="destinations-list">
                {destinations.map((destination, index) => (
                <Destination 
                    key={index}
                    destination={destination}
                    toggleComplete={() => toggleComplete(index)}
                    remove={() => removeDestination(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TripPlanner;