import { FC } from "react";
import { ReactComponent as Logo } from "../../../assets/svg/ReactChatLogo.svg";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import s from "./navbar.module.scss";

export const Navbar: FC = () => {
  return (
    <div className={s.navbar}>
      <Logo className={s.navbar__logo} width="50" height="50" />
      <PersonIcon className={s.navbar__icon} />
      <ChatBubbleOutlineIcon className={s.navbar__icon} />
      <SettingsIcon className={s.navbar__icon} />
    </div>
  );
};
