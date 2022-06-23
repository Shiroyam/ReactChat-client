import { FC, useState } from "react";
import { Button } from "../../components/button/Button";
import { useAppDispatch } from "../../hook/useTypeSelector";
import { loginIn } from "../../redux/authorizational/action";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "react-toastify/dist/ReactToastify.css";
import s from "./authorization.module.scss";

export const Authorization: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const onClickBtn = () => {
    const data = {
      email,
      password,
    };
    dispatch(loginIn(data));
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <div className={s.authorization}>
        <div className={s.authorization__modal}>
          <header className={s.authorization__header}>Log In</header>
          <label>
            <AlternateEmailIcon className={s.authorization__icon} />
            <input
              value={email}
              className={s.authorization__input}
              placeholder="Your Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label>
            <LockOpenIcon className={s.authorization__icon} />
            <input
              value={password}
              className={s.authorization__input}
              placeholder="Your Password"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <div onClick={onClickBtn}>
            <Button text={"submit"} />
          </div>
          <Link to="/" className={s.authorization__link}>
            <div>Back to home?</div>
          </Link>
        </div>
      </div>
    </>
  );
};
