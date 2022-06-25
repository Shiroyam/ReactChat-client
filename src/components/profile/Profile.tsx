import { Avatar } from "@mui/material";
import { FC } from "react";
import { Button } from "../button/Button";
import s from "./profile.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export const Profile: FC = () => {
  return (
    <>
      <div className={s.profile__sidebar}>
        <Avatar className={s.profile__avatar}>T</Avatar>
        <div className={s.profile__name}>Tim Cock</div>
        <div className={s.profile__lastSeen}>last seen 09:51</div>
        <Button text={"Send message"} />
      </div>
      <div className={s.profile__main}>
        <div className={s.profile__about}>
          <div className={s.profile__headerAbout}>About</div>
          Before being named CEO in August 2011, Tim was Apple’s chief operating
          officer and was responsible for all of the company’s worldwide sales
          and operations, including end-to-end management of Apple’s supply
          chain, sales activities, and service and support in all markets and
          countries. Prior to joining Apple, Tim was vice president of Corporate
          Materials for Compaq and was responsible for procuring and managing
          all of Compaq’s product inventory
        </div>
        <div className={s.profile__socialMedia}>
          <div className={s.profile__block}>
            <div className={s.profile__text}>
              <AlternateEmailIcon className={s.profile__img} />
              timcock
            </div>
            <div className={s.profile__text}>
              <EmailIcon className={s.profile__img} />
              228@email.ru
            </div>
          </div>
          <div className={s.profile__block}>
            <div className={s.profile__text}>
              <CakeIcon className={s.profile__img} />
              29.01.2022
            </div>
            <div className={s.profile__text}>
              <TwitterIcon className={s.profile__img} />
              tim_cock
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
