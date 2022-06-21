import { FC } from "react";
import { Chatbar } from "../../components/chatbar/Chatbar";
import { Contact } from "../../components/contact/Contact";
import { InputChat } from "../../components/inputChat/inputChat";
import s from "./chat.module.scss";

export const Chat: FC = () => {
  return (
    <div className={s.chat}>
      <Chatbar />
      <div className={s.chat__textWrapper}>
        <Contact />
        <div className={s.chat__text}>Zdarova</div>
      </div>
      <div className={s.chat__input}>
        <InputChat />
      </div>
    </div>
  );
};
