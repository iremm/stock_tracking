import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import './custom.scss'; 
import AddNewProduct from './AddNewProduct';
import Dashboard from './Dashboard'; // Dashboard bileşenini ekledik
import AllProduct from './AllProduct'; // Eksik olan bu satırı ekleyin

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
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="container d-flex justify-content-center align-items-center">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Stock Tracking System</span>
        </div>
      </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-new-product" element={<AddNewProduct />} />
          <Route path="/all-product" element={<AllProduct />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
