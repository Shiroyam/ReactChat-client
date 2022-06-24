import { Avatar } from "@mui/material";
import { FC } from "react";
import CreateIcon from "@mui/icons-material/Create";
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import s from "./settings.module.scss";

export const Settings: FC = () => {
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
    </div>
  );
};
