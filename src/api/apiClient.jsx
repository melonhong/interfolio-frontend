import axios from "axios";

// axios 인스턴스 설정(api 요청을 할 때마다 이렇게 요청이 감)

const apiClient = axios.create({
  baseURL: "http://localhost:8080", // 백엔드 기본 URL
  headers: { "Content-Type": "application/json" }, // 기본 헤더 설정
  withCredentials: true, // 쿠키나 인증 헤더 포함
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // 로컬 저장소에 저장된 토큰 가져오기
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // 토큰 추가
  }

  return config;
});

export default apiClient; // 토큰을 추가한 axios 인스턴스 반환
