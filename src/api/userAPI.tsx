import axios from "axios";

const API_URL = "http://localhost:4150/api/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const createUser = async (userData: {
  username: string;
  password: string;
  email: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};
