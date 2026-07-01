import api from "./axios";

export const getComments = async (id) => {
  const response = await api.get(`tickets/${id}/comments`);

  return response.data;
};

export const postComment = async (id, data) => {
  const response = await api.post(`/tickets/${id}/comments`, data);
  return response.data;
};

// export const getTicketId = async (id) => {
//   const response = await api.get(`/tickets/${id}`);
//   return response.data;
// };