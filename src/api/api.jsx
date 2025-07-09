import apiClient from "./apiClient";

export const getLogout = async () => {
  try {
    const response = await apiClient
      .get("/logout")
      .then((response) => response.data);
    return response;
  } catch (error) {
    console.error("Error: " + error.response.status);
  }
};
