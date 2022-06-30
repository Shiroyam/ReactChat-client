import { FC } from "react";
import messageImg from "./../../assets/img/message.png";
import s from "./choice.module.scss"

export const ChoiceChat: FC = () => {
  return (
    <>
      <div className={s.imgWrapper}>
        <img src={messageImg} className={s.imgWrapper__img} />
        <div className={s.imgWrapper__text}>Pick a chat on the left</div>
        <div className={s.imgWrapper__description}>
          Or get done something else
        </div>
      </div>
    </>
  );
};
