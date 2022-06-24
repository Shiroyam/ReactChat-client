import { FC } from "react";
import { Avatar } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import s from "./friendProfile.module.scss";
import { Button } from "../../components/button/Button";

export const FriendProfile: FC = () => {
  return (
    <div className={s.friendProfile}>
      <div className={s.friendProfile__sidebar}>
        <Avatar className={s.friendProfile__avatar}>T</Avatar>
        <div className={s.friendProfile__name}>Tim Cock</div>
        <div className={s.friendProfile__lastSeen}>last seen 09:51</div>
        <Button text={"Send message"} />
      </div>
      <div className={s.friendProfile__main}>
        <div className={s.friendProfile__about}>
          <div className={s.friendProfile__headerAbout}>About</div>
          Before being named CEO in August 2011, Tim was Apple’s chief operating
          officer and was responsible for all of the company’s worldwide sales
          and operations, including end-to-end management of Apple’s supply
          chain, sales activities, and service and support in all markets and
          countries. Prior to joining Apple, Tim was vice president of Corporate
          Materials for Compaq and was responsible for procuring and managing
          all of Compaq’s product inventory
        </div>
        <div className={s.friendProfile__socialMedia}>
          <div className={s.friendProfile__block}>
            <div className={s.friendProfile__text}>
              <AlternateEmailIcon className={s.friendProfile__img} />
              timcock
            </div>
            <div className={s.friendProfile__text}>
              <EmailIcon className={s.friendProfile__img} />
              228@email.ru
            </div>
          </div>
          <div className={s.friendProfile__block}>
            <div className={s.friendProfile__text}>
              <CakeIcon className={s.friendProfile__img} />
              29.01.2022
            </div>
            <div className={s.friendProfile__text}>
              <TwitterIcon className={s.friendProfile__img} />
              tim_cock
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
