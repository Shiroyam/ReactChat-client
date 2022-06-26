import { FC } from "react";
import { DialoguesList } from "../../../dialoguesList/DialoguesList";
import { Search } from "../../../search/Search";
import s from "./chats.module.scss";

export const Chats: FC = () => {
  return (
    <div className={s.chats}>
      <header className={s.chats__header}>Chats</header>
      <Search />
      <div className={s.chats__contact}>
        <DialoguesList />
      </div>
    </div>
  );
};
