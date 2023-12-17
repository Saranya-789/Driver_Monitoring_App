// src/AlertList.js
import React from 'react';
import { FaBellSlash } from "react-icons/fa";

function AlertList({ alerts, markAsFalseAlarm }) {
  return (
    <div>
      {alerts.map(alert => (
        <div key={alert.id} className="alert-item">
          <p><strong>Alert Type:</strong> {alert.alert_type}</p>
          <p><strong>Vehicle:</strong> {alert.vehicle_friendly_name}</p>
          <p><strong>Driver:</strong> {alert.driver_friendly_name}</p>
          <p><strong>Timestamp:</strong> {alert.timestamp}</p>
          <button onClick={() => markAsFalseAlarm(alert.id)}> <FaBellSlash /> Mark as False Alarm</button>
        </div>
      ))}
    </div>
  );
}

export default AlertList;
