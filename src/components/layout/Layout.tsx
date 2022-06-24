import React, { FC } from "react";
import { Navbar } from "./navbar/Navbar";
import { Sidebar } from "./sidebar/Sidebar";
import s from "./layout.module.scss"

export interface ILayout {
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={s.profile}>
      <div className={s.profile__bar}>
        <Navbar />
        <Sidebar />
      </div>
      <div className={s.profile__content}>{children}</div>
    </div>
  );
};
