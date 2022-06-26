import { FC } from "react";
import { ReactComponent as Logo } from "../../../assets/svg/ReactChatLogo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import s from "./navbar.module.scss";

export const Navbar: FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={s.navbar}>
      <Logo className={s.navbar__logo} width="80%" height="50" />
      <Link to="/profile/friend">
        <PersonIcon
          className={
            pathname === "/profile/friend"
              ? `${s.navbar__icon} ${s.active}`
              : s.navbar__icon
          }
        />
      </Link>
      <Link to="/profile/chat">
        <ChatBubbleOutlineIcon
          className={
            pathname === "/profile/chat"
              ? `${s.navbar__icon} ${s.active}`
              : s.navbar__icon
          }
        />
      </Link>
      <Link to="/profile/settings">
        <SettingsIcon
          className={
            pathname === "/profile/settings"
              ? `${s.navbar__icon} ${s.active}`
              : s.navbar__icon
          }
        />
      </Link>
    </div>
  );
};
