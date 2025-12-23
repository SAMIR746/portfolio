// API functions
export const fetchData = async () => {
  const res = await fetch("http://localhost:5000/api/data");
  return res.json();
};
