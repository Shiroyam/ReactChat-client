import { FC, useState } from "react";
import { Button } from "../button/Button";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonIcon from "@mui/icons-material/Person";
import s from "./inputReg.module.scss";

export const InputReg: FC<{ onClickBtn: any }> = ({ onClickBtn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  return (
    <>
      <label className={s.inputReg}>
        <PersonIcon className={s.inputReg__icon} />
        <input
          value={fullName}
          className={s.inputReg__input}
          placeholder="Your Name"
          type="text"
          onChange={(e) => setFullName(e.target.value)}
        ></input>
      </label>
      <label className={s.inputReg}>
        <AlternateEmailIcon className={s.inputReg__icon} />
        <input
          value={email}
          className={s.inputReg__input}
          placeholder="Your Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label className={s.inputReg}>
        <LockOpenIcon className={s.inputReg__icon} />
        <input
          value={password}
          className={s.inputReg__input}
          placeholder="Your Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <div onClick={() => onClickBtn(fullName, email, password)}>
        <Button text={"submit"} />
      </div>
    </>
  );
};
