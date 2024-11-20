import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem ;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: #6b42f5; 
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px; 
    width: 0;
    height: 2px;
    background-color: #6b42f5;
    transition: width 0.3s ease; 
  }

  &:hover::after {
    width: 100%; 
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <NavLink to="/home">Planera</NavLink>
      <NavLink to="/facts">Fakta</NavLink>
      <NavLink to="/about-us">Om oss</NavLink>
    </NavBar>
  );
};

export default Nav;
