import { FC, useEffect } from "react";
import { useAppDispatch, useTypesSelector } from "../../hook/useTypeSelector";
import { usersFetching } from "../../redux/users/action";
import Avatar from "@mui/material/Avatar";
import s from "./contact.module.scss";

export const Contact: FC = () => {
  const dispatch = useAppDispatch();
  const { users } = useTypesSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(usersFetching());
  }, []);

  return (
    <>
      {users.map((user) => (
        <div key={user._id} className={s.contact}>
          <Avatar>{user.fullname.slice(0, 1)}</Avatar>
          <div className={s.contact__textWrapper}>
            <div className={s.contact__fullName}>{user.fullname}</div>
            <div className={s.contact__status}>online</div>
          </div>
        </div>
      ))}
    </>
  );
};
