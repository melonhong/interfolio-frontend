import apiClient from "./apiClient";

export function fetchLoginOnly() {
  return apiClient.get("/loginonly").then((response) => response.data);
}
