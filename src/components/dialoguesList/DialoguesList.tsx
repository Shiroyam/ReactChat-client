import { Avatar } from "@mui/material";
import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useTypesSelector } from "../../hook/useTypeSelector";
import { dialogFetching } from "../../redux/dialogues/action";
import s from "./dialoguesList.module.scss";

export const DialoguesList: FC = () => {
  const dispatch = useAppDispatch();
  const { dialogs } = useTypesSelector((state) => state.dialogReducer);
  const id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(dialogFetching(id));
  }, []);

  return (
    <>
      {dialogs.map((dialog) => (
        <NavLink
          style={{ textDecoration: "none" }}
          to={`/app/chat/${dialog._id}`}
          className={`${s.dialogues}`}
          key={dialog._id}
        >
          <Avatar>{dialog.partner.fullname.slice(0, 1)}</Avatar>
          <div className={s.dialogues__textWrapper}>
            <div className={s.dialogues__fullName}>
              {dialog.partner.fullname}
            </div>
            <div className={s.dialogues__lastMessage}>
              {dialog.lastMessage.text}
            </div>
          </div>
        </NavLink>
      ))}
    </>
  );
};
