import api from "./axios";

export const getComments = async (id) => {
  const response = await api.get(`tickets/${id}/comments`);

  return response.data;
};

// export const getTicketId = async (id) => {
//   const response = await api.get(`/tickets/${id}`);
//   return response.data;
// };