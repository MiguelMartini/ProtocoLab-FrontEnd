import api from "./axios";

export async function login(data) {
  const response = await api.post("/auth/login", data);

  return response.data;
}

export function register(data) {
    return api.post("/auth/register", data);
}

export function me() {
    return api.get("/auth/me");
}

export function refresh() {
    return api.post("/auth/refresh");
}

export function logout() {
    return api.post("/auth/logout");
}