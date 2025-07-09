import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// AuthContext 데이터 가져오기
export const useAuth = () => useContext(AuthContext);

// AuthContext 데이터 제공
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로컬 저장소에 토큰이 있으면 로그인이 된 걸로 간주
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const setLoginState = (state) => {
    setIsLoggedIn(state);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, setLoginState }}>
      {children}
    </AuthContext.Provider>
  );
};
