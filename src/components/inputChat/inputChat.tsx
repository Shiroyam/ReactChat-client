import { FC } from "react";
import SendIcon from "@mui/icons-material/Send";
import s from "./inputChat.module.scss";

export const InputChat: FC = () => {
  return (
    <div className={s.wrapper}>
      <input
        placeholder="Write a message..."
        className={s.wrapper__input}
      ></input>
      <div className={s.wrapper__icon}>
        <SendIcon />
      </div>
    </div>
  );
};
