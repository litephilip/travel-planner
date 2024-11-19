import { useState, useEffect } from "react";
import styled from "styled-components";

const FactWrapper = styled.div`
  max-width: 80%;
  text-align: center;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;

  @media (max-width: 600px) {
    max-width: 350px;
    padding: 0.5rem;
  }
`;

const FlagWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Flag = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const FactContent = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Fact = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryFact, setCountryFact] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched countries data:", data[0]);
  
        setCountries(
            data.map((country) => ({
            name: country.name.common,
            capital: country.capital ? country.capital[0] : "Okänd",
            population: country.population,
            flagUrl: country.flags.png,
            currency: country.currencies ? Object.values(country.currencies)[0].name : "Okänd",
            unMember: country.unMember,
          }))
        );
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleShowFact = () => {
    const country = countries.find((country) => country.name === selectedCountry);
    if (country) {
      setCountryFact(country);
    }
  };

  return (
    <FactWrapper>
      <h1 style={{marginBottom: "0" }}>Välj land</h1>
      <h2>Hitta kort fakta om det land du söker</h2>

      <div style={{ marginBottom: "1rem" }}>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Välj land</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <button onClick={handleShowFact} style={{ marginLeft: "1rem" }}>
          VISA
        </button>
      </div>

      {countryFact && (
        <FactContent>
          <FlagWrapper className="flag-wrapper">
            <Flag src={countryFact.flagUrl} alt={`Flag of ${countryFact.name}`} />
            <p> {countryFact.name.toUpperCase()}</p>
          </FlagWrapper>
          <p>Valuta: {countryFact.currency}</p>
          <p>Huvudstad: {countryFact.capital}</p>
          <p>Befolkning: {countryFact.population.toLocaleString()}</p>
          <p>Medlem i FN: {countryFact.unMember ? "JA" : countryFact.unMember === false ? "NEJ" : "Okänd"}</p>
        </FactContent>
      )}
    </FactWrapper>
  );
};

export default Fact;
