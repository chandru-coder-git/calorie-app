import React, { useState, useEffect } from "react";
import { fetchFoods, fetchFoodById, fetchConsume, addConsume, updateConsume, deleteConsume } from "../api";

const DailyConsume = () => {
  const [foods, setFoods] = useState([]);
  const [consumes, setConsumes] = useState([]);
  const [form, setForm] = useState({ foodId: "", date: "", quantity: 1, consume_calories : 0 });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {

        setFoods(await fetchFoods());
        setConsumes(await fetchConsume());
      } catch (err) {
       
        setError("Failed to fetch data");
        console.error(err);
      }
    };
    getData();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchFoodById(form.foodId);
      
      if (editId){
        form.consume_calories = form.quantity * data.calories;
        await updateConsume(editId, form);
      } 
      else{
        form.consume_calories = form.quantity * data.calories;
        await addConsume(form);
      } 

      setForm({ foodId: "", date: "", quantity: 1 });
      setEditId(null);
      setConsumes(await fetchConsume());
    } catch (err) {
      setError("Failed to save daily consume");
      console.error(err);
    }
  };

  const handleEdit = (c) => {
    setEditId(c._id);
    setForm({ foodId: c.foodId._id, date: c.date.slice(0, 10), quantity: c.quantity });
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure?")) {
        await deleteConsume(id);
        setConsumes(await fetchConsume());
      }
    } catch (err) {
      setError("Failed to delete entry");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Daily Consume</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-4 col-12 mb-2">
            <select className="form-select" name="foodId" value={form.foodId} onChange={handleChange} required>
              <option value="">Select Food</option>
              {foods.map(f => <option key={f._id} value={f._id}>{f?.name || ""} ({f?.calories || "0"} cal)</option>)}
            </select>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <input className="form-control" type="date" name="date" value={form.date} onChange={handleChange} required/>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <input className="form-control" type="number" name="quantity" value={form.quantity} min="1" onChange={handleChange} required/>
          </div>
        </div>
        <button className="btn btn-success" type="submit">{editId ? "Update" : "Add"} Consume</button>
      </form>

      <h3>Consumed Foods</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Food</th>
              <th>Calories</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              consumes.length === 0 ? (<p>No items </p>) :
              consumes.map(c => (
              <tr key={c._id}>
                <td>{c.foodId?.name || ""}</td>
                <td>{c.consume_calories || 0}</td>
                <td>{c.quantity || 1}</td>
                <td>{c.date.slice(0, 10)}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(c)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyConsume;
