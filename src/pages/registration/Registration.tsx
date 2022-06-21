
import { FC } from "react";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import s from "./registration.module.scss";

export const Registration: FC = () => {
  return (
    <div className={s.registration}>
      <div className={s.registration__modal}>
        <header className={s.registration__header}>Sign Up</header>
        <Input
          width={300}
          svgIcon={"PersonIcon"}
          text={"Your Name"}
          type={"text"}
        />
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
        <Button text={"Submit"} />
      </div>
    </div>
  );
};
