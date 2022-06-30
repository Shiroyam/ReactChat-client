import { FC, useEffect } from "react";
import { useAppDispatch, useTypesSelector } from "../../hook/useTypeSelector";
import { loginIn } from "../../redux/authorizational/action";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { InputAuth } from "../../components/inputAuth/InputAuth";
import "react-toastify/dist/ReactToastify.css";
import s from "./authorization.module.scss";

export const Authorization: FC = () => {
  const { fetchingSuccess } = useTypesSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickBtn = (email: string, password: string) => {
    const data = {
      email,
      password,
    };
    dispatch(loginIn(data));
  };

  useEffect(() => {
    if (fetchingSuccess) {
      setTimeout(() => navigate("/app"), 1000);
    }
  }, [fetchingSuccess]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
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
          <InputAuth onClickBtn={onClickBtn} />
          <Link to="/" className={s.authorization__link}>
            <div>Back to home?</div>
          </Link>
        </div>
      </div>
    </>
  );
};
