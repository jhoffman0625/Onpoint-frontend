
import React from "react";

const Admin = () => (
  <div className="p-6">
    <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
    <div className="bg-white shadow rounded p-4 mb-4">
      <p>Total Reps: 12</p>
      <p>Pending PTO Requests: 3</p>
      <p>Last Sync: 3 hours ago</p>
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit PTO Balances</button>
    <button className="bg-gray-600 text-white px-4 py-2 rounded">Export CSV</button>
  </div>
);

export default Admin;
