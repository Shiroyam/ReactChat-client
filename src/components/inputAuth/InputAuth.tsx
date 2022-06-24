import { FC, useState } from "react";
import { Button } from "../../components/button/Button";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import s from "./inputAuth.module.scss";

export const InputAuth: FC<{ onClickBtn: any }> = ({ onClickBtn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <label className={s.inputAuth}>
        <AlternateEmailIcon className={s.inputAuth__icon} />
        <input
          value={email}
          className={s.inputAuth__input}
          placeholder="Your Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label className={s.inputAuth}>
        <LockOpenIcon className={s.inputAuth__icon} />
        <input
          value={password}
          className={s.inputAuth__input}
          placeholder="Your Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <div onClick={() => onClickBtn(email, password)}>
        <Button text={"submit"} />
      </div>
    </>
  );
};
