import React, { useState, useEffect } from "react";
import { fetchUser, updateUser } from "../api";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
    
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
    calorieGoal: ""
  });

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUser();
      if (data) setUser(data);
    };
    getUser();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user);
    
    navigate("/");
  };

  return (
    <div className="container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control w-25" name="name" value={user.name} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input className="form-control w-25" type="number" name="age" value={user.age} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Weight (kg)</label>
          <input className="form-control w-25" type="number" name="weight" value={user.weight} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Height (cm)</label>
          <input className="form-control w-25" type="number" name="height" value={user.height} onChange={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select w-25" name="gender" value={user.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Calorie Goal</label>
          <input className="form-control  w-25" type="number" name="calorieGoal" value={user.calorieGoal} onChange={handleChange} required/>
        </div>
        <button className="btn btn-primary" type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserPage;
