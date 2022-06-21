import { FC } from "react";
import Avatar from '@mui/material/Avatar';
import s from "./contact.module.scss"

export const Contact : FC = () => {
    return <div className={s.contact}>
        <Avatar>T</Avatar>
        <div className={s.contact__textWrapper}>
            <div className={s.contact__fullName}>Tim Cock</div>
            <div className={s.contact__status}>online</div>
        </div>
    </div>
}