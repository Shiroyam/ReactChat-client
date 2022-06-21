import { FC, useEffect, useState } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonIcon from "@mui/icons-material/Person";
import s from "./input.module.scss";

interface IProps {
  width: number;
  svgIcon: string;
  text: string;
  type: string;
}

export const Input: FC<IProps> = ({ width, svgIcon, text, type }) => {
  const [flagEmailSvg, setEmailSvg] = useState<boolean>(false);
  const [flagPasswordSvg, setPasswordSvg] = useState<boolean>(false);
  const [flagNameSvg, setNameSvg] = useState<boolean>(false);

  useEffect(() => {
    if (svgIcon === "AlternateEmailIcon") {
      setEmailSvg(true);
    }

    if (svgIcon === "LockOpenIcon") {
      setPasswordSvg(true);
    }

    if (svgIcon === "PersonIcon") {
      setNameSvg(true);
    }
  }, [svgIcon]);

  return (
    <label>
      {flagEmailSvg && <AlternateEmailIcon className={s.icon} />}
      {flagPasswordSvg && <LockOpenIcon className={s.icon} />}
      {flagNameSvg && <PersonIcon className={s.icon} />}
      <input
        type={type}
        placeholder={text}
        style={{ width: width }}
        className={s.Input}
      ></input>
    </label>
  );
};
