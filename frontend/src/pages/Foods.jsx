import React, { useState, useEffect } from "react";
import { fetchFoods, addFood, updateFood, deleteFood } from "../api";

const AddFood = () => {
  const [foods, setFoods] = useState([]);
  const [food, setFood] = useState({ name: "", calories: "", category: "" });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getFoods = async () => {
      try {
          setFoods(await fetchFoods());        
      } catch (err) {
        setError("Failed to fetch foods");
        console.error(err);
      }
    };
    getFoods();
  }, []);

  const handleChange = (e) => setFood({ ...food, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) await updateFood(editId, food);
      else await addFood(food);

      setFood({ name: "", calories: "", category: "" });
      setEditId(null);
      setFoods(await fetchFoods());
    } catch (err) {
      setError("Failed to save food");
      console.error(err);
    }
  };

  const handleEdit = (f) => {
    setEditId(f._id);
    setFood({ name: f.name, calories: f.calories, category: f.category });
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure?")) {
        await deleteFood(id);
        setFoods(await fetchFoods());
      }
    } catch (err) {
      setError("Failed to delete food");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Add Food</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-4 col-12 mb-2">
            <input className="form-control" name="name" placeholder="Food Name" value={food.name} onChange={handleChange} required/>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <input className="form-control" type="number" name="calories" placeholder="Calories" value={food.calories} min="1" onChange={handleChange} required/>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <input className="form-control" name="category" placeholder="Category" value={food.category} onChange={handleChange}/>
          </div>
        </div>
        <button className="btn btn-success" type="submit">{editId ? "Update" : "Add"} Food</button>
      </form>

      <h3>Food List</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Calories</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          
          <tbody>  
            {foods.length === 0 ? 
            (<p>List empty...</p>)
            : (foods.map(f => (
              <tr key={f._id}>
                <td>{f.name}</td>
                <td>{f.calories}</td>
                <td>{f.category}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(f)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(f._id)}>Delete</button>
                </td>
              </tr>
            )))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddFood;
