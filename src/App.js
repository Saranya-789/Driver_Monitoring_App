// src/App.js
import React, { useState, useEffect } from 'react';
import AlertList from './components/AlertList';
import Searchbar from './components/Searchbar';
import Mock from './components/Mock';
import './App.css';

function App() {
  const [alerts] = useState(Mock);
  const [filteredAlerts, setFilteredAlerts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [vehicleSearch, setVehicleSearch] = useState('');
  const [dateRange, setDateRange] = useState({ startDate: ''});

  useEffect(() => {
    // Apply filters when search parameters change
     applyFilters();
  },);

  const applyFilters = () => {
    // Filter alerts based on search criteria
    let filtered = alerts;

    // Free text search
    if (searchText) {
      const searchTextLower = searchText.toLowerCase();
      filtered = filtered.filter(alert =>
        Object.values(alert).some(value => value && value.toLowerCase().includes(searchTextLower))
      );
    }

    // Search by vehicle number
    if (vehicleSearch) {
      filtered = filtered.filter(alert =>
        alert.vehicle_friendly_name.toLowerCase().includes(vehicleSearch.toLowerCase())
      );
    }

    // Search by date range
    if (dateRange.startDate) {
      filtered = filtered.filter(alert =>
        alert.timestamp >= dateRange.startDate 
      );
    }

    setFilteredAlerts(filtered);
  };

  const markAsFalseAlarm = (alertId) => {
    // Implement marking an alert as a false alarm (replace with actual API call)
    console.log(`Marked as False Alarm: ${alertId}`);
  };

  return (
    <div className="App">
      <h1>Driver Monitoring Status</h1>
      <Searchbar
        searchText={searchText}
        setSearchText={setSearchText}
        vehicleSearch={vehicleSearch}
        setVehicleSearch={setVehicleSearch}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      <AlertList alerts={filteredAlerts} markAsFalseAlarm={markAsFalseAlarm} />
    </div>
  );
}

export default App;
