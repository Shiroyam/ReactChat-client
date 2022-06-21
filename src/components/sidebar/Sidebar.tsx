import { FC } from "react";
import { Chats } from "./chats/Chats";
import { Friends } from "./friends/Friends";
import { Settings } from "./settings/Settings";
import s from "./sidebar.module.scss";

export const Sidebar: FC = () => {
  return (
    <div className={s.sidebar}>
      {/* <Friends /> */}
      <Chats />
      {/* <Settings /> */}
    </div>
  );
};
