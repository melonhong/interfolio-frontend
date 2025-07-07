// 현재는 간단하게 토큰이 있는지 여부만 따져서 로그인 상태를 확인
const useAuth = () => {
  const token = localStorage.getItem("token");
  return Boolean(token); // true 또는 false 반환
};

export default useAuth;
