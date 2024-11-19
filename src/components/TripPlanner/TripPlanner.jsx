import { useEffect, useState } from "react";
import styled from "styled-components";
import DestinationForm from "../DestinationForm/DestinationForm";
import Destination from "../Destination/Destination";

const TripPlannerWrapper = styled.div`
  width: 550px;
  max-width: 100%;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 16px 17px 17px 12px rgba(0, 0, 0, 0.9);

  @media (max-width: 600px) {
    max-width: 350px;
    padding: 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0 !important;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
  color: black;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  color: black;
  font-size: 0.9rem;
  font-weight: normal;
  margin: 0 0 0.4rem 0;
  margin-bottom: 2rem;
`;

const DestinationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

function TripPlanner() {
  const [destinations, setDestinations] = useState(() => {
    const savedDestinations = localStorage.getItem("destinations");
    if (savedDestinations) {
      return JSON.parse(savedDestinations);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(destinations));
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
    setDestinations(destinations.filter((_, i) => i !== index));
  };

  return (
    <TripPlannerWrapper>
      <Title>Börja planera dina aktiviteter här!</Title>
      <Paragraph>
        Gör din egen checklista av saker att göra när du besöker ditt drömresemål och bocka av dem när du är färdig!
      </Paragraph>
      <DestinationForm onAddDestination={addDestination} />
      <DestinationList>
        {destinations.map((destination, index) => (
          <Destination
            key={index}
            destination={destination}
            toggleComplete={() => toggleComplete(index)}
            remove={() => removeDestination(index)}
          />
        ))}
      </DestinationList>
    </TripPlannerWrapper>
  );
}

export default TripPlanner;
