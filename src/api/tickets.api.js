import api from "./axios";

export const getTickets = async () => {
  const response = await api.get("/tickets");
  return response.data;
};

export const getTicketId = async (id) => {
  const response = await api.get(`/tickets/${id}`);
  return response.data;
};

// export const createDepartment = async (data) => {
//   const response = await api.post("/departments", data);
//   return response.data;
// };

// export const deleteDepartment = async (id) => {
//   return api.delete(`/departments/${id}`);
// };

// export const updateDepartment = async (id, data) => {
//   return api.patch(`/departments/${id}`, data);
// };