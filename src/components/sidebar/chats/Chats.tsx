import { FC } from "react";
import { Contact } from "../../contact/Contact";
import { Search } from "../../search/Search";
import s from "./chats.module.scss";

export const Chats: FC = () => {
  return (
    <div className={s.chats}>
      <header className={s.chats__header}>Chats</header>
      <Search />
      <Contact />
    </div>
  );
};
