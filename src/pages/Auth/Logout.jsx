import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useLogout from "../../hooks/useLogout";

const Logout = () => {
  const logout = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await logout();
      navigate("/"); // 로그아웃 후 홈 페이지로 이동
    })();
  }, []);

  return <></>;
};

export default Logout;
