import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import './custom.scss'; 
import AddNewProduct from './AddNewProduct';
import Dashboard from './Dashboard'; // Dashboard bileşenini ekledik

function App() {
  const [googleData, setGoogleData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/home/google');
      setGoogleData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">Stock Tracking System</Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-new-product" element={<AddNewProduct />} />
          {/* Diğer route'ları da burada tanımlayabilirsiniz */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
