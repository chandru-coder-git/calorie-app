export const fetchUser = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user`);
  return res.json();
};

export const updateUser = async (data) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const fetchFoods = async () => {
  try{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/foods`);
      return res.json();
  }catch(err){
    console.error('Error fetch data')
  }
 
};

export const addFood = async (data) => {

  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/foods`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const fetchFoodById = async (id) => {
  try{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/foods/${id}`, { method: "GET" });
      return await res.json();
  }catch(err){
    console.error('Error fetch data')
  } 
};

export const updateFood = async (id, data) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/foods/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteFood = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/foods/${id}`, { method: "DELETE" });
  return res.json();
};

export const fetchConsume = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/consume`);
  return res.json();
};

export const addConsume = async (data) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/consume`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateConsume = async (id, data) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/consume/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteConsume = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/consume/${id}`, { method: "DELETE" });
  return res.json();
};
