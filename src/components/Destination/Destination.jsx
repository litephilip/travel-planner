import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DestinationContainer = styled.div`
  .destination-card:active {
    transform: translateY(4px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.1s ease;
  }
`;

const DestinationCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${({ isCompleted }) =>
    isCompleted ? "rgba(0, 255, 0, 0.277)" : "#f9f9f9"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 230px;
  cursor: pointer;

  &:active {
    transform: translateY(4px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.1s ease;
  }
`;

const RemoveButton = styled.span`
  position: absolute;
  text-align: end;
  padding: 0 0.5rem;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Text = styled.p`
  font-weight: bold;
  color: black;
  font-size: 0.9rem;
  margin: 0 0 0.4rem 0;
`;

const DoneText = styled.p`
  font-weight: lighter;
  font-style: oblique;
  color: #5e5b5b;
  font-size: 0.5rem;
  text-align: start;
  margin: 0 0 -5px 0;
`;

const Destination = React.memo((props) => {
    console.log('sdfsdf', props);
    
  return (
        <DestinationContainer>
        <DestinationCard
            isCompleted={props.destination.isCompleted}
            onClick={props.toggleComplete}
        >
            <Text>Plats: {props.destination.name}</Text>
            <Text>Att göra: {props.destination.activity}</Text>
            <RemoveButton onClick={(e) => {
                e.stopPropagation();
                props.remove();
            }}>
            X
            </RemoveButton>
            {!props.destination.isCompleted && (
            <DoneText>Klicka för att klarmarkera!</DoneText>
            )}
        </DestinationCard>
        </DestinationContainer>
    );
});

Destination.propTypes = {
  destination: PropTypes.shape({
    name: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

Destination.displayName = "Destination";

export default Destination;
