import api from "./axios";

export const getTickets = async () => {
  const response = await api.get("/tickets");
  return response.data;
};

export const getTicketId = async (id) => {
  const response = await api.get(`/tickets/${id}`);
  return response.data;
};

export const postTicket = async (ticket) => {
  const response = await api.post(`/tickets`, ticket);
  return response.data;
};

export const getTicketCount = async () => {
  const tickets = await getTickets();
  return tickets.length;
};
