import { FC } from "react";
import { ReactComponent as Logo } from "../assets/svg/ReactChatLogo.svg";
import s from "./home.module.scss";

export const Home: FC = () => {
  return (
    <div className={s.home}>
      <Logo width="200" height="200" />
      <header className={s.home__header}>ReactChat</header>
      <div className={s.home__text}>
        Modern chat network built for you, not advertisers
      </div>
      <button className={s.home__btn}>log in with email</button>
      <button className={s.home__btn}>sign up with email</button>
    </div>
  );
};
