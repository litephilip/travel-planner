import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/home" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/about-us" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
    </nav>
  );
};

export default Nav;
