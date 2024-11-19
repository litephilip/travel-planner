import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Fact from './pages/Fact';

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/facts" element={<Fact />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
  );
};


// TODO: Good API https://restcountries.com/
// TODO: Good API https://restcountries.com/v3.1/name/India?fullText=true
export default AppRouter;
