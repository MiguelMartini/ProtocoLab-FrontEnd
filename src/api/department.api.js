import api from "./axios";

export const getDepartments = async () => {
  const response = await api.get("/departments");
  return response.data;
};

export const getDepartmentId = async (id) => {
  const response = await api.get(`/departments/${id}`);
  return response.data;
};

export const createDepartment = async (data) => {
  const response = await api.post("/departments", data);
  return response.data;
};

export const deleteDepartment = async (id) => {
  return api.delete(`/departments/${id}`);
};

export const updateDepartment = async (id, data) => {
  return api.patch(`/departments/${id}`, data);
};