import api from "./axios";

export const getCollaborators = async () => {
  const response = await api.get(`users`);

  return response.data;
};