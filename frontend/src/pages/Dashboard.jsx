import React, { useState, useEffect } from "react";
import { fetchUser, fetchConsume } from "../api";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [consumeList, setConsumeList] = useState([]);
    const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const loadData = async () => {
      setUser(await fetchUser());
    
      const allConsume = await fetchConsume();
      setConsumeList(allConsume.filter(c => c.date === today));
    };
    loadData();
  }, []);
const styles = {
  container: {
    maxWidth: "450px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Poppins",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "6px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  addBtn: {
    padding: "10px",
    width: "100%",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "5px",
  },
  mealItem: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  deleteBtn: {
    color: "red",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
}
  const totalConsumed = consumeList.reduce((acc, c) => acc + (c.consume_calories || 0), 0);
const remaining = user?.calorieGoal ? user.calorieGoal - totalConsumed : 0;

  return (
    <div className="container">
        <h2>Dashboard</h2>
        <section>
            <h2>Today</h2>
            <p><bold>Target Calories :</bold>{user?.calorieGoal || 0}</p>
            <p><bold>Consumed Today:</bold>{totalConsumed}</p>
            <p><bold>Remaining:</bold> {remaining}</p>
        </section>
        <section style={{ marginTop: "25px" }}>
            <h3>Today's Foods</h3>
              <ul className="list-group">
                {consumeList.map(c => <li key={c._id} className="list-group-item">{c.foodId.name} - {c.consume_calories} cal</li>)}
              </ul>
        </section>
    {/* </div> */}
    {/* <div className="container">
      <h2>Dashboard</h2>
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Name</h5>
              <p className="card-text">{user?.name || "-"}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Calorie Goal</h5>
              <p className="card-text">{user?.calorieGoal || 0}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Consumed Today</h5>
              <p className="card-text">{totalConsumed}</p>
              <h6>Remaining: {remaining}</h6>
            </div>
          </div>
        </div>
      </div>
      <h3>Today's Foods</h3>
      <ul className="list-group">
        {consumeList.map(c => <li key={c._id} className="list-group-item">{c.foodId.name} - {c.consume_calories} cal</li>)}
      </ul> */}
    </div>
  );
};

export default Dashboard;
