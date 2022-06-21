import { FC } from "react";
import { ReactComponent as Logo } from "../../assets/svg/ReactChatLogo.svg";
import { Button } from "../../components/button/Button";
import s from "./home.module.scss";

export const Home: FC = () => {
  return (
    <div className={s.home}>
      <Logo width="200" height="200" />
      <header className={s.home__header}>ReactChat</header>
      <div className={s.home__text}>
        Modern chat network built for you, not advertisers
      </div>
      <Button text="log in with email" />
      <Button text="sign up with email" />
    </div>
  );
};
