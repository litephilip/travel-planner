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

const FactContent = styled.div`
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 16px 17px 17px 12px rgba(0, 0, 0, 0.9);
  min-width: 230px;

  @media (max-width: 600px) {
    width: 90%;
    box-shadow: 9px 10px 10px 5px rgba(0, 0, 0, 0.9);
  }
`;

const Flag = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

const FactText = styled.p`
  font-weight: bold;
  color: black;
  font-size: 0.9rem;
  margin: 0 0 0.4rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;


const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  select {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-right: 1rem;
    @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 1.5rem;
    }
  }
  
  button {
    background-color: #fff;
    color: #6b42f5;
    @media (max-width: 600px) {
        width: 100%;
        margin-left: 0;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;


  }
`;

let cacheApiData = null;

const Fact = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [countryFact, setCountryFact] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (cacheApiData) {
            setCountries(cacheApiData);
            setLoading(false);
        } else {
            const fetchCountries = async () => {
                try {
                    const response = await fetch("https://restcountries.com/v3.1/all");
                    const data = await response.json();
                    const mappedCountries = data.map((country) => ({
                        name: country.name.common,
                        capital: country.capital ? country.capital[0] : "Okänd",
                        population: country.population,
                        flagUrl: country.flags.png,
                        currency: country.currencies ? Object.values(country.currencies)[0].name : "Okänd",
                        unMember: country.unMember,
                    }));
                    cacheApiData = mappedCountries;
                    setCountries(mappedCountries);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching countries:", error);
                    setLoading(false);
                }
            };
            fetchCountries();
        }
    }, []);
    
    if (loading) {
        setTimeout(() => {
            setLoading(false);
            return <p>Laddar data...</p>;
        },1000);
    }
    

    const handleShowFact = () => {
        const country = countries.find((country) => country.name === selectedCountry);
        if (country) {
        setCountryFact(country);
        }
    };

  return (
    <FactWrapper>
        <h1 style={{marginBottom: "0"}}>Välj land</h1>
        <h2>Hitta kort fakta om det land du söker</h2>

        <DropdownContainer style={{ marginBottom: "1rem" }}>
            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
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
        </DropdownContainer>

      {countryFact && (
        <FactContent>
            <Flag src={countryFact.flagUrl} alt={`Flag of ${countryFact.name}`} />
                  <h2 style={{ color: "black"}}> {countryFact.name.toUpperCase()}</h2>
            <FactText>Valuta: {countryFact.currency}</FactText>
            <FactText>Huvudstad: {countryFact.capital}</FactText>
            <FactText>Befolkning: {countryFact.population.toLocaleString()}</FactText>
            <FactText>Medlem i FN: {countryFact.unMember ? "JA" : countryFact.unMember === false ? "NEJ" : "Okänd"}</FactText>
        </FactContent>
      )}
    </FactWrapper>
  );
};

export default Fact;
