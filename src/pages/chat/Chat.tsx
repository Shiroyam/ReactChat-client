import { FC } from "react";
import { Chatbar } from "../../components/chatbar/Chatbar";
import { Contact } from "../../components/contact/Contact";
import { InputChat } from "../../components/inputChat/inputChat";
import messageImg from "./../../assets/img/message.png";
import s from "./chat.module.scss";

export const Chat: FC = () => {
  return (
    <>
      {true ? (
        <div className={s.imgWrapper}>
          <img src={messageImg} className={s.imgWrapper__img} />
          <div className={s.imgWrapper__text}>Pick a chat on the left</div>
          <div className={s.imgWrapper__description}>
            Or get done something else
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};
