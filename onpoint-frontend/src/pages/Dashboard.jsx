
import React from "react";

const Dashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-semibold mb-4">Sales Rep Dashboard</h1>
    <div className="bg-white shadow rounded p-4 mb-4">
      <p>Percent to Goal: 87%</p>
      <p>Lifelines Remaining: 2</p>
      <p>Current Month: August</p>
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">View Performance</button>
  </div>
);

export default Dashboard;
