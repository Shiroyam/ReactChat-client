import { FC } from "react";
import { ReactComponent as Logo } from "../../assets/svg/ReactChatLogo.svg";
import { Link } from "react-router-dom";
import s from "./home.module.scss";
import { Button } from "../../components/button/Button";

export const Home: FC = () => {
  return (
    <div className={s.home}>
      <Logo width="200" height="200" />
      <header className={s.home__header}>ReactChat</header>
      <div className={s.home__text}>
        Modern chat network built for you, not advertisers
      </div>
      <Link to="/authorization" style={{ textDecoration: 0 }}>
        <Button text={"log in with email"} />
      </Link>
      <Link to="/registration" style={{ textDecoration: 0 }}>
        <Button text={"sign up with email"} />
      </Link>
    </div>
  );
};
