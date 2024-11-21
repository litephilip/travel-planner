import styled from "styled-components";

const AboutWrapper = styled.div`
  width: 550px;
  max-width: 100%;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  text-align: center;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;

  @media (max-width: 600px) {
    max-width: 350px;
    padding: 0.5rem;
  }
`;

const AboutTitle = styled.h1`;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    max-width: 350px;
    padding: 0.5rem;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutTitle>Om oss på Reseplaneraren!</AboutTitle>
      <h3>Vi på reseplaneraren vill att du ska ha full koll på vilka sevärdigheter du har
        framför dig att titta på och kunna bocka av din alla saker du har drömt om!
        Vi har skapat en enkel tjänst där du kan skapa en lista på alla sevärdigheter</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </AboutWrapper>
  );
};
  
export default About;  