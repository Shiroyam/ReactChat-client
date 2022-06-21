import { FC } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import s from "./profile.module.scss";

export const Profile: FC = () => {
  return (
    <div className={s.profile}>     
        <Navbar />
        <Sidebar />
    </div>
  );
};
