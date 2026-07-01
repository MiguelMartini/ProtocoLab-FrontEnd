import api from "./axios";

export const getCollaborators = async () => {
  const response = await api.get(`users`);

  return response.data;
};

export const createCollaborator = async (data) => {
  const response = await api.post("/users", data);
  return response.data;
};