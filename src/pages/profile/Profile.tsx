import { FC } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";

export const Profile: FC = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};
