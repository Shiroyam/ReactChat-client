import { FC } from "react";
import { Navbar } from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import s from "./layout.module.scss";

export const Layout: FC = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile__navbar}>
        <Navbar />
      </div>
      <div className={s.profile__content}>
        <Outlet />
      </div>
    </div>
  );
};
