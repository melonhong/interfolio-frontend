import { useMemo } from "react";
import useAuth from "../hooks/useAuth";
import HomeIcon from "@mui/icons-material/Home";
import TopicIcon from "@mui/icons-material/Topic";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const useNavigation = () => {
  const isLoggedIn = useAuth();

  const NAVIGATION = useMemo(() => {
    // 공통 메인 섹션
    const mainSection = [
      { kind: "header", title: "메인" },
      { segment: "", title: "홈", icon: <HomeIcon /> },
      {
        segment: "#portfolios",
        title: "포트폴리오 전당",
        icon: <TopicIcon />,
      },
    ];

    // 로그인 상태에 따른 추가 섹션
    if (isLoggedIn) {
      return [
        ...mainSection,
        {
          segment: "#interview",
          title: "AI 면접",
          icon: <RecordVoiceOverIcon />,
        },
        { kind: "header", title: "계정" },
        {
          segment: "#mypage",
          title: "마이페이지",
          icon: <AccountCircleIcon />,
        },
        { segment: "#auth/logout", title: "로그아웃", icon: <LogoutIcon /> },
      ];
    } else {
      return [
        ...mainSection,
        { kind: "header", title: "계정" },
        {
          segment: "auth/login",
          title: "로그인 및 회원가입",
          icon: <LoginIcon />,
        },
      ];
    }
  }, [isLoggedIn]);

  return NAVIGATION;
};

export default useNavigation;
