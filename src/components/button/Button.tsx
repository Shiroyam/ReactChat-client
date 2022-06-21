import { FC } from "react";
import s from "./button.module.scss";

interface IProps {
  text: string;
}

export const Button: FC<IProps> = ({ text }) => {
  return <button className={s.btn}>{text}</button>;
};
