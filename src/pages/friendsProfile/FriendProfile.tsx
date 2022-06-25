import { FC } from "react";
import { Profile } from "../../components/profile/Profile";
import profileImg from "../../assets/img/profile.png";
import s from "./friendProfile.module.scss";

export const FriendProfile: FC = () => {
  return (
    <>
      {true ? (
        <div className={s.imgWrapper}>
          <img src={profileImg} />
          <div className={s.imgWrapper__text}>Pick a profile on the left</div>
          <div className={s.imgWrapper__description}>
            Or get done something else
          </div>
        </div>
      ) : (
        <div className={s.friendProfile}>
          <Profile />
        </div>
      )}
    </>
  );
};
