import { Avatar } from "@mui/material";
import { FC } from "react";
import { Contact } from "../contact/Contact";
import s from "./chatbar.module.scss";

export const Chatbar: FC = () => {
  return (
    <div className={s.chatbar}>
      <div className={s.chatbar__contact}>
        <Avatar >T</Avatar>
        <div className={s.chatbar__fullname}>Tim Cock</div>
      </div>
    </div>
  );
};
