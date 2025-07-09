import { useAuth } from "../context/AuthContext";

const useLogin = () => {
  const { setLoginState } = useAuth();

  const login = async (credentials) => {
    try {
      setLoginState(true); // 컨텍스트 업데이트
    } catch (error) {
      throw error;
    }
  };

  return { login };
};

export default useLogin;
