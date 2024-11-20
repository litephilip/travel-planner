import TripPlanner from '../components/TripPlanner/TripPlanner';
import styled from "styled-components";

const MainTitle = styled.h1`
  @media (max-width: 600px) {
    text-align: justify;
  }
`;

const Home = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <MainTitle>Reseplaneraren</MainTitle>
      </div>
      <TripPlanner />
    </div>
  );
};

export default Home;
