import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import HomeIcon from "@mui/icons-material/Home";
import TopicIcon from "@mui/icons-material/Topic";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function DrawerListTop({ isLoggedIn, open = true }) {
  const menuConfigTop = {
    // 위쪽 메뉴
    loggedIn: [
      { text: "홈", icon: <HomeIcon /> },
      { text: "포트폴리오", icon: <TopicIcon /> },
      { text: "면접", icon: <RecordVoiceOverIcon /> },
    ],
    notLoggedIn: [
      { text: "홈", icon: <HomeIcon /> },
      { text: "포트폴리오", icon: <TopicIcon /> },
    ],
  };

  const menuConfigBottom = {
    // 아래쪽 메뉴
    loggedIn: [
      { text: "마이페이지", icon: <AccountCircleIcon /> },
      { text: "로그아웃", icon: <LogoutIcon /> },
    ],
    notLoggedIn: [
      { text: "로그인", icon: <LoginIcon /> },
      { text: "회원가입", icon: <PersonAddIcon /> },
    ],
  };

  const currentMenuTop = isLoggedIn
    ? menuConfigTop.loggedIn
    : menuConfigTop.notLoggedIn;

  const currentMenuBottom = isLoggedIn
    ? menuConfigBottom.loggedIn
    : menuConfigBottom.notLoggedIn;

  return (
    <div>
      <List>
        {currentMenuTop.map((item, index) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {currentMenuBottom.map((item, index) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
