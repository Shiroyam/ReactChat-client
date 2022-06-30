import { Avatar } from "@mui/material";
import { FC } from "react";
import CreateIcon from "@mui/icons-material/Create";
import KeyIcon from "@mui/icons-material/Key";
import DeleteIcon from "@mui/icons-material/Delete";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import s from "./settings.module.scss";
import { useNavigate } from "react-router-dom";

export const Settings: FC = () => {
  const navigate = useNavigate();

  const onClickExit = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={s.settings}>
      <header className={s.settings__header}>Settings</header>
      <div className={s.settings__data}>
        <Avatar className={s.settings__icon}>T</Avatar>
        <div className={s.settings__textWrapper}>
          <div className={s.settings__name}>Tim Cock</div>
          <div className={s.settings__date}>29.06.2021</div>
        </div>
      </div>
      <div className={s.settings__tools}>
        <CreateIcon />
        <div className={s.settings__text}>Edit profile</div>
      </div>
      <div className={s.settings__tools}>
        <KeyIcon />
        <div className={s.settings__text}>Change password</div>
      </div>
      <div className={s.settings__tools}>
        <DeleteIcon />
        <div className={s.settings__text}>Delete profile</div>
      </div>
      <div onClick={onClickExit} className={s.settings__tools}>
        <ExitToAppIcon />
        <div className={s.settings__text}>Exit</div>
      </div>
    </div>
  );
};
