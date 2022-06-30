import { FC } from "react";
import profileImg from "../../assets/img/profile.png";
import s from "./choice.module.scss";

export const ChoiceProfile: FC = () => {
  return (
    <>
      <div className={s.imgWrapper}>
        <img src={profileImg} />
        <div className={s.imgWrapper__text}>Pick a profile on the left</div>
        <div className={s.imgWrapper__description}>
          Or get done something else
        </div>
      </div>
    </>
  );
};
