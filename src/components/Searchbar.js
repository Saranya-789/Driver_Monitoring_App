// src/Filters.js
import React from 'react';

function Searchbar({ searchText, setSearchText, vehicleSearch, setVehicleSearch, dateRange, setDateRange }) {
  return (
    <div className='serchbar'>
      <label>Alert Type Search: <input placeholder='Search' type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} /></label>
      <label>Vehicle Number Search: <input placeholder='#Vehicle' type="text" value={vehicleSearch} onChange={(e) => setVehicleSearch(e.target.value)} /></label>
      <label>Start Date: <input type="date" value={dateRange.startDate} onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })} /></label>
      {/* <label>End Date: <input type="date" value={dateRange.endDate} onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })} /></label> */}
    </div>
  );
}

export default Searchbar;
