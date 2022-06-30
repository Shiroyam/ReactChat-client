import { FC } from "react";
import { Profile } from "../../components/profile/Profile";
import { ChoiceProfile } from "../choicePage/ChoiceProfile";
import s from "./friendProfile.module.scss";

export const FriendProfile: FC = () => {
  return (
    <>
      <div className={s.friendProfile}>
        <Profile />
      </div>
    </>
  );
};
