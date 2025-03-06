import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/carts")  // Mock API for business data
      .then((response) => setData(response.data.carts))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Business Analytics Dashboard</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
