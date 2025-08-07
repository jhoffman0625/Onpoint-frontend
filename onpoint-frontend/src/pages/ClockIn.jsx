
import React from "react";

const ClockIn = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded shadow w-full max-w-md text-center">
      <h2 className="text-xl font-bold mb-4">Clock In / Out</h2>
      <button className="w-full bg-green-500 text-white py-2 mb-3 rounded">Clock In</button>
      <button className="w-full bg-red-500 text-white py-2 rounded">Clock Out</button>
    </div>
  </div>
);

export default ClockIn;
