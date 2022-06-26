import { FC } from "react";
import { Chats } from "./chats/Chats";
import { Friends } from "./friends/Friends";
import { Settings } from "./settings/Settings";
import { useLocation } from "react-router-dom";
import s from "./sidebar.module.scss";

export const Sidebar: FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={s.sidebar}>
      {pathname === "/profile/friend" && <Friends />}
      {pathname === "/profile/chat" && <Chats />}
      {pathname === "/profile/settings" && <Settings />}
    </div>
  );
};
