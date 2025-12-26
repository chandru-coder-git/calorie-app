import React, { useState, useEffect } from "react";
import { fetchConsume } from "../api";

const FoodHistory = () => {
  const [consumes, setConsumes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setConsumes(await fetchConsume());
      } catch (err) {
        setError("Failed to fetch food history");
        console.error(err);
      }
    };
    getData();
  }, []);

  // Group by date
  const grouped = consumes.reduce((acc, c) => {
    const date = c.date.slice(0, 10);
    if (!acc[date]) acc[date] = [];
    acc[date].push(c);
    return acc;
  }, {});

  return (
    <div className="container">
      <h2>Food History</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {Object.keys(grouped).map(date => (
        <div key={date} className="mb-4">
          <h5>{date}</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Calories</th>
                  <th>Quantity</th>
                  <th>Total Calories</th>
                </tr>
              </thead>
              <tbody>
                {grouped[date].map(c => (
                  <tr key={c._id}>
                    <td>{c.foodId.name}</td>
                    <td>{c.foodId.calories}</td>
                    <td>{c.quantity}</td>
                    <td>{(c.foodId.calories || 0) * (c.quantity || 1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <strong>
            Total Calories: {grouped[date].reduce((acc, c) => acc + ((c.foodId.calories || 0) * (c.quantity || 1)), 0)}
          </strong>
        </div>
      ))}
    </div>
  );
};

export default FoodHistory;
