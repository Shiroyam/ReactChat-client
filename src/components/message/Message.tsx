import { Avatar } from "@mui/material";
import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useTypesSelector } from "../../hook/useTypeSelector";
import { messageFetching } from "../../redux/message/action";
import s from "./message.module.scss";

export const Message: FC = () => {
  const { pathname } = useLocation();
  const { messages } = useTypesSelector((state) => state.messageReducer);
  const dispatch = useAppDispatch();
  const id = pathname.slice(10);

  useEffect(() => {
    dispatch(messageFetching(id));
  }, [id]);

  return (
    <>
      {messages.map((message) => (
        <div key={message._id} className={s.message}>
          <div className={s.message__textWrapper}>
            <div className={s.message__header}>
              <Avatar>T</Avatar>
              <div className={s.message__headerText}>
                <div className={s.message__fullname}>
                  {message.user.fullname}
                </div>
                <div className={s.message__date}>{message.user.updatedAt}</div>
              </div>
            </div>
            <div className={s.message__text}>{message.text}</div>
          </div>
        </div>
      ))}
    </>
  );
};
