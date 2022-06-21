import { FC } from "react";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import s from "./authorization.module.scss";

export const Authorization: FC = () => {
  return (
    <div className={s.authorization}>
      <div className={s.authorization__modal}>
        <header className={s.authorization__header}>Log In</header>
        <Input
          width={300}
          svgIcon={"AlternateEmailIcon"}
          text={"Your Email"}
          type={"text"}
        />
        <Input
          width={300}
          svgIcon={"LockOpenIcon"}
          text={"Your Password"}
          type={"password"}
        />
        <Button text={"submit"} />
        <div className={s.authorization__link}>Forgot your password?</div>
      </div>
    </div>
  );
};
