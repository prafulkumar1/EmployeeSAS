import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomeScreen from '../src/HomeScreen';
import DetailsScreen from '../src/DetailsScreen';

export const WebNavigation = () => {
    const navigate = useNavigate();
    return (
      <Routes>
        <Route path="/" element={<HomeScreen navigation={{ navigate }} />} />
        <Route path="/details" element={<DetailsScreen navigation={{ navigate }} />} />
      </Routes>
    );
  };