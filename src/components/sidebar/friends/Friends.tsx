import { FC } from "react";
import { Contact } from "../../contact/Contact";
import { Search } from "../../search/Search";
import s from "./friends.module.scss";

export const Friends: FC = () => {
  return (
    <div className={s.friends}>
      <header className={s.friends__header}>Friends</header>
      <Search />
      <Contact />
    </div>
  );
};
