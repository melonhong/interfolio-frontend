import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import useLogin from "../../hooks/useLogin";

// preview-start
const providers = [
  { id: "github", name: "GitHub" },
  { id: "google", name: "Google" },
  { id: "facebook", name: "Facebook" },
  { id: "twitter", name: "Twitter" },
  { id: "linkedin", name: "LinkedIn" },
];

const login = async (provider) => {
  // 구글 로그인일 때 백엔드 OAuth 경로로 리다이렉트
  if (provider.id === "google") {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
    useLogin();
    return; // 리다이렉트 후 함수 종료
  }

  // 다른 provider가 있을 경우를 위한 기본 처리
  return Promise.resolve({ error: "Unsupported provider" });
};

const Login = () => {
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage signIn={login} providers={providers} />
    </AppProvider>
  );
};

export default Login;
