import { FC } from "react";
import { ReactComponent as Logo } from "../../assets/svg/ReactChatLogo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import s from "./navbar.module.scss";

export const Navbar: FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className={s.navbar}>
        <Logo className={s.navbar__logo} width="80%" height="50" />
        <Link to="/app/friend">
          <PersonIcon
            className={
              pathname === "/app/friend"
                ? `${s.navbar__icon} ${s.active}`
                : s.navbar__icon
            }
          />
        </Link>
        <Link to="/app/chat">
          <ChatBubbleOutlineIcon
            className={
              pathname === "/app/chat"
                ? `${s.navbar__icon} ${s.active}`
                : s.navbar__icon
            }
          />
        </Link>
        <Link to="/app/settings">
          <SettingsIcon
            className={
              pathname === "/app/settings"
                ? `${s.navbar__icon} ${s.active}`
                : s.navbar__icon
            }
          />
        </Link>
      </div>
    </>
  );
};
