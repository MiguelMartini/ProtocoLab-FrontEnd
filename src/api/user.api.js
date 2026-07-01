import api from "./axios";

export const editUser = async (id, data) => {
  const response = await api.patch(`/users/${id}`, data);
  return response.data.user;
};

export const registerUser = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};