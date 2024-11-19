import { useState } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.2rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  flex: 1;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    width: 90%;
    max-width: none;
  }
`;

const Button = styled.button`
  padding: 16px 20px;
  width: 100%;
  background-color: #6b42f5;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5834c9;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  text-align: left;
  font-size: 0.8rem;
  margin-top: 0.1rem;
`;

const DestinationForm = ({ onAddDestination }) => {
  const [name, setName] = useState('');
  const [activity, setActivity] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || activity.trim() === "") {
      setError(true);
    } else {
      onAddDestination({ name, activity });
      setName("");
      setActivity("");
      setError(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <StyledInput
          type="text"
          placeholder="Välj önskat resmål"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Resmål"
        />
        <StyledInput
          type="text"
          placeholder="Vad vill du göra där?"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          aria-label="Aktivitet"
        />
      </InputContainer>
      {error && <ErrorMessage>Oops, du glömde visst att fylla i fälten</ErrorMessage>}
      <Button type="submit">Lägg till resmål</Button>
    </Form>
  );
};

DestinationForm.propTypes = {
  onAddDestination: PropTypes.func.isRequired,
};

export default DestinationForm;