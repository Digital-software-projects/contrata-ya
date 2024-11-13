import axios from "axios";

//TODO: delete this example
export const getProyects = async () => {
  const response = await axios.get("http://localhost:3000/api/projects");
  return response.data;
};
