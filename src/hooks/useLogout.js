import { useNavigate } from "react-router-dom";
import { getLogout } from "../api/api";
import { useAuth } from "../context/AuthContext";

const useLogout = () => {
  const { setLoginState } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await getLogout(); // 서버로 로그아웃 요청 보내기
      if (response) {
        localStorage.removeItem("token"); // 로컬 저장소의 토큰 삭제
        sessionStorage.clear(); // 세션 삭제
        setLoginState(false); // 컨텍스트 업데이트
      } else {
        console.error("로그아웃 실패");
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  return logout;
};

export default useLogout;
